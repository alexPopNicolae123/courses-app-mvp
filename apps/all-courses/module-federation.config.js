module.exports = {
  name: 'all-courses',
  exposes: {
    './Module': 'apps/all-courses/src/app/remote-entry/entry.module.ts',
  },
};
