precision highp float;

uniform float time;

varying vec3 vPosition;

const float duration = 2.0;

void main() {
  float now = clamp(time / duration, 0.0, 1.0);
  float opacity = (1.0 - length(vPosition.xy / vec2(512.0))) * now;
  vec3 v = normalize(vPosition);
  vec3 rgb = vec3(1, 1, 1);
  gl_FragColor = vec4(rgb, opacity);
}
