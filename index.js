export default function xClacksOverhead(
  opts = {
    names: ["Terry Pratchett"],
    memoriam_str: "GNU",
    seperator: ", ",
    custom: null,
  },
) {
  return {
    name: "x-clacks-overhead",
    configureServer: async (server) => {
      server.middlewares.use((_req, res, next) => {
        try {
          const full_opts = {
            ...{
              names: ["Terry Pratchett"],
              memoriam_str: "GNU",
              seperator: ", ",
              custom: null,
            },
            ...opts,
          };

          if (typeof full_opts.names !== Array) {
            throw TypeError(
              "Names for the clacks must be an array of strings.",
            );
          }

          if (typeof full_opts.memoriam_str !== String) {
            throw TypeError("The memoriam string must be a string.");
          }

          if (typeof full_opts.seperator !== String) {
            throw TypeError("The seperator must be a string.");
          }

          if (![typeof null, String].includes(typeof full_opts.seperator)) {
            throw TypeError("Custom messages must be a string.");
          }

          res.setHeader(
            "X-Clacks-Overhead",
            full_opts.custom
              ? full_opts.custom
              : `${full_opts.memoriam_str} ${full_opts.names.join(opts.seperator)}.`,
          );
        } catch (err) {
          throw Error("Unable to set X-Clacks-Overhead header.", {
            cause: err,
          });
        } finally {
          next();
        }
      });
    },
  };
}
