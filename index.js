export default function xClacksOverhead(
  opts = {
    names: ["Terry Pratchett"],
    memoriam_str: "GNU",
    seperator: ", ",
    custom: null,
  },
) {
  const full_opts = {
    ...{
      names: ["Terry Pratchett"],
      memoriam_str: "GNU",
      seperator: ", ",
      custom: null,
    },
    ...opts,
  };

  return {
    name: "x-clacks-overhead",
    configureServer: async (server) => {
      server.middlewares.use((_req, res, next) => {
        res.setHeader(
          "X-Clacks-Overhead",
          full_opts.custom
            ? full_opts.custom
            : `${full_opts.memoriam_str} ${full_opts.names.join(opts.seperator)}.`,
        );
        next();
      });
    },
  };
}
