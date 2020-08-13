export default function({ types: t }) {
    return {
      visitor: {
        VariableDeclarator(path, state) {
          console.log("--");

          console.log(path)
          if (path.node.id.name == "a") {
            path.node.id = t.identifier("b");
          }
        },
      },
    };
  }