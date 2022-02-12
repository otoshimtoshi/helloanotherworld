precision highp float;

uniform float time;
uniform float rColor;
uniform float gColor;
uniform float bColor;

varying vec3 vPosition;

const float duration = 4.0;
const float delay = 2.0;

void main() {
  float now = clamp((time - delay) / duration, 0.0, 1.0);
  float opacity = (1.0 - length(vPosition.xy / vec2(1024.0))) * 0.6 * now;
  vec3 rgb = vec3(rColor, gColor, bColor);
  gl_FragColor = vec4(rgb, opacity * 0.2);
}