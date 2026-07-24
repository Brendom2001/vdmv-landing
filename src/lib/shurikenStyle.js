// CSS filter can't reliably retarget an arbitrary source color to an exact
// brand hex (white has no hue to rotate), and mask-image + background-color
// turned out unreliable across renderers in testing. shuriken-shu.webp is a
// pre-tinted variant of shuriken-light.webp — same alpha shape, RGB channels
// replaced with #C7392B — so the color is pixel-exact with no runtime tricks.
export const SHU = '#C7392B'
export const SHURIKEN_SHU_SRC = '/shuriken-shu.webp'

export const shurikenDropShadow = {
  filter:
    'drop-shadow(0 2px 4px rgba(25,22,18,0.6)) drop-shadow(0 0 18px rgba(25,22,18,0.35))',
}
