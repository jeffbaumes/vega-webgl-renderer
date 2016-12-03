import {Marks as marks} from 'vega-scenegraph';
import {visit} from '../util/visit';

function drawGL(context, scene, bounds) {
  marks.text.draw(context._textContext, scene, bounds);
}

export default {
  type:   'text',
  drawGL: drawGL
};
