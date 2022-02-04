precision highp float;

uniform float time;
uniform float rColor;
uniform float gColor;
uniform float bColor;

void main() {
  vec3 rgb = vec3(rColor, gColor, bColor);
  gl_FragColor = vec4(rgb, 0.1);
}
