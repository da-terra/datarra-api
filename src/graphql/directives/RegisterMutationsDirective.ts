/* eslint-disable @typescript-eslint/no-explicit-any */
import { Resource } from "@data-science-platform/shared";
import { SchemaDirectiveVisitor } from "apollo-server";
import { FieldNode, GraphQLObjectType, GraphQLResolveInfo } from "graphql";
import registerActivity from "../../util/registerActivity";

type GraphQLObjectResolver<TSource, TContext> = (
  source: TSource,
  fields: Record<string, ReadonlyArray<FieldNode>>,
  context: TContext,
  info: GraphQLResolveInfo
) => any;

class RegisterActivityDirective extends SchemaDirectiveVisitor {
  visitObject(object: GraphQLObjectType): GraphQLObjectType | void | null {
    if (object == null) {
      return null;
    }

    const model = Object.values(Resource).find(r => r === object.name);

    if (model == null) {
      throw new Error(`There's no Model for object of type ${object.name}`);
    }

    const objectResolver: GraphQLObjectResolver<any, any> = async (
      source,
      fields,
      context,
      info
    ) => {
      // Only register activities when operation is a mutation
      if (info.operation.operation !== "mutation") {
        return source;
      }

      if (source.id == null) {
        throw new Error(
          "Please add the id field to keep track of user activities"
        );
      }

      const mutation = info.path.prev?.key as string;

      await registerActivity(context, {
        model,
        mutation,
        ref: source.id,

        // Save query input in activity data
        data: JSON.stringify(info.variableValues)
      });

      return source;
    };

    object.resolveObject = objectResolver;
  }
}

export default RegisterActivityDirective;
