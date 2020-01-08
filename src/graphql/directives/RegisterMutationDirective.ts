import { SchemaDirectiveVisitor } from "apollo-server";

class RegisterMutationDirective extends SchemaDirectiveVisitor {
  visitObject(type: any) {
    const { name } = this.args;

    console.log("object");
    console.log(name, type);
  }

  visitFieldDefinition(type: any) {
    console.log("field");
  }
}

export default RegisterMutationDirective;
