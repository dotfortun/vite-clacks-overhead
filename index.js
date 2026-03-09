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

          res.setHeader(
            "X-Clacks-Overhead",
            full_opts.custom
              ? full_opts.custom
              : `${full_opts.memoriam_str} ${full_opts.names.join(opts.seperator)}.`,
          );
        } catch (err) {
          console.error(Error("X-Clacks-Overhead not set:", { cause: err }));
        } finally {
          next();
        }
      });
    },
  };
}
