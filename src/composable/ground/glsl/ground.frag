precision highp float;

uniform float time;
uniform float rColor;
uniform float gColor;
uniform float bColor;

varying vec3 vPosition;

const float duration = 2.0;

void main() {
  float now = clamp(duration, 0.0, 1.0);
  float opacity = (1.0 - length(vPosition.xy / vec2(512.0))) * 0.6 * now;
  vec3 v = normalize(vPosition);
  vec3 rgb = vec3(rColor, gColor, bColor);
  gl_FragColor = vec4(rgb, opacity);
}
