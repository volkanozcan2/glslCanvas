$(document).ready(function() {
    const shader = `
#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
#define S(x,y,z) smoothstep(x,y,z)
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
	st.x*=u_resolution.x/u_resolution.y;
	st.x-=.5;
	vec3 color =0.5 + 0.5*cos(u_time+st.xyx+vec3(0,2,4)); 
	gl_FragColor = vec4( color, 1.0 );
}
	`

    $("body").append(`<canvas class="glslCanvas"  ></canvas>`);
    $(".glslCanvas").attr("data-fragment", shader);

})
