attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

varying vec3 vPosition;

void main() {
  float sin1 = sin((position.x + position.y) * 0.2 + time);
  vec3 updatePosition = vec3(position.x, position.y, position.z + sin1);
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(updatePosition, 1.0);
}
