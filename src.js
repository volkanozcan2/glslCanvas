$(document).ready(function() {


    const shader = `
// Author: uvefan Guuvavson
// Title: Worley noise 2x2x2

#ifdef GL_ES
precision lowp float;
#endif
#define pi 3.1415
uniform vec2 u_resolution;
uniform float u_time;
#define iTime u_time;

float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(dist,dist)*4.0);
}

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
