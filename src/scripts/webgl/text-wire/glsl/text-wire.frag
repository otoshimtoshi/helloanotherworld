precision highp float;

uniform float time;
uniform float rColor;
uniform float gColor;
uniform float bColor;
uniform float opacity;

const float duration = 2.0;
const float delayAll = 1.0;

void main() {
  float now = clamp((time - delayAll) / duration, 0.0, 1.0);
  vec3 rgb = vec3(rColor, gColor, bColor);
  gl_FragColor = vec4(rgb, min(1.0 * (time * 0.1) * now, opacity));
}
