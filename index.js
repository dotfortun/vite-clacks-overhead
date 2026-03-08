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
        res.setHeader(
          "X-Clacks-Overhead",
          opts.custom
            ? opts.custom
            : `${opts.memoriam_str} ${opts.name.join(opts.seperator)}.`,
        );
        next();
      });
    },
  };
}
