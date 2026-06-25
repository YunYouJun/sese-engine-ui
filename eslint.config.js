import antfu from '@antfu/eslint-config'

// https://github.com/antfu/eslint-config (flat config)
export default antfu(
  {
    vue: true,
    typescript: true,
    // build output & auto-generated files
    ignores: [
      'dist',
      'public',
      '**/auto-imports.d.ts',
      '**/components.d.ts',
      // infra config kept in its own (non-antfu) formatting
      '**/*.toml',
    ],
  },
  {
    // Don't force pnpm's strict supply-chain settings into the workspace
    // file: `trustPolicy: no-downgrade` rejects legitimate transitive deps
    // (e.g. undici-types) and breaks `pnpm install --frozen-lockfile` in CI.
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
)
