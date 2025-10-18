const $1L = { hi: 0, lo: 1 };
const $0L = { hi: 0, lo: 0 };
const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
function BuffType$AddDamage(param0) {
  this._0 = param0;
}
BuffType$AddDamage.prototype.$tag = 0;
function BuffType$MultiplyDamage(param0) {
  this._0 = param0;
}
BuffType$MultiplyDamage.prototype.$tag = 1;
function BuffType$AddCritRate(param0) {
  this._0 = param0;
}
BuffType$AddCritRate.prototype.$tag = 2;
function BuffType$MultiplyEffectDuration(param0) {
  this._0 = param0;
}
BuffType$MultiplyEffectDuration.prototype.$tag = 3;
function BuffType$MultiplyCooldown(param0) {
  this._0 = param0;
}
BuffType$MultiplyCooldown.prototype.$tag = 4;
function BuffType$AddAttackRange(param0) {
  this._0 = param0;
}
BuffType$AddAttackRange.prototype.$tag = 5;
function BuffType$MultiplySpeed(param0) {
  this._0 = param0;
}
BuffType$MultiplySpeed.prototype.$tag = 6;
const $9221120237041090561L = { hi: 2146959360, lo: 1 };
const $_4503599627370497L = { hi: -1048577, lo: -1 };
const $9218868437227405311L = { hi: 2146435071, lo: -1 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54]);
const $4294967295L = { hi: 0, lo: -1 };
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const moonbitlang$core$builtin$$random_seed = () => {
  if (crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const moonbitlang$core$builtin$$MyInt64$reinterpret_double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setFloat64(0, a);
  const hi = view.getInt32(0);
  const lo = view.getInt32(4);
  return { hi, lo };
};
const Option$None$1$ = { $tag: 0 };
function Option$Some$1$(param0) {
  this._0 = param0;
}
Option$Some$1$.prototype.$tag = 1;
const Option$None$2$ = { $tag: 0 };
function Option$Some$2$(param0) {
  this._0 = param0;
}
Option$Some$2$.prototype.$tag = 1;
const Option$None$3$ = { $tag: 0 };
function Option$Some$3$(param0) {
  this._0 = param0;
}
Option$Some$3$.prototype.$tag = 1;
const moonbitlang$core$builtin$$MyInt64$convert_to_double_u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const moonbitlang$core$builtin$$MyInt64$reinterpret_as_double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setUint32(0, a.hi);
  view.setUint32(4, a.lo);
  return view.getFloat64(0);
};
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {
  if (f._exports) return f._exports;
  return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
};
const moonbitlang$core$builtin$$MyInt64$compare_u = (a, b) => {
  const ahi = a.hi >>> 0;
  const bhi = b.hi >>> 0;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const moonbitlang$core$builtin$$MyInt64$from_double_unsigned = (a) => {
  if (isNaN(a)) {
    return { hi: 0, lo: 0 };
  }
  if (a >= 18446744073709551615) {
    return { hi: 0xffffffff, lo: 0xffffffff };
  }
  if (a <= 0) {
    return { hi: 0, lo: 0 };
  }
  let hi = (a * (1 / 0x100000000)) | 0;
  let lo = a | 0;
  return { hi, lo };
};
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$builtin$$JSArray$splice = (arr, idx, cnt) => arr.splice(idx, cnt);
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture.prototype.$tag = 0;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation.prototype.$tag = 1;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$Text.prototype.$tag = 2;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect.prototype.$tag = 3;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColoredShape(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$ColoredShape.prototype.$tag = 4;
function $64$Milky2018$47$selene$47$sprite$46$SpriteType$TextLayout(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$SpriteType$TextLayout.prototype.$tag = 5;
function $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$Milky2018$47$selene$47$sprite$46$Shape$Rect.prototype.$tag = 0;
function $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$Shape$Circle.prototype.$tag = 1;
function $64$Milky2018$47$selene$47$sprite$46$Shape$Ellipse(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$Milky2018$47$selene$47$sprite$46$Shape$Ellipse.prototype.$tag = 2;
function $64$Milky2018$47$selene$47$sprite$46$Shape$Triangle(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$sprite$46$Shape$Triangle.prototype.$tag = 3;
function $64$Milky2018$47$selene$47$sprite$46$Shape$Cross(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$Milky2018$47$selene$47$sprite$46$Shape$Cross.prototype.$tag = 4;
function $64$Milky2018$47$selene$47$sprite$46$Shape$Capsule(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$sprite$46$Shape$Capsule.prototype.$tag = 5;
function $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill.prototype.$tag = 0;
function $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke.prototype.$tag = 1;
const rami3l$js$45$ffi$js$$Value$undefined = () => undefined;
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
const Option$None$4$ = { $tag: 0 };
function Option$Some$4$(param0) {
  this._0 = param0;
}
Option$Some$4$.prototype.$tag = 1;
const Option$None$5$ = { $tag: 0 };
function Option$Some$5$(param0) {
  this._0 = param0;
}
Option$Some$5$.prototype.$tag = 1;
const Option$None$6$ = { $tag: 0 };
function Option$Some$6$(param0) {
  this._0 = param0;
}
Option$Some$6$.prototype.$tag = 1;
const Option$None$7$ = { $tag: 0 };
function Option$Some$7$(param0) {
  this._0 = param0;
}
Option$Some$7$.prototype.$tag = 1;
const Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame = (self,f) => self.requestAnimationFrame(f);
const Yoorkin$rabbit$45$tea$dom$$Window$cancel_animation_frame = (self,id) => self.cancelAnimationFrame(id);
const Yoorkin$rabbit$45$tea$dom$$window = () => window;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event = (e) => e instanceof MouseEvent ? e : null;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button = (e) => e.button;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x = (e) => e.movementX;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y = (e) => e.movementY;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x = (e) => e.offsetX;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y = (e) => e.offsetY;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event = (e) => e instanceof KeyboardEvent ? e : null;
const Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code = (e) => e.code;
const Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new = () => new Image();
const Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src = (self, value) => self.src = value;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element = (x) => x instanceof HTMLCanvasElement ? x : null;
const Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context = (x, id) => x.getContext(id);
const Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener = (target, type, listener) => target.addEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d = (value) => value instanceof CanvasRenderingContext2D ? value : null;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save = (x) => x.save();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore = (x) => x.restore();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale = (self,x,y) => self.scale(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate = (self,angle) => self.rotate(angle);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate = (self,x,y) => self.translate(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform = (self,a,b,c,d,e,f) => self.transform(a,b,c,d,e,f);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style = (x,value) => x.strokeStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style = (x,value) => x.fillStyle = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_linear_gradient = (x,x0,y0,x1,y1) => x.createLinearGradient(x0,y0,x1,y1);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern = (self,image,repetition) => self.createPattern(image,repetition);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect = (self,x,y,w,h) => self.clearRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect = (self,x,y,w,h) => self.fillRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect = (self,x,y,w,h) => self.strokeRect(x,y,w,h);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path = (self) => self.beginPath();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill$46$inner = (self, fillRule) => self.fill(fillRule);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke = (self) => self.stroke();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner = (self,text,x,y,maxWidth) => self.fillText(text,x,y,maxWidth);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size = (self,image,sx,sy,sw,sh,dx,dy,dw,dh) => self.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_line_width = (self,value) => self.lineWidth = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$close_path = (self) => self.closePath();
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$move_to = (self,x,y) => self.moveTo(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to = (self,x,y) => self.lineTo(x,y);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$arc$46$inner = (self,x,y,radius,startAngle,endAngle,anticlockwise) => self.arc(x,y,radius,startAngle,endAngle,anticlockwise);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$ellipse$46$inner = (self,x,y,radiusX,radiusY,rotation,startAngle,endAngle,anticlockwise) => self.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle,anticlockwise);
const Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font = (self,value) => self.font = value;
const Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop = (self,offset,color) => self.addColorStop(offset,color);
const Yoorkin$rabbit$45$tea$dom$$document = () => document;
const Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id = (doc,id) => doc.getElementById(id);
const Milky2018$selene$45$canvas$$DomTouchEvent$prevent_default = (self) => self.preventDefault();
const Milky2018$selene$45$canvas$$DomTouchEvent$changed_touches = (self) => Array.from(self.changedTouches);
const Milky2018$selene$45$canvas$$to_touch_event = (event) => event;
const Milky2018$selene$45$canvas$$DomTouch$identifier = (self) => self.identifier;
const Milky2018$selene$45$canvas$$DomTouch$client_x = (self) => self.clientX;
const Milky2018$selene$45$canvas$$DomTouch$client_y = (self) => self.clientY;
const Milky2018$selene$45$canvas$$get_viewport_left = () => (window.gameViewport ? window.gameViewport.left : 0.0);
const Milky2018$selene$45$canvas$$get_viewport_top = () => (window.gameViewport ? window.gameViewport.top : 0.0);
const Milky2018$selene$45$canvas$$get_viewport_scale = () => (window.gameViewport ? window.gameViewport.scale : 1.0);
const Milky2018$selene$45$canvas$$document_add_event_listener = (event, callback) => { document.addEventListener(event, callback); };
const Milky2018$selene$45$canvas$$is_pointer_locked = (canvas) => document.pointerLockElement === canvas;
const Milky2018$selene$45$canvas$$request_pointer_lock = (elem) => elem.requestPointerLock();;
const Milky2018$selene$45$canvas$$set_viewport_height = (x, y) => { x.height = y; };
const Milky2018$selene$45$canvas$$set_viewport_width = (x, y) => { x.width = y; };
const Milky2018$selene$45$canvas$$time_now = () => performance.now();
const Milky2018$selene$45$canvas$$set_image_smoothing_enabled = (ctx, value) => ctx.imageSmoothingEnabled = value;;
const Milky2018$selene$45$canvas$$measure_text = (ctx, text) => ctx.measureText(text);
const Milky2018$selene$45$canvas$$sqrt = (x) => Math.sqrt(x);
const Milky2018$selene$45$canvas$$sin = (x) => Math.sin(x);
const Milky2018$selene$45$canvas$$cos = (x) => Math.cos(x);
const Option$None$8$ = { $tag: 0 };
function Option$Some$8$(param0) {
  this._0 = param0;
}
Option$Some$8$.prototype.$tag = 1;
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
const Milky2018$selene$45$canvas$$Audio$new = (path) => new Audio(path);
const Milky2018$selene$45$canvas$$Audio$play = (self) => self.play();
const Milky2018$selene$45$canvas$$Audio$pause = (self) => self.pause();
const Milky2018$selene$45$canvas$$Audio$set_volume = (self, volume) => self.volume = volume;
const Milky2018$selene$45$canvas$$Audio$set_loop = (self, loop_) => self.loop = loop_;
const Milky2018$selene$45$canvas$$Audio$set_currentTime = (self, time) => self.currentTime = time;
const Milky2018$selene$45$canvas$$Audio$is_ended = (self) => self.ended;
const Milky2018$selene$45$canvas$$Audio$is_paused = (self) => self.paused;
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
function VFX_Lifecycle$Timer(param0) {
  this._0 = param0;
}
VFX_Lifecycle$Timer.prototype.$tag = 0;
const VFX_Lifecycle$OnAnimationFinish = { $tag: 1 };
function SpriteTemplate$Picture(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
SpriteTemplate$Picture.prototype.$tag = 0;
function SpriteTemplate$Shape(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
SpriteTemplate$Shape.prototype.$tag = 1;
function SpriteTemplate$Animation(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
SpriteTemplate$Animation.prototype.$tag = 2;
function SpriteTemplate$TextLayout(param0) {
  this._0 = param0;
}
SpriteTemplate$TextLayout.prototype.$tag = 3;
function SpriteTemplate$Beam(param0) {
  this._0 = param0;
}
SpriteTemplate$Beam.prototype.$tag = 4;
function SpriteTemplate$FromParent(param0) {
  this._0 = param0;
}
SpriteTemplate$FromParent.prototype.$tag = 5;
function ButtonAction$SwitchState(param0) {
  this._0 = param0;
}
ButtonAction$SwitchState.prototype.$tag = 0;
function ButtonAction$SelectUnit(param0) {
  this._0 = param0;
}
ButtonAction$SelectUnit.prototype.$tag = 1;
function ButtonAction$DeselectUnit(param0) {
  this._0 = param0;
}
ButtonAction$DeselectUnit.prototype.$tag = 2;
function ButtonAction$SetSynergyFilter(param0) {
  this._0 = param0;
}
ButtonAction$SetSynergyFilter.prototype.$tag = 3;
function ButtonAction$SetShapeFilter(param0) {
  this._0 = param0;
}
ButtonAction$SetShapeFilter.prototype.$tag = 4;
const ButtonAction$UnlockAudio = { $tag: 5 };
const ButtonAction$NextGuidePage = { $tag: 6 };
const ButtonAction$ToggleControlScheme = { $tag: 7 };
function ButtonAppearance$FromPicture(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
ButtonAppearance$FromPicture.prototype.$tag = 0;
function ButtonAppearance$FromAnimation(param0) {
  this._0 = param0;
}
ButtonAppearance$FromAnimation.prototype.$tag = 1;
function ButtonAppearance$FromText(param0) {
  this._0 = param0;
}
ButtonAppearance$FromText.prototype.$tag = 2;
function ButtonAppearance$FromShape(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
ButtonAppearance$FromShape.prototype.$tag = 3;
function ButtonAppearance$FromTextLayout(param0) {
  this._0 = param0;
}
ButtonAppearance$FromTextLayout.prototype.$tag = 4;
function OnHitEffect$DealDamage(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
OnHitEffect$DealDamage.prototype.$tag = 0;
function OnHitEffect$ApplyBuff(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
OnHitEffect$ApplyBuff.prototype.$tag = 1;
function OnHitEffect$CreateHazardousArea(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
OnHitEffect$CreateHazardousArea.prototype.$tag = 2;
function OnHitEffect$AreaOfEffect(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
OnHitEffect$AreaOfEffect.prototype.$tag = 3;
function OnHitEffect$Knockback(param0) {
  this._0 = param0;
}
OnHitEffect$Knockback.prototype.$tag = 4;
function OnHitEffect$Heal(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
OnHitEffect$Heal.prototype.$tag = 5;
function OnHitEffect$Chain(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
OnHitEffect$Chain.prototype.$tag = 6;
function OnHitEffect$Fork(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
OnHitEffect$Fork.prototype.$tag = 7;
function OnHitEffect$GainChargeShield(param0) {
  this._0 = param0;
}
OnHitEffect$GainChargeShield.prototype.$tag = 8;
function OnHitEffect$SpawnPickup(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
OnHitEffect$SpawnPickup.prototype.$tag = 9;
function PickupData$ShieldData(param0) {
  this._0 = param0;
}
PickupData$ShieldData.prototype.$tag = 0;
function PickupData$HealthData(param0) {
  this._0 = param0;
}
PickupData$HealthData.prototype.$tag = 1;
function ClickEvent$MouseClick(param0) {
  this._0 = param0;
}
ClickEvent$MouseClick.prototype.$tag = 0;
function ClickEvent$TouchClick(param0) {
  this._0 = param0;
}
ClickEvent$TouchClick.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$9$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$9$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$9$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$9$.prototype.$tag = 4;
const $64$Milky2018$47$selene$47$system$46$Schedule$Startup = { $tag: 0 };
const $64$Milky2018$47$selene$47$system$46$Schedule$Update = { $tag: 1 };
function $64$Milky2018$47$selene$47$system$46$Schedule$Render(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$Render.prototype.$tag = 2;
function $64$Milky2018$47$selene$47$system$46$Schedule$UpdateFrame(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateFrame.prototype.$tag = 3;
function $64$Milky2018$47$selene$47$system$46$Schedule$UpdateTime(param0) {
  this._0 = param0;
}
$64$Milky2018$47$selene$47$system$46$Schedule$UpdateTime.prototype.$tag = 4;
const Milky2018$selene$system$$mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$mouse_movement = { movement: { _0: 0, _1: 0 } };
const Milky2018$selene$system$$last_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$just_pressed_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$just_release_mouse = { pos: { _0: 0, _1: 0 }, left_button: false, right_button: false, middle_button: false };
const Milky2018$selene$system$$entity_generator = { val: 0 };
const Milky2018$selene$45$canvas$$draw_text_layout$46$42$bind$124$394 = "\n";
const Milky2018$selene$45$canvas$$new$46$42$bind$124$397 = $0L;
const Kaida$45$Amethyst$math$$pi_over_2 = [1.57079625129699707, 7.54978941586159635e-08, 5.39030252995776477e-15, 3.28200341580791294e-22, 1.27065575308067607e-29, 1.22933308981111329e-36, 2.7337005381646456e-44, 2.16741683877804819e-51];
const Kaida$45$Amethyst$math$$two_over_pi = [10680707, 7228996, 1387004, 2578385, 16069853, 12639074, 9804092, 4427841, 16666979, 11263675, 12935607, 2387514, 4345298, 14681673, 3074569, 13734428, 16653803, 1880361, 10960616, 8533493, 3062596, 8710556, 7349940, 6258241, 3772886, 3769171, 3798172, 8675211, 12450088, 3874808, 9961438, 366607, 15675153, 9132554, 7151469, 3571407, 2607881, 12013382, 4155038, 6285869, 7677882, 13102053, 15825725, 473591, 9065106, 15363067, 6271263, 9264392, 5636912, 4652155, 7056368, 13614112, 10155062, 1944035, 9527646, 15080200, 6658437, 6231200, 6832269, 16767104, 5075751, 3212806, 1398474, 7579849, 6349435, 12618859];
const Kaida$45$Amethyst$math$$npio2_hw = [1073291771, 1074340347, 1074977148, 1075388923, 1075800698, 1076025724, 1076231611, 1076437499, 1076643386, 1076849274, 1076971356, 1077074300, 1077177244, 1077280187, 1077383131, 1077486075, 1077589019, 1077691962, 1077794906, 1077897850, 1077968460, 1078019932, 1078071404, 1078122876, 1078174348, 1078225820, 1078277292, 1078328763, 1078380235, 1078431707, 1078483179, 1078534651];
const SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$initial_text$124$1019 = "操作模式: AD转向";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2312 = "安全型数字生命";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2313 = "增加HP上限";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2314 = "全队HP上限";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2316 = "故障型数字生命";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2317 = "增加队伍暴击率";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2318 = "全队暴击率";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2320 = "侵蚀型数字生命";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2321 = "延长技能效果持续时间";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2322 = "技能持续时间";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2324 = "离散型数字生命";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2325 = "增加总伤害";
const SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2326 = "全队总伤害";
const SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$font$124$803 = "italic 20px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$joystick_activation_zone = { position: { _0: 320, _1: 360 }, size: { _0: 640, _1: 720 } };
const Milky2018$selene$system$$pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const Milky2018$selene$45$canvas$$window = Yoorkin$rabbit$45$tea$dom$$window();
const Milky2018$selene$45$canvas$$element_cache = moonbitlang$core$builtin$$Map$new$46$inner$1$(8);
const Milky2018$selene$45$canvas$$audio_instances = moonbitlang$core$builtin$$Map$new$46$inner$2$(8);
const Milky2018$selene$45$canvas$$next_audio_id = moonbitlang$core$ref$$Ref$new$3$($0L);
const SuYiTao$45$SYT$CyberScavenger$$wave_count = moonbitlang$core$ref$$Ref$new$4$(0);
const Milky2018$selene$position$$positions = moonbitlang$core$builtin$$Map$new$46$inner$5$(8);
const SuYiTao$45$SYT$CyberScavenger$$kanban_girl_frames = Milky2018$selene$sprite$$frames_from_atlas("assets/gui/start_menu/kanban_girl_animated.png", 74, 265, 420, undefined, Option$None$0$);
const Milky2018$selene$sprite$$animation_generator = moonbitlang$core$ref$$Ref$new$4$(0);
const SuYiTao$45$SYT$CyberScavenger$$kanban_girl_animation = Milky2018$selene$sprite$$Animation$new(SuYiTao$45$SYT$CyberScavenger$$kanban_girl_frames, true, new Option$Some$0$(0.2), undefined);
const Milky2018$selene$system$$all_entities = moonbitlang$core$set$$Set$new$46$inner$6$(8);
const Milky2018$selene$sprite$$sprites = moonbitlang$core$builtin$$Map$new$46$inner$7$(8);
const SuYiTao$45$SYT$CyberScavenger$$audio_unlocked = moonbitlang$core$ref$$Ref$new$8$(false);
const SuYiTao$45$SYT$CyberScavenger$$buttons = moonbitlang$core$builtin$$Map$new$46$inner$9$(8);
const SuYiTao$45$SYT$CyberScavenger$$title_frames = Milky2018$selene$sprite$$frames_from_atlas("assets/gui/start_menu/title_animated.png", 79, 765, 275, undefined, Option$None$0$);
const SuYiTao$45$SYT$CyberScavenger$$title_animation = Milky2018$selene$sprite$$Animation$new(SuYiTao$45$SYT$CyberScavenger$$title_frames, true, new Option$Some$0$(0.4), undefined);
const Milky2018$selene$ui$$uis = moonbitlang$core$builtin$$Map$new$46$inner$10$(8);
const SuYiTao$45$SYT$CyberScavenger$$ui_entities = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$sfx_library = moonbitlang$core$builtin$$Map$new$46$inner$12$(8);
const SuYiTao$45$SYT$CyberScavenger$$explosion_frames = Milky2018$selene$sprite$$frames_from_atlas("assets/gfx/explosion150xA.png", 8, 184.5, 150, undefined, Option$None$0$);
const SuYiTao$45$SYT$CyberScavenger$$explosion_animation = Milky2018$selene$sprite$$Animation$new(SuYiTao$45$SYT$CyberScavenger$$explosion_frames, false, new Option$Some$0$(1), undefined);
const SuYiTao$45$SYT$CyberScavenger$$vfx_library = moonbitlang$core$builtin$$Map$new$46$inner$13$(8);
const SuYiTao$45$SYT$CyberScavenger$$pickup_library = moonbitlang$core$builtin$$Map$new$46$inner$14$(8);
const SuYiTao$45$SYT$CyberScavenger$$is_paused = moonbitlang$core$ref$$Ref$new$8$(false);
const SuYiTao$45$SYT$CyberScavenger$$spawn_timer = moonbitlang$core$ref$$Ref$new$15$(10);
const SuYiTao$45$SYT$CyberScavenger$$current_guide_image_index = moonbitlang$core$ref$$Ref$new$4$(0);
const SuYiTao$45$SYT$CyberScavenger$$guide_entities = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$active_ui_category = moonbitlang$core$ref$$Ref$new$16$(0);
const SuYiTao$45$SYT$CyberScavenger$$current_control_scheme = moonbitlang$core$ref$$Ref$new$17$(0);
const SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$squad_builder_unit_buttons = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$selected_unit_for_detail_view = moonbitlang$core$ref$$Ref$new$18$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$current_shape_filter = moonbitlang$core$ref$$Ref$new$19$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$current_synergy_filter = moonbitlang$core$ref$$Ref$new$20$(0);
const Milky2018$selene$system$$deferred_events = moonbitlang$core$array$$Array$new$46$inner$21$(0);
const SuYiTao$45$SYT$CyberScavenger$$squad_display_slots = moonbitlang$core$ref$$Ref$new$22$([]);
const SuYiTao$45$SYT$CyberScavenger$$sticky_unit_for_detail_view = moonbitlang$core$ref$$Ref$new$18$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$squad_guide_shown = moonbitlang$core$ref$$Ref$new$8$(false);
const SuYiTao$45$SYT$CyberScavenger$$bgm_handle = moonbitlang$core$ref$$Ref$new$23$(undefined);
const Milky2018$selene$system$$active_touches = moonbitlang$core$builtin$$Map$new$46$inner$24$(8);
const SuYiTao$45$SYT$CyberScavenger$$is_guide_active = moonbitlang$core$ref$$Ref$new$8$(false);
const SuYiTao$45$SYT$CyberScavenger$$current_ui_state = moonbitlang$core$ref$$Ref$new$25$(0);
const SuYiTao$45$SYT$CyberScavenger$$selected_squad = moonbitlang$core$ref$$Ref$new$26$([]);
const SuYiTao$45$SYT$CyberScavenger$$sfx_requests = moonbitlang$core$ref$$Ref$new$27$([]);
const Milky2018$selene$system$$just_began_touches = moonbitlang$core$builtin$$Map$new$46$inner$24$(8);
const SuYiTao$45$SYT$CyberScavenger$$joystick = moonbitlang$core$ref$$Ref$new$28$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$tutorial_joystick_entities = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms = moonbitlang$core$builtin$$Map$new$46$inner$29$(8);
const Milky2018$selene$system$$just_ended_touches = moonbitlang$core$builtin$$Map$new$46$inner$24$(8);
const SuYiTao$45$SYT$CyberScavenger$$prev_ui_state = moonbitlang$core$ref$$Ref$new$25$(0);
const Milky2018$selene$system$$just_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const SuYiTao$45$SYT$CyberScavenger$$wave_display_entity = moonbitlang$core$ref$$Ref$new$30$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$score_display_entity = moonbitlang$core$ref$$Ref$new$30$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$tutorial_text_entity = moonbitlang$core$ref$$Ref$new$30$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$control_scheme_button = moonbitlang$core$ref$$Ref$new$30$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette = moonbitlang$core$builtin$$Map$from_array$31$([{ _0: 0, _1: "#f1ae89ff" }, { _0: 1, _1: "#DDA0DD" }, { _0: 2, _1: "#90EE90" }, { _0: 3, _1: "#6495ED" }]);
const db = moonbitlang$core$builtin$$Map$new$46$inner$32$(8);
moonbitlang$core$builtin$$Map$set$32$(db, 0, { name: "橙色方块", color_tag: 0, shape_tag: 0, hp: 10, atk: 10, gdd: "每 2 秒以自身为圆心，对一定半径范围的敌人内造成 10 点伤害" });
moonbitlang$core$builtin$$Map$set$32$(db, 1, { name: "橙色三角", color_tag: 0, shape_tag: 1, hp: 6, atk: 4, gdd: "每 1 秒发射 1 颗子弹攻击敌人， 造成 4 点直接伤害+半径2的溅射伤害" });
moonbitlang$core$builtin$$Map$set$32$(db, 2, { name: "橙色圆形", color_tag: 0, shape_tag: 2, hp: 10, atk: 0, gdd: "每 5 秒在地图上生成一个可拾取的抵挡 2 次伤害的次数盾\n地上的次数盾会在10秒后消失" });
moonbitlang$core$builtin$$Map$set$32$(db, 3, { name: "紫色方块", color_tag: 1, shape_tag: 0, hp: 9, atk: 4, gdd: "每 2 秒以自身为圆心，对一定半径范围的敌人内造成 4 点伤害，在推开敌人的同时附加迟滞效果" });
moonbitlang$core$builtin$$Map$set$32$(db, 4, { name: "紫色三角", color_tag: 1, shape_tag: 1, hp: 7, atk: 4, gdd: "每 1 秒对一定范围内 3 个敌人发射射线，造成 4 点伤害并附加1秒静止效果" });
moonbitlang$core$builtin$$Map$set$32$(db, 5, { name: "紫色圆形", color_tag: 1, shape_tag: 2, hp: 7, atk: 1, gdd: "每 15 秒为队伍施加 1 次持续 8 秒的增益，使单位技能冷却速率加快1.25倍\n注意：此类单位无法享受技能冷却加成" });
moonbitlang$core$builtin$$Map$set$32$(db, 6, { name: "绿色方块", color_tag: 2, shape_tag: 0, hp: 9, atk: 6, gdd: "每 2 秒可在身边释放一定范围的毒气，毒气有迟滞效果，每秒造成6点伤害" });
moonbitlang$core$builtin$$Map$set$32$(db, 7, { name: "绿色三角", color_tag: 2, shape_tag: 1, hp: 6, atk: 5, gdd: "每 5 秒投射 1 枚毒气弹，直接命中敌人造成 2 点伤害，并留下毒气区域，毒气有迟滞效果，每秒造成 3 点伤害" });
moonbitlang$core$builtin$$Map$set$32$(db, 8, { name: "绿色圆形", color_tag: 2, shape_tag: 2, hp: 6, atk: 1, gdd: "单位在场时，队列每 5 秒，为血量最低的队员恢复 1 HP" });
moonbitlang$core$builtin$$Map$set$32$(db, 9, { name: "蓝色方块", color_tag: 3, shape_tag: 0, hp: 9, atk: 6, gdd: "每 5 秒以自身为圆心，对一定半径范围的敌人施加持续5秒的每秒 2 点伤害的持续伤害" });
moonbitlang$core$builtin$$Map$set$32$(db, 10, { name: "蓝色三角", color_tag: 3, shape_tag: 1, hp: 7, atk: 5, gdd: "每 3 秒发射 1 条闪电链，首次命中敌人造成 4 点伤害，随后闪电链分裂至其他敌人，共分裂两次，每次分裂伤害减半" });
moonbitlang$core$builtin$$Map$set$32$(db, 11, { name: "蓝色圆形", color_tag: 3, shape_tag: 2, hp: 6, atk: 1, gdd: "每 8 秒队伍施加 1 次持续 4 秒的增益，使所有成员造成的每次伤害额外增加2点增伤，再增加总伤10%的伤害。" });
const SuYiTao$45$SYT$CyberScavenger$$unit_definitions = db;
const SuYiTao$45$SYT$CyberScavenger$$pickups = moonbitlang$core$builtin$$Map$new$46$inner$33$(8);
const SuYiTao$45$SYT$CyberScavenger$$healths = moonbitlang$core$builtin$$Map$new$46$inner$34$(8);
const SuYiTao$45$SYT$CyberScavenger$$train_cars = moonbitlang$core$builtin$$Map$new$46$inner$35$(8);
const SuYiTao$45$SYT$CyberScavenger$$vfx_follows = moonbitlang$core$builtin$$Map$new$46$inner$36$(8);
const SuYiTao$45$SYT$CyberScavenger$$team_abilities = moonbitlang$core$builtin$$Map$new$46$inner$37$(8);
const SuYiTao$45$SYT$CyberScavenger$$score_values = moonbitlang$core$builtin$$Map$new$46$inner$38$(8);
const SuYiTao$45$SYT$CyberScavenger$$all_units = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$sizes = moonbitlang$core$builtin$$Map$new$46$inner$39$(8);
const SuYiTao$45$SYT$CyberScavenger$$cooldown_ability_units = moonbitlang$core$builtin$$Map$new$46$inner$40$(8);
const SuYiTao$45$SYT$CyberScavenger$$combat_stats = moonbitlang$core$builtin$$Map$new$46$inner$41$(8);
const SuYiTao$45$SYT$CyberScavenger$$vfx_movements = moonbitlang$core$builtin$$Map$new$46$inner$42$(8);
const SuYiTao$45$SYT$CyberScavenger$$destinations = moonbitlang$core$builtin$$Map$new$46$inner$43$(8);
const SuYiTao$45$SYT$CyberScavenger$$teams = moonbitlang$core$builtin$$Map$new$46$inner$44$(8);
const SuYiTao$45$SYT$CyberScavenger$$movement_stats = moonbitlang$core$builtin$$Map$new$46$inner$45$(8);
const SuYiTao$45$SYT$CyberScavenger$$attack_targets = moonbitlang$core$builtin$$Map$new$46$inner$46$(8);
const SuYiTao$45$SYT$CyberScavenger$$vfx_instances = moonbitlang$core$builtin$$Map$new$46$inner$47$(8);
const Milky2018$selene$velocity$$velocities = moonbitlang$core$builtin$$Map$new$46$inner$48$(8);
const SuYiTao$45$SYT$CyberScavenger$$projectiles = moonbitlang$core$builtin$$Map$new$46$inner$49$(8);
const SuYiTao$45$SYT$CyberScavenger$$score = moonbitlang$core$ref$$Ref$new$4$(0);
const SuYiTao$45$SYT$CyberScavenger$$synergy_tags = moonbitlang$core$builtin$$Map$new$46$inner$50$(8);
const SuYiTao$45$SYT$CyberScavenger$$unit_shapes = moonbitlang$core$builtin$$Map$new$46$inner$51$(8);
const SuYiTao$45$SYT$CyberScavenger$$active_synergies = moonbitlang$core$ref$$Ref$new$52$({ buffs: [], hp_multiplier: 1 });
const db$2 = moonbitlang$core$builtin$$Map$new$46$inner$53$(8);
const _bind = [{ count: 0, bonus_value: 1, bonus_text: "0%", effect: undefined }, { count: 3, bonus_value: 1.2, bonus_text: "+20%", effect: undefined }, { count: 6, bonus_value: 1.4, bonus_text: "+40%", effect: undefined }, { count: 9, bonus_value: 1.6, bonus_text: "+60%", effect: undefined }];
moonbitlang$core$builtin$$Map$set$53$(db$2, 0, { name: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2312, description: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2313, tiers: _bind, state: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2314 });
const _bind$2 = [{ count: 0, bonus_value: 0, bonus_text: "0%", effect: new BuffType$AddCritRate(0) }, { count: 3, bonus_value: 0.1, bonus_text: "+10%", effect: new BuffType$AddCritRate(0.1) }, { count: 6, bonus_value: 0.2, bonus_text: "+20%", effect: new BuffType$AddCritRate(0.2) }, { count: 9, bonus_value: 0.3, bonus_text: "+30%", effect: new BuffType$AddCritRate(0.3) }];
moonbitlang$core$builtin$$Map$set$53$(db$2, 1, { name: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2316, description: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2317, tiers: _bind$2, state: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2318 });
const _bind$3 = [{ count: 0, bonus_value: 1, bonus_text: "0%", effect: new BuffType$MultiplyEffectDuration(1) }, { count: 3, bonus_value: 1.3, bonus_text: "+30%", effect: new BuffType$MultiplyEffectDuration(1.3) }, { count: 6, bonus_value: 1.6, bonus_text: "+60%", effect: new BuffType$MultiplyEffectDuration(1.6) }, { count: 9, bonus_value: 2, bonus_text: "+100%", effect: new BuffType$MultiplyEffectDuration(2) }];
moonbitlang$core$builtin$$Map$set$53$(db$2, 2, { name: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2320, description: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2321, tiers: _bind$3, state: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2322 });
const _bind$4 = [{ count: 0, bonus_value: 1, bonus_text: "0%", effect: new BuffType$MultiplyDamage(1) }, { count: 3, bonus_value: 1.15, bonus_text: "+15%", effect: new BuffType$MultiplyDamage(1.15) }, { count: 6, bonus_value: 1.3, bonus_text: "+30%", effect: new BuffType$MultiplyDamage(1.3) }, { count: 9, bonus_value: 1.5, bonus_text: "+50%", effect: new BuffType$MultiplyDamage(1.5) }];
moonbitlang$core$builtin$$Map$set$53$(db$2, 3, { name: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2324, description: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2325, tiers: _bind$4, state: SuYiTao$45$SYT$CyberScavenger$$synergy_database$46$42$bind$124$2326 });
const SuYiTao$45$SYT$CyberScavenger$$synergy_database = db$2;
const SuYiTao$45$SYT$CyberScavenger$$hovered_unit_for_detail_view = moonbitlang$core$ref$$Ref$new$18$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$active_synergies_display_entities = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup = moonbitlang$core$ref$$Ref$new$11$([]);
const SuYiTao$45$SYT$CyberScavenger$$player_head = moonbitlang$core$ref$$Ref$new$30$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$path_histories = moonbitlang$core$builtin$$Map$new$46$inner$54$(8);
const SuYiTao$45$SYT$CyberScavenger$$player_tail = moonbitlang$core$ref$$Ref$new$30$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$hazardous_areas = moonbitlang$core$builtin$$Map$new$46$inner$55$(8);
const SuYiTao$45$SYT$CyberScavenger$$global_rng = moonbitlang$core$random$$Rand$new(undefined);
const SuYiTao$45$SYT$CyberScavenger$$vfx_requests = moonbitlang$core$ref$$Ref$new$56$([]);
const SuYiTao$45$SYT$CyberScavenger$$team_charge_shield = moonbitlang$core$ref$$Ref$new$57$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$pickup_requests = moonbitlang$core$ref$$Ref$new$58$([]);
const SuYiTao$45$SYT$CyberScavenger$$active_buffs = moonbitlang$core$builtin$$Map$new$46$inner$59$(8);
const moonbitlang$core$double$$not_a_number = moonbitlang$core$int64$$Int64$reinterpret_as_double($9221120237041090561L);
const moonbitlang$core$double$$min_value = moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370497L);
const moonbitlang$core$double$$max_value = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405311L);
const SuYiTao$45$SYT$CyberScavenger$$team_shield_display_entity = moonbitlang$core$ref$$Ref$new$30$(undefined);
const SuYiTao$45$SYT$CyberScavenger$$player_facing_vector = moonbitlang$core$ref$$Ref$new$60$({ _0: 0, _1: -1 });
const Milky2018$selene$system$$touch_events_registered = moonbitlang$core$ref$$Ref$new$8$(false);
const Milky2018$selene$system$$all_codes = moonbitlang$core$set$$Set$from_array$0$([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);
const Milky2018$selene$system$$just_release_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const Milky2018$selene$system$$last_pressed_keys = moonbitlang$core$set$$Set$new$46$inner$0$(8);
const _bind$5 = { _0: 0, _1: 0 };
const _bind$6 = Option$None$0$;
const _bind$7 = Option$None$0$;
const _bind$8 = Option$None$0$;
const _bind$9 = Option$None$0$;
const _bind$10 = undefined;
const _bind$11 = { _0: 0, _1: 0 };
const Milky2018$selene$camera$$camera = { position: _bind$5, limit_top: _bind$8, limit_bottom: _bind$6, limit_left: _bind$7, limit_right: _bind$9, attached_entity: _bind$10, offset: _bind$11, follow_x: true, follow_y: true };
function moonbitlang$core$abort$$abort$61$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$62$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$63$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$60$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$64$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$65$(msg) {
  return $panic();
}
function moonbitlang$core$string$$String$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$abort$$abort$63$("Invalid index for View");
}
function moonbitlang$core$string$$StringView$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : moonbitlang$core$abort$$abort$63$("Invalid index for View");
}
function moonbitlang$core$builtin$$Show$to_string$63$(self) {
  return self.str.substring(self.start, self.end);
}
function moonbitlang$core$string$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$StringView$iter(self) {
  const _p = (yield_) => {
    const _start504 = self.start;
    const _end505 = self.end;
    let _tmp = _start504;
    while (true) {
      const index = _tmp;
      if (index < _end505) {
        const _tmp$2 = self.str;
        const c1 = _tmp$2.charCodeAt(index);
        if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < self.end) {
          const _tmp$3 = self.str;
          const _tmp$4 = index + 1 | 0;
          const c2 = _tmp$3.charCodeAt(_tmp$4);
          if (56320 <= c2 && c2 <= 57343) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind$12 = yield_(c);
            if (_bind$12 === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind$12 = yield_(c1);
        if (_bind$12 === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
const moonbitlang$core$string$$boyer_moore_horspool_find$46$constr$47$38 = 0;
function moonbitlang$core$string$$boyer_moore_horspool_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end320 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end320) {
          const _tmp$2 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$2.charCodeAt(_tmp$3) & 255;
          $bound_check(skip_table, _tmp$4);
          skip_table[_tmp$4] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end326 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end326) {
              const _p = i + j | 0;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p | 0;
              const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
              const _tmp$7 = needle.str;
              const _tmp$8 = needle.start + j | 0;
              if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _p = (i + needle_len | 0) - 1 | 0;
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + _p | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check(skip_table, _tmp$6);
          _tmp$2 = i + skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return moonbitlang$core$string$$boyer_moore_horspool_find$46$constr$47$38;
  }
}
const moonbitlang$core$string$$brute_force_find$46$constr$47$52 = 0;
function moonbitlang$core$string$$brute_force_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            let _tmp$3;
            if (i <= forward_len) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              _tmp$3 = _tmp$4.charCodeAt(_tmp$5) !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$7 = needle.str;
                const _tmp$8 = needle.start + j | 0;
                if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return moonbitlang$core$string$$brute_force_find$46$constr$47$52;
  }
}
function moonbitlang$core$string$$StringView$find(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$string$$brute_force_find(self, str) : moonbitlang$core$string$$boyer_moore_horspool_find(self, str);
}
function moonbitlang$core$string$$StringView$to_array(self) {
  const _bind$12 = moonbitlang$core$string$$StringView$iter(self);
  const _bind$13 = moonbitlang$core$array$$Array$new$46$inner$66$(self.end - self.start | 0);
  const _acc = { val: _bind$13 };
  _bind$12((_p) => {
    const rv = _acc.val;
    moonbitlang$core$array$$Array$push$66$(rv, _p);
    _acc.val = rv;
    return 1;
  });
  return _acc.val;
}
function moonbitlang$core$string$$StringView$split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    const _bind$12 = moonbitlang$core$string$$StringView$iter(self);
    return (_p) => _bind$12((_p$2) => _p(moonbitlang$core$string$$String$view$46$inner(moonbitlang$core$builtin$$Show$to_string$66$(_p$2), 0, undefined)));
  }
  const _p = (yield_) => {
    let view = self;
    while (true) {
      const _bind$12 = moonbitlang$core$string$$StringView$find(view, sep);
      if (_bind$12 === undefined) {
        return yield_(view);
      } else {
        const _Some = _bind$12;
        const _end = _Some;
        const _bind$13 = yield_(moonbitlang$core$string$$StringView$view$46$inner(view, 0, _end));
        if (_bind$13 === 1) {
          view = moonbitlang$core$string$$StringView$view$46$inner(view, _end + sep_len | 0, undefined);
        } else {
          return 0;
        }
        continue;
      }
    }
  };
  return _p;
}
function moonbitlang$core$string$$String$split(self, sep) {
  return moonbitlang$core$string$$StringView$split({ str: self, start: 0, end: self.length }, sep);
}
function moonbitlang$core$double$$Double$floor(_tmp) {
  return Math.floor(_tmp);
}
function moonbitlang$core$builtin$$Show$output$15$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$random$internal$random_source$$setup(seed, b32, counter) {
  $bound_check(b32, 0);
  b32[0] = 1634760805;
  $bound_check(b32, 1);
  b32[1] = 1634760805;
  $bound_check(b32, 2);
  b32[2] = 1634760805;
  $bound_check(b32, 3);
  b32[3] = 1634760805;
  $bound_check(b32, 4);
  b32[4] = 857760878;
  $bound_check(b32, 5);
  b32[5] = 857760878;
  $bound_check(b32, 6);
  b32[6] = 857760878;
  $bound_check(b32, 7);
  b32[7] = 857760878;
  $bound_check(b32, 8);
  b32[8] = 2036477234;
  $bound_check(b32, 9);
  b32[9] = 2036477234;
  $bound_check(b32, 10);
  b32[10] = 2036477234;
  $bound_check(b32, 11);
  b32[11] = 2036477234;
  $bound_check(b32, 12);
  b32[12] = 1797285236;
  $bound_check(b32, 13);
  b32[13] = 1797285236;
  $bound_check(b32, 14);
  b32[14] = 1797285236;
  $bound_check(b32, 15);
  b32[15] = 1797285236;
  $bound_check(seed, 0);
  $bound_check(b32, 16);
  b32[16] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 17);
  b32[17] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 18);
  b32[18] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 19);
  b32[19] = seed[0];
  $bound_check(seed, 1);
  $bound_check(b32, 20);
  b32[20] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 21);
  b32[21] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 22);
  b32[22] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 23);
  b32[23] = seed[1];
  $bound_check(seed, 2);
  $bound_check(b32, 24);
  b32[24] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 25);
  b32[25] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 26);
  b32[26] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 27);
  b32[27] = seed[2];
  $bound_check(seed, 3);
  $bound_check(b32, 28);
  b32[28] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 29);
  b32[29] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 30);
  b32[30] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 31);
  b32[31] = seed[3];
  $bound_check(seed, 4);
  $bound_check(b32, 32);
  b32[32] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 33);
  b32[33] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 34);
  b32[34] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 35);
  b32[35] = seed[4];
  $bound_check(seed, 5);
  $bound_check(b32, 36);
  b32[36] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 37);
  b32[37] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 38);
  b32[38] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 39);
  b32[39] = seed[5];
  $bound_check(seed, 6);
  $bound_check(b32, 40);
  b32[40] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 41);
  b32[41] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 42);
  b32[42] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 43);
  b32[43] = seed[6];
  $bound_check(seed, 7);
  $bound_check(b32, 44);
  b32[44] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 45);
  b32[45] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 46);
  b32[46] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 47);
  b32[47] = seed[7];
  $bound_check(b32, 48);
  b32[48] = counter;
  $bound_check(b32, 49);
  b32[49] = (counter >>> 0) + (1 >>> 0) | 0;
  $bound_check(b32, 50);
  b32[50] = (counter >>> 0) + (2 >>> 0) | 0;
  $bound_check(b32, 51);
  b32[51] = (counter >>> 0) + (3 >>> 0) | 0;
  $bound_check(b32, 52);
  b32[52] = 0;
  $bound_check(b32, 53);
  b32[53] = 0;
  $bound_check(b32, 54);
  b32[54] = 0;
  $bound_check(b32, 55);
  b32[55] = 0;
  $bound_check(b32, 56);
  b32[56] = 0;
  $bound_check(b32, 57);
  b32[57] = 0;
  $bound_check(b32, 58);
  b32[58] = 0;
  $bound_check(b32, 59);
  b32[59] = 0;
  $bound_check(b32, 60);
  b32[60] = 0;
  $bound_check(b32, 61);
  b32[61] = 0;
  $bound_check(b32, 62);
  b32[62] = 0;
  $bound_check(b32, 63);
  b32[63] = 0;
}
function moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35(t) {
  const a = t._0;
  const b = t._1;
  const c = t._2;
  const d = t._3;
  const a$2 = (a >>> 0) + (b >>> 0) | 0;
  const d$2 = d ^ a$2;
  const d$3 = d$2 << 16 | (d$2 >>> 16 | 0);
  const c$2 = (c >>> 0) + (d$3 >>> 0) | 0;
  const b$2 = b ^ c$2;
  const b$3 = b$2 << 12 | (b$2 >>> 20 | 0);
  const a$3 = (a$2 >>> 0) + (b$3 >>> 0) | 0;
  const d$4 = d$3 ^ a$3;
  const d$5 = d$4 << 8 | (d$4 >>> 24 | 0);
  const c$3 = (c$2 >>> 0) + (d$5 >>> 0) | 0;
  const b$4 = b$3 ^ c$3;
  const b$5 = b$4 << 7 | (b$4 >>> 25 | 0);
  return { _0: a$3, _1: b$5, _2: c$3, _3: d$5 };
}
function moonbitlang$core$random$internal$random_source$$chacha_block(seed, buf, counter) {
  moonbitlang$core$random$internal$random_source$$setup(seed, buf, counter);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 4) {
      $bound_check(buf, i);
      let b0 = buf[i];
      const _tmp$2 = 4 + i | 0;
      $bound_check(buf, _tmp$2);
      let b1 = buf[_tmp$2];
      const _tmp$3 = 8 + i | 0;
      $bound_check(buf, _tmp$3);
      let b2 = buf[_tmp$3];
      const _tmp$4 = 12 + i | 0;
      $bound_check(buf, _tmp$4);
      let b3 = buf[_tmp$4];
      const _tmp$5 = 16 + i | 0;
      $bound_check(buf, _tmp$5);
      let b4 = buf[_tmp$5];
      const _tmp$6 = 20 + i | 0;
      $bound_check(buf, _tmp$6);
      let b5 = buf[_tmp$6];
      const _tmp$7 = 24 + i | 0;
      $bound_check(buf, _tmp$7);
      let b6 = buf[_tmp$7];
      const _tmp$8 = 28 + i | 0;
      $bound_check(buf, _tmp$8);
      let b7 = buf[_tmp$8];
      const _tmp$9 = 32 + i | 0;
      $bound_check(buf, _tmp$9);
      let b8 = buf[_tmp$9];
      const _tmp$10 = 36 + i | 0;
      $bound_check(buf, _tmp$10);
      let b9 = buf[_tmp$10];
      const _tmp$11 = 40 + i | 0;
      $bound_check(buf, _tmp$11);
      let b10 = buf[_tmp$11];
      const _tmp$12 = 44 + i | 0;
      $bound_check(buf, _tmp$12);
      let b11 = buf[_tmp$12];
      const _tmp$13 = 48 + i | 0;
      $bound_check(buf, _tmp$13);
      let b12 = buf[_tmp$13];
      const _tmp$14 = 52 + i | 0;
      $bound_check(buf, _tmp$14);
      let b13 = buf[_tmp$14];
      const _tmp$15 = 56 + i | 0;
      $bound_check(buf, _tmp$15);
      let b14 = buf[_tmp$15];
      const _tmp$16 = 60 + i | 0;
      $bound_check(buf, _tmp$16);
      let b15 = buf[_tmp$16];
      let _tmp$17 = 0;
      while (true) {
        const round = _tmp$17;
        if (round < 4) {
          const tb1 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b0, _1: b4, _2: b8, _3: b12 });
          b0 = tb1._0;
          b4 = tb1._1;
          b8 = tb1._2;
          b12 = tb1._3;
          const tb2 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b1, _1: b5, _2: b9, _3: b13 });
          b1 = tb2._0;
          b5 = tb2._1;
          b9 = tb2._2;
          b13 = tb2._3;
          const tb3 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b2, _1: b6, _2: b10, _3: b14 });
          b2 = tb3._0;
          b6 = tb3._1;
          b10 = tb3._2;
          b14 = tb3._3;
          const tb4 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b3, _1: b7, _2: b11, _3: b15 });
          b3 = tb4._0;
          b7 = tb4._1;
          b11 = tb4._2;
          b15 = tb4._3;
          const tb5 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b0, _1: b5, _2: b10, _3: b15 });
          b0 = tb5._0;
          b5 = tb5._1;
          b10 = tb5._2;
          b15 = tb5._3;
          const tb6 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b1, _1: b6, _2: b11, _3: b12 });
          b1 = tb6._0;
          b6 = tb6._1;
          b11 = tb6._2;
          b12 = tb6._3;
          const tb7 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b2, _1: b7, _2: b8, _3: b13 });
          b2 = tb7._0;
          b7 = tb7._1;
          b8 = tb7._2;
          b13 = tb7._3;
          const tb8 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b3, _1: b4, _2: b9, _3: b14 });
          b3 = tb8._0;
          b4 = tb8._1;
          b9 = tb8._2;
          b14 = tb8._3;
          _tmp$17 = round + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      $bound_check(buf, i);
      buf[i] = b0;
      const _tmp$18 = 4 + i | 0;
      $bound_check(buf, _tmp$18);
      buf[_tmp$18] = b1;
      const _tmp$19 = 8 + i | 0;
      $bound_check(buf, _tmp$19);
      buf[_tmp$19] = b2;
      const _tmp$20 = 12 + i | 0;
      $bound_check(buf, _tmp$20);
      buf[_tmp$20] = b3;
      const _index_2 = 16 + i | 0;
      $bound_check(buf, _index_2);
      $bound_check(buf, _index_2);
      buf[_index_2] = (buf[_index_2] >>> 0) + (b4 >>> 0) | 0;
      const _index_4 = 20 + i | 0;
      $bound_check(buf, _index_4);
      $bound_check(buf, _index_4);
      buf[_index_4] = (buf[_index_4] >>> 0) + (b5 >>> 0) | 0;
      const _index_6 = 24 + i | 0;
      $bound_check(buf, _index_6);
      $bound_check(buf, _index_6);
      buf[_index_6] = (buf[_index_6] >>> 0) + (b6 >>> 0) | 0;
      const _index_8 = 28 + i | 0;
      $bound_check(buf, _index_8);
      $bound_check(buf, _index_8);
      buf[_index_8] = (buf[_index_8] >>> 0) + (b7 >>> 0) | 0;
      const _index_10 = 32 + i | 0;
      $bound_check(buf, _index_10);
      $bound_check(buf, _index_10);
      buf[_index_10] = (buf[_index_10] >>> 0) + (b8 >>> 0) | 0;
      const _index_12 = 36 + i | 0;
      $bound_check(buf, _index_12);
      $bound_check(buf, _index_12);
      buf[_index_12] = (buf[_index_12] >>> 0) + (b9 >>> 0) | 0;
      const _index_14 = 40 + i | 0;
      $bound_check(buf, _index_14);
      $bound_check(buf, _index_14);
      buf[_index_14] = (buf[_index_14] >>> 0) + (b10 >>> 0) | 0;
      const _index_16 = 44 + i | 0;
      $bound_check(buf, _index_16);
      $bound_check(buf, _index_16);
      buf[_index_16] = (buf[_index_16] >>> 0) + (b11 >>> 0) | 0;
      const _tmp$21 = 48 + i | 0;
      $bound_check(buf, _tmp$21);
      buf[_tmp$21] = b12;
      const _tmp$22 = 52 + i | 0;
      $bound_check(buf, _tmp$22);
      buf[_tmp$22] = b13;
      const _tmp$23 = 56 + i | 0;
      $bound_check(buf, _tmp$23);
      buf[_tmp$23] = b14;
      const _tmp$24 = 60 + i | 0;
      $bound_check(buf, _tmp$24);
      buf[_tmp$24] = b15;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed) {
  const seed$2 = moonbitlang$core$array$$FixedArray$makei$67$(8, (i) => moonbitlang$core$bytes$$BytesView$to_uint_le(moonbitlang$core$bytes$$Bytes$sub$46$inner(seed, Math.imul(i, 4) | 0, (Math.imul(i, 4) | 0) + 4 | 0)));
  const buffer = $make_array_len_and_init(64, 0);
  moonbitlang$core$random$internal$random_source$$chacha_block(seed$2, buffer, 0);
  const _bind$12 = 32;
  return { buffer: buffer, seed: seed$2, i: 0, n: _bind$12, counter: 0 };
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$next(self) {
  const i = self.i;
  if (i >>> 0 >= self.n >>> 0) {
    return undefined;
  }
  self.i = (i >>> 0) + (1 >>> 0) | 0;
  const index = i & 31;
  const _tmp = self.buffer;
  const _tmp$2 = Math.imul(index, 2) | 0;
  $bound_check(_tmp, _tmp$2);
  const lo = moonbitlang$core$uint$$UInt$to_uint64(_tmp[_tmp$2]);
  const _tmp$3 = self.buffer;
  const _tmp$4 = (Math.imul(index, 2) | 0) + 1 | 0;
  $bound_check(_tmp$3, _tmp$4);
  const hi = moonbitlang$core$uint$$UInt$to_uint64(_tmp$3[_tmp$4]);
  return moonbitlang$core$builtin$$BitOr$lor$3$(moonbitlang$core$builtin$$Shl$shl$3$(hi, 32), lo);
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self) {
  self.counter = (self.counter >>> 0) + (4 >>> 0) | 0;
  if (self.counter === 16) {
    moonbitlang$core$array$$FixedArray$blit_to$46$inner$68$(self.buffer, self.seed, 8, 56, 0);
    self.counter = 0;
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, self.buffer, self.counter);
  self.i = 0;
  self.n = self.counter === 12 ? 28 : 32;
}
function moonbitlang$core$random$$Source$next$69$(self) {
  while (true) {
    const _bind$12 = moonbitlang$core$random$internal$random_source$$ChaCha8$next(self);
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const _x = _Some;
      return _x;
    }
    moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self);
    continue;
  }
}
function moonbitlang$core$random$$chacha8$46$inner(seed) {
  return { self: moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed), method_0: moonbitlang$core$random$$Source$next$69$ };
}
function moonbitlang$core$random$$Rand$new(generator) {
  if (generator === undefined) {
    return moonbitlang$core$random$$chacha8$46$inner($bytes_literal$0);
  } else {
    const _Some = generator;
    const _gen = _Some;
    return _gen;
  }
}
function moonbitlang$core$random$$umul128(a, b) {
  const aLo = moonbitlang$core$builtin$$BitAnd$land$3$(a, $4294967295L);
  const aHi = moonbitlang$core$builtin$$Shr$shr$3$(a, 32);
  const bLo = moonbitlang$core$builtin$$BitAnd$land$3$(b, $4294967295L);
  const bHi = moonbitlang$core$builtin$$Shr$shr$3$(b, 32);
  const x = moonbitlang$core$builtin$$Mul$mul$3$(aLo, bLo);
  const y = moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Mul$mul$3$(aHi, bLo), moonbitlang$core$builtin$$Shr$shr$3$(x, 32));
  const z = moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Mul$mul$3$(aLo, bHi), moonbitlang$core$builtin$$BitAnd$land$3$(y, $4294967295L));
  const w = moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Add$add$3$(moonbitlang$core$builtin$$Mul$mul$3$(aHi, bHi), moonbitlang$core$builtin$$Shr$shr$3$(y, 32)), moonbitlang$core$builtin$$Shr$shr$3$(z, 32));
  return { hi: w, lo: moonbitlang$core$builtin$$Mul$mul$3$(a, b) };
}
function moonbitlang$core$random$$Rand$uint64$46$inner(self, limit) {
  if (moonbitlang$core$builtin$$Eq$equal$3$(limit, $0L)) {
    const _p = self;
    return _p.method_0(_p.self);
  } else {
    if (moonbitlang$core$builtin$$Eq$equal$3$(moonbitlang$core$builtin$$BitAnd$land$3$(limit, moonbitlang$core$builtin$$Sub$sub$3$(limit, $1L)), $0L)) {
      const _p = self;
      return moonbitlang$core$builtin$$BitAnd$land$3$(_p.method_0(_p.self), moonbitlang$core$builtin$$Sub$sub$3$(limit, $1L));
    }
  }
  const _p = self;
  let r = moonbitlang$core$random$$umul128(_p.method_0(_p.self), limit);
  if (moonbitlang$core$builtin$$op_lt$3$(r.lo, limit)) {
    const thresh = moonbitlang$core$builtin$$Mod$mod$3$(moonbitlang$core$uint64$$UInt64$lnot(limit), limit);
    while (true) {
      if (moonbitlang$core$builtin$$op_lt$3$(r.lo, thresh)) {
        const _p$2 = self;
        r = moonbitlang$core$random$$umul128(_p$2.method_0(_p$2.self), limit);
        continue;
      } else {
        break;
      }
    }
  }
  return r.hi;
}
function moonbitlang$core$random$$Rand$uint$46$inner(self, limit) {
  if (limit === 0) {
    const _p = self;
    return moonbitlang$core$uint64$$UInt64$to_uint(_p.method_0(_p.self));
  }
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$random$$Rand$uint64$46$inner(self, moonbitlang$core$uint$$UInt$to_uint64(limit)));
}
function moonbitlang$core$random$$Rand$int$46$inner(self, limit) {
  if (limit === 0) {
    const _p = self;
    return moonbitlang$core$uint64$$UInt64$to_int(moonbitlang$core$builtin$$Shr$shr$3$(_p.method_0(_p.self), 33));
  } else {
    return moonbitlang$core$random$$Rand$uint$46$inner(self, limit);
  }
}
function moonbitlang$core$random$$Rand$double(self) {
  const _p = self;
  return moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$builtin$$Shr$shr$3$(moonbitlang$core$builtin$$Shl$shl$3$(_p.method_0(_p.self), 11), 11)) / moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$builtin$$Shl$shl$3$($1L, 53));
}
function moonbitlang$core$array$$get_limit(len) {
  let len$2 = len;
  let limit = 0;
  while (true) {
    if (len$2 > 0) {
      len$2 = len$2 / 2 | 0;
      limit = limit + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return limit;
}
function moonbitlang$core$array$$Array$bubble_sort_by$70$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1236 = actual_start + 1 | 0;
  let _tmp = _start1236;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$70$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$70$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$70$(arr, j);
          moonbitlang$core$array$$Array$set$70$(arr, j, moonbitlang$core$array$$Array$at$70$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$70$(arr, j - 1 | 0, temp);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$bubble_sort_by$71$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const _start1236 = actual_start + 1 | 0;
  let _tmp = _start1236;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$71$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$71$(arr, j)) > 0) {
          const temp = moonbitlang$core$array$$Array$at$71$(arr, j);
          moonbitlang$core$array$$Array$set$71$(arr, j, moonbitlang$core$array$$Array$at$71$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$71$(arr, j - 1 | 0, temp);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$227(_env, a_idx, b_idx) {
  const swaps = _env._3;
  const cmp = _env._2;
  const arr = _env._1;
  const actual_start = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$70$(arr, a_pos), moonbitlang$core$array$$Array$at$70$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$70$(arr, a_pos);
    moonbitlang$core$array$$Array$set$70$(arr, a_pos, moonbitlang$core$array$$Array$at$70$(arr, b_pos));
    moonbitlang$core$array$$Array$set$70$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$228(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$227(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$227(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$227(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$70$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const len = actual_end - actual_start | 0;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: actual_start, _1: arr, _2: cmp, _3: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$228(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$228(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$228(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$228(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$70$(arr, i_pos);
        moonbitlang$core$array$$Array$set$70$(arr, i_pos, moonbitlang$core$array$$Array$at$70$(arr, j_pos));
        moonbitlang$core$array$$Array$set$70$(arr, j_pos, temp);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return { _0: ((actual_start + len | 0) - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: actual_start + b | 0, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$262(_env, a_idx, b_idx) {
  const swaps = _env._3;
  const cmp = _env._2;
  const arr = _env._1;
  const actual_start = _env._0;
  const a_pos = actual_start + a_idx | 0;
  const b_pos = actual_start + b_idx | 0;
  if (cmp(moonbitlang$core$array$$Array$at$71$(arr, a_pos), moonbitlang$core$array$$Array$at$71$(arr, b_pos)) > 0) {
    const temp = moonbitlang$core$array$$Array$at$71$(arr, a_pos);
    moonbitlang$core$array$$Array$set$71$(arr, a_pos, moonbitlang$core$array$$Array$at$71$(arr, b_pos));
    moonbitlang$core$array$$Array$set$71$(arr, b_pos, temp);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$263(_env, a_idx, b_idx, c_idx) {
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$262(_env, a_idx, b_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$262(_env, b_idx, c_idx);
  moonbitlang$core$array$$choose_pivot_by$46$sort_2$47$262(_env, a_idx, b_idx);
}
function moonbitlang$core$array$$Array$choose_pivot_by$71$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const len = actual_end - actual_start | 0;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: actual_start, _1: arr, _2: cmp, _3: swaps };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$263(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$263(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$263(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot_by$46$sort_3$47$263(_env, a, b, c);
  }
  if (swaps.val === 12) {
    const mid_len = len / 2 | 0;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const i_pos = actual_start + i | 0;
        const j_pos = actual_start + j | 0;
        const temp = moonbitlang$core$array$$Array$at$71$(arr, i_pos);
        moonbitlang$core$array$$Array$set$71$(arr, i_pos, moonbitlang$core$array$$Array$at$71$(arr, j_pos));
        moonbitlang$core$array$$Array$set$71$(arr, j_pos, temp);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return { _0: ((actual_start + len | 0) - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: actual_start + b | 0, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$Array$sift_down_by$70$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$70$(arr, child_pos), moonbitlang$core$array$$Array$at$70$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$70$(arr, current_pos), moonbitlang$core$array$$Array$at$70$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$70$(arr, current_pos);
      moonbitlang$core$array$$Array$set$70$(arr, current_pos, moonbitlang$core$array$$Array$at$70$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$70$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$sift_down_by$71$(arr, start, end, index, cmp) {
  let current = index;
  const len = end - start | 0;
  let child = (Math.imul(current, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      const child_pos = start + child | 0;
      const current_pos = start + current | 0;
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$Array$at$71$(arr, child_pos), moonbitlang$core$array$$Array$at$71$(arr, child_pos + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      const new_child_pos = start + child | 0;
      if (cmp(moonbitlang$core$array$$Array$at$71$(arr, current_pos), moonbitlang$core$array$$Array$at$71$(arr, new_child_pos)) >= 0) {
        return undefined;
      }
      const temp = moonbitlang$core$array$$Array$at$71$(arr, current_pos);
      moonbitlang$core$array$$Array$set$71$(arr, current_pos, moonbitlang$core$array$$Array$at$71$(arr, new_child_pos));
      moonbitlang$core$array$$Array$set$71$(arr, new_child_pos, temp);
      current = child;
      child = (Math.imul(current, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$70$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$70$(arr, actual_start, actual_end, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$70$(arr, actual_start);
      moonbitlang$core$array$$Array$set$70$(arr, actual_start, moonbitlang$core$array$$Array$at$70$(arr, last));
      moonbitlang$core$array$$Array$set$70$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$70$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$heap_sort_by$71$(arr, start, end, cmp) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return undefined;
  }
  const len = actual_end - actual_start | 0;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$Array$sift_down_by$71$(arr, actual_start, actual_end, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      const last = actual_start + i | 0;
      const temp = moonbitlang$core$array$$Array$at$71$(arr, actual_start);
      moonbitlang$core$array$$Array$set$71$(arr, actual_start, moonbitlang$core$array$$Array$at$71$(arr, last));
      moonbitlang$core$array$$Array$set$71$(arr, last, temp);
      moonbitlang$core$array$$Array$sift_down_by$71$(arr, actual_start, actual_start + i | 0, 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$partition_by$70$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$70$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$70$(arr, pivot_index, moonbitlang$core$array$$Array$at$70$(arr, last_index));
  moonbitlang$core$array$$Array$set$70$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$70$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$70$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$70$(arr, i);
          moonbitlang$core$array$$Array$set$70$(arr, i, moonbitlang$core$array$$Array$at$70$(arr, j));
          moonbitlang$core$array$$Array$set$70$(arr, j, temp$2);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const temp$2 = moonbitlang$core$array$$Array$at$70$(arr, i);
  moonbitlang$core$array$$Array$set$70$(arr, i, moonbitlang$core$array$$Array$at$70$(arr, last_index));
  moonbitlang$core$array$$Array$set$70$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$partition_by$71$(arr, start, end, cmp, pivot_index) {
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return { _0: actual_start, _1: true };
  }
  const last_index = actual_end - 1 | 0;
  const temp = moonbitlang$core$array$$Array$at$71$(arr, pivot_index);
  moonbitlang$core$array$$Array$set$71$(arr, pivot_index, moonbitlang$core$array$$Array$at$71$(arr, last_index));
  moonbitlang$core$array$$Array$set$71$(arr, last_index, temp);
  const pivot = moonbitlang$core$array$$Array$at$71$(arr, last_index);
  let i = actual_start;
  let partitioned = true;
  let _tmp = actual_start;
  while (true) {
    const j = _tmp;
    if (j < last_index) {
      if (cmp(moonbitlang$core$array$$Array$at$71$(arr, j), pivot) < 0) {
        if (i !== j) {
          const temp$2 = moonbitlang$core$array$$Array$at$71$(arr, i);
          moonbitlang$core$array$$Array$set$71$(arr, i, moonbitlang$core$array$$Array$at$71$(arr, j));
          moonbitlang$core$array$$Array$set$71$(arr, j, temp$2);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const temp$2 = moonbitlang$core$array$$Array$at$71$(arr, i);
  moonbitlang$core$array$$Array$set$71$(arr, i, moonbitlang$core$array$$Array$at$71$(arr, last_index));
  moonbitlang$core$array$$Array$set$71$(arr, last_index, temp$2);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$70$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1251 = actual_start + 1 | 0;
  let _tmp = _start1251;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$70$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$70$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$70$(arr, j);
          moonbitlang$core$array$$Array$set$70$(arr, j, moonbitlang$core$array$$Array$at$70$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$70$(arr, j - 1 | 0, temp);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$try_bubble_sort_by$71$(arr, start, end, cmp) {
  let tries = 0;
  const actual_start = start < 0 ? 0 : start;
  const actual_end = end > arr.length ? arr.length : end;
  if (actual_start >= actual_end) {
    return true;
  }
  const _start1251 = actual_start + 1 | 0;
  let _tmp = _start1251;
  while (true) {
    const i = _tmp;
    if (i < actual_end) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > actual_start && cmp(moonbitlang$core$array$$Array$at$71$(arr, j - 1 | 0), moonbitlang$core$array$$Array$at$71$(arr, j)) > 0) {
          sorted = false;
          const temp = moonbitlang$core$array$$Array$at$71$(arr, j);
          moonbitlang$core$array$$Array$set$71$(arr, j, moonbitlang$core$array$$Array$at$71$(arr, j - 1 | 0));
          moonbitlang$core$array$$Array$set$71$(arr, j - 1 | 0, temp);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$quick_sort_by$70$(arr, start, end, cmp, pred, limit) {
  let limit$2 = limit;
  let current_start = start;
  let current_end = end;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const len = current_end - current_start | 0;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$Array$bubble_sort_by$70$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$70$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$12 = moonbitlang$core$array$$Array$choose_pivot_by$70$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$12._0;
    const _likely_sorted = _bind$12._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$70$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$13 = moonbitlang$core$array$$Array$partition_by$70$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$13._0;
    const _partitioned = _bind$13._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$14 = pred$2;
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$70$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$70$(arr, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        current_start = i;
        continue;
      }
    }
    const left_start = current_start;
    const right_start = _actual_pivot_pos + 1 | 0;
    const right_end = current_end;
    if ((_actual_pivot_pos - left_start | 0) < (right_end - right_start | 0)) {
      moonbitlang$core$array$$Array$quick_sort_by$70$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$70$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$70$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$70$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$quick_sort_by$71$(arr, start, end, cmp, pred, limit) {
  let limit$2 = limit;
  let current_start = start;
  let current_end = end;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const len = current_end - current_start | 0;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$Array$bubble_sort_by$71$(arr, current_start, current_end, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$Array$heap_sort_by$71$(arr, current_start, current_end, cmp);
      return undefined;
    }
    const _bind$12 = moonbitlang$core$array$$Array$choose_pivot_by$71$(arr, current_start, current_end, cmp);
    const _pivot_index = _bind$12._0;
    const _likely_sorted = _bind$12._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$Array$try_bubble_sort_by$71$(arr, current_start, current_end, cmp)) {
        return undefined;
      }
    }
    const _bind$13 = moonbitlang$core$array$$Array$partition_by$71$(arr, current_start, current_end, cmp, _pivot_index);
    const _actual_pivot_pos = _bind$13._0;
    const _partitioned = _bind$13._1;
    was_partitioned = _partitioned;
    const pivot_pos = _actual_pivot_pos - current_start | 0;
    const diff = len - pivot_pos | 0;
    balanced = (pivot_pos < diff ? pivot_pos : diff) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$14 = pred$2;
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$Array$at$71$(arr, _actual_pivot_pos)) === 0) {
        let i = _actual_pivot_pos;
        while (true) {
          if (i < current_end && cmp(_pred, moonbitlang$core$array$$Array$at$71$(arr, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        current_start = i;
        continue;
      }
    }
    const left_start = current_start;
    const right_start = _actual_pivot_pos + 1 | 0;
    const right_end = current_end;
    if ((_actual_pivot_pos - left_start | 0) < (right_end - right_start | 0)) {
      moonbitlang$core$array$$Array$quick_sort_by$71$(arr, left_start, _actual_pivot_pos, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$Array$at$71$(arr, _actual_pivot_pos);
      current_start = right_start;
      current_end = right_end;
    } else {
      moonbitlang$core$array$$Array$quick_sort_by$71$(arr, right_start, right_end, cmp, moonbitlang$core$array$$Array$at$71$(arr, _actual_pivot_pos), limit$2);
      current_start = left_start;
      current_end = _actual_pivot_pos;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort_by_key$72$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$70$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by_key$73$(self, map) {
  moonbitlang$core$array$$Array$quick_sort_by$71$(self, 0, self.length, (a, b) => $compare_int(map(a), map(b)), undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$Array$sort_by$71$(self, cmp) {
  moonbitlang$core$array$$Array$quick_sort_by$71$(self, 0, self.length, cmp, undefined, moonbitlang$core$array$$get_limit(self.length));
}
function moonbitlang$core$array$$FixedArray$makei$67$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        $bound_check(array, i);
        array[i] = value(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$Array$filter_map$74$(self, f) {
  const result = [];
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const x = self[_i];
      const _bind$12 = f(x);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        moonbitlang$core$array$$Array$push$75$(result, _x);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function moonbitlang$core$ref$$Ref$new$76$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$3$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$15$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$4$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$8$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$16$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$27$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$25$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$26$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$18$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$20$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$19$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$17$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$23$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$28$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$57$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$11$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$22$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$30$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$52$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$60$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$56$(x) {
  return { val: x };
}
function moonbitlang$core$ref$$Ref$new$58$(x) {
  return { val: x };
}
function moonbitlang$core$set$$Set$new$46$inner$0$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$set$$Set$new$46$inner$6$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$add_entry_to_tail$6$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$set$$Set$set_entry$0$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$set_entry$6$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$set$$Set$push_away$0$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$0$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$push_away$6$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$set$$Set$set_entry$6$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$set$$Set$set_entry$6$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$set$$Set$add_with_hash$0$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$0$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$0$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$0$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$add_with_hash$6$(self, key, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$set$$Set$grow$6$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$set$$Set$push_away$6$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key };
  moonbitlang$core$set$$Set$add_entry_to_tail$6$(self, _idx, entry);
}
function moonbitlang$core$set$$Set$grow$0$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$0$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$grow$6$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      moonbitlang$core$set$$Set$add_with_hash$6$(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$add$0$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$0$(self, key, moonbitlang$core$builtin$$Hash$hash$77$(key));
}
function moonbitlang$core$set$$Set$add$6$(self, key) {
  moonbitlang$core$set$$Set$add_with_hash$6$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$set$$Set$from_array$0$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length >= ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(capacity);
  const _p$2 = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$set$$Set$add$0$(m, _p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$contains$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$77$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return false;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_entry.key, key)) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$contains$6$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return false;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove_entry$0$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$remove_entry$6$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$0$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$0$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$shift_back$6$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$set$$Set$set_entry$6$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$set$$Set$remove$0$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$77$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$0$(_entry.key, key)) {
        moonbitlang$core$set$$Set$remove_entry$0$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$0$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$remove$6$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$set$$Set$remove_entry$6$(self, _entry);
        moonbitlang$core$set$$Set$shift_back$6$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$set$$Set$clear$0$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$79$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$0$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$set$$Set$difference$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp = self.head;
  while (true) {
    const _p = _tmp;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      if (!moonbitlang$core$set$$Set$contains$0$(other, _p$4)) {
        moonbitlang$core$set$$Set$add$0$(m, _p$4);
      }
      _tmp = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$set$$Set$union$0$(self, other) {
  const m = moonbitlang$core$set$$Set$new$46$inner$0$(8);
  let _tmp = self.head;
  while (true) {
    const _p = _tmp;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$4);
      _tmp = _p$5;
      continue;
    }
  }
  let _tmp$2 = other.head;
  while (true) {
    const _p = _tmp$2;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.next;
      moonbitlang$core$set$$Set$add$0$(m, _p$4);
      _tmp$2 = _p$5;
      continue;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Logger$write_object$80$(self, obj) {
  moonbitlang$core$builtin$$Show$output$80$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$81$(self, obj) {
  moonbitlang$core$builtin$$Show$output$81$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$62$(self, obj) {
  moonbitlang$core$builtin$$Show$output$62$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$4$(self, obj) {
  moonbitlang$core$builtin$$Show$output$4$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$68$(self, obj) {
  moonbitlang$core$builtin$$Show$output$68$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$82$(self, obj) {
  moonbitlang$core$builtin$$Show$output$82$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$15$(self, obj) {
  moonbitlang$core$builtin$$Show$output$15$(obj, self);
}
function moonbitlang$core$builtin$$op_lt$3$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$3$(self_, other) < 0;
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$68$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$83$(self, ch) {
  const _bind$12 = self;
  _bind$12.val = `${_bind$12.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$3$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$3$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_notequal$16$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$16$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$25$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$25$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$6$(x, y) {
  return !(x === y);
}
function moonbitlang$core$builtin$$op_notequal$84$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$84$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$30$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$85$(x, y);
}
function moonbitlang$core$array$$Array$at$86$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$87$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$88$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$89$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$62$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$90$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$70$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$91$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$92$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$60$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$71$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$15$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$4$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$83$(self, str) {
  const _bind$12 = self;
  _bind$12.val = `${_bind$12.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$86$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$86$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$0$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$0$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$93$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$93$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$6$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$6$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$94$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$94$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$95$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$95$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$96$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$96$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$62$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$62$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$80$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$80$(value, self);
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hasher$new$46$inner(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hasher$new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = moonbitlang$core$builtin$$seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return moonbitlang$core$builtin$$Hasher$new$46$inner(seed);
}
function moonbitlang$core$builtin$$Hash$hash$97$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$86$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$77$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$0$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$98$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$93$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$78$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$6$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$99$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$4$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$100$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$94$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$101$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$95$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$102$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$96$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$103$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$62$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$104$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$80$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$105$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$106$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$107$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$108$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$109$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$110$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$111$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$112$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$113$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$114$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$115$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$15$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$78$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$6$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$116$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$60$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$102$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$96$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Logger$write_iter$46$inner$62$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$62$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$62$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$Logger$write_iter$46$inner$82$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$82$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$82$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, num2);
  }
  const _p = num % radix | 0;
  const _tmp = _p < 0 ? 0 - _p | 0 : _p;
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output$46$inner(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: radix, _1: logger };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1897(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$4$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$83$, method_1: moonbitlang$core$builtin$$Logger$write_substring$83$, method_2: moonbitlang$core$builtin$$Logger$write_char$83$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1889(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = (num >>> 0) / (radix >>> 0) | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1889(_env, num2);
  }
  const _tmp = (num >>> 0) % (radix >>> 0) | 0;
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$uint$$UInt$output$46$inner(self, logger, radix) {
  const radix$2 = radix;
  const _env = { _0: radix$2, _1: logger };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1889(_env, self);
}
function moonbitlang$core$int$$Int$to_uint64(self) {
  return moonbitlang$core$int$$Int$to_int64(self);
}
function moonbitlang$core$uint64$$UInt64$to_int(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$double$$Double$reinterpret_as_uint64(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_double(self);
}
function moonbitlang$core$string$$String$substring$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$83$(self, str, start, len) {
  const _bind$12 = self;
  _bind$12.val = `${_bind$12.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$output$4$(self, logger) {
  moonbitlang$core$int$$Int$output$46$inner(self, logger, 10);
}
function moonbitlang$core$builtin$$Show$output$68$(self, logger) {
  moonbitlang$core$uint$$UInt$output$46$inner(self, logger, 10);
}
function moonbitlang$core$builtin$$Show$output$108$(self, logger) {
  if (self === undefined) {
    logger.method_0(logger.self, "None");
    return;
  } else {
    const _Some = self;
    const _arg = _Some;
    logger.method_0(logger.self, "Some(");
    moonbitlang$core$builtin$$Logger$write_object$80$(logger, _arg);
    logger.method_0(logger.self, ")");
    return;
  }
}
function moonbitlang$core$builtin$$Show$output$110$(self, logger) {
  if (self === undefined) {
    logger.method_0(logger.self, "None");
    return;
  } else {
    const _Some = self;
    const _arg = _Some;
    logger.method_0(logger.self, "Some(");
    moonbitlang$core$builtin$$Logger$write_object$81$(logger, _arg);
    logger.method_0(logger.self, ")");
    return;
  }
}
function moonbitlang$core$array$$Array$iter$62$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind$12 = yield_(v);
        if (_bind$12 === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$82$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind$12 = yield_(v);
        if (_bind$12 === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Show$output$106$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$46$inner$62$(logger, moonbitlang$core$array$$Array$iter$62$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Show$output$114$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$46$inner$82$(logger, moonbitlang$core$array$$Array$iter$82$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Eq$equal$117$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$equal$84$(_x, _y);
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$108$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$equal$80$(_x, _y);
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$85$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$option$$Option$unwrap$118$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$119$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$120$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$121$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$int$$Int$next_power_of_two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Map$new$46$inner$122$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$24$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$9$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$7$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$5$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$123$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$34$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$44$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$10$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$12$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$13$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$14$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$29$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$41$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$43$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$46$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$48$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$38$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$45$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$39$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$35$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$49$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$47$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$42$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$33$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$37$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$40$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$36$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$32$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$53$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$31$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$59$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$55$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$54$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$50$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$51$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$12 = capacity$2 - 1 | 0;
  const _bind$13 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$14 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$15 = undefined;
  return { entries: _bind$14, size: 0, capacity: capacity$2, capacity_mask: _bind$12, grow_at: _bind$13, head: _bind$15, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$122$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$24$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$123$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$29$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$53$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$48$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$43$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$46$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$41$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$34$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$39$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$55$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$59$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$36$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$47$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$54$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$37$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$40$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$35$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$42$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$44$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$50$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$51$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$49$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$45$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$38$(self, idx, entry) {
  const _bind$12 = self.tail;
  if (_bind$12 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$122$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$2$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$7$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$5$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$1$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$24$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$13$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$12$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$14$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$10$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$9$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$29$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$34$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$41$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$44$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$43$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$46$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$48$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$38$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$45$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$39$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$35$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$42$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$123$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$32$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$53$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$33$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$49$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$55$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$59$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$36$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$47$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$54$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$37$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$40$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$31$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$50$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$51$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$12 = entry.next;
  if (_bind$12 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$12;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$122$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$122$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$122$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$2$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$2$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$7$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$7$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$5$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$5$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$5$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$1$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$24$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$24$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$24$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$13$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$13$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$12$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$12$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$12$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$14$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$14$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$10$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$10$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$9$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$9$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$123$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$123$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$123$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$29$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$29$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$29$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$32$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$32$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$32$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$53$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$53$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$53$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$48$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$48$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$48$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$43$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$43$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$43$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$46$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$46$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$46$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$41$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$41$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$41$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$34$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$34$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$34$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$39$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$39$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$39$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$33$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$33$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$33$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$55$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$55$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$55$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$59$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$59$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$59$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$36$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$36$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$36$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$47$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$47$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$47$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$54$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$54$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$54$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$37$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$37$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$37$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$40$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$40$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$40$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$31$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$31$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$31$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$35$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$35$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$35$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$42$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$42$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$42$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$44$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$44$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$44$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$50$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$50$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$50$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$51$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$51$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$51$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$49$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$49$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$49$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$45$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$45$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$45$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$38$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$12 = _tmp$4[idx$2];
    if (_bind$12 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$38$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$12;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$38$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$122$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$122$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$122$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$122$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$2$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$93$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$2$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$2$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$7$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$7$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$7$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$5$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$5$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$1$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$1$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$24$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$24$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$24$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$24$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$13$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$95$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$13$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$13$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$12$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$94$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$12$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$12$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$14$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$96$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$14$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$14$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$10$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$10$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$10$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$9$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$9$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$9$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$123$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$123$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$80$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$123$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$123$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$29$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$29$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$29$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$29$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$32$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$32$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$62$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$32$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$53$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$53$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$80$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$53$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$53$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$48$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$48$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$48$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$48$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$43$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$43$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$43$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$43$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$46$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$46$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$46$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$46$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$41$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$41$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$41$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$41$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$34$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$34$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$34$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$34$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$39$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$39$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$39$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$39$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$33$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$33$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$33$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$55$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$55$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$55$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$55$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$59$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$59$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$59$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$59$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$36$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$36$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$36$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$36$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$47$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$47$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$47$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$47$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$54$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$54$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$54$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$54$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$37$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$37$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$37$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$37$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$40$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$40$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$40$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$40$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$31$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$31$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$80$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$31$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$35$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$35$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$35$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$35$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$42$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$42$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$42$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$42$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$44$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$44$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$44$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$44$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$50$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$50$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$50$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$50$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$51$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$51$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$51$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$51$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$49$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$49$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$49$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$49$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$45$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$45$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$45$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$45$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$38$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$38$(self);
  }
  let _bind$12;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$13 = _tmp$3[idx];
    if (_bind$13 === undefined) {
      _bind$12 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$13;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$38$(self, idx, _curr_entry);
        _bind$12 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$12._0;
  const _psl = _bind$12._1;
  const _bind$13 = self.tail;
  const _bind$14 = undefined;
  const entry = { prev: _bind$13, next: _bind$14, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$38$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$122$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$122$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$2$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$2$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$7$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$7$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$5$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$5$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$1$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$1$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$24$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$24$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$13$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$13$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$12$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$12$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$14$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$14$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$10$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$10$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$9$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$9$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$123$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$123$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$29$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$29$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$32$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$32$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$53$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$53$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$48$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$48$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$43$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$43$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$46$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$46$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$41$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$41$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$34$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$34$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$39$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$39$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$33$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$33$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$55$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$55$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$59$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$59$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$36$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$36$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$47$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$47$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$54$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$54$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$37$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$37$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$40$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$40$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$31$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$31$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$35$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$35$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$42$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$42$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$44$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$44$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$50$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$50$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$51$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$51$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$49$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$49$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$45$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$45$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$38$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$38$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$122$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$122$(self, key, value, moonbitlang$core$builtin$$Hash$hash$97$(key));
}
function moonbitlang$core$builtin$$Map$set$2$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$2$(self, key, value, moonbitlang$core$builtin$$Hash$hash$98$(key));
}
function moonbitlang$core$builtin$$Map$set$7$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$7$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$5$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$5$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$1$(self, key, value, moonbitlang$core$builtin$$Hash$hash$97$(key));
}
function moonbitlang$core$builtin$$Map$set$24$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$24$(self, key, value, moonbitlang$core$builtin$$Hash$hash$99$(key));
}
function moonbitlang$core$builtin$$Map$set$13$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$13$(self, key, value, moonbitlang$core$builtin$$Hash$hash$101$(key));
}
function moonbitlang$core$builtin$$Map$set$12$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$12$(self, key, value, moonbitlang$core$builtin$$Hash$hash$100$(key));
}
function moonbitlang$core$builtin$$Map$set$14$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$14$(self, key, value, moonbitlang$core$builtin$$Hash$hash$102$(key));
}
function moonbitlang$core$builtin$$Map$set$10$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$10$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$9$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$9$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$123$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$123$(self, key, value, moonbitlang$core$builtin$$Hash$hash$104$(key));
}
function moonbitlang$core$builtin$$Map$set$29$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$29$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$32$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$32$(self, key, value, moonbitlang$core$builtin$$Hash$hash$103$(key));
}
function moonbitlang$core$builtin$$Map$set$53$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$53$(self, key, value, moonbitlang$core$builtin$$Hash$hash$104$(key));
}
function moonbitlang$core$builtin$$Map$set$48$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$48$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$43$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$43$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$46$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$46$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$41$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$41$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$34$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$34$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$39$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$39$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$33$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$33$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$55$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$55$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$59$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$59$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$36$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$36$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$47$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$47$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$54$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$54$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$37$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$37$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$40$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$40$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$31$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$31$(self, key, value, moonbitlang$core$builtin$$Hash$hash$104$(key));
}
function moonbitlang$core$builtin$$Map$set$35$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$35$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$42$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$42$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$44$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$44$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$50$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$50$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$51$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$51$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$49$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$49$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$45$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$45$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$set$38$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$38$(self, key, value, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$from_array$122$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length >= ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$122$(arr.length);
  const _p$2 = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$122$(m, _p$4._0, _p$4._1);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$31$(arr) {
  const length = arr.length;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length >= ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$31$(arr.length);
  const _p$2 = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = arr[_p$3];
      moonbitlang$core$builtin$$Map$set$31$(m, _p$4._0, _p$4._1);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$2$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$98$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return Option$None$1$;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$93$(_entry.key, key)) {
        return new Option$Some$1$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$1$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$7$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$24$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$99$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$5$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$34$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$44$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$10$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return -1;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$12$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$100$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$94$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$97$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return Option$None$2$;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$2$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$2$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$9$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$32$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$103$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$62$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$31$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$104$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$80$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$53$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$104$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$80$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$123$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$104$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$80$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$35$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$46$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$41$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$39$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$59$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return Option$None$3$;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return new Option$Some$3$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$3$;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$38$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$14$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$102$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$96$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$49$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$48$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$29$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$55$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$13$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$101$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$95$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$47$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$54$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$45$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$40$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$78$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      return -1;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$2$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$24$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$7$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$9$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$29$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$34$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$41$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$44$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$43$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$46$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$5$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$48$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$38$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$45$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$39$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$35$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$42$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$33$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$49$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$55$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$59$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$47$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$36$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$37$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$40$(self, entry) {
  const _bind$12 = entry.prev;
  if (_bind$12 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$12);
    const _p = _tmp[_bind$12];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$13 = entry.next;
  if (_bind$13 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$13;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$2$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$2$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$24$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$24$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$7$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$7$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$9$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$9$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$29$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$29$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$34$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$34$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$41$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$41$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$44$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$44$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$43$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$43$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$46$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$46$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$5$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$5$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$48$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$48$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$38$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$38$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$45$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$45$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$39$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$39$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$35$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$35$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$42$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$42$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$33$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$33$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$49$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$49$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$55$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$55$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$59$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$59$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$47$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$47$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$36$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$36$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$37$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$37$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$40$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$12 = _tmp$2[next];
      if (_bind$12 === undefined) {
        break _L;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$40$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$2$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$equal$93$(_entry.key, key)) {
        moonbitlang$core$builtin$$Map$remove_entry$2$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$2$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$24$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$24$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$24$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$7$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$7$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$7$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$9$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$9$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$9$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$29$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$29$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$29$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$34$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$34$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$34$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$41$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$41$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$41$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$44$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$44$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$44$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$43$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$43$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$43$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$46$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$46$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$46$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$5$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$5$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$5$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$48$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$48$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$48$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$38$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$38$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$38$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$45$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$45$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$45$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$39$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$39$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$39$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$35$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$35$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$35$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$42$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$42$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$42$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$33$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$33$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$33$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$49$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$49$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$49$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$55$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$55$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$55$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$59$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$59$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$59$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$47$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$47$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$47$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$36$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$36$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$36$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$37$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$37$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$37$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$40$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$12 = _tmp$3[idx];
    if (_bind$12 === undefined) {
      break;
    } else {
      const _Some = _bind$12;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p === key;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        moonbitlang$core$builtin$$Map$remove_entry$40$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$40$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove$2$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$2$(self, key, moonbitlang$core$builtin$$Hash$hash$98$(key));
}
function moonbitlang$core$builtin$$Map$remove$24$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$24$(self, key, moonbitlang$core$builtin$$Hash$hash$99$(key));
}
function moonbitlang$core$builtin$$Map$remove$7$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$7$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$9$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$9$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$29$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$29$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$34$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$34$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$41$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$41$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$44$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$44$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$43$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$43$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$46$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$46$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$5$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$5$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$48$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$48$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$38$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$38$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$45$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$45$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$39$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$39$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$35$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$35$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$42$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$42$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$33$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$33$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$49$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$49$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$55$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$55$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$59$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$59$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$47$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$47$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$36$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$36$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$37$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$37$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Map$remove$40$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$40$(self, key, moonbitlang$core$builtin$$Hash$hash$78$(key));
}
function moonbitlang$core$builtin$$Show$output$112$(self, logger) {
  logger.method_0(logger.self, "{");
  let _tmp = 0;
  let _tmp$2 = self.head;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    if (_param_1 === undefined) {
      logger.method_0(logger.self, "}");
      return;
    } else {
      const _Some = _param_1;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      if (_param_0 > 0) {
        logger.method_0(logger.self, ", ");
      }
      moonbitlang$core$builtin$$Logger$write_object$80$(logger, _key);
      logger.method_0(logger.self, ": ");
      moonbitlang$core$builtin$$Logger$write_object$4$(logger, _value);
      _tmp = _param_0 + 1 | 0;
      _tmp$2 = _next;
      continue;
    }
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$124$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$79$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$125$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$126$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$127$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$128$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$129$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$130$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$131$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$132$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$133$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$134$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$135$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$136$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$137$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$138$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$139$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$140$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$141$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$142$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$Map$clear$24$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$124$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$9$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$125$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$49$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$126$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$47$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$127$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$34$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$128$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$41$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$129$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$44$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$130$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$43$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$131$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$46$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$132$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$5$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$133$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$48$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$134$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$38$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$135$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$45$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$136$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$39$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$137$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$35$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$138$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$37$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$139$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$40$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$140$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$36$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$141$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$clear$33$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$142$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$builtin$$Map$iter$32$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_({ _0: _key, _1: _value });
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter$42$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_({ _0: _key, _1: _value });
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$44$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$43$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$33$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$37$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$36$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_key, _value);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$34$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$49$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$47$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$33$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$41$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$29$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$55$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$59$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$48$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$keys$54$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind$12 = yield_(_key);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$values$24$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _value = _x.value;
        const _next = _x.next;
        const _bind$12 = yield_(_value);
        if (_bind$12 === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$to_array$9$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Map$to_array$7$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$uint$$UInt$to_uint64(self) {
  return moonbitlang$core$uint64$$UInt64$extend_uint(self);
}
function moonbitlang$core$double$$Double$convert_uint64(value) {
  return moonbitlang$core$builtin$$MyInt64$convert_to_double_u(value);
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$array$$Array$push$143$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$70$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$86$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$60$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$144$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$62$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$66$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$87$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$90$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$71$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$82$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$89$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$145$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$21$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$146$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$75$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$88$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iter$to_array$87$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$87$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$add$147$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$147$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$147$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$MyInt64$mod_u(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
    const _ahi = self.hi;
    const _alo = self.lo;
    const _bhi = other.hi;
    const _blo = other.lo;
    const _func = exports.rem_u;
    const lo = _func(_alo, _ahi, _blo, _bhi);
    const _func$2 = exports.get_high;
    const hi = _func$2();
    return { hi: hi, lo: lo };
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$MyInt64$lnot(self) {
  return { hi: ~self.hi, lo: ~self.lo };
}
function moonbitlang$core$builtin$$MyInt64$land(self, other) {
  return { hi: self.hi & other.hi, lo: self.lo & other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lor(self, other) {
  return { hi: self.hi | other.hi, lo: self.lo | other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _hi = self.hi;
      const _lo = self.lo;
      const hi = _hi;
      const lo = _lo;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return { hi: hi$2, lo: lo$2 };
    } else {
      return { hi: self.lo << (shift$2 - 32 | 0), lo: 0 };
    }
  }
}
function moonbitlang$core$builtin$$MyInt64$lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >>> shift$2 | 0, lo: self.lo >>> shift$2 | self.hi << (32 - shift$2 | 0) } : { hi: 0, lo: self.hi >>> (shift$2 - 32 | 0) | 0 };
}
function moonbitlang$core$uint64$$UInt64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$builtin$$Add$add$3$(self, other) {
  return moonbitlang$core$builtin$$Add$add$147$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$3$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$147$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$3$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$147$(self, other);
}
function moonbitlang$core$builtin$$Mod$mod$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$mod_u(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$3$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$3$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$uint64$$UInt64$lnot(self) {
  return moonbitlang$core$builtin$$MyInt64$lnot(self);
}
function moonbitlang$core$builtin$$Shl$shl$3$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$3$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  self.acc = Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_uint(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_int64(self, value) {
  self.acc = (self.acc >>> 0) + (8 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, moonbitlang$core$uint64$$UInt64$to_uint(value));
  moonbitlang$core$builtin$$Hasher$consume4(self, moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$builtin$$Shr$shr$3$(value, 32)));
}
function moonbitlang$core$builtin$$Hasher$combine_uint64(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_int64(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end859 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end859) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$86$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$4$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_int(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$68$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$3$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_uint64(hasher, self);
}
function moonbitlang$core$array$$FixedArray$blit_to$46$inner$68$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$68$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$61$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$4$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$4$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$4$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$4$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$4$(self.length)}`);
    return;
  }
}
function moonbitlang$core$double$$Double$to_uint64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_double_unsigned(self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$86$(input) {
  console.log(input);
}
function moonbitlang$core$array$$Array$new$46$inner$86$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$66$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$new$46$inner$21$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$144$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$6$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$146$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$145$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$remove$62$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$abort$$abort$62$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$4$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$4$(index)}`);
  }
}
function moonbitlang$core$array$$Array$remove$60$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$abort$$abort$60$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$4$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$4$(index)}`);
  }
}
function moonbitlang$core$array$$Array$make$4$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$15$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$set$70$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$set$71$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$set$15$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$set$4$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$clear$144$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$144$(self, 0);
}
function moonbitlang$core$array$$Array$clear$6$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$6$(self, 0);
}
function moonbitlang$core$array$$Array$clear$146$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$146$(self, 0);
}
function moonbitlang$core$array$$Array$clear$145$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$145$(self, 0);
}
function moonbitlang$core$array$$Array$contains$6$(self, value) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      if (v === value) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$bytes$$BytesView$at(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.bytes;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$65$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$4$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$4$(index)}`);
  }
}
function moonbitlang$core$bytes$$Bytes$sub$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { bytes: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$64$("Invalid index for View");
}
function moonbitlang$core$bytes$$BytesView$to_uint_le(self) {
  const _p = moonbitlang$core$bytes$$BytesView$at(self, 0);
  const _p$2 = moonbitlang$core$bytes$$BytesView$at(self, 1);
  const _tmp = (_p >>> 0) + (_p$2 << 8 >>> 0) | 0;
  const _p$3 = moonbitlang$core$bytes$$BytesView$at(self, 2);
  const _tmp$2 = (_tmp >>> 0) + (_p$3 << 16 >>> 0) | 0;
  const _p$4 = moonbitlang$core$bytes$$BytesView$at(self, 3);
  return (_tmp$2 >>> 0) + (_p$4 << 24 >>> 0) | 0;
}
function moonbitlang$core$math$$sin(_tmp) {
  return Math.sin(_tmp);
}
function moonbitlang$core$math$$cos(_tmp) {
  return Math.cos(_tmp);
}
function moonbitlang$core$math$$atan2(_tmp, _tmp$2) {
  return Math.atan2(_tmp, _tmp$2);
}
function moonbitlang$core$builtin$$Show$to_string$66$(self) {
  return String.fromCodePoint(self);
}
function moonbitlang$core$builtin$$Show$output$60$(_x_178, _x_179) {
  _x_179.method_0(_x_179.self, "Vec2D(");
  moonbitlang$core$builtin$$Logger$write_object$15$(_x_179, _x_178._0);
  _x_179.method_0(_x_179.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$15$(_x_179, _x_178._1);
  _x_179.method_0(_x_179.self, ")");
}
function Milky2018$selene$math$$Vec2D$op_get(this_, axis) {
  if (axis === 0) {
    return this_._0;
  } else {
    return this_._1;
  }
}
function Milky2018$selene$math$$Vec2D$update(this_, axis, value) {
  if (axis === 0) {
    return { _0: value, _1: this_._1 };
  } else {
    return { _0: this_._0, _1: value };
  }
}
function Milky2018$selene$math$$Vec2D$distance_to(this_, other) {
  return Math.sqrt((this_._0 - other._0) * (this_._0 - other._0) + (this_._1 - other._1) * (this_._1 - other._1));
}
function Milky2018$selene$math$$Vec2D$normalize(this_) {
  const mag = Math.sqrt(this_._0 * this_._0 + this_._1 * this_._1);
  return mag > 0 ? { _0: this_._0 / mag, _1: this_._1 / mag } : { _0: 0, _1: 0 };
}
function Milky2018$selene$math$$Transform$new$46$inner(a, b, c, d, tx, ty) {
  return { a: a, b: b, c: c, d: d, tx: tx, ty: ty };
}
function Milky2018$selene$math$$Transform$from_scale(sx, sy) {
  return { a: sx, b: 0, c: 0, d: sy, tx: 0, ty: 0 };
}
function Milky2018$selene$math$$Transform$from_rotation_rad(rad) {
  const cos_r = moonbitlang$core$math$$cos(rad);
  const sin_r = moonbitlang$core$math$$sin(rad);
  return { a: cos_r, b: sin_r, c: -sin_r, d: cos_r, tx: 0, ty: 0 };
}
function Milky2018$selene$math$$Transform$multiply(self, other) {
  return { a: self.a * other.a + self.c * other.b, b: self.b * other.a + self.d * other.b, c: self.a * other.c + self.c * other.d, d: self.b * other.c + self.d * other.d, tx: self.a * other.tx + self.c * other.ty + self.tx, ty: self.b * other.tx + self.d * other.ty + self.ty };
}
function Milky2018$selene$math$$Transform$get_rotation_rad(self) {
  return moonbitlang$core$math$$atan2(self.b, self.a);
}
function moonbitlang$core$builtin$$Mul$mul$148$(self, other) {
  return Milky2018$selene$math$$Transform$multiply(self, other);
}
function moonbitlang$core$builtin$$Show$output$6$(_x_251, _x_252) {
  _x_252.method_0(_x_252.self, "Entity(");
  moonbitlang$core$builtin$$Logger$write_object$68$(_x_252, _x_251);
  _x_252.method_0(_x_252.self, ")");
}
function moonbitlang$core$builtin$$Hash$hash_combine$6$(_x_247, _x_248) {
  moonbitlang$core$builtin$$Hash$hash_combine$68$(_x_247, _x_248);
}
function moonbitlang$core$builtin$$Eq$equal$93$(_x_235, _x_236) {
  return moonbitlang$core$builtin$$Eq$equal$3$(_x_235, _x_236);
}
function moonbitlang$core$builtin$$Hash$hash_combine$93$(_x_231, _x_232) {
  moonbitlang$core$builtin$$Hash$hash_combine$3$(_x_231, _x_232);
}
function moonbitlang$core$builtin$$Eq$equal$0$(_x_227, _x_228) {
  switch (_x_227) {
    case 0: {
      if (_x_228 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_228 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_228 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_228 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_228 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_228 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_228 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_228 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_228 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_228 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_228 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_228 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_228 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_228 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_228 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_228 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_228 === 16) {
        return true;
      } else {
        return false;
      }
    }
    case 17: {
      if (_x_228 === 17) {
        return true;
      } else {
        return false;
      }
    }
    case 18: {
      if (_x_228 === 18) {
        return true;
      } else {
        return false;
      }
    }
    case 19: {
      if (_x_228 === 19) {
        return true;
      } else {
        return false;
      }
    }
    case 20: {
      if (_x_228 === 20) {
        return true;
      } else {
        return false;
      }
    }
    case 21: {
      if (_x_228 === 21) {
        return true;
      } else {
        return false;
      }
    }
    case 22: {
      if (_x_228 === 22) {
        return true;
      } else {
        return false;
      }
    }
    case 23: {
      if (_x_228 === 23) {
        return true;
      } else {
        return false;
      }
    }
    case 24: {
      if (_x_228 === 24) {
        return true;
      } else {
        return false;
      }
    }
    case 25: {
      if (_x_228 === 25) {
        return true;
      } else {
        return false;
      }
    }
    case 26: {
      if (_x_228 === 26) {
        return true;
      } else {
        return false;
      }
    }
    case 27: {
      if (_x_228 === 27) {
        return true;
      } else {
        return false;
      }
    }
    case 28: {
      if (_x_228 === 28) {
        return true;
      } else {
        return false;
      }
    }
    case 29: {
      if (_x_228 === 29) {
        return true;
      } else {
        return false;
      }
    }
    case 30: {
      if (_x_228 === 30) {
        return true;
      } else {
        return false;
      }
    }
    case 31: {
      if (_x_228 === 31) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_228 === 32) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$0$(_x_219, _x_220) {
  switch (_x_219) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 10);
      return;
    }
    case 11: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 11);
      return;
    }
    case 12: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 12);
      return;
    }
    case 13: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 13);
      return;
    }
    case 14: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 14);
      return;
    }
    case 15: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 15);
      return;
    }
    case 16: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 16);
      return;
    }
    case 17: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 17);
      return;
    }
    case 18: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 18);
      return;
    }
    case 19: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 19);
      return;
    }
    case 20: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 20);
      return;
    }
    case 21: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 21);
      return;
    }
    case 22: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 22);
      return;
    }
    case 23: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 23);
      return;
    }
    case 24: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 24);
      return;
    }
    case 25: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 25);
      return;
    }
    case 26: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 26);
      return;
    }
    case 27: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 27);
      return;
    }
    case 28: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 28);
      return;
    }
    case 29: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 29);
      return;
    }
    case 30: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 30);
      return;
    }
    case 31: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 31);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_220, 32);
      return;
    }
  }
}
function Milky2018$selene$system$$Touch$new(id, pos, phase) {
  return { id: id, pos: pos, phase: phase };
}
function Milky2018$selene$system$$advanced_touch_system(backend) {
  if (!Milky2018$selene$system$$touch_events_registered.val) {
    backend.method_5(backend.self, Milky2018$selene$system$$active_touches, Milky2018$selene$system$$just_began_touches, Milky2018$selene$system$$just_ended_touches);
    Milky2018$selene$system$$touch_events_registered.val = true;
  }
  moonbitlang$core$builtin$$Map$clear$24$(Milky2018$selene$system$$just_began_touches);
  moonbitlang$core$builtin$$Map$clear$24$(Milky2018$selene$system$$just_ended_touches);
}
function Milky2018$selene$system$$advanced_mouse_system(_backend) {
  Milky2018$selene$system$$just_pressed_mouse.left_button = Milky2018$selene$system$$mouse.left_button && !Milky2018$selene$system$$last_mouse.left_button;
  Milky2018$selene$system$$just_pressed_mouse.right_button = Milky2018$selene$system$$mouse.right_button && !Milky2018$selene$system$$last_mouse.right_button;
  Milky2018$selene$system$$just_pressed_mouse.middle_button = Milky2018$selene$system$$mouse.middle_button && !Milky2018$selene$system$$last_mouse.middle_button;
  Milky2018$selene$system$$just_release_mouse.left_button = !Milky2018$selene$system$$mouse.left_button && Milky2018$selene$system$$last_mouse.left_button;
  Milky2018$selene$system$$just_release_mouse.right_button = !Milky2018$selene$system$$mouse.right_button && Milky2018$selene$system$$last_mouse.right_button;
  Milky2018$selene$system$$just_release_mouse.middle_button = !Milky2018$selene$system$$mouse.middle_button && Milky2018$selene$system$$last_mouse.middle_button;
  Milky2018$selene$system$$last_mouse.pos = Milky2018$selene$system$$mouse.pos;
  Milky2018$selene$system$$last_mouse.left_button = Milky2018$selene$system$$mouse.left_button;
  Milky2018$selene$system$$last_mouse.right_button = Milky2018$selene$system$$mouse.right_button;
  Milky2018$selene$system$$last_mouse.middle_button = Milky2018$selene$system$$mouse.middle_button;
}
function Milky2018$selene$system$$is_mouse_just_pressed(button) {
  switch (button) {
    case 0: {
      return Milky2018$selene$system$$just_pressed_mouse.left_button;
    }
    case 1: {
      return Milky2018$selene$system$$just_pressed_mouse.right_button;
    }
    default: {
      return Milky2018$selene$system$$just_pressed_mouse.middle_button;
    }
  }
}
const Milky2018$selene$system$$from_string$46$constr$47$5385 = 0;
const Milky2018$selene$system$$from_string$46$constr$47$5386 = 1;
const Milky2018$selene$system$$from_string$46$constr$47$5387 = 2;
const Milky2018$selene$system$$from_string$46$constr$47$5388 = 3;
const Milky2018$selene$system$$from_string$46$constr$47$5389 = 4;
const Milky2018$selene$system$$from_string$46$constr$47$5390 = 5;
const Milky2018$selene$system$$from_string$46$constr$47$5391 = 6;
const Milky2018$selene$system$$from_string$46$constr$47$5392 = 7;
const Milky2018$selene$system$$from_string$46$constr$47$5393 = 8;
const Milky2018$selene$system$$from_string$46$constr$47$5394 = 9;
const Milky2018$selene$system$$from_string$46$constr$47$5395 = 10;
const Milky2018$selene$system$$from_string$46$constr$47$5396 = 11;
const Milky2018$selene$system$$from_string$46$constr$47$5397 = 12;
const Milky2018$selene$system$$from_string$46$constr$47$5398 = 13;
const Milky2018$selene$system$$from_string$46$constr$47$5399 = 14;
const Milky2018$selene$system$$from_string$46$constr$47$5400 = 15;
const Milky2018$selene$system$$from_string$46$constr$47$5401 = 16;
const Milky2018$selene$system$$from_string$46$constr$47$5402 = 17;
const Milky2018$selene$system$$from_string$46$constr$47$5403 = 18;
const Milky2018$selene$system$$from_string$46$constr$47$5404 = 19;
const Milky2018$selene$system$$from_string$46$constr$47$5405 = 20;
const Milky2018$selene$system$$from_string$46$constr$47$5406 = 21;
const Milky2018$selene$system$$from_string$46$constr$47$5407 = 22;
const Milky2018$selene$system$$from_string$46$constr$47$5408 = 23;
const Milky2018$selene$system$$from_string$46$constr$47$5409 = 24;
const Milky2018$selene$system$$from_string$46$constr$47$5410 = 26;
const Milky2018$selene$system$$from_string$46$constr$47$5411 = 27;
const Milky2018$selene$system$$from_string$46$constr$47$5412 = 28;
const Milky2018$selene$system$$from_string$46$constr$47$5413 = 29;
const Milky2018$selene$system$$from_string$46$constr$47$5414 = 30;
const Milky2018$selene$system$$from_string$46$constr$47$5415 = 31;
const Milky2018$selene$system$$from_string$46$constr$47$5416 = 32;
function Milky2018$selene$system$$Code$from_string(code) {
  switch (code) {
    case "KeyA": {
      return Milky2018$selene$system$$from_string$46$constr$47$5385;
    }
    case "KeyB": {
      return Milky2018$selene$system$$from_string$46$constr$47$5386;
    }
    case "KeyC": {
      return Milky2018$selene$system$$from_string$46$constr$47$5387;
    }
    case "KeyD": {
      return Milky2018$selene$system$$from_string$46$constr$47$5388;
    }
    case "KeyE": {
      return Milky2018$selene$system$$from_string$46$constr$47$5389;
    }
    case "KeyF": {
      return Milky2018$selene$system$$from_string$46$constr$47$5390;
    }
    case "KeyG": {
      return Milky2018$selene$system$$from_string$46$constr$47$5391;
    }
    case "KeyH": {
      return Milky2018$selene$system$$from_string$46$constr$47$5392;
    }
    case "KeyI": {
      return Milky2018$selene$system$$from_string$46$constr$47$5393;
    }
    case "KeyJ": {
      return Milky2018$selene$system$$from_string$46$constr$47$5394;
    }
    case "KeyK": {
      return Milky2018$selene$system$$from_string$46$constr$47$5395;
    }
    case "KeyL": {
      return Milky2018$selene$system$$from_string$46$constr$47$5396;
    }
    case "KeyM": {
      return Milky2018$selene$system$$from_string$46$constr$47$5397;
    }
    case "KeyN": {
      return Milky2018$selene$system$$from_string$46$constr$47$5398;
    }
    case "KeyO": {
      return Milky2018$selene$system$$from_string$46$constr$47$5399;
    }
    case "KeyP": {
      return Milky2018$selene$system$$from_string$46$constr$47$5400;
    }
    case "KeyQ": {
      return Milky2018$selene$system$$from_string$46$constr$47$5401;
    }
    case "KeyR": {
      return Milky2018$selene$system$$from_string$46$constr$47$5402;
    }
    case "KeyS": {
      return Milky2018$selene$system$$from_string$46$constr$47$5403;
    }
    case "KeyT": {
      return Milky2018$selene$system$$from_string$46$constr$47$5404;
    }
    case "KeyU": {
      return Milky2018$selene$system$$from_string$46$constr$47$5405;
    }
    case "KeyV": {
      return Milky2018$selene$system$$from_string$46$constr$47$5406;
    }
    case "KeyW": {
      return Milky2018$selene$system$$from_string$46$constr$47$5407;
    }
    case "KeyX": {
      return Milky2018$selene$system$$from_string$46$constr$47$5408;
    }
    case "KeyY": {
      return Milky2018$selene$system$$from_string$46$constr$47$5409;
    }
    case "ArrowUp": {
      return Milky2018$selene$system$$from_string$46$constr$47$5410;
    }
    case "ArrowDown": {
      return Milky2018$selene$system$$from_string$46$constr$47$5411;
    }
    case "ArrowLeft": {
      return Milky2018$selene$system$$from_string$46$constr$47$5412;
    }
    case "ArrowRight": {
      return Milky2018$selene$system$$from_string$46$constr$47$5413;
    }
    case "Space": {
      return Milky2018$selene$system$$from_string$46$constr$47$5414;
    }
    case "Enter": {
      return Milky2018$selene$system$$from_string$46$constr$47$5415;
    }
    case "Escape": {
      return Milky2018$selene$system$$from_string$46$constr$47$5416;
    }
    default: {
      return undefined;
    }
  }
}
function Milky2018$selene$system$$is_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$system$$pressed_keys, code);
}
function Milky2018$selene$system$$advanced_key_system(_backend) {
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$system$$just_pressed_keys);
  const _bind$12 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$system$$pressed_keys, Milky2018$selene$system$$last_pressed_keys));
  _bind$12((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$system$$just_pressed_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$system$$just_release_keys);
  const _bind$13 = moonbitlang$core$set$$Set$iter$0$(moonbitlang$core$set$$Set$union$0$(moonbitlang$core$set$$Set$difference$0$(Milky2018$selene$system$$all_codes, Milky2018$selene$system$$pressed_keys), Milky2018$selene$system$$last_pressed_keys));
  _bind$13((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$system$$just_release_keys, code);
    return 1;
  });
  moonbitlang$core$set$$Set$clear$0$(Milky2018$selene$system$$last_pressed_keys);
  const _bind$14 = moonbitlang$core$set$$Set$iter$0$(Milky2018$selene$system$$pressed_keys);
  _bind$14((code) => {
    moonbitlang$core$set$$Set$add$0$(Milky2018$selene$system$$last_pressed_keys, code);
    return 1;
  });
}
function Milky2018$selene$system$$is_just_pressed(code) {
  return moonbitlang$core$set$$Set$contains$0$(Milky2018$selene$system$$just_pressed_keys, code);
}
function Milky2018$selene$system$$Entity$is_alive(e) {
  return moonbitlang$core$set$$Set$contains$6$(Milky2018$selene$system$$all_entities, e);
}
function Milky2018$selene$system$$Entity$new() {
  const entity = Milky2018$selene$system$$entity_generator.val;
  Milky2018$selene$system$$entity_generator.val = (Milky2018$selene$system$$entity_generator.val >>> 0) + (1 >>> 0) | 0;
  moonbitlang$core$set$$Set$add$6$(Milky2018$selene$system$$all_entities, entity);
  return entity;
}
function Milky2018$selene$system$$defer_event(event) {
  moonbitlang$core$array$$Array$push$21$(Milky2018$selene$system$$deferred_events, event);
}
function Milky2018$selene$system$$Entity$destroy(e) {
  Milky2018$selene$system$$defer_event(() => {
    moonbitlang$core$set$$Set$remove$6$(Milky2018$selene$system$$all_entities, e);
  });
}
function Milky2018$selene$system$$get_or$15$(opt, default_) {
  if (opt.$tag === 1) {
    const _Some = opt;
    return _Some._0;
  } else {
    return default_;
  }
}
function Milky2018$selene$system$$TextLayout$new(content, color, font, max_width, align, line_height) {
  const _p = "white";
  let _bind$12;
  if (color === undefined) {
    _bind$12 = _p;
  } else {
    const _p$2 = color;
    _bind$12 = _p$2;
  }
  const _p$2 = "16px Arial";
  let _bind$13;
  if (font === undefined) {
    _bind$13 = _p$2;
  } else {
    const _p$3 = font;
    _bind$13 = _p$3;
  }
  const _p$3 = Option$None$0$;
  let _bind$14;
  if (max_width === undefined) {
    _bind$14 = _p$3;
  } else {
    const _p$4 = max_width;
    _bind$14 = _p$4;
  }
  const _p$4 = 0;
  let _bind$15;
  if (align === undefined) {
    _bind$15 = _p$4;
  } else {
    const _p$5 = align;
    _bind$15 = _p$5;
  }
  const _bind$16 = Milky2018$selene$system$$get_or$15$(line_height, 18);
  return { content: content, font: _bind$13, color: _bind$12, max_width: _bind$14, align: _bind$15, line_height: _bind$16 };
}
function Milky2018$selene$system$$App$new(backend) {
  return { canvas_height: 256, canvas_width: 512, zoom: 1, image_smooth: false, fps: 60, systems: [], plugins: [], backend: backend };
}
function Milky2018$selene$system$$App$with_canvas_height(self, height) {
  return { ...self, canvas_height: height };
}
function Milky2018$selene$system$$App$with_canvas_width(self, width) {
  return { ...self, canvas_width: width };
}
function Milky2018$selene$system$$App$with_fps(self, fps) {
  return { ...self, fps: fps };
}
function Milky2018$selene$system$$App$add_system$46$inner(self, system, schedule, system_name) {
  let system_name$2;
  if (system_name === undefined) {
    system_name$2 = `unnamed_system${moonbitlang$core$builtin$$Show$to_string$4$(self.systems.length)}`;
  } else {
    const _Some = system_name;
    system_name$2 = _Some;
  }
  const systems = self.systems;
  moonbitlang$core$array$$Array$push$143$(systems, { _0: system, _1: schedule, _2: system_name$2 });
  return { ...self, systems: systems };
}
function Milky2018$selene$system$$App$run(self) {
  const _arr = self.plugins;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const plugin = _arr[_i];
      plugin(self);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = self.backend;
  const run_game = _tmp$2.method_0(_tmp$2.self, self.systems, self.canvas_width, self.canvas_height, self.fps, self.image_smooth, self.zoom);
  const _tmp$3 = self.backend;
  _tmp$3.method_3(_tmp$3.self, Milky2018$selene$system$$pressed_keys);
  const _tmp$4 = self.backend;
  _tmp$4.method_4(_tmp$4.self, Milky2018$selene$system$$mouse, Milky2018$selene$system$$mouse_movement);
  run_game();
}
function Milky2018$selene$ui$$Ui$new() {
  ({});
}
function moonbitlang$core$builtin$$Eq$equal$149$(_x_232, _x_233) {
  if (_x_232 === 0) {
    if (_x_233 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_233 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function Milky2018$selene$sprite$$get_or$15$(opt, default_) {
  if (opt.$tag === 1) {
    const _Some = opt;
    return _Some._0;
  } else {
    return default_;
  }
}
function Milky2018$selene$sprite$$Sprite$from_animation$46$inner(animation, zindex, offset, layer) {
  const _bind$12 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(animation, 0);
  const _p = 0;
  let _bind$13;
  if (layer === undefined) {
    _bind$13 = _p;
  } else {
    const _p$2 = layer;
    _bind$13 = _p$2;
  }
  const _bind$14 = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  return { sprite_type: _bind$12, zindex: zindex, visible: true, offset: offset, layer: _bind$13, transform: _bind$14 };
}
function Milky2018$selene$sprite$$Sprite$from_picture$46$inner(picture, zindex, offset, layer) {
  const _bind$12 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Picture(picture);
  const _p = 0;
  let _bind$13;
  if (layer === undefined) {
    _bind$13 = _p;
  } else {
    const _p$2 = layer;
    _bind$13 = _p$2;
  }
  const _bind$14 = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  return { sprite_type: _bind$12, zindex: zindex, visible: true, offset: offset, layer: _bind$13, transform: _bind$14 };
}
function Milky2018$selene$sprite$$Sprite$from_picture(picture, zindex, offset$46$opt, layer) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_picture$46$inner(picture, zindex, offset, layer);
}
function Milky2018$selene$sprite$$Sprite$from_text$46$inner(text, zindex, offset, layer) {
  const _bind$12 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Text(text);
  const _p = 0;
  let _bind$13;
  if (layer === undefined) {
    _bind$13 = _p;
  } else {
    const _p$2 = layer;
    _bind$13 = _p$2;
  }
  const _bind$14 = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  return { sprite_type: _bind$12, zindex: zindex, visible: true, offset: offset, layer: _bind$13, transform: _bind$14 };
}
function Milky2018$selene$sprite$$Sprite$from_text(text, zindex, offset$46$opt, layer) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_text$46$inner(text, zindex, offset, layer);
}
function Milky2018$selene$sprite$$Sprite$from_text_layout$46$inner(layout, zindex, offset, layer) {
  const _bind$12 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$TextLayout(layout);
  const _p = 0;
  let _bind$13;
  if (layer === undefined) {
    _bind$13 = _p;
  } else {
    const _p$2 = layer;
    _bind$13 = _p$2;
  }
  const _bind$14 = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  return { sprite_type: _bind$12, zindex: zindex, visible: true, offset: offset, layer: _bind$13, transform: _bind$14 };
}
function Milky2018$selene$sprite$$Sprite$from_text_layout(layout, zindex, offset$46$opt, layer) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_text_layout$46$inner(layout, zindex, offset, layer);
}
function Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(color_rect, zindex, offset, layer) {
  const _bind$12 = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColorRect(color_rect);
  const _p = 0;
  let _bind$13;
  if (layer === undefined) {
    _bind$13 = _p;
  } else {
    const _p$2 = layer;
    _bind$13 = _p$2;
  }
  const _bind$14 = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  return { sprite_type: _bind$12, zindex: zindex, visible: true, offset: offset, layer: _bind$13, transform: _bind$14 };
}
function Milky2018$selene$sprite$$Sprite$from_color_rect(color_rect, zindex, offset$46$opt, layer) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  return Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(color_rect, zindex, offset, layer);
}
function Milky2018$selene$sprite$$Sprite$from_shape(shape, zindex, offset, layer) {
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$ColoredShape(shape);
  const _p = { _0: 0, _1: 0 };
  let _tmp$2;
  if (offset === undefined) {
    _tmp$2 = _p;
  } else {
    const _p$2 = offset;
    _tmp$2 = _p$2;
  }
  const _tmp$3 = _tmp$2;
  const _p$2 = 0;
  let _tmp$4;
  if (layer === undefined) {
    _tmp$4 = _p$2;
  } else {
    const _p$3 = layer;
    _tmp$4 = _p$3;
  }
  return { sprite_type: _tmp, zindex: zindex, visible: true, offset: _tmp$3, layer: _tmp$4, transform: Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0) };
}
function Milky2018$selene$sprite$$render_animation(backend, animation, current_frame, pos, visible, entity_transform) {
  const frame = moonbitlang$core$array$$Array$at$88$(animation.frames, moonbitlang$core$double$$Double$to_int(current_frame));
  if (visible) {
    const final_transform = moonbitlang$core$builtin$$Mul$mul$148$(entity_transform, animation.transform);
    backend.method_2(backend.self, frame.sprite_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 0), Milky2018$selene$math$$Vec2D$op_get(frame.offset, 1), Milky2018$selene$math$$Vec2D$op_get(frame.size, 0), Milky2018$selene$math$$Vec2D$op_get(frame.size, 1), final_transform);
  }
  let new_frame = current_frame + animation.rate;
  if (moonbitlang$core$double$$Double$to_int(new_frame) >= animation.frames.length) {
    if (animation.loop_) {
      new_frame = new_frame - (animation.frames.length + 0);
    } else {
      new_frame = new_frame - animation.rate;
    }
  }
  return new_frame;
}
function Milky2018$selene$sprite$$render_color_rect(backend, color_rect, position) {
  backend.method_10(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 0), Milky2018$selene$math$$Vec2D$op_get(color_rect.size, 1), color_rect.color);
}
function Milky2018$selene$sprite$$render_colored_shape(backend, graphic, position, transform) {
  const _bind$12 = graphic.style;
  if (_bind$12.$tag === 0) {
    const _Fill = _bind$12;
    const _color = _Fill._0;
    const _bind$13 = graphic.shape;
    switch (_bind$13.$tag) {
      case 0: {
        const _Rect = _bind$13;
        const _width = _Rect._0;
        const _height = _Rect._1;
        const _rotation = _Rect._2;
        backend.method_21(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _width, _height, _color, _rotation, transform);
        return;
      }
      case 1: {
        const _Circle = _bind$13;
        const _radius = _Circle._0;
        backend.method_23(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _radius, _color, transform);
        return;
      }
      case 2: {
        const _Ellipse = _bind$13;
        const _radius_x = _Ellipse._0;
        const _radius_y = _Ellipse._1;
        const _rotation$2 = _Ellipse._2;
        backend.method_25(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _radius_x, _radius_y, _rotation$2, _color, transform);
        return;
      }
      case 3: {
        const _Triangle = _bind$13;
        const _side = _Triangle._0;
        const _rotation$3 = _Triangle._1;
        backend.method_27(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _side, _rotation$3, _color, transform);
        return;
      }
      case 5: {
        const _Capsule = _bind$13;
        const _length = _Capsule._0;
        const _radius$2 = _Capsule._1;
        backend.method_30(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _length, _radius$2, _color, transform, 0);
        return;
      }
      default: {
        const _Cross = _bind$13;
        const _length$2 = _Cross._0;
        const _thickness = _Cross._1;
        const _angle = _Cross._2;
        backend.method_29(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _length$2, _thickness, _angle, _color, transform);
        return;
      }
    }
  } else {
    const _Stroke = _bind$12;
    const _color = _Stroke._0;
    const _line_width = _Stroke._1;
    const _bind$13 = graphic.shape;
    switch (_bind$13.$tag) {
      case 0: {
        const _Rect = _bind$13;
        const _width = _Rect._0;
        const _height = _Rect._1;
        const _rotation = _Rect._2;
        backend.method_22(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _width, _height, _color, _line_width, _rotation, transform);
        return;
      }
      case 1: {
        const _Circle = _bind$13;
        const _radius = _Circle._0;
        backend.method_24(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _radius, _color, _line_width, transform);
        return;
      }
      case 2: {
        const _Ellipse = _bind$13;
        const _radius_x = _Ellipse._0;
        const _radius_y = _Ellipse._1;
        const _rotation$2 = _Ellipse._2;
        backend.method_26(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _radius_x, _radius_y, _rotation$2, _color, _line_width, transform);
        return;
      }
      case 3: {
        const _Triangle = _bind$13;
        const _side = _Triangle._0;
        const _rotation$3 = _Triangle._1;
        backend.method_28(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _side, _rotation$3, _color, _line_width, transform);
        return;
      }
      case 4: {
        const _Cross = _bind$13;
        const _length = _Cross._0;
        const _thickness = _Cross._1;
        const _angle = _Cross._2;
        backend.method_29(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _length, _thickness, _angle, _color, transform);
        return;
      }
      default: {
        const _Capsule = _bind$13;
        const _length$2 = _Capsule._0;
        const _radius$2 = _Capsule._1;
        backend.method_31(backend.self, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), _length$2, _radius$2, _color, _line_width, transform, 0);
        return;
      }
    }
  }
}
function Milky2018$selene$sprite$$render_picture(backend, picture, pos, sprite_transform) {
  const final_transform = moonbitlang$core$builtin$$Mul$mul$148$(sprite_transform, picture.transform);
  backend.method_1(backend.self, picture.tile_path, Milky2018$selene$math$$Vec2D$op_get(pos, 0), Milky2018$selene$math$$Vec2D$op_get(pos, 1), Milky2018$selene$math$$Vec2D$op_get(picture.size, 0), Milky2018$selene$math$$Vec2D$op_get(picture.size, 1), final_transform, picture.repeat);
}
function Milky2018$selene$sprite$$render_text(backend, text, position, transform) {
  backend.method_8(backend.self, text.content, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), text.font, text.color, transform);
}
function Milky2018$selene$sprite$$render_text_layout(backend, layout, position, transform) {
  backend.method_9(backend.self, layout, Milky2018$selene$math$$Vec2D$op_get(position, 0), Milky2018$selene$math$$Vec2D$op_get(position, 1), transform);
}
function Milky2018$selene$sprite$$render_sprite(backend, e, sprite, pos) {
  if (!sprite.visible) {
    return undefined;
  }
  const _p = sprite.offset;
  const final_pos = { _0: pos._0 + _p._0, _1: pos._1 + _p._1 };
  const _bind$12 = sprite.sprite_type;
  switch (_bind$12.$tag) {
    case 0: {
      const _Picture = _bind$12;
      const _picture = _Picture._0;
      Milky2018$selene$sprite$$render_picture(backend, _picture, final_pos, sprite.transform);
      return;
    }
    case 1: {
      const _Animation = _bind$12;
      const _anime = _Animation._0;
      const _frame = _Animation._1;
      const new_frame = Milky2018$selene$sprite$$render_animation(backend, _anime, _frame, final_pos, true, sprite.transform);
      const new_sprite_type = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(_anime, new_frame);
      moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, e, { sprite_type: new_sprite_type, zindex: sprite.zindex, visible: sprite.visible, offset: sprite.offset, layer: sprite.layer, transform: sprite.transform });
      return;
    }
    case 2: {
      const _Text = _bind$12;
      const _text = _Text._0;
      Milky2018$selene$sprite$$render_text(backend, _text, final_pos, sprite.transform);
      return;
    }
    case 3: {
      const _ColorRect = _bind$12;
      const _color_rect = _ColorRect._0;
      Milky2018$selene$sprite$$render_color_rect(backend, _color_rect, final_pos);
      return;
    }
    case 4: {
      const _ColoredShape = _bind$12;
      const _shape = _ColoredShape._0;
      Milky2018$selene$sprite$$render_colored_shape(backend, _shape, final_pos, sprite.transform);
      return;
    }
    default: {
      const _TextLayout = _bind$12;
      const _layout = _TextLayout._0;
      Milky2018$selene$sprite$$render_text_layout(backend, _layout, final_pos, sprite.transform);
      return;
    }
  }
}
function Milky2018$selene$sprite$$render_world_system(backend) {
  backend.method_20(backend.self, "world");
  const _p = moonbitlang$core$builtin$$Map$to_array$7$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (Milky2018$selene$system$$Entity$is_alive(_p$5._0) && moonbitlang$core$builtin$$Eq$equal$149$(_p$5._1.layer, 0)) {
        moonbitlang$core$array$$Array$push$71$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const world_sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by$71$(world_sprites, (sprite1, sprite2) => {
    if (sprite1._1.zindex < sprite2._1.zindex) {
      return -1;
    } else {
      if (sprite1._1.zindex > sprite2._1.zindex) {
        return 1;
      } else {
        const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, sprite1._0);
        if (_bind$12 === undefined) {
          return 0;
        } else {
          const _Some = _bind$12;
          const _pos1 = _Some;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, sprite2._0);
          if (_bind$13 === undefined) {
            return 0;
          } else {
            const _Some$2 = _bind$13;
            const _pos2 = _Some$2;
            return Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) < Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? -1 : Milky2018$selene$math$$Vec2D$op_get(_pos1, 1) > Milky2018$selene$math$$Vec2D$op_get(_pos2, 1) ? 1 : 0;
          }
        }
      }
    }
  });
  const _len = world_sprites.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      _L: {
        const pair = world_sprites[_i];
        const e = pair._0;
        const sprite = pair._1;
        const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, e);
        if (_bind$12 === undefined) {
          break _L;
        } else {
          const _Some = _bind$12;
          const _pos = _Some;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$ui$$uis, e);
          let render_pos;
          if (_bind$13 === -1) {
            const _p$4 = Milky2018$selene$camera$$camera.position;
            render_pos = { _0: _pos._0 - _p$4._0, _1: _pos._1 - _p$4._1 };
          } else {
            render_pos = _pos;
          }
          Milky2018$selene$sprite$$render_sprite(backend, e, sprite, render_pos);
        }
        break _L;
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$sprite$$render_ui_system(backend) {
  backend.method_20(backend.self, "ui");
  const _p = moonbitlang$core$builtin$$Map$to_array$7$(Milky2018$selene$sprite$$sprites);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (Milky2018$selene$system$$Entity$is_alive(_p$5._0) && moonbitlang$core$builtin$$Eq$equal$149$(_p$5._1.layer, 1)) {
        moonbitlang$core$array$$Array$push$71$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ui_sprites = _p$2;
  moonbitlang$core$array$$Array$sort_by_key$73$(ui_sprites, (pair) => pair._1.zindex);
  const _len = ui_sprites.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      _L: {
        const pair = ui_sprites[_i];
        const e = pair._0;
        const sprite = pair._1;
        const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, e);
        if (_bind$12 === undefined) {
          break _L;
        } else {
          const _Some = _bind$12;
          const _pos = _Some;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$10$(Milky2018$selene$ui$$uis, e);
          let render_pos;
          if (_bind$13 === -1) {
            const _p$4 = Milky2018$selene$camera$$camera.position;
            render_pos = { _0: _pos._0 - _p$4._0, _1: _pos._1 - _p$4._1 };
          } else {
            render_pos = _pos;
          }
          Milky2018$selene$sprite$$render_sprite(backend, e, sprite, render_pos);
        }
        break _L;
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$sprite$$Text$new$46$inner(content, color, font) {
  return { content: content, color: color, font: font };
}
function Milky2018$selene$sprite$$ColorRect$new(size, color) {
  return { size: size, color: color };
}
function Milky2018$selene$sprite$$Picture$new$46$inner(size, tile_path, transform, repeat) {
  return { size: size, tile_path: tile_path, transform: transform, repeat: repeat };
}
function Milky2018$selene$sprite$$Picture$new(size, tile_path, transform$46$opt, repeat$46$opt) {
  let transform;
  if (transform$46$opt === undefined) {
    transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  } else {
    const _Some = transform$46$opt;
    transform = _Some;
  }
  let repeat;
  if (repeat$46$opt === undefined) {
    repeat = 2;
  } else {
    const _Some = repeat$46$opt;
    repeat = _Some;
  }
  return Milky2018$selene$sprite$$Picture$new$46$inner(size, tile_path, transform, repeat);
}
function Milky2018$selene$sprite$$ColoredShape$new(shape, style) {
  return { shape: shape, style: style };
}
function Milky2018$selene$sprite$$generate_animation() {
  const id = Milky2018$selene$sprite$$animation_generator.val;
  Milky2018$selene$sprite$$animation_generator.val = Milky2018$selene$sprite$$animation_generator.val + 1 | 0;
  return id;
}
function Milky2018$selene$sprite$$Animation$new$46$inner(frames, loop_, rate, transform) {
  const max_frame = frames.length;
  if (max_frame === 0) {
    moonbitlang$core$abort$$abort$61$("Animation must have at least one frame");
  }
  return { frames: frames, transform: transform, loop_: loop_, rate: rate, id: Milky2018$selene$sprite$$generate_animation() };
}
function Milky2018$selene$sprite$$Animation$new(frames, loop_$46$opt, rate$46$opt, transform$46$opt) {
  const loop_ = loop_$46$opt === -1 ? false : loop_$46$opt;
  let rate;
  if (rate$46$opt.$tag === 1) {
    const _Some = rate$46$opt;
    rate = _Some._0;
  } else {
    rate = 1;
  }
  let transform;
  if (transform$46$opt === undefined) {
    transform = Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0);
  } else {
    const _Some = transform$46$opt;
    transform = _Some;
  }
  return Milky2018$selene$sprite$$Animation$new$46$inner(frames, loop_, rate, transform);
}
function Milky2018$selene$sprite$$frames_from_atlas$46$inner(sprite_path, frame_count, width, height, offset, space_x) {
  const frames = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < frame_count) {
      const x = Milky2018$selene$math$$Vec2D$op_get(offset, 0) + (i + 0) * (width + space_x);
      moonbitlang$core$array$$Array$push$88$(frames, { sprite_path: sprite_path, size: { _0: width, _1: height }, offset: Milky2018$selene$math$$Vec2D$update(offset, 0, x) });
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return frames;
}
function Milky2018$selene$sprite$$frames_from_atlas(sprite_path, frame_count, width, height, offset$46$opt, space_x$46$opt) {
  let offset;
  if (offset$46$opt === undefined) {
    offset = { _0: 0, _1: 0 };
  } else {
    const _Some = offset$46$opt;
    offset = _Some;
  }
  let space_x;
  if (space_x$46$opt.$tag === 1) {
    const _Some = space_x$46$opt;
    space_x = _Some._0;
  } else {
    space_x = 0;
  }
  return Milky2018$selene$sprite$$frames_from_atlas$46$inner(sprite_path, frame_count, width, height, offset, space_x);
}
function Milky2018$selene$sprite$$play_animation(entity, animation, from_start, loop_, rate, layer) {
  const _p = false;
  const from_start$2 = from_start === -1 ? _p : from_start;
  const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
  let _bind$13;
  if (_bind$12 === undefined) {
    _bind$13 = { _0: animation, _1: 0, _2: 0, _3: true, _4: { _0: 0, _1: 0 }, _5: 0, _6: Milky2018$selene$math$$Transform$new$46$inner(1, 0, 0, 1, 0, 0) };
  } else {
    const _Some = _bind$12;
    const _sprite = _Some;
    const _bind$14 = _sprite.sprite_type;
    if (_bind$14.$tag === 1) {
      const _Animation = _bind$14;
      const _anime = _Animation._0;
      const _frame = _Animation._1;
      _bind$13 = { _0: _anime, _1: _frame, _2: _sprite.zindex, _3: _sprite.visible, _4: _sprite.offset, _5: _sprite.layer, _6: _sprite.transform };
    } else {
      _bind$13 = { _0: animation, _1: 0, _2: _sprite.zindex, _3: _sprite.visible, _4: _sprite.offset, _5: _sprite.layer, _6: _sprite.transform };
    }
  }
  const _current_anime = _bind$13._0;
  const _current_frame = _bind$13._1;
  const _zindex = _bind$13._2;
  const _visible = _bind$13._3;
  const _offset = _bind$13._4;
  const _current_layer = _bind$13._5;
  const _current_transform = _bind$13._6;
  const _p$2 = animation.loop_;
  const final_loop = loop_ === -1 ? _p$2 : loop_;
  const final_rate = Milky2018$selene$sprite$$get_or$15$(rate, animation.rate);
  const frame = !from_start$2 && animation.id === _current_anime.id ? _current_frame : 0;
  const _bind$14 = animation.frames;
  const _bind$15 = animation.transform;
  const _bind$16 = animation.id;
  const new_anime = { frames: _bind$14, transform: _bind$15, loop_: final_loop, rate: final_rate, id: _bind$16 };
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$SpriteType$Animation(new_anime, frame);
  let _tmp$2;
  if (layer === undefined) {
    _tmp$2 = _current_layer;
  } else {
    const _p$3 = layer;
    _tmp$2 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, entity, { sprite_type: _tmp, zindex: _zindex, visible: _visible, offset: _offset, layer: _tmp$2, transform: _current_transform });
}
function Milky2018$selene$sprite$$is_animation_finished(entity) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
  if (_bind$12 === undefined) {
    return true;
  } else {
    const _Some = _bind$12;
    const _x = _Some;
    const _x$2 = _x.sprite_type;
    if (_x$2.$tag === 1) {
      const _Animation = _x$2;
      const _anime = _Animation._0;
      const _frame = _Animation._1;
      if (_anime.loop_) {
        return false;
      }
      return _frame >= _anime.frames.length + 0 - _anime.rate;
    } else {
      return true;
    }
  }
}
function rami3l$js$45$ffi$js$$Union3$from0$150$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from1$150$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union3$from2$150$(value) {
  return value;
}
function rami3l$js$45$ffi$js$$Union5$to0$151$(self) {
  return rami3l$js$45$ffi$js$$Cast$into$119$(self);
}
function rami3l$js$45$ffi$js$$Union7$from0$152$(value) {
  return rami3l$js$45$ffi$js$$Cast$from$153$(value);
}
function rami3l$js$45$ffi$js$$Optional$undefined$15$() {
  return rami3l$js$45$ffi$js$$Value$undefined();
}
function rami3l$js$45$ffi$js$$Nullable$is_null$154$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$154$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$154$(self)) {
    moonbitlang$core$abort$$abort$61$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$118$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$4$(self) : Option$None$4$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$120$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$5$(self) : Option$None$5$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$121$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$6$(self) : Option$None$6$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$119$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$7$(self) : Option$None$7$;
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$155$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_button(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$155$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$155$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_movement_y(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$155$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_x(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$155$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_offset_y(s);
}
function rami3l$js$45$ffi$js$$Cast$from$153$(value) {
  return value;
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$156$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$157$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(s, type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$158$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$118$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_canvas_element(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$159$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$121$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$159$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$120$(Yoorkin$rabbit$45$tea$dom$$ffi_to_keyboard_event(s));
}
function rami3l$js$45$ffi$js$$Cast$into$119$(value) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$119$(Yoorkin$rabbit$45$tea$dom$$checked_to_canvas_rendering_context_2d(value));
}
function Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self, text, x, y, max_width$46$opt) {
  let max_width;
  if (max_width$46$opt.$tag === 1) {
    const _Some = max_width$46$opt;
    max_width = _Some._0;
  } else {
    max_width = rami3l$js$45$ffi$js$$Optional$undefined$15$();
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text$46$inner(self, text, x, y, max_width);
}
function Milky2018$selene$45$canvas$$register_touch_events$46$process_touches$124$303(_env, touches, phase) {
  const began = _env._2;
  const active = _env._1;
  const ended = _env._0;
  const viewport_scale = Milky2018$selene$45$canvas$$get_viewport_scale();
  const viewport_left = Milky2018$selene$45$canvas$$get_viewport_left();
  const viewport_top = Milky2018$selene$45$canvas$$get_viewport_top();
  const _len = touches.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const dom_touch = touches[_i];
      const id = Milky2018$selene$45$canvas$$DomTouch$identifier(dom_touch);
      const raw_x = Milky2018$selene$45$canvas$$DomTouch$client_x(dom_touch);
      const raw_y = Milky2018$selene$45$canvas$$DomTouch$client_y(dom_touch);
      const corrected_x = (raw_x - viewport_left) / viewport_scale;
      const corrected_y = (raw_y - viewport_top) / viewport_scale;
      const corrected_pos = { _0: corrected_x, _1: corrected_y };
      const touch = Milky2018$selene$system$$Touch$new(id, corrected_pos, phase);
      switch (phase) {
        case 0: {
          moonbitlang$core$builtin$$Map$set$24$(active, id, touch);
          moonbitlang$core$builtin$$Map$set$24$(began, id, touch);
          break;
        }
        case 1: {
          moonbitlang$core$builtin$$Map$set$24$(active, id, touch);
          break;
        }
        default: {
          moonbitlang$core$builtin$$Map$remove$24$(active, id);
          moonbitlang$core$builtin$$Map$set$24$(ended, id, touch);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function Milky2018$selene$system$$Backend$register_touch_events$160$(self, active, began, ended) {
  const _env = { _0: ended, _1: active, _2: began };
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$157$(self.ui_canvas, "touchstart", (event) => {
    const touch_event = Milky2018$selene$45$canvas$$to_touch_event(event);
    Milky2018$selene$45$canvas$$register_touch_events$46$process_touches$124$303(_env, Milky2018$selene$45$canvas$$DomTouchEvent$changed_touches(touch_event), 0);
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$157$(self.ui_canvas, "touchmove", (event) => {
    const touch_event = Milky2018$selene$45$canvas$$to_touch_event(event);
    Milky2018$selene$45$canvas$$DomTouchEvent$prevent_default(touch_event);
    Milky2018$selene$45$canvas$$register_touch_events$46$process_touches$124$303(_env, Milky2018$selene$45$canvas$$DomTouchEvent$changed_touches(touch_event), 1);
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$157$(self.ui_canvas, "touchend", (event) => {
    const touch_event = Milky2018$selene$45$canvas$$to_touch_event(event);
    Milky2018$selene$45$canvas$$register_touch_events$46$process_touches$124$303(_env, Milky2018$selene$45$canvas$$DomTouchEvent$changed_touches(touch_event), 2);
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$157$(self.ui_canvas, "touchcancel", (event) => {
    const touch_event = Milky2018$selene$45$canvas$$to_touch_event(event);
    Milky2018$selene$45$canvas$$register_touch_events$46$process_touches$124$303(_env, Milky2018$selene$45$canvas$$DomTouchEvent$changed_touches(touch_event), 2);
  });
}
function Milky2018$selene$system$$Backend$register_mouse_events$160$(self, mouse, mouse_movement) {
  self.mouse_movement.val = mouse_movement;
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$156$(Milky2018$selene$45$canvas$$window, "mousemove", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$121$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$159$(event));
    mouse.pos = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_x$155$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_offset_y$155$(mouse_event) + 0 };
    mouse_movement.movement = { _0: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_x$155$(mouse_event) + 0, _1: Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_movement_y$155$(mouse_event) + 0 };
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$156$(Milky2018$selene$45$canvas$$window, "mousedown", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$121$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$159$(event));
    const _bind$12 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$155$(mouse_event);
    switch (_bind$12) {
      case 0: {
        mouse.left_button = true;
        return;
      }
      case 1: {
        mouse.middle_button = true;
        return;
      }
      case 2: {
        mouse.right_button = true;
        return;
      }
      default: {
        return;
      }
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$156$(Milky2018$selene$45$canvas$$window, "mouseup", (event) => {
    const mouse_event = moonbitlang$core$option$$Option$unwrap$121$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$159$(event));
    const _bind$12 = Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_button$155$(mouse_event);
    switch (_bind$12) {
      case 0: {
        mouse.left_button = false;
        return;
      }
      case 1: {
        mouse.middle_button = false;
        return;
      }
      case 2: {
        mouse.right_button = false;
        return;
      }
      default: {
        return;
      }
    }
  });
}
function Milky2018$selene$system$$Backend$lock_mouse$160$(self, locked) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$157$(self.ui_canvas, "click", (_event) => {
    Milky2018$selene$45$canvas$$request_pointer_lock(self.ui_canvas);
  });
  Milky2018$selene$45$canvas$$document_add_event_listener("pointerlockchange", (_event) => {
    locked.val = Milky2018$selene$45$canvas$$is_pointer_locked(self.ui_canvas);
  });
}
function Milky2018$selene$system$$Backend$register_key_events$160$(_self, pressed_keys) {
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$156$(Milky2018$selene$45$canvas$$window, "keyup", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$120$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$159$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$remove$0$(pressed_keys, _c);
      return;
    }
  });
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$156$(Milky2018$selene$45$canvas$$window, "keydown", (event) => {
    const keyboard_event = moonbitlang$core$option$$Option$unwrap$120$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_keyboard_event$159$(event));
    const keycode = Milky2018$selene$system$$Code$from_string(Yoorkin$rabbit$45$tea$dom$$KeyboardEvent$code(keyboard_event));
    if (keycode === undefined) {
      return;
    } else {
      const _Some = keycode;
      const _c = _Some;
      moonbitlang$core$set$$Set$add$0$(pressed_keys, _c);
      return;
    }
  });
}
function Milky2018$selene$system$$Backend$set_render_target$160$(self, target) {
  switch (target) {
    case "world": {
      self.active_context = self.context;
      return;
    }
    case "ui": {
      self.active_context = self.ui_context;
      return;
    }
    default: {
      return;
    }
  }
}
function Milky2018$selene$45$canvas$$get_image_element(png) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$1$(Milky2018$selene$45$canvas$$element_cache, png);
  if (_bind$12.$tag === 1) {
    const _Some = _bind$12;
    const _element = _Some._0;
    return _element;
  }
  const element = Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$new();
  Yoorkin$rabbit$45$tea$dom$$HTMLImageElement$set_src(element, png);
  moonbitlang$core$builtin$$Map$set$1$(Milky2018$selene$45$canvas$$element_cache, png, element);
  return element;
}
function Milky2018$selene$system$$Backend$preload_img$160$(_self, path) {
  Milky2018$selene$45$canvas$$get_image_element(path);
}
function Milky2018$selene$system$$Backend$draw_picture$160$(self, png, x, y, width, height, transform, repeat) {
  const element = Milky2018$selene$45$canvas$$get_image_element(png);
  let repeat_mode;
  switch (repeat) {
    case 2: {
      repeat_mode = "no-repeat";
      break;
    }
    case 1: {
      repeat_mode = "repeat-y";
      break;
    }
    case 0: {
      repeat_mode = "repeat-x";
      break;
    }
    default: {
      repeat_mode = "repeat";
    }
  }
  const pattern = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_pattern(self.active_context, rami3l$js$45$ffi$js$$Union7$from0$152$(element), repeat_mode);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from2$150$(pattern));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.active_context, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_sprite$160$(self, sprite_path, x, y, offset_x, offset_y, width, height, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  const element = Milky2018$selene$45$canvas$$get_image_element(sprite_path);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$draw_image_with_src_and_dst_size(self.active_context, element, offset_x, offset_y, width, height, 0, 0, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_stroke_rect$160$(self, x, y, width, height, color, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x + width / 2, y + height / 2);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate(self.active_context, 0);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.active_context, width / -2, height / -2, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_text$160$(self, text, x, y, font, color, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(self.active_context, font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self.active_context, text, x, y, Option$None$8$);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_color_rect$160$(self, x, y, width, height, color) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.active_context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_gradient_rect$160$(self, x, y, width, height, color_start, color_end) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  const gradient = Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$create_linear_gradient(self.active_context, x, y, x + width, y + height);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 0, color_start);
  Yoorkin$rabbit$45$tea$dom$$CanvasGradient$add_color_stop(gradient, 1, color_end);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from1$150$(gradient));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.active_context, x, y, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_filled_circle$160$(self, x, y, radius, color, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$arc$46$inner(self.active_context, 0, 0, radius, 0, 6.28318530717958623, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill$46$inner(self.active_context, "nonzero");
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_stroke_circle$160$(self, x, y, radius, color, line_width, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$arc$46$inner(self.active_context, 0, 0, radius, 0, 6.28318530717958623, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_line_width(self.active_context, line_width);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_filled_ellipse$160$(self, x, y, radius_x, radius_y, rotation, color, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate(self.active_context, rotation);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$ellipse$46$inner(self.active_context, 0, 0, radius_x, radius_y, 0, 0, 6.28318530717958623, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill$46$inner(self.active_context, "nonzero");
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_stroke_ellipse$160$(self, x, y, radius_x, radius_y, rotation, color, line_width, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate(self.active_context, rotation);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$ellipse$46$inner(self.active_context, 0, 0, radius_x, radius_y, 0, 0, 6.28318530717958623, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_line_width(self.active_context, line_width);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_filled_rect$160$(self, x, y, width, height, color, rotation, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x + width / 2, y + height / 2);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate(self.active_context, rotation);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_rect(self.active_context, -width / 2, -height / 2, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_rect_outline$160$(self, x, y, width, height, color, line_width, rotation, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x + width / 2, y + height / 2);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate(self.active_context, rotation);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_line_width(self.active_context, line_width);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke_rect(self.active_context, -width / 2, -height / 2, width, height);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_filled_triangle$160$(self, x, y, side, rotation, color, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  const r = side / Milky2018$selene$45$canvas$$sqrt(3);
  const p1_x = r * Milky2018$selene$45$canvas$$cos(rotation);
  const p1_y = r * Milky2018$selene$45$canvas$$sin(rotation);
  const p2_x = r * Milky2018$selene$45$canvas$$cos(rotation + 2.09439510239319526);
  const p2_y = r * Milky2018$selene$45$canvas$$sin(rotation + 2.09439510239319526);
  const p3_x = r * Milky2018$selene$45$canvas$$cos(rotation + 4.18879020478639053);
  const p3_y = r * Milky2018$selene$45$canvas$$sin(rotation + 4.18879020478639053);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$move_to(self.active_context, p1_x, p1_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, p2_x, p2_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, p3_x, p3_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$close_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill$46$inner(self.active_context, "nonzero");
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_stroke_triangle$160$(self, x, y, side, rotation, color, line_width, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  const r = side / Milky2018$selene$45$canvas$$sqrt(3);
  const p1_x = r * Milky2018$selene$45$canvas$$cos(rotation);
  const p1_y = r * Milky2018$selene$45$canvas$$sin(rotation);
  const p2_x = r * Milky2018$selene$45$canvas$$cos(rotation + 2.09439510239319526);
  const p2_y = r * Milky2018$selene$45$canvas$$sin(rotation + 2.09439510239319526);
  const p3_x = r * Milky2018$selene$45$canvas$$cos(rotation + 4.18879020478639053);
  const p3_y = r * Milky2018$selene$45$canvas$$sin(rotation + 4.18879020478639053);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$move_to(self.active_context, p1_x, p1_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, p2_x, p2_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, p3_x, p3_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$close_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_line_width(self.active_context, line_width);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_cross$160$(self, x, y, length, thickness, angle, color, transform) {
  const half_len = length / 2;
  const half_angle_rad = angle * 3.14159265358979312 / 360;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  const p1_x = half_len * Milky2018$selene$45$canvas$$cos(half_angle_rad);
  const p1_y = half_len * Milky2018$selene$45$canvas$$sin(half_angle_rad);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$move_to(self.active_context, p1_x, p1_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, -p1_x, -p1_y);
  const p2_x = half_len * Milky2018$selene$45$canvas$$cos(-half_angle_rad);
  const p2_y = half_len * Milky2018$selene$45$canvas$$sin(-half_angle_rad);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$move_to(self.active_context, p2_x, p2_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, -p2_x, -p2_y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_line_width(self.active_context, thickness);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_filled_capsule$160$(self, x, y, length, radius, color, transform, rotation) {
  const half_len = length / 2;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate(self.active_context, rotation);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$arc$46$inner(self.active_context, -half_len, 0, radius, 1.57079632679489656, 4.71238898038469, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, half_len, -radius);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$arc$46$inner(self.active_context, half_len, 0, radius, 4.71238898038469, 1.57079632679489656, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$close_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill$46$inner(self.active_context, "nonzero");
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_stroke_capsule$160$(self, x, y, length, radius, color, line_width, transform, rotation) {
  const half_len = length / 2;
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$translate(self.active_context, x, y);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$rotate(self.active_context, rotation);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$begin_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$arc$46$inner(self.active_context, -half_len, 0, radius, 1.57079632679489656, 4.71238898038469, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$line_to(self.active_context, half_len, -radius);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$arc$46$inner(self.active_context, half_len, 0, radius, 4.71238898038469, 1.57079632679489656, false);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$close_path(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_stroke_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(color));
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_line_width(self.active_context, line_width);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$stroke(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$system$$Backend$draw_text_layout$160$(self, text_component, x, y, transform) {
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$save(self.active_context);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$transform(self.active_context, transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_font(self.active_context, text_component.font);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$set_fill_style(self.active_context, rami3l$js$45$ffi$js$$Union3$from0$150$(text_component.color));
  const final_lines = moonbitlang$core$array$$Array$new$46$inner$86$(0);
  const paragraphs = moonbitlang$core$string$$String$split(text_component.content, { str: Milky2018$selene$45$canvas$$draw_text_layout$46$42$bind$124$394, start: 0, end: Milky2018$selene$45$canvas$$draw_text_layout$46$42$bind$124$394.length });
  paragraphs((paragraph) => {
    const _bind$12 = text_component.max_width;
    if (_bind$12.$tag === 1) {
      const _Some = _bind$12;
      const _max_width = _Some._0;
      let current_line = "";
      const chars = moonbitlang$core$string$$StringView$to_array(paragraph);
      const _len = chars.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const char = chars[_i];
          const test_line = `${current_line}${moonbitlang$core$builtin$$Show$to_string$66$(char)}`;
          const metrics = Milky2018$selene$45$canvas$$measure_text(self.active_context, test_line);
          let _tmp$2;
          if (metrics.width > _max_width) {
            const _p = current_line;
            const _p$2 = "";
            _tmp$2 = !(_p === _p$2);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            moonbitlang$core$array$$Array$push$86$(final_lines, current_line);
            current_line = moonbitlang$core$builtin$$Show$to_string$66$(char);
          } else {
            current_line = test_line;
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$push$86$(final_lines, current_line);
    } else {
      moonbitlang$core$array$$Array$push$86$(final_lines, moonbitlang$core$builtin$$Show$to_string$63$(paragraph));
    }
    return 1;
  });
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < final_lines.length) {
      const line = moonbitlang$core$array$$Array$at$86$(final_lines, i);
      const metrics = Milky2018$selene$45$canvas$$measure_text(self.active_context, line);
      const line_width = metrics.width;
      const _bind$12 = text_component.align;
      let draw_x;
      switch (_bind$12) {
        case 0: {
          draw_x = x;
          break;
        }
        case 1: {
          const _bind$13 = text_component.max_width;
          let max_w;
          if (_bind$13.$tag === 1) {
            const _Some = _bind$13;
            max_w = _Some._0;
          } else {
            max_w = line_width;
          }
          draw_x = x + (max_w - line_width) / 2;
          break;
        }
        default: {
          const _bind$14 = text_component.max_width;
          let max_w$2;
          if (_bind$14.$tag === 1) {
            const _Some = _bind$14;
            max_w$2 = _Some._0;
          } else {
            max_w$2 = line_width;
          }
          draw_x = x + max_w$2 - line_width;
        }
      }
      const draw_y = y + (i + 0) * text_component.line_height;
      Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$fill_text(self.active_context, line, draw_x, draw_y, Option$None$8$);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$restore(self.active_context);
}
function Milky2018$selene$45$canvas$$CanvasBackend$new() {
  const canvas = moonbitlang$core$option$$Option$unwrap$118$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$158$(rami3l$js$45$ffi$js$$Nullable$unwrap$154$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "game-canvas"))));
  const context = moonbitlang$core$option$$Option$unwrap$119$(rami3l$js$45$ffi$js$$Union5$to0$151$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(canvas, "2d")));
  const ui_canvas = moonbitlang$core$option$$Option$unwrap$118$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_canvas_element$158$(rami3l$js$45$ffi$js$$Nullable$unwrap$154$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), "ui-canvas"))));
  const ui_context = moonbitlang$core$option$$Option$unwrap$119$(rami3l$js$45$ffi$js$$Union5$to0$151$(Yoorkin$rabbit$45$tea$dom$$HTMLCanvasElement$get_context(ui_canvas, "2d")));
  const _bind$12 = { _0: 0, _1: 0 };
  const _bind$13 = moonbitlang$core$builtin$$Map$from_array$122$([]);
  const _bind$14 = moonbitlang$core$ref$$Ref$new$76$(undefined);
  return { canvas: canvas, context: context, ui_canvas: ui_canvas, ui_context: ui_context, active_context: context, viewport_size: _bind$12, frame_counter: Milky2018$selene$45$canvas$$new$46$42$bind$124$397, current_fps: 0, zoom: 1, execution_time: _bind$13, mouse_movement: _bind$14 };
}
function Milky2018$selene$45$canvas$$schedule_with_fixed_interval(interval, callback) {
  const lastTime = { val: 0 };
  const accumulator = { val: 0 };
  const lastId = { val: 0 };
  const update = (time) => {
    if (lastTime.val === 0) {
      lastTime.val = time;
    }
    const delta = time - lastTime.val;
    lastTime.val = time;
    accumulator.val = accumulator.val + delta;
    while (true) {
      if (accumulator.val >= interval) {
        callback(delta);
        accumulator.val = accumulator.val - interval;
        continue;
      } else {
        break;
      }
    }
    lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$45$canvas$$window, update);
  };
  lastId.val = Yoorkin$rabbit$45$tea$dom$$Window$request_animation_frame(Milky2018$selene$45$canvas$$window, update);
  return () => {
    if (lastId.val !== 0) {
      Yoorkin$rabbit$45$tea$dom$$Window$cancel_animation_frame(Milky2018$selene$45$canvas$$window, lastId.val);
      return;
    } else {
      return;
    }
  };
}
function Milky2018$selene$system$$Backend$build$160$(self, systems, canvas_width, canvas_height, fps, image_smooth, zoom) {
  if (fps >>> 0 > 60 >>> 0) {
    moonbitlang$core$builtin$$println$86$("Warning: FPS is set above 60. The browser's window only support up to 60 FPS.");
  }
  const _len = systems.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const system = systems[_i];
      const _bind$12 = system._1;
      if (_bind$12.$tag === 0) {
        const _func = system._0;
        _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$160$, method_1: Milky2018$selene$system$$Backend$draw_picture$160$, method_2: Milky2018$selene$system$$Backend$draw_sprite$160$, method_3: Milky2018$selene$system$$Backend$register_key_events$160$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$160$, method_5: Milky2018$selene$system$$Backend$register_touch_events$160$, method_6: Milky2018$selene$system$$Backend$lock_mouse$160$, method_7: Milky2018$selene$system$$Backend$draw_stroke_rect$160$, method_8: Milky2018$selene$system$$Backend$draw_text$160$, method_9: Milky2018$selene$system$$Backend$draw_text_layout$160$, method_10: Milky2018$selene$system$$Backend$draw_color_rect$160$, method_11: Milky2018$selene$system$$Backend$draw_gradient_rect$160$, method_12: Milky2018$selene$system$$Backend$play_audio$160$, method_13: Milky2018$selene$system$$Backend$stop_audio$160$, method_14: Milky2018$selene$system$$Backend$is_audio_playing$160$, method_15: Milky2018$selene$system$$Backend$get_canvas_size$160$, method_16: Milky2018$selene$system$$Backend$get_zoom$160$, method_17: Milky2018$selene$system$$Backend$get_debug_info$160$, method_18: Milky2018$selene$system$$Backend$preload_img$160$, method_19: Milky2018$selene$system$$Backend$preload_audio$160$, method_20: Milky2018$selene$system$$Backend$set_render_target$160$, method_21: Milky2018$selene$system$$Backend$draw_filled_rect$160$, method_22: Milky2018$selene$system$$Backend$draw_rect_outline$160$, method_23: Milky2018$selene$system$$Backend$draw_filled_circle$160$, method_24: Milky2018$selene$system$$Backend$draw_stroke_circle$160$, method_25: Milky2018$selene$system$$Backend$draw_filled_ellipse$160$, method_26: Milky2018$selene$system$$Backend$draw_stroke_ellipse$160$, method_27: Milky2018$selene$system$$Backend$draw_filled_triangle$160$, method_28: Milky2018$selene$system$$Backend$draw_stroke_triangle$160$, method_29: Milky2018$selene$system$$Backend$draw_cross$160$, method_30: Milky2018$selene$system$$Backend$draw_filled_capsule$160$, method_31: Milky2018$selene$system$$Backend$draw_stroke_capsule$160$ });
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.viewport_size = { _0: canvas_width, _1: canvas_height };
  Milky2018$selene$45$canvas$$set_viewport_height(self.canvas, canvas_height);
  Milky2018$selene$45$canvas$$set_viewport_width(self.canvas, canvas_width);
  Milky2018$selene$45$canvas$$set_image_smoothing_enabled(self.context, image_smooth);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale(self.context, zoom, zoom);
  Milky2018$selene$45$canvas$$set_viewport_height(self.ui_canvas, canvas_height);
  Milky2018$selene$45$canvas$$set_viewport_width(self.ui_canvas, canvas_width);
  Milky2018$selene$45$canvas$$set_image_smoothing_enabled(self.ui_context, image_smooth);
  Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$scale(self.ui_context, zoom, zoom);
  self.zoom = zoom;
  Milky2018$selene$45$canvas$$schedule_with_fixed_interval(1000 / $f64_convert_i32_u(fps), (delta) => {
    self.current_fps = 1000 / delta;
    Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect(self.context, 0, 0, canvas_width, canvas_height);
    Yoorkin$rabbit$45$tea$dom$$CanvasRenderingContext2D$clear_rect(self.ui_context, 0, 0, canvas_width, canvas_height);
    const renders = [];
    const _len$2 = systems.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const system = systems[_i];
        const start_time = Milky2018$selene$45$canvas$$time_now();
        const _bind$12 = system._1;
        switch (_bind$12.$tag) {
          case 3: {
            const _UpdateFrame = _bind$12;
            const _frame_period = _UpdateFrame._0;
            if (moonbitlang$core$builtin$$Eq$equal$3$(moonbitlang$core$builtin$$Mod$mod$3$(self.frame_counter, moonbitlang$core$uint$$UInt$to_uint64(_frame_period)), $0L)) {
              const _func = system._0;
              _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$160$, method_1: Milky2018$selene$system$$Backend$draw_picture$160$, method_2: Milky2018$selene$system$$Backend$draw_sprite$160$, method_3: Milky2018$selene$system$$Backend$register_key_events$160$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$160$, method_5: Milky2018$selene$system$$Backend$register_touch_events$160$, method_6: Milky2018$selene$system$$Backend$lock_mouse$160$, method_7: Milky2018$selene$system$$Backend$draw_stroke_rect$160$, method_8: Milky2018$selene$system$$Backend$draw_text$160$, method_9: Milky2018$selene$system$$Backend$draw_text_layout$160$, method_10: Milky2018$selene$system$$Backend$draw_color_rect$160$, method_11: Milky2018$selene$system$$Backend$draw_gradient_rect$160$, method_12: Milky2018$selene$system$$Backend$play_audio$160$, method_13: Milky2018$selene$system$$Backend$stop_audio$160$, method_14: Milky2018$selene$system$$Backend$is_audio_playing$160$, method_15: Milky2018$selene$system$$Backend$get_canvas_size$160$, method_16: Milky2018$selene$system$$Backend$get_zoom$160$, method_17: Milky2018$selene$system$$Backend$get_debug_info$160$, method_18: Milky2018$selene$system$$Backend$preload_img$160$, method_19: Milky2018$selene$system$$Backend$preload_audio$160$, method_20: Milky2018$selene$system$$Backend$set_render_target$160$, method_21: Milky2018$selene$system$$Backend$draw_filled_rect$160$, method_22: Milky2018$selene$system$$Backend$draw_rect_outline$160$, method_23: Milky2018$selene$system$$Backend$draw_filled_circle$160$, method_24: Milky2018$selene$system$$Backend$draw_stroke_circle$160$, method_25: Milky2018$selene$system$$Backend$draw_filled_ellipse$160$, method_26: Milky2018$selene$system$$Backend$draw_stroke_ellipse$160$, method_27: Milky2018$selene$system$$Backend$draw_filled_triangle$160$, method_28: Milky2018$selene$system$$Backend$draw_stroke_triangle$160$, method_29: Milky2018$selene$system$$Backend$draw_cross$160$, method_30: Milky2018$selene$system$$Backend$draw_filled_capsule$160$, method_31: Milky2018$selene$system$$Backend$draw_stroke_capsule$160$ });
              moonbitlang$core$builtin$$Map$set$122$(self.execution_time, system._2, Milky2018$selene$45$canvas$$time_now() - start_time);
            }
            break;
          }
          case 2: {
            const _Render = _bind$12;
            const _priority = _Render._0;
            moonbitlang$core$array$$Array$push$70$(renders, { _0: system._0, _1: _priority });
            break;
          }
          case 1: {
            const _func = system._0;
            _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$160$, method_1: Milky2018$selene$system$$Backend$draw_picture$160$, method_2: Milky2018$selene$system$$Backend$draw_sprite$160$, method_3: Milky2018$selene$system$$Backend$register_key_events$160$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$160$, method_5: Milky2018$selene$system$$Backend$register_touch_events$160$, method_6: Milky2018$selene$system$$Backend$lock_mouse$160$, method_7: Milky2018$selene$system$$Backend$draw_stroke_rect$160$, method_8: Milky2018$selene$system$$Backend$draw_text$160$, method_9: Milky2018$selene$system$$Backend$draw_text_layout$160$, method_10: Milky2018$selene$system$$Backend$draw_color_rect$160$, method_11: Milky2018$selene$system$$Backend$draw_gradient_rect$160$, method_12: Milky2018$selene$system$$Backend$play_audio$160$, method_13: Milky2018$selene$system$$Backend$stop_audio$160$, method_14: Milky2018$selene$system$$Backend$is_audio_playing$160$, method_15: Milky2018$selene$system$$Backend$get_canvas_size$160$, method_16: Milky2018$selene$system$$Backend$get_zoom$160$, method_17: Milky2018$selene$system$$Backend$get_debug_info$160$, method_18: Milky2018$selene$system$$Backend$preload_img$160$, method_19: Milky2018$selene$system$$Backend$preload_audio$160$, method_20: Milky2018$selene$system$$Backend$set_render_target$160$, method_21: Milky2018$selene$system$$Backend$draw_filled_rect$160$, method_22: Milky2018$selene$system$$Backend$draw_rect_outline$160$, method_23: Milky2018$selene$system$$Backend$draw_filled_circle$160$, method_24: Milky2018$selene$system$$Backend$draw_stroke_circle$160$, method_25: Milky2018$selene$system$$Backend$draw_filled_ellipse$160$, method_26: Milky2018$selene$system$$Backend$draw_stroke_ellipse$160$, method_27: Milky2018$selene$system$$Backend$draw_filled_triangle$160$, method_28: Milky2018$selene$system$$Backend$draw_stroke_triangle$160$, method_29: Milky2018$selene$system$$Backend$draw_cross$160$, method_30: Milky2018$selene$system$$Backend$draw_filled_capsule$160$, method_31: Milky2018$selene$system$$Backend$draw_stroke_capsule$160$ });
            moonbitlang$core$builtin$$Map$set$122$(self.execution_time, system._2, Milky2018$selene$45$canvas$$time_now() - start_time);
            break;
          }
          case 4: {
            const _UpdateTime = _bind$12;
            const _period = _UpdateTime._0;
            if (moonbitlang$core$builtin$$Eq$equal$3$(moonbitlang$core$builtin$$Mod$mod$3$(self.frame_counter, moonbitlang$core$double$$Double$to_uint64($f64_convert_i32_u(fps) * _period)), $0L)) {
              const _func$2 = system._0;
              _func$2({ self: self, method_0: Milky2018$selene$system$$Backend$build$160$, method_1: Milky2018$selene$system$$Backend$draw_picture$160$, method_2: Milky2018$selene$system$$Backend$draw_sprite$160$, method_3: Milky2018$selene$system$$Backend$register_key_events$160$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$160$, method_5: Milky2018$selene$system$$Backend$register_touch_events$160$, method_6: Milky2018$selene$system$$Backend$lock_mouse$160$, method_7: Milky2018$selene$system$$Backend$draw_stroke_rect$160$, method_8: Milky2018$selene$system$$Backend$draw_text$160$, method_9: Milky2018$selene$system$$Backend$draw_text_layout$160$, method_10: Milky2018$selene$system$$Backend$draw_color_rect$160$, method_11: Milky2018$selene$system$$Backend$draw_gradient_rect$160$, method_12: Milky2018$selene$system$$Backend$play_audio$160$, method_13: Milky2018$selene$system$$Backend$stop_audio$160$, method_14: Milky2018$selene$system$$Backend$is_audio_playing$160$, method_15: Milky2018$selene$system$$Backend$get_canvas_size$160$, method_16: Milky2018$selene$system$$Backend$get_zoom$160$, method_17: Milky2018$selene$system$$Backend$get_debug_info$160$, method_18: Milky2018$selene$system$$Backend$preload_img$160$, method_19: Milky2018$selene$system$$Backend$preload_audio$160$, method_20: Milky2018$selene$system$$Backend$set_render_target$160$, method_21: Milky2018$selene$system$$Backend$draw_filled_rect$160$, method_22: Milky2018$selene$system$$Backend$draw_rect_outline$160$, method_23: Milky2018$selene$system$$Backend$draw_filled_circle$160$, method_24: Milky2018$selene$system$$Backend$draw_stroke_circle$160$, method_25: Milky2018$selene$system$$Backend$draw_filled_ellipse$160$, method_26: Milky2018$selene$system$$Backend$draw_stroke_ellipse$160$, method_27: Milky2018$selene$system$$Backend$draw_filled_triangle$160$, method_28: Milky2018$selene$system$$Backend$draw_stroke_triangle$160$, method_29: Milky2018$selene$system$$Backend$draw_cross$160$, method_30: Milky2018$selene$system$$Backend$draw_filled_capsule$160$, method_31: Milky2018$selene$system$$Backend$draw_stroke_capsule$160$ });
              moonbitlang$core$builtin$$Map$set$122$(self.execution_time, system._2, Milky2018$selene$45$canvas$$time_now() - start_time);
            }
            break;
          }
        }
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$sort_by_key$72$(renders, (system) => -system._1 | 0);
    const _len$3 = renders.length;
    let _tmp$3 = 0;
    while (true) {
      const _i = _tmp$3;
      if (_i < _len$3) {
        const render = renders[_i];
        const _func = render._0;
        _func({ self: self, method_0: Milky2018$selene$system$$Backend$build$160$, method_1: Milky2018$selene$system$$Backend$draw_picture$160$, method_2: Milky2018$selene$system$$Backend$draw_sprite$160$, method_3: Milky2018$selene$system$$Backend$register_key_events$160$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$160$, method_5: Milky2018$selene$system$$Backend$register_touch_events$160$, method_6: Milky2018$selene$system$$Backend$lock_mouse$160$, method_7: Milky2018$selene$system$$Backend$draw_stroke_rect$160$, method_8: Milky2018$selene$system$$Backend$draw_text$160$, method_9: Milky2018$selene$system$$Backend$draw_text_layout$160$, method_10: Milky2018$selene$system$$Backend$draw_color_rect$160$, method_11: Milky2018$selene$system$$Backend$draw_gradient_rect$160$, method_12: Milky2018$selene$system$$Backend$play_audio$160$, method_13: Milky2018$selene$system$$Backend$stop_audio$160$, method_14: Milky2018$selene$system$$Backend$is_audio_playing$160$, method_15: Milky2018$selene$system$$Backend$get_canvas_size$160$, method_16: Milky2018$selene$system$$Backend$get_zoom$160$, method_17: Milky2018$selene$system$$Backend$get_debug_info$160$, method_18: Milky2018$selene$system$$Backend$preload_img$160$, method_19: Milky2018$selene$system$$Backend$preload_audio$160$, method_20: Milky2018$selene$system$$Backend$set_render_target$160$, method_21: Milky2018$selene$system$$Backend$draw_filled_rect$160$, method_22: Milky2018$selene$system$$Backend$draw_rect_outline$160$, method_23: Milky2018$selene$system$$Backend$draw_filled_circle$160$, method_24: Milky2018$selene$system$$Backend$draw_stroke_circle$160$, method_25: Milky2018$selene$system$$Backend$draw_filled_ellipse$160$, method_26: Milky2018$selene$system$$Backend$draw_stroke_ellipse$160$, method_27: Milky2018$selene$system$$Backend$draw_filled_triangle$160$, method_28: Milky2018$selene$system$$Backend$draw_stroke_triangle$160$, method_29: Milky2018$selene$system$$Backend$draw_cross$160$, method_30: Milky2018$selene$system$$Backend$draw_filled_capsule$160$, method_31: Milky2018$selene$system$$Backend$draw_stroke_capsule$160$ });
        _tmp$3 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$12 = self.mouse_movement.val;
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const _mouse_movement = _Some;
      _mouse_movement.movement = { _0: 0, _1: 0 };
    }
    self.frame_counter = moonbitlang$core$builtin$$Add$add$3$(self.frame_counter, $1L);
  });
  return () => {
  };
}
function Milky2018$selene$system$$Backend$get_canvas_size$160$(self) {
  return { _0: Milky2018$selene$math$$Vec2D$op_get(self.viewport_size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(self.viewport_size, 1) };
}
function Milky2018$selene$system$$Backend$get_debug_info$160$(self) {
  return { system_execution_time: self.execution_time, fps: self.current_fps };
}
function Milky2018$selene$system$$Backend$get_zoom$160$(self) {
  return self.zoom;
}
function Milky2018$selene$system$$Backend$play_audio$160$(_self, audio_path, volume, loop_) {
  const audio = Milky2018$selene$45$canvas$$Audio$new(audio_path);
  Milky2018$selene$45$canvas$$Audio$set_volume(audio, volume);
  Milky2018$selene$45$canvas$$Audio$set_loop(audio, loop_);
  Milky2018$selene$45$canvas$$Audio$play(audio);
  const handle_value = Milky2018$selene$45$canvas$$next_audio_id.val;
  const handle = handle_value;
  Milky2018$selene$45$canvas$$next_audio_id.val = moonbitlang$core$builtin$$Add$add$3$(Milky2018$selene$45$canvas$$next_audio_id.val, $1L);
  moonbitlang$core$builtin$$Map$set$2$(Milky2018$selene$45$canvas$$audio_instances, handle, audio);
  return handle;
}
function Milky2018$selene$system$$Backend$stop_audio$160$(_self, handle) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$45$canvas$$audio_instances, handle);
  if (_bind$12.$tag === 1) {
    const _Some = _bind$12;
    const _audio = _Some._0;
    Milky2018$selene$45$canvas$$Audio$pause(_audio);
    Milky2018$selene$45$canvas$$Audio$set_currentTime(_audio, 0);
    moonbitlang$core$builtin$$Map$remove$2$(Milky2018$selene$45$canvas$$audio_instances, handle);
    return;
  } else {
    return;
  }
}
function Milky2018$selene$system$$Backend$is_audio_playing$160$(_self, handle) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$2$(Milky2018$selene$45$canvas$$audio_instances, handle);
  if (_bind$12.$tag === 1) {
    const _Some = _bind$12;
    const _audio = _Some._0;
    if (Milky2018$selene$45$canvas$$Audio$is_ended(_audio)) {
      moonbitlang$core$builtin$$Map$remove$2$(Milky2018$selene$45$canvas$$audio_instances, handle);
      return false;
    }
    return !Milky2018$selene$45$canvas$$Audio$is_paused(_audio);
  }
  return false;
}
function Milky2018$selene$system$$Backend$preload_audio$160$(_self, audio_path) {
  Milky2018$selene$45$canvas$$Audio$new(audio_path);
}
function Kaida$45$Amethyst$math$$fabs(x) {
  return moonbitlang$core$uint64$$UInt64$reinterpret_as_double(moonbitlang$core$builtin$$BitAnd$land$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L));
}
function Kaida$45$Amethyst$math$$isinf(x) {
  return moonbitlang$core$builtin$$Eq$equal$3$(moonbitlang$core$builtin$$BitAnd$land$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L), $9218868437227405312L);
}
function Kaida$45$Amethyst$math$$isnan(x) {
  return moonbitlang$core$builtin$$op_gt$3$(moonbitlang$core$builtin$$BitAnd$land$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), $9223372036854775807L), $9218868437227405312L);
}
function Kaida$45$Amethyst$math$$__hi(x) {
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$builtin$$Shr$shr$3$(moonbitlang$core$double$$Double$reinterpret_as_uint64(x), 32));
}
function Kaida$45$Amethyst$math$$__low(x) {
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$double$$Double$reinterpret_as_uint64(x));
}
function Kaida$45$Amethyst$math$$__combineQ(hi, low) {
  return moonbitlang$core$uint64$$UInt64$reinterpret_as_double(moonbitlang$core$builtin$$BitOr$lor$3$(moonbitlang$core$builtin$$Shl$shl$3$(hi, 32), low));
}
function Kaida$45$Amethyst$math$$__combineW(hi, low) {
  return Kaida$45$Amethyst$math$$__combineQ(moonbitlang$core$uint$$UInt$to_uint64(hi), moonbitlang$core$uint$$UInt$to_uint64(low));
}
function Kaida$45$Amethyst$math$$__kernel_cos(x, y) {
  let a = 0;
  let hz = 0;
  let z = 0;
  let r = 0;
  let qx = 0;
  const ix = Kaida$45$Amethyst$math$$__hi(x) & 2147483647;
  if (ix >>> 0 < 1044381696 >>> 0) {
    if (moonbitlang$core$double$$Double$to_int(x) === 0) {
      return 1;
    }
  }
  z = x * x;
  r = z * (0.0416666666666666 + z * (-0.00138888888888741096 + z * (2.48015872894767294e-05 + z * (-2.75573143513906633e-07 + z * (2.08757232129817483e-09 + z * -1.13596475577881948e-11)))));
  if (ix >>> 0 < 1070805811 >>> 0) {
    return 1 - (0.5 * z - (z * r - x * y));
  } else {
    if (ix >>> 0 > 1072234496 >>> 0) {
      qx = 0.28125;
    } else {
      qx = Kaida$45$Amethyst$math$$__combineW((ix >>> 0) - (2097152 >>> 0) | 0, 0);
    }
    hz = 0.5 * z - qx;
    a = 1 - qx;
    return a - (hz - (z * r - x * y));
  }
}
function Kaida$45$Amethyst$math$$__kernel_sin(x, y, iy) {
  let z = 0;
  let r = 0;
  let v = 0;
  const ix = Kaida$45$Amethyst$math$$__hi(x) & 2147483647;
  if (ix >>> 0 < 1044381696 >>> 0) {
    if (moonbitlang$core$double$$Double$to_int(x) === 0) {
      return x;
    }
  }
  z = x * x;
  v = z * x;
  r = 0.00833333333332249 + z * (-0.000198412698298579493 + z * (2.75573137070700677e-06 + z * (-2.50507602534068634e-08 + z * 1.58969099521155e-10)));
  return iy === 0 ? x + v * (-0.166666666666666324 + z * r) : x - (z * (0.5 * y - v * r) - y - v * -0.166666666666666324);
}
function Kaida$45$Amethyst$math$$scalbn(input, n) {
  let n$2 = n;
  let y = input;
  if (n$2 > 1023) {
    y = y * 8.98846567431158e+307;
    n$2 = n$2 - 1023 | 0;
    if (n$2 > 1023) {
      y = y * 8.98846567431158e+307;
      n$2 = n$2 - 1023 | 0;
      if (n$2 > 1023) {
        n$2 = 1023;
      }
    }
  } else {
    if (n$2 < -1022) {
      y = y * 2.00416836000897278e-292;
      n$2 = n$2 + 969 | 0;
      if (n$2 < -1022) {
        y = y * 2.00416836000897278e-292;
        n$2 = n$2 + 969 | 0;
        if (n$2 < -1022) {
          n$2 = -1022;
        }
      }
    }
  }
  const ui = moonbitlang$core$builtin$$Shl$shl$3$(moonbitlang$core$int$$Int$to_uint64(1023 + n$2 | 0), 52);
  return y * moonbitlang$core$uint64$$UInt64$reinterpret_as_double(ui);
}
function Kaida$45$Amethyst$math$$__kernel_rem_pio2(x, y, e0, nx, prec) {
  const init_jk = [2, 3, 4, 6];
  let jz = 0;
  let jx = 0;
  let jv = 0;
  let jp = 0;
  let jk = 0;
  let carry = 0;
  let n = 0;
  const iq = moonbitlang$core$array$$Array$make$4$(20, 0);
  let i = 0;
  let j = 0;
  let k = 0;
  let m = 0;
  let q0 = 0;
  let ih = 0;
  let z = 0;
  let fw = 0;
  const f = moonbitlang$core$array$$Array$make$15$(20, 0);
  const fq = moonbitlang$core$array$$Array$make$15$(20, 0);
  const q = moonbitlang$core$array$$Array$make$15$(20, 0);
  jk = moonbitlang$core$array$$Array$at$4$(init_jk, prec);
  jp = jk;
  jx = nx - 1 | 0;
  jv = (e0 - 3 | 0) / 24 | 0;
  if (jv < 0) {
    jv = 0;
  }
  q0 = e0 - (Math.imul(24, jv + 1 | 0) | 0) | 0;
  j = jv - jx | 0;
  m = jx + jk | 0;
  i = 0;
  while (true) {
    if (i <= m) {
      moonbitlang$core$array$$Array$set$15$(f, i, j < 0 ? 0 : moonbitlang$core$array$$Array$at$4$(Kaida$45$Amethyst$math$$two_over_pi, j) + 0);
      i = i + 1 | 0;
      j = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  i = 0;
  while (true) {
    if (i <= jk) {
      j = 0;
      fw = 0;
      while (true) {
        if (j <= jx) {
          fw = fw + moonbitlang$core$array$$Array$at$15$(x, j) * moonbitlang$core$array$$Array$at$15$(f, (jx + i | 0) - j | 0);
          j = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$set$15$(q, i, fw);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  jz = jk;
  let recompute = true;
  while (true) {
    if (recompute) {
      recompute = false;
      i = 0;
      j = jz;
      z = moonbitlang$core$array$$Array$at$15$(q, jz);
      while (true) {
        if (j > 0) {
          fw = moonbitlang$core$double$$Double$floor(5.9604644775390625e-08 * z);
          moonbitlang$core$array$$Array$set$4$(iq, i, moonbitlang$core$double$$Double$to_int(z - 16777216 * fw));
          z = moonbitlang$core$array$$Array$at$15$(q, j - 1 | 0) + fw;
          i = i + 1 | 0;
          j = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      z = Kaida$45$Amethyst$math$$scalbn(z, q0);
      z = z - 8 * moonbitlang$core$double$$Double$floor(z * 0.125);
      n = moonbitlang$core$double$$Double$to_int(z);
      z = z - (n + 0);
      ih = 0;
      if (q0 > 0) {
        i = moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) >> (24 - q0 | 0);
        n = n + i | 0;
        const _index_2 = jz - 1 | 0;
        moonbitlang$core$array$$Array$set$4$(iq, _index_2, moonbitlang$core$array$$Array$at$4$(iq, _index_2) - (i << (24 - q0 | 0)) | 0);
        ih = moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) >> (23 - q0 | 0);
      } else {
        if (q0 === 0) {
          ih = moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) >> 23;
        } else {
          if (z >= 0.5) {
            ih = 2;
          }
        }
      }
      if (ih > 0) {
        n = n + 1 | 0;
        carry = 0;
        i = 0;
        while (true) {
          if (i < jz) {
            j = moonbitlang$core$array$$Array$at$4$(iq, i);
            if (carry === 0) {
              if (j !== 0) {
                carry = 1;
                moonbitlang$core$array$$Array$set$4$(iq, i, 16777216 - j | 0);
              }
            } else {
              moonbitlang$core$array$$Array$set$4$(iq, i, 16777215 - j | 0);
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (q0 > 0) {
          const _bind$12 = q0;
          switch (_bind$12) {
            case 1: {
              moonbitlang$core$array$$Array$set$4$(iq, jz - 1 | 0, moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) & 8388607);
              break;
            }
            case 2: {
              moonbitlang$core$array$$Array$set$4$(iq, jz - 1 | 0, moonbitlang$core$array$$Array$at$4$(iq, jz - 1 | 0) & 4194303);
              break;
            }
          }
        }
        if (ih === 2) {
          z = 1 - z;
          if (carry !== 0) {
            z = z - Kaida$45$Amethyst$math$$scalbn(1, q0);
          }
        }
      }
      if (z === 0) {
        j = 0;
        i = jz - 1 | 0;
        while (true) {
          if (i >= jk) {
            j = j | moonbitlang$core$array$$Array$at$4$(iq, i);
            i = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j === 0) {
          k = 1;
          while (true) {
            if (moonbitlang$core$array$$Array$at$4$(iq, jk - k | 0) === 0) {
              k = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          i = jz + 1 | 0;
          while (true) {
            if (i <= (jz + k | 0)) {
              moonbitlang$core$array$$Array$set$15$(f, jx + i | 0, moonbitlang$core$array$$Array$at$4$(Kaida$45$Amethyst$math$$two_over_pi, jv + i | 0) + 0);
              j = 0;
              fw = 0;
              while (true) {
                if (j <= jx) {
                  fw = fw + moonbitlang$core$array$$Array$at$15$(x, j) * moonbitlang$core$array$$Array$at$15$(f, (jx + i | 0) - j | 0);
                  j = j + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              moonbitlang$core$array$$Array$set$15$(q, i, fw);
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          jz = jz + k | 0;
          recompute = true;
          continue;
        }
      }
      if (z === 0) {
        jz = jz - 1 | 0;
        q0 = q0 - 24 | 0;
        while (true) {
          if (moonbitlang$core$array$$Array$at$4$(iq, jz) === 0) {
            jz = jz - 1 | 0;
            q0 = q0 - 24 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        z = Kaida$45$Amethyst$math$$scalbn(z, -q0 | 0);
        if (z >= 16777216) {
          fw = moonbitlang$core$double$$Double$floor(5.9604644775390625e-08 * z);
          moonbitlang$core$array$$Array$set$4$(iq, jz, moonbitlang$core$double$$Double$to_int(z - 16777216 * fw));
          jz = jz + 1 | 0;
          q0 = q0 + 24 | 0;
          moonbitlang$core$array$$Array$set$4$(iq, jz, moonbitlang$core$double$$Double$to_int(fw));
        } else {
          moonbitlang$core$array$$Array$set$4$(iq, jz, moonbitlang$core$double$$Double$to_int(z));
        }
      }
      fw = Kaida$45$Amethyst$math$$scalbn(1, q0);
      i = jz;
      while (true) {
        if (i >= 0) {
          moonbitlang$core$array$$Array$set$15$(q, i, fw * (moonbitlang$core$array$$Array$at$4$(iq, i) + 0));
          fw = fw * 5.9604644775390625e-08;
          i = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      i = jz;
      while (true) {
        if (i >= 0) {
          fw = 0;
          k = 0;
          while (true) {
            if (k <= jp && k <= (jz - i | 0)) {
              fw = fw + moonbitlang$core$array$$Array$at$15$(Kaida$45$Amethyst$math$$pi_over_2, k) * moonbitlang$core$array$$Array$at$15$(q, i + k | 0);
              k = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          moonbitlang$core$array$$Array$set$15$(fq, jz - i | 0, fw);
          i = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _L: {
        _L$2: {
          switch (prec) {
            case 0: {
              fw = 0;
              i = jz;
              while (true) {
                if (i >= 0) {
                  fw = fw + moonbitlang$core$array$$Array$at$15$(fq, i);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              moonbitlang$core$array$$Array$set$15$(y, 0, ih === 0 ? fw : -fw);
              break;
            }
            case 1: {
              break _L$2;
            }
            case 2: {
              break _L$2;
            }
            case 3: {
              i = jz;
              while (true) {
                if (i > 0) {
                  fw = moonbitlang$core$array$$Array$at$15$(fq, i - 1 | 0) + moonbitlang$core$array$$Array$at$15$(fq, i);
                  const _index_4 = i;
                  moonbitlang$core$array$$Array$set$15$(fq, _index_4, moonbitlang$core$array$$Array$at$15$(fq, _index_4) + (moonbitlang$core$array$$Array$at$15$(fq, i - 1 | 0) - fw));
                  moonbitlang$core$array$$Array$set$15$(fq, i - 1 | 0, fw);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              i = jz;
              while (true) {
                if (i > 1) {
                  fw = moonbitlang$core$array$$Array$at$15$(fq, i - 1 | 0) + moonbitlang$core$array$$Array$at$15$(fq, i);
                  const _index_6 = i;
                  moonbitlang$core$array$$Array$set$15$(fq, _index_6, moonbitlang$core$array$$Array$at$15$(fq, _index_6) + (moonbitlang$core$array$$Array$at$15$(fq, i - 1 | 0) - fw));
                  moonbitlang$core$array$$Array$set$15$(fq, i - 1 | 0, fw);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              fw = 0;
              i = jz;
              while (true) {
                if (i >= 2) {
                  fw = fw + moonbitlang$core$array$$Array$at$15$(fq, i);
                  i = i - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (ih === 0) {
                moonbitlang$core$array$$Array$set$15$(y, 0, moonbitlang$core$array$$Array$at$15$(fq, 0));
                moonbitlang$core$array$$Array$set$15$(y, 1, moonbitlang$core$array$$Array$at$15$(fq, 1));
                moonbitlang$core$array$$Array$set$15$(y, 2, fw);
              } else {
                moonbitlang$core$array$$Array$set$15$(y, 0, -moonbitlang$core$array$$Array$at$15$(fq, 0));
                moonbitlang$core$array$$Array$set$15$(y, 1, -moonbitlang$core$array$$Array$at$15$(fq, 1));
                moonbitlang$core$array$$Array$set$15$(y, 2, -fw);
              }
              break;
            }
          }
          break _L;
        }
        fw = 0;
        i = jz;
        while (true) {
          if (i >= 0) {
            fw = fw + moonbitlang$core$array$$Array$at$15$(fq, i);
            i = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        moonbitlang$core$array$$Array$set$15$(y, 0, ih === 0 ? fw : -fw);
        fw = moonbitlang$core$array$$Array$at$15$(fq, 0) - fw;
        i = 1;
        while (true) {
          if (i <= jz) {
            fw = fw + moonbitlang$core$array$$Array$at$15$(fq, i);
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        moonbitlang$core$array$$Array$set$15$(y, 1, ih === 0 ? fw : -fw);
      }
      continue;
    } else {
      break;
    }
  }
  return n & 7;
}
function Kaida$45$Amethyst$math$$rem_pio2(x, y) {
  const hx = Kaida$45$Amethyst$math$$__hi(x);
  const ix = hx & 2147483647;
  let z = 0;
  if (ix <= 1072243195) {
    moonbitlang$core$array$$Array$set$15$(y, 0, x);
    moonbitlang$core$array$$Array$set$15$(y, 1, 0);
    return 0;
  }
  if (ix < 1073928572) {
    if (hx > 0) {
      z = x - 1.57079632673412561;
      if (ix !== 1073291771) {
        moonbitlang$core$array$$Array$set$15$(y, 0, z - 6.07710050650619225e-11);
        moonbitlang$core$array$$Array$set$15$(y, 1, z - moonbitlang$core$array$$Array$at$15$(y, 0) - 6.07710050650619225e-11);
      } else {
        z = z - 6.07710050630396598e-11;
        moonbitlang$core$array$$Array$set$15$(y, 0, z - 2.02226624879595063e-21);
        moonbitlang$core$array$$Array$set$15$(y, 1, z - moonbitlang$core$array$$Array$at$15$(y, 0) - 2.02226624879595063e-21);
      }
      return 1;
    } else {
      z = x + 1.57079632673412561;
      if (ix !== 1073291771) {
        moonbitlang$core$array$$Array$set$15$(y, 0, z + 6.07710050650619225e-11);
        moonbitlang$core$array$$Array$set$15$(y, 1, z - moonbitlang$core$array$$Array$at$15$(y, 0) + 6.07710050650619225e-11);
      } else {
        const z$2 = z + 6.07710050630396598e-11;
        moonbitlang$core$array$$Array$set$15$(y, 0, z$2 + 2.02226624879595063e-21);
        moonbitlang$core$array$$Array$set$15$(y, 1, z$2 - moonbitlang$core$array$$Array$at$15$(y, 0) + 2.02226624879595063e-21);
      }
      return -1;
    }
  }
  if (ix <= 1094263291) {
    const t = Math.abs(x);
    const n = moonbitlang$core$double$$Double$to_int(t * 0.636619772367581382 + 0.5);
    const fn_ = n + 0;
    let r = t - fn_ * 1.57079632673412561;
    let w = fn_ * 6.07710050650619225e-11;
    if (n < 32 && ix !== moonbitlang$core$array$$Array$at$4$(Kaida$45$Amethyst$math$$npio2_hw, n - 1 | 0)) {
      moonbitlang$core$array$$Array$set$15$(y, 0, r - w);
    } else {
      const j = ix >> 20;
      moonbitlang$core$array$$Array$set$15$(y, 0, r - w);
      const i = j - (Kaida$45$Amethyst$math$$__hi(moonbitlang$core$array$$Array$at$15$(y, 0)) >>> 20 & 2047) | 0;
      if (i > 16) {
        const t$2 = r;
        w = fn_ * 6.07710050630396598e-11;
        r = t$2 - w;
        w = fn_ * 2.02226624879595063e-21 - (t$2 - r - w);
        moonbitlang$core$array$$Array$set$15$(y, 0, r - w);
        const i$2 = j - (Kaida$45$Amethyst$math$$__hi(moonbitlang$core$array$$Array$at$15$(y, 0)) >>> 20 & 2047) | 0;
        if (i$2 > 49) {
          const t$3 = r;
          w = fn_ * 2.02226624871116646e-21;
          r = t$3 - w;
          w = fn_ * 8.4784276603689e-32 - (t$3 - r - w);
          moonbitlang$core$array$$Array$set$15$(y, 0, r - w);
        }
      }
    }
    moonbitlang$core$array$$Array$set$15$(y, 1, r - moonbitlang$core$array$$Array$at$15$(y, 0) - w);
    if (hx > 0) {
      return n;
    } else {
      moonbitlang$core$array$$Array$set$15$(y, 0, -moonbitlang$core$array$$Array$at$15$(y, 0));
      moonbitlang$core$array$$Array$set$15$(y, 1, -moonbitlang$core$array$$Array$at$15$(y, 1));
      return -n | 0;
    }
  }
  if (ix >= 2146435072) {
    moonbitlang$core$array$$Array$set$15$(y, 0, x - x);
    moonbitlang$core$array$$Array$set$15$(y, 1, moonbitlang$core$array$$Array$at$15$(y, 0));
    return 0;
  }
  z = Kaida$45$Amethyst$math$$__combineW(Kaida$45$Amethyst$math$$__hi(z), Kaida$45$Amethyst$math$$__low(x));
  const e0 = (ix >> 20) - 1046 | 0;
  z = Kaida$45$Amethyst$math$$__combineW(ix - (e0 << 20) | 0, Kaida$45$Amethyst$math$$__low(z));
  const tx = [0, 0, 0];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 2) {
      moonbitlang$core$array$$Array$set$15$(tx, i, moonbitlang$core$double$$Double$to_int(z) + 0);
      z = (z - moonbitlang$core$array$$Array$at$15$(tx, i)) * 16777216;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$set$15$(tx, 2, z);
  let nx = 3;
  while (true) {
    if (moonbitlang$core$array$$Array$at$15$(tx, nx - 1 | 0) === 0) {
      nx = nx - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const n = Kaida$45$Amethyst$math$$__kernel_rem_pio2(tx, y, e0, nx, 2);
  if (hx > 0) {
    return n;
  } else {
    moonbitlang$core$array$$Array$set$15$(y, 0, -moonbitlang$core$array$$Array$at$15$(y, 0));
    moonbitlang$core$array$$Array$set$15$(y, 1, -moonbitlang$core$array$$Array$at$15$(y, 1));
    return -n | 0;
  }
}
function Kaida$45$Amethyst$math$$sin(x) {
  if (Kaida$45$Amethyst$math$$isinf(x) || Kaida$45$Amethyst$math$$isnan(x)) {
    return moonbitlang$core$double$$not_a_number;
  }
  const y = [0, 0];
  if (Kaida$45$Amethyst$math$$fabs(x) <= 0.785398163397448279) {
    return Kaida$45$Amethyst$math$$__kernel_sin(x, 0, 0);
  } else {
    const n = Kaida$45$Amethyst$math$$rem_pio2(x, y);
    const _bind$12 = n & 3;
    switch (_bind$12) {
      case 0: {
        return Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1), 1);
      }
      case 1: {
        return Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1));
      }
      case 2: {
        return -Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1), 1);
      }
      default: {
        return -Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1));
      }
    }
  }
}
function Kaida$45$Amethyst$math$$cos(x) {
  if (Kaida$45$Amethyst$math$$isinf(x) || Kaida$45$Amethyst$math$$isnan(x)) {
    return moonbitlang$core$double$$not_a_number;
  }
  const y = [0, 0];
  if (Kaida$45$Amethyst$math$$fabs(x) <= 0.785398163397448279) {
    return Kaida$45$Amethyst$math$$__kernel_cos(x, 0);
  } else {
    const n = Kaida$45$Amethyst$math$$rem_pio2(x, y);
    const _bind$12 = n & 3;
    switch (_bind$12) {
      case 0: {
        return Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1));
      }
      case 1: {
        return -Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1), 1);
      }
      case 2: {
        return -Kaida$45$Amethyst$math$$__kernel_cos(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1));
      }
      default: {
        return Kaida$45$Amethyst$math$$__kernel_sin(moonbitlang$core$array$$Array$at$15$(y, 0), moonbitlang$core$array$$Array$at$15$(y, 1), 1);
      }
    }
  }
}
function Kaida$45$Amethyst$math$$clamp(x, min, max) {
  let min$2;
  let max$2;
  _L: {
    if (min > max) {
      min$2 = max;
      max$2 = min;
      break _L;
    } else {
      min$2 = min;
      max$2 = max;
      break _L;
    }
  }
  if (x < min$2) {
    return min$2;
  }
  if (x > max$2) {
    return max$2;
  }
  return x;
}
function Kaida$45$Amethyst$math$$atan(x) {
  if (x !== x || x === 0) {
    return x;
  }
  const atan_hi = [0.463647609000806094, 0.785398163397448279, 0.982793723247329, 1.57079632679489656];
  const atan_lo = [2.26987774529616871e-17, 3.06161699786838302e-17, 1.39033110312309985e-17, 6.12323399573676604e-17];
  const a_t = [0.333333333333329318, -0.199999999998764832, 0.142857142725034664, -0.111111104054623558, 0.0909088713343650656, -0.0769187620504483, 0.0666107313738753121, -0.0583357013379057349, 0.0497687799461593236, -0.0365315727442169155, 0.0162858201153657824];
  const ix = Kaida$45$Amethyst$math$$__hi(x) & 2147483647;
  let id = 0;
  let z = 0;
  let w = 0;
  let x$2 = x;
  const x_is_neg = x$2 < 0;
  if (ix >= 1141899264) {
    if (x$2 > 0) {
      return moonbitlang$core$array$$Array$at$15$(atan_hi, 3) + moonbitlang$core$array$$Array$at$15$(atan_lo, 3);
    } else {
      return -moonbitlang$core$array$$Array$at$15$(atan_hi, 3) - moonbitlang$core$array$$Array$at$15$(atan_lo, 3);
    }
  }
  if (ix < 1071382528) {
    if (ix < 1042284544) {
      if (1e+300 + x$2 > 1) {
        return x$2;
      }
    }
    id = -1;
  } else {
    x$2 = Math.abs(x$2);
    if (ix < 1072889856) {
      if (ix < 1072037888) {
        id = 0;
        x$2 = (2 * x$2 - 1) / (2 + x$2);
      } else {
        id = 1;
        x$2 = (x$2 - 1) / (x$2 + 1);
      }
    } else {
      if (ix < 1073971200) {
        id = 2;
        x$2 = (x$2 - 1.5) / (1 + 1.5 * x$2);
      } else {
        id = 3;
        x$2 = -1 / x$2;
      }
    }
  }
  z = x$2 * x$2;
  w = z * z;
  const s1 = z * (moonbitlang$core$array$$Array$at$15$(a_t, 0) + w * (moonbitlang$core$array$$Array$at$15$(a_t, 2) + w * (moonbitlang$core$array$$Array$at$15$(a_t, 4) + w * (moonbitlang$core$array$$Array$at$15$(a_t, 6) + w * (moonbitlang$core$array$$Array$at$15$(a_t, 8) + w * moonbitlang$core$array$$Array$at$15$(a_t, 10))))));
  const s2 = w * (moonbitlang$core$array$$Array$at$15$(a_t, 1) + w * (moonbitlang$core$array$$Array$at$15$(a_t, 3) + w * (moonbitlang$core$array$$Array$at$15$(a_t, 5) + w * (moonbitlang$core$array$$Array$at$15$(a_t, 7) + w * moonbitlang$core$array$$Array$at$15$(a_t, 9)))));
  if (id < 0) {
    return x$2 - x$2 * (s1 + s2);
  } else {
    z = moonbitlang$core$array$$Array$at$15$(atan_hi, id) - (x$2 * (s1 + s2) - moonbitlang$core$array$$Array$at$15$(atan_lo, id) - x$2);
    return x_is_neg ? -z : z;
  }
}
function Kaida$45$Amethyst$math$$atan2(y, x) {
  if (x !== x || y !== y) {
    return moonbitlang$core$double$$not_a_number;
  }
  const hx = Kaida$45$Amethyst$math$$__hi(x);
  const hy = Kaida$45$Amethyst$math$$__hi(y);
  const ix = hx & 2147483647;
  const iy = hy & 2147483647;
  if (x === 1) {
    return Kaida$45$Amethyst$math$$atan(y);
  }
  const m = hy >> 31 & 1 | hx >> 30 & 2;
  if (y === 0) {
    _L: {
      switch (m) {
        case 0: {
          break _L;
        }
        case 1: {
          break _L;
        }
        case 2: {
          return 3.14159265358979312;
        }
        default: {
          return -3.14159265358979312;
        }
      }
    }
    return y;
  }
  if (x === 0) {
    return hy < 0 ? -1.57079632679489656 : 1.57079632679489656;
  }
  if (x > moonbitlang$core$double$$max_value || x < moonbitlang$core$double$$min_value) {
    if (y > moonbitlang$core$double$$max_value || y < moonbitlang$core$double$$min_value) {
      switch (m) {
        case 0: {
          return 0.785398163397448279;
        }
        case 1: {
          return -0.785398163397448279;
        }
        case 2: {
          return 2.35619449019234484;
        }
        default: {
          return -2.35619449019234484;
        }
      }
    } else {
      switch (m) {
        case 0: {
          return 0;
        }
        case 1: {
          return -0;
        }
        case 2: {
          return 3.14159265358979312;
        }
        default: {
          return -3.14159265358979312;
        }
      }
    }
  }
  if (y > moonbitlang$core$double$$max_value || y < moonbitlang$core$double$$min_value) {
    return hy < 0 ? -1.57079632679489656 : 1.57079632679489656;
  }
  const k = iy - ix >> 20;
  const z = k > 60 ? 1.57079632679489656 : hx < 0 && k < -60 ? 0 : Kaida$45$Amethyst$math$$atan(Kaida$45$Amethyst$math$$fabs(y / x));
  switch (m) {
    case 0: {
      return z;
    }
    case 1: {
      return -z;
    }
    case 2: {
      return 3.14159265358979312 - (z - 1.22464679914735321e-16);
    }
    default: {
      return z - 1.22464679914735321e-16 - 3.14159265358979312;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$82$(_x_1464, _x_1465) {
  switch (_x_1464.$tag) {
    case 0: {
      const _AddDamage = _x_1464;
      const _$42$arg_1466 = _AddDamage._0;
      _x_1465.method_0(_x_1465.self, "AddDamage(");
      moonbitlang$core$builtin$$Logger$write_object$15$(_x_1465, _$42$arg_1466);
      _x_1465.method_0(_x_1465.self, ")");
      return;
    }
    case 1: {
      const _MultiplyDamage = _x_1464;
      const _$42$arg_1467 = _MultiplyDamage._0;
      _x_1465.method_0(_x_1465.self, "MultiplyDamage(");
      moonbitlang$core$builtin$$Logger$write_object$15$(_x_1465, _$42$arg_1467);
      _x_1465.method_0(_x_1465.self, ")");
      return;
    }
    case 2: {
      const _AddCritRate = _x_1464;
      const _$42$arg_1468 = _AddCritRate._0;
      _x_1465.method_0(_x_1465.self, "AddCritRate(");
      moonbitlang$core$builtin$$Logger$write_object$15$(_x_1465, _$42$arg_1468);
      _x_1465.method_0(_x_1465.self, ")");
      return;
    }
    case 3: {
      const _MultiplyEffectDuration = _x_1464;
      const _$42$arg_1469 = _MultiplyEffectDuration._0;
      _x_1465.method_0(_x_1465.self, "MultiplyEffectDuration(");
      moonbitlang$core$builtin$$Logger$write_object$15$(_x_1465, _$42$arg_1469);
      _x_1465.method_0(_x_1465.self, ")");
      return;
    }
    case 4: {
      const _MultiplyCooldown = _x_1464;
      const _$42$arg_1470 = _MultiplyCooldown._0;
      _x_1465.method_0(_x_1465.self, "MultiplyCooldown(");
      moonbitlang$core$builtin$$Logger$write_object$15$(_x_1465, _$42$arg_1470);
      _x_1465.method_0(_x_1465.self, ")");
      return;
    }
    case 5: {
      const _AddAttackRange = _x_1464;
      const _$42$arg_1471 = _AddAttackRange._0;
      _x_1465.method_0(_x_1465.self, "AddAttackRange(");
      moonbitlang$core$builtin$$Logger$write_object$15$(_x_1465, _$42$arg_1471);
      _x_1465.method_0(_x_1465.self, ")");
      return;
    }
    default: {
      const _MultiplySpeed = _x_1464;
      const _$42$arg_1472 = _MultiplySpeed._0;
      _x_1465.method_0(_x_1465.self, "MultiplySpeed(");
      moonbitlang$core$builtin$$Logger$write_object$15$(_x_1465, _$42$arg_1472);
      _x_1465.method_0(_x_1465.self, ")");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$84$(_x_1460, _x_1461) {
  if (_x_1460 === 0) {
    if (_x_1461 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1461 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$25$(_x_1452, _x_1453) {
  switch (_x_1452) {
    case 0: {
      if (_x_1453 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1453 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1453 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_1453 === 3) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1453 === 4) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$80$(_x_1442, _x_1443) {
  switch (_x_1442) {
    case 0: {
      if (_x_1443 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1443 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1443 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1443 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Show$output$80$(_x_1438, _x_1439) {
  switch (_x_1438) {
    case 0: {
      _x_1439.method_0(_x_1439.self, "Orange");
      return;
    }
    case 1: {
      _x_1439.method_0(_x_1439.self, "Purple");
      return;
    }
    case 2: {
      _x_1439.method_0(_x_1439.self, "Green");
      return;
    }
    default: {
      _x_1439.method_0(_x_1439.self, "Blue");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$80$(_x_1434, _x_1435) {
  switch (_x_1434) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1435, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1435, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1435, 2);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1435, 3);
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$81$(_x_1430, _x_1431) {
  switch (_x_1430) {
    case 0: {
      if (_x_1431 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1431 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1431 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Show$output$81$(_x_1426, _x_1427) {
  switch (_x_1426) {
    case 0: {
      _x_1427.method_0(_x_1427.self, "Square");
      return;
    }
    case 1: {
      _x_1427.method_0(_x_1427.self, "Triangle");
      return;
    }
    default: {
      _x_1427.method_0(_x_1427.self, "Circle");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$62$(_x_1418, _x_1419) {
  switch (_x_1418) {
    case 0: {
      if (_x_1419 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1419 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1419 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_1419 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_1419 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_1419 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_1419 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_1419 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_1419 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_1419 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_1419 === 10) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1419 === 11) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Show$output$62$(_x_1414, _x_1415) {
  switch (_x_1414) {
    case 0: {
      _x_1415.method_0(_x_1415.self, "OrangeSquare");
      return;
    }
    case 1: {
      _x_1415.method_0(_x_1415.self, "OrangeTriangle");
      return;
    }
    case 2: {
      _x_1415.method_0(_x_1415.self, "OrangeCircle");
      return;
    }
    case 3: {
      _x_1415.method_0(_x_1415.self, "PurpleSquare");
      return;
    }
    case 4: {
      _x_1415.method_0(_x_1415.self, "PurpleTriangle");
      return;
    }
    case 5: {
      _x_1415.method_0(_x_1415.self, "PurpleCircle");
      return;
    }
    case 6: {
      _x_1415.method_0(_x_1415.self, "GreenSquare");
      return;
    }
    case 7: {
      _x_1415.method_0(_x_1415.self, "GreenTriangle");
      return;
    }
    case 8: {
      _x_1415.method_0(_x_1415.self, "GreenCircle");
      return;
    }
    case 9: {
      _x_1415.method_0(_x_1415.self, "BlueSquare");
      return;
    }
    case 10: {
      _x_1415.method_0(_x_1415.self, "BlueTriangle");
      return;
    }
    default: {
      _x_1415.method_0(_x_1415.self, "BlueCircle");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$62$(_x_1410, _x_1411) {
  switch (_x_1410) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 10);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1411, 11);
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$16$(_x_1406, _x_1407) {
  if (_x_1406 === 0) {
    if (_x_1407 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1407 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$95$(_x_1402, _x_1403) {
  switch (_x_1402) {
    case 0: {
      if (_x_1403 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1403 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1403 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_1403 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_1403 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_1403 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_1403 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_1403 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_1403 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_1403 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_1403 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_1403 === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      if (_x_1403 === 12) {
        return true;
      } else {
        return false;
      }
    }
    case 13: {
      if (_x_1403 === 13) {
        return true;
      } else {
        return false;
      }
    }
    case 14: {
      if (_x_1403 === 14) {
        return true;
      } else {
        return false;
      }
    }
    case 15: {
      if (_x_1403 === 15) {
        return true;
      } else {
        return false;
      }
    }
    case 16: {
      if (_x_1403 === 16) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1403 === 17) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$95$(_x_1394, _x_1395) {
  switch (_x_1394) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 6);
      return;
    }
    case 7: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 7);
      return;
    }
    case 8: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 8);
      return;
    }
    case 9: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 9);
      return;
    }
    case 10: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 10);
      return;
    }
    case 11: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 11);
      return;
    }
    case 12: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 12);
      return;
    }
    case 13: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 13);
      return;
    }
    case 14: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 14);
      return;
    }
    case 15: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 15);
      return;
    }
    case 16: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 16);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1395, 17);
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$94$(_x_1390, _x_1391) {
  switch (_x_1390) {
    case 0: {
      if (_x_1391 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1391 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1391 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_1391 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_1391 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_1391 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_1391 === 6) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1391 === 7) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$94$(_x_1382, _x_1383) {
  switch (_x_1382) {
    case 0: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 0);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 1);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 2);
      return;
    }
    case 3: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 3);
      return;
    }
    case 4: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 4);
      return;
    }
    case 5: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 5);
      return;
    }
    case 6: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 6);
      return;
    }
    default: {
      moonbitlang$core$builtin$$Hasher$combine_int(_x_1383, 7);
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$17$(_x_1358, _x_1359) {
  switch (_x_1358) {
    case 0: {
      if (_x_1359 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1359 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1359 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$96$(_x_1354, _x_1355) {
  if (_x_1354 === 0) {
    if (_x_1355 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1355 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$96$(_x_1350, _x_1351) {
  if (_x_1350 === 0) {
    _x_1351.method_0(_x_1351.self, "ChargeShield");
    return;
  } else {
    _x_1351.method_0(_x_1351.self, "HealthPack");
    return;
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$96$(_x_1346, _x_1347) {
  if (_x_1346 === 0) {
    moonbitlang$core$builtin$$Hasher$combine_int(_x_1347, 0);
    return;
  } else {
    moonbitlang$core$builtin$$Hasher$combine_int(_x_1347, 1);
    return;
  }
}
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6387 = new VFX_Lifecycle$Timer(5);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6388 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 1, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6389 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6388;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6390 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6387, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6389 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6391 = new VFX_Lifecycle$Timer(5);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6392 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 1, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6393 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6392;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6394 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6391, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6393 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6395 = new VFX_Lifecycle$Timer(0.5);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6396 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 10, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6397 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6396;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6398 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6395, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6397 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6399 = new VFX_Lifecycle$Timer(0.5);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6400 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 10, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6401 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6400;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6402 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6399, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6401 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6403 = new VFX_Lifecycle$Timer(0.5);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6404 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 10, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6405 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6404;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6406 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6403, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6405 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6407 = new VFX_Lifecycle$Timer(0.5);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6408 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 1, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6409 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6408;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6410 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6407, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6409 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6411 = new VFX_Lifecycle$Timer(0.5);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6412 = { is_pulsing_scale: false, rotation_speed: 1, scale_speed: 1, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6413 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6412;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6414 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6411, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6413 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6415 = new VFX_Lifecycle$Timer(8);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6416 = { is_pulsing_scale: false, rotation_speed: 0.3, scale_speed: 0, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6417 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6416;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6418 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6415, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6417 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6419 = new VFX_Lifecycle$Timer(4);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6420 = { is_pulsing_scale: false, rotation_speed: 0.3, scale_speed: 0, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6421 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6420;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6422 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6419, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6421 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6423 = new VFX_Lifecycle$Timer(0.15);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6424 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 10, scale_amplitude: 1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6425 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6424;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6426 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6423, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6425 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6427 = new VFX_Lifecycle$Timer(0.15);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6428 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 10, scale_amplitude: 1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6429 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6428;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6430 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6427, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6429 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6431 = new VFX_Lifecycle$Timer(0.15);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6432 = { is_pulsing_scale: true, rotation_speed: 0.5, scale_speed: 10, scale_amplitude: 1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6433 = SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6432;
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6434 = { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6431, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6433 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6435 = { color: "#6495ED", thickness: 5 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6436 = new SpriteTemplate$Beam(SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6435);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6437 = new VFX_Lifecycle$Timer(0.15);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6438 = { color: "#87CEEB", thickness: 3.5 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6439 = new SpriteTemplate$Beam(SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6438);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6440 = new VFX_Lifecycle$Timer(0.12);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6441 = { color: "#DDA0DD", thickness: 5 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6442 = new SpriteTemplate$Beam(SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6441);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6443 = new VFX_Lifecycle$Timer(0.12);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6444 = { color_override: "#FFFFFF", size_padding: 0, z_index_offset: 300 };
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6445 = new SpriteTemplate$FromParent(SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6444);
const SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6446 = new VFX_Lifecycle$Timer(0.08);
function SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library() {
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 1, { sprite_template: new SpriteTemplate$Animation(SuYiTao$45$SYT$CyberScavenger$$explosion_animation, { _0: 184.5, _1: 150 }), behavior: { lifecycle: VFX_Lifecycle$OnAnimationFinish, dynamic_transform: undefined }, z_index: 500 });
  const _p = 100;
  const _p$2 = "rgba(140, 255, 140, 0.5)";
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 2, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$2)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6390, z_index: 50 });
  const _p$3 = 100;
  const _p$4 = "rgba(219, 3, 3, 0.19)";
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 3, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$3), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6394, z_index: 50 });
  const _p$5 = 100;
  const _p$6 = "rgba(219, 3, 3, 0.19)";
  const _p$7 = 5;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 5, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$5), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$6, _p$7)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6398, z_index: 50 });
  const _p$8 = 120;
  const _p$9 = "rgba(255, 137, 2, 0.66)";
  const _p$10 = 5;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 6, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$8), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$9, _p$10)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6402, z_index: 50 });
  const _p$11 = 160;
  const _p$12 = "#DDA0DD";
  const _p$13 = 4;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 7, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$11), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$12, _p$13)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6406, z_index: 50 });
  const _p$14 = 5;
  const _p$15 = 5;
  const _p$16 = 0.775;
  const _p$17 = "rgba(17, 0, 255, 1)";
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 4, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$14, _p$15, _p$16), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$17)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6410, z_index: 120 });
  const _p$18 = 20;
  const _p$19 = 4;
  const _p$20 = 90;
  const _p$21 = "rgba(3, 180, 0, 1)";
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 8, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Cross(_p$18, _p$19, _p$20), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$21)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6414, z_index: 120 });
  const _p$22 = 20;
  const _p$23 = 6;
  const _p$24 = 0;
  const _p$25 = "rgba(152, 0, 218, 1)";
  const _p$26 = 2;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 9, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Ellipse(_p$22, _p$23, _p$24), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$25, _p$26)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6418, z_index: 120 });
  const _p$27 = 25;
  const _p$28 = 10;
  const _p$29 = 0;
  const _p$30 = "rgba(2, 143, 209, 1)";
  const _p$31 = 2;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 17, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Ellipse(_p$27, _p$28, _p$29), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$30, _p$31)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6422, z_index: 120 });
  const _p$32 = 20;
  const _p$33 = "#6495ED";
  const _p$34 = 4;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 12, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$32), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$33, _p$34)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6426, z_index: 50 });
  const _p$35 = 15;
  const _p$36 = "#87CEEB";
  const _p$37 = 3;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 13, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$35), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$36, _p$37)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6430, z_index: 50 });
  const _p$38 = 15;
  const _p$39 = "#DDA0DD";
  const _p$40 = 3;
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 15, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$38), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Stroke(_p$39, _p$40)), behavior: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$record$47$6434, z_index: 50 });
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 10, { sprite_template: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6436, behavior: { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6437, dynamic_transform: undefined }, z_index: 300 });
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 11, { sprite_template: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6439, behavior: { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6440, dynamic_transform: undefined }, z_index: 300 });
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 14, { sprite_template: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6442, behavior: { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6443, dynamic_transform: undefined }, z_index: 300 });
  moonbitlang$core$builtin$$Map$set$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, 16, { sprite_template: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6445, behavior: { lifecycle: SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library$46$constr$47$6446, dynamic_transform: undefined }, z_index: 0 });
}
function SuYiTao$45$SYT$CyberScavenger$$vec2d_lerp(p1, p2, ratio) {
  const _p = { _0: p2._0 - p1._0, _1: p2._1 - p1._1 };
  const _p$2 = { _0: _p._0 * ratio, _1: _p._1 * ratio };
  return { _0: p1._0 + _p$2._0, _1: p1._1 + _p$2._1 };
}
function SuYiTao$45$SYT$CyberScavenger$$vfx_spawner_system(_backend) {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const request = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$13$(SuYiTao$45$SYT$CyberScavenger$$vfx_library, request.vfx_type);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _template = _Some;
        const vfx_entity = Milky2018$selene$system$$Entity$new();
        const _bind$13 = request.parent_entity;
        if (_bind$13 === undefined) {
          moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, request.position);
        } else {
          const _Some$2 = _bind$13;
          const _parent = _Some$2;
          moonbitlang$core$builtin$$Map$set$36$(SuYiTao$45$SYT$CyberScavenger$$vfx_follows, vfx_entity, { parent: _parent, offset: { _0: 0, _1: 0 } });
          const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _parent);
          if (_bind$14 === undefined) {
          } else {
            const _Some$3 = _bind$14;
            const _parent_pos = _Some$3;
            const _p = { _0: 0, _1: 0 };
            moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, { _0: _parent_pos._0 + _p._0, _1: _parent_pos._1 + _p._1 });
          }
        }
        const _bind$14 = _template.sprite_template;
        let sprite_component;
        switch (_bind$14.$tag) {
          case 0: {
            const _Picture = _bind$14;
            const _path = _Picture._0;
            const _dims = _Picture._1;
            const pic = Milky2018$selene$sprite$$Picture$new(_dims, _path, undefined, undefined);
            const _tmp$2 = _template.z_index;
            const _p = -2;
            sprite_component = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(pic, _tmp$2, { _0: _dims._0 / _p, _1: _dims._1 / _p }, 0);
            break;
          }
          case 1: {
            const _Shape = _bind$14;
            const _shape = _Shape._0;
            const _style = _Shape._1;
            const graphic = Milky2018$selene$sprite$$ColoredShape$new(_shape, _style);
            sprite_component = Milky2018$selene$sprite$$Sprite$from_shape(graphic, _template.z_index, undefined, 0);
            break;
          }
          case 2: {
            const _Animation = _bind$14;
            const _anim = _Animation._0;
            const _dims$2 = _Animation._1;
            const _p$2 = -2;
            const offset_to_center = { _0: _dims$2._0 / _p$2, _1: _dims$2._1 / _p$2 };
            sprite_component = Milky2018$selene$sprite$$Sprite$from_animation$46$inner(_anim, _template.z_index, offset_to_center, 0);
            break;
          }
          case 3: {
            const _TextLayout = _bind$14;
            const _layout = _TextLayout._0;
            sprite_component = Milky2018$selene$sprite$$Sprite$from_text_layout(_layout, _template.z_index, undefined, 1);
            break;
          }
          case 4: {
            const _Beam = _bind$14;
            const _beam_template = _Beam._0;
            const _bind$15 = request.to_position;
            if (_bind$15 === undefined) {
              const _p$3 = 0;
              const _p$4 = 0;
              const _p$5 = 0;
              const _tmp$3 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$3, _p$4, _p$5);
              const _p$6 = "transparent";
              sprite_component = Milky2018$selene$sprite$$Sprite$from_shape(Milky2018$selene$sprite$$ColoredShape$new(_tmp$3, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$6)), 0, undefined, undefined);
            } else {
              const _Some$2 = _bind$15;
              const _to_pos = _Some$2;
              const from_pos = request.position;
              const delta = { _0: _to_pos._0 - from_pos._0, _1: _to_pos._1 - from_pos._1 };
              const distance = Math.sqrt(delta._0 * delta._0 + delta._1 * delta._1);
              const angle = Kaida$45$Amethyst$math$$atan2(Milky2018$selene$math$$Vec2D$op_get(delta, 1), Milky2018$selene$math$$Vec2D$op_get(delta, 0));
              const center_pos = SuYiTao$45$SYT$CyberScavenger$$vec2d_lerp(from_pos, _to_pos, 0.5);
              const _p$3 = _beam_template.thickness;
              const _p$4 = 0;
              const _tmp$3 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(distance, _p$3, _p$4);
              const _p$5 = _beam_template.color;
              const beam_shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp$3, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$5));
              moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, center_pos);
              const sprite = Milky2018$selene$sprite$$Sprite$from_shape(beam_shape, _template.z_index, { _0: -distance / 2, _1: -_beam_template.thickness / 2 }, 0);
              sprite.transform = Milky2018$selene$math$$Transform$from_rotation_rad(angle);
              sprite_component = sprite;
            }
            break;
          }
          default: {
            const _FromParent = _bind$14;
            const _clone_template = _FromParent._0;
            const _bind$16 = request.parent_entity;
            if (_bind$16 === undefined) {
              const _p$3 = 0;
              const _p$4 = 0;
              const _p$5 = 0;
              const _tmp$3 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$3, _p$4, _p$5);
              const _p$6 = "transparent";
              sprite_component = Milky2018$selene$sprite$$Sprite$from_shape(Milky2018$selene$sprite$$ColoredShape$new(_tmp$3, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$6)), 0, undefined, undefined);
            } else {
              const _Some$2 = _bind$16;
              const _parent_entity = _Some$2;
              const _bind$17 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _parent_entity);
              if (_bind$17 === undefined) {
                const _p$3 = 0;
                const _p$4 = 0;
                const _p$5 = 0;
                const _tmp$3 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$3, _p$4, _p$5);
                const _p$6 = "transparent";
                sprite_component = Milky2018$selene$sprite$$Sprite$from_shape(Milky2018$selene$sprite$$ColoredShape$new(_tmp$3, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$6)), 0, undefined, undefined);
              } else {
                const _Some$3 = _bind$17;
                const _parent_sprite = _Some$3;
                const _bind$18 = _parent_sprite.sprite_type;
                let original_shape_opt;
                switch (_bind$18.$tag) {
                  case 4: {
                    const _ColoredShape = _bind$18;
                    const _cs = _ColoredShape._0;
                    original_shape_opt = _cs.shape;
                    break;
                  }
                  case 0: {
                    const _Picture$2 = _bind$18;
                    const _pic = _Picture$2._0;
                    const _p$3 = Milky2018$selene$math$$Vec2D$op_get(_pic.size, 0);
                    const _p$4 = Milky2018$selene$math$$Vec2D$op_get(_pic.size, 1);
                    const _p$5 = 0;
                    original_shape_opt = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$3, _p$4, _p$5);
                    break;
                  }
                  case 1: {
                    const _Animation$2 = _bind$18;
                    const _anim$2 = _Animation$2._0;
                    if (_anim$2.frames.length > 0) {
                      const frame_size = moonbitlang$core$array$$Array$at$88$(_anim$2.frames, 0).size;
                      const _p$6 = Milky2018$selene$math$$Vec2D$op_get(frame_size, 0);
                      const _p$7 = Milky2018$selene$math$$Vec2D$op_get(frame_size, 1);
                      const _p$8 = 0;
                      original_shape_opt = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$6, _p$7, _p$8);
                    } else {
                      original_shape_opt = undefined;
                    }
                    break;
                  }
                  case 3: {
                    const _ColorRect = _bind$18;
                    const _rect = _ColorRect._0;
                    const _p$6 = Milky2018$selene$math$$Vec2D$op_get(_rect.size, 0);
                    const _p$7 = Milky2018$selene$math$$Vec2D$op_get(_rect.size, 1);
                    const _p$8 = 0;
                    original_shape_opt = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$6, _p$7, _p$8);
                    break;
                  }
                  default: {
                    original_shape_opt = undefined;
                  }
                }
                if (original_shape_opt === undefined) {
                  const _p$9 = 0;
                  const _p$10 = 0;
                  const _p$11 = 0;
                  const _tmp$3 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$9, _p$10, _p$11);
                  const _p$12 = "transparent";
                  sprite_component = Milky2018$selene$sprite$$Sprite$from_shape(Milky2018$selene$sprite$$ColoredShape$new(_tmp$3, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$12)), 0, undefined, undefined);
                } else {
                  const _Some$4 = original_shape_opt;
                  const _shape$2 = _Some$4;
                  let _bind$19;
                  switch (_shape$2.$tag) {
                    case 1: {
                      const _Circle = _shape$2;
                      const _r = _Circle._0;
                      const new_radius = _r + _clone_template.size_padding;
                      _bind$19 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(new_radius), _1: _parent_sprite.offset };
                      break;
                    }
                    case 0: {
                      const _Rect = _shape$2;
                      const _w = _Rect._0;
                      const _h = _Rect._1;
                      const _corner_radius = _Rect._2;
                      const new_w = _w + _clone_template.size_padding * 2;
                      const new_h = _h + _clone_template.size_padding * 2;
                      _bind$19 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(new_w, new_h, _corner_radius), _1: { _0: -new_w / 2, _1: -new_h / 2 } };
                      break;
                    }
                    case 3: {
                      const _Triangle = _shape$2;
                      const _s = _Triangle._0;
                      const _rotation = _Triangle._1;
                      const new_s = _s + _clone_template.size_padding * 2;
                      _bind$19 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Triangle(new_s, _rotation), _1: _parent_sprite.offset };
                      break;
                    }
                    default: {
                      _bind$19 = { _0: _shape$2, _1: _parent_sprite.offset };
                    }
                  }
                  const _new_shape = _bind$19._0;
                  const _new_offset = _bind$19._1;
                  const _p$9 = _clone_template.color_override;
                  const new_graphic = Milky2018$selene$sprite$$ColoredShape$new(_new_shape, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$9));
                  const new_z_index = _parent_sprite.zindex + _clone_template.z_index_offset | 0;
                  const new_sprite = Milky2018$selene$sprite$$Sprite$from_shape(new_graphic, new_z_index, _new_offset, 0);
                  new_sprite.transform = _parent_sprite.transform;
                  sprite_component = new_sprite;
                }
              }
            }
          }
        }
        moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, vfx_entity, sprite_component);
        const _bind$17 = _template.sprite_template;
        if (_bind$17.$tag === 2) {
          const _Animation$2 = _bind$17;
          const _anim$2 = _Animation$2._0;
          Milky2018$selene$sprite$$play_animation(vfx_entity, _anim$2, -1, -1, Option$None$0$, undefined);
        }
        _L: {
          _L$2: {
            const _bind$18 = _template.sprite_template;
            if (_bind$18.$tag === 4) {
              const _bind$19 = request.to_position;
              if (_bind$19 === undefined) {
                break _L$2;
              } else {
                const _Some$2 = _bind$19;
                const _to_pos = _Some$2;
                const center_pos = SuYiTao$45$SYT$CyberScavenger$$vec2d_lerp(request.position, _to_pos, 0.5);
                moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, center_pos);
              }
            } else {
              break _L$2;
            }
            break _L;
          }
          const _bind$18 = request.parent_entity;
          if (_bind$18 === undefined) {
            moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, request.position);
          } else {
            const _Some$2 = _bind$18;
            const _parent = _Some$2;
            moonbitlang$core$builtin$$Map$set$36$(SuYiTao$45$SYT$CyberScavenger$$vfx_follows, vfx_entity, { parent: _parent, offset: { _0: 0, _1: 0 } });
            const _bind$19 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _parent);
            if (_bind$19 === undefined) {
            } else {
              const _Some$3 = _bind$19;
              const _parent_pos = _Some$3;
              moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, _parent_pos);
            }
          }
        }
        moonbitlang$core$builtin$$Map$set$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances, vfx_entity, _template.behavior.lifecycle);
        const _bind$18 = _template.behavior.dynamic_transform;
        if (_bind$18 === undefined) {
        } else {
          const _Some$2 = _bind$18;
          const _dt = _Some$2;
          moonbitlang$core$builtin$$Map$set$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, vfx_entity, _dt);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val);
}
function SuYiTao$45$SYT$CyberScavenger$$vfx_update_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances);
  _bind$12((entity) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances, entity);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _instance_lifecycle = _Some;
      let should_destroy = false;
      if (_instance_lifecycle.$tag === 0) {
        const _Timer = _instance_lifecycle;
        const _remaining = _Timer._0;
        const new_duration = _remaining - 0.0166666666666666664;
        if (new_duration <= 0) {
          should_destroy = true;
        } else {
          moonbitlang$core$builtin$$Map$set$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances, entity, new VFX_Lifecycle$Timer(new_duration));
        }
      } else {
        if (Milky2018$selene$sprite$$is_animation_finished(entity)) {
          should_destroy = true;
        }
      }
      if (should_destroy) {
        moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, entity);
        moonbitlang$core$builtin$$Map$remove$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances, entity);
      }
    }
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$dynamic_transform_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms);
  _bind$12((entity) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, entity);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _transform_data = _Some;
      if (Milky2018$selene$system$$Entity$is_alive(entity)) {
        const new_angle = _transform_data._current_angle + _transform_data.rotation_speed * 0.0166666666666666664;
        const new_time = _transform_data._time_elapsed + 0.0166666666666666664;
        const updated_transform_data = { is_pulsing_scale: _transform_data.is_pulsing_scale, rotation_speed: _transform_data.rotation_speed, scale_speed: _transform_data.scale_speed, scale_amplitude: _transform_data.scale_amplitude, _current_angle: new_angle, _time_elapsed: new_time };
        const current_scale = _transform_data.is_pulsing_scale ? 1 + Kaida$45$Amethyst$math$$sin(new_time * _transform_data.scale_speed) * _transform_data.scale_amplitude : 1 + new_time * _transform_data.scale_speed;
        const _bind$14 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
        if (_bind$14 === undefined) {
        } else {
          const _Some$2 = _bind$14;
          const _sprite = _Some$2;
          const scale_transform = Milky2018$selene$math$$Transform$from_scale(current_scale, current_scale);
          const rotation_transform = Milky2018$selene$math$$Transform$from_rotation_rad(new_angle);
          const final_transform = moonbitlang$core$builtin$$Mul$mul$148$(rotation_transform, scale_transform);
          _sprite.transform = final_transform;
        }
        moonbitlang$core$builtin$$Map$set$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, entity, updated_transform_data);
      }
    }
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$update_unit_orientation(entity, direction) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _sprite = _Some;
    const target_angle = Kaida$45$Amethyst$math$$atan2(Milky2018$selene$math$$Vec2D$op_get(direction, 1), Milky2018$selene$math$$Vec2D$op_get(direction, 0));
    const base_rotation = Milky2018$selene$math$$Transform$get_rotation_rad(_sprite.transform);
    const angle_to_apply = target_angle - base_rotation;
    _sprite.transform = moonbitlang$core$builtin$$Mul$mul$148$(_sprite.transform, Milky2018$selene$math$$Transform$from_rotation_rad(angle_to_apply));
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$unit_orientation_system(_backend) {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit = _arr[_i];
      if (Milky2018$selene$system$$Entity$is_alive(unit)) {
        let new_direction = undefined;
        const _bind$12 = moonbitlang$core$builtin$$Map$get$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, unit);
        if (_bind$12 === undefined) {
          if (moonbitlang$core$builtin$$op_notequal$30$(SuYiTao$45$SYT$CyberScavenger$$player_head.val, unit)) {
            const _bind$13 = moonbitlang$core$builtin$$Map$get$48$(Milky2018$selene$velocity$$velocities, unit);
            if (_bind$13 === undefined) {
            } else {
              const _Some = _bind$13;
              const _vel = _Some;
              if (Milky2018$selene$math$$Vec2D$distance_to(_vel, { _0: 0, _1: 0 }) > 0.1) {
                new_direction = Milky2018$selene$math$$Vec2D$normalize(_vel);
              }
            }
          }
        } else {
          const _Some = _bind$12;
          const _target = _Some;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
          if (_bind$13 === undefined) {
          } else {
            const _Some$2 = _bind$13;
            const _unit_pos = _Some$2;
            const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _target);
            if (_bind$14 === undefined) {
            } else {
              const _Some$3 = _bind$14;
              const _target_pos = _Some$3;
              const direction_vec = { _0: _target_pos._0 - _unit_pos._0, _1: _target_pos._1 - _unit_pos._1 };
              if (Milky2018$selene$math$$Vec2D$distance_to(direction_vec, { _0: 0, _1: 0 }) > 1) {
                new_direction = Milky2018$selene$math$$Vec2D$normalize(direction_vec);
              }
            }
          }
        }
        const _bind$13 = new_direction;
        if (_bind$13 === undefined) {
        } else {
          const _Some = _bind$13;
          const _dir = _Some;
          SuYiTao$45$SYT$CyberScavenger$$update_unit_orientation(unit, _dir);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$vfx_movement_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$iter$42$(SuYiTao$45$SYT$CyberScavenger$$vfx_movements);
  _bind$12((entry) => {
    const entity = entry._0;
    const movement = entry._1;
    if (Milky2018$selene$system$$Entity$is_alive(entity)) {
      const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, entity);
      if (_bind$13 === undefined) {
      } else {
        const _Some = _bind$13;
        const _pos = _Some;
        const _p = movement.velocity;
        const _p$2 = 0.0166666666666666664;
        const _p$3 = { _0: _p._0 * _p$2, _1: _p._1 * _p$2 };
        const new_pos = { _0: _pos._0 + _p$3._0, _1: _pos._1 + _p$3._1 };
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, new_pos);
      }
    }
    return 1;
  });
}
const SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$constr$47$6618 = "#FFD700";
const SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$constr$47$6619 = "bold 24px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$record$47$6620 = { is_pulsing_scale: false, rotation_speed: 0, scale_speed: 0.2, scale_amplitude: 0, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$constr$47$6621 = new VFX_Lifecycle$Timer(1.2);
function SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx(score, position) {
  const vfx_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, position);
  const layout = Milky2018$selene$system$$TextLayout$new(`+${moonbitlang$core$builtin$$Show$to_string$4$(score)}`, SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$constr$47$6618, SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$constr$47$6619, undefined, undefined, Option$None$0$);
  const sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(layout, 999, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, vfx_entity, sprite);
  moonbitlang$core$builtin$$Map$set$42$(SuYiTao$45$SYT$CyberScavenger$$vfx_movements, vfx_entity, { velocity: { _0: -150, _1: -250 } });
  moonbitlang$core$builtin$$Map$set$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, vfx_entity, SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$record$47$6620);
  moonbitlang$core$builtin$$Map$set$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances, vfx_entity, SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx$46$constr$47$6621);
}
function SuYiTao$45$SYT$CyberScavenger$$vfx_follow_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$iter2$36$(SuYiTao$45$SYT$CyberScavenger$$vfx_follows);
  _bind$12((vfx_entity, follow_data) => {
    if (Milky2018$selene$system$$Entity$is_alive(follow_data.parent)) {
      const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, follow_data.parent);
      if (_bind$13 === undefined) {
      } else {
        const _Some = _bind$13;
        const _parent_pos = _Some;
        const _p = follow_data.offset;
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, vfx_entity, { _0: _parent_pos._0 + _p._0, _1: _parent_pos._1 + _p._1 });
      }
    } else {
      moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, vfx_entity);
      moonbitlang$core$builtin$$Map$remove$36$(SuYiTao$45$SYT$CyberScavenger$$vfx_follows, vfx_entity);
    }
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$signed_angle_between(v1, v2) {
  const v1_norm = Milky2018$selene$math$$Vec2D$normalize(v1);
  const v2_norm = Milky2018$selene$math$$Vec2D$normalize(v2);
  const dot = v1_norm._0 * v2_norm._0 + v1_norm._1 * v2_norm._1;
  const cross = Milky2018$selene$math$$Vec2D$op_get(v1_norm, 0) * Milky2018$selene$math$$Vec2D$op_get(v2_norm, 1) - Milky2018$selene$math$$Vec2D$op_get(v1_norm, 1) * Milky2018$selene$math$$Vec2D$op_get(v2_norm, 0);
  return Kaida$45$Amethyst$math$$atan2(cross, dot);
}
function SuYiTao$45$SYT$CyberScavenger$$rotate_vec2d(vec, angle_rad) {
  const cos_a = Kaida$45$Amethyst$math$$cos(angle_rad);
  const sin_a = Kaida$45$Amethyst$math$$sin(angle_rad);
  const new_x = Milky2018$selene$math$$Vec2D$op_get(vec, 0) * cos_a - Milky2018$selene$math$$Vec2D$op_get(vec, 1) * sin_a;
  const new_y = Milky2018$selene$math$$Vec2D$op_get(vec, 0) * sin_a + Milky2018$selene$math$$Vec2D$op_get(vec, 1) * cos_a;
  return { _0: new_x, _1: new_y };
}
function SuYiTao$45$SYT$CyberScavenger$$attach_health_bar() {
  const bar_bg = Milky2018$selene$system$$Entity$new();
  const bar_fg = Milky2018$selene$system$$Entity$new();
  const shield_frame = Milky2018$selene$system$$Entity$new();
  const bg_color_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 50, _1: 5 }, "red");
  const fg_color_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 50, _1: 5 }, "lime");
  const bg_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(bg_color_rect, 8, undefined, 1);
  const fg_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(fg_color_rect, 9, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, bar_bg, bg_sprite);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, bar_fg, fg_sprite);
  const shield_frame_rect = Milky2018$selene$sprite$$ColorRect$new({ _0: 60, _1: 7 }, "#00FFFF");
  const frame_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect(shield_frame_rect, 7, undefined, 1);
  frame_sprite.visible = false;
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, shield_frame, frame_sprite);
  return { _0: bar_bg, _1: bar_fg, _2: shield_frame };
}
const SuYiTao$45$SYT$CyberScavenger$$update_health_bars_system$46$tuple$47$6659 = { _0: 64, _1: 64 };
const SuYiTao$45$SYT$CyberScavenger$$update_health_bars_system$46$constr$47$6660 = 0;
function SuYiTao$45$SYT$CyberScavenger$$update_health_bars_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$34$(SuYiTao$45$SYT$CyberScavenger$$healths);
  _bind$12((unit) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _unit_pos = _Some;
      const _bind$14 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, unit);
      if (_bind$14 === undefined) {
      } else {
        const _Some$2 = _bind$14;
        const _unit_sprite = _Some$2;
        const _bind$15 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, unit);
        if (_bind$15 === undefined) {
        } else {
          const _Some$3 = _bind$15;
          const _health = _Some$3;
          const _bind$16 = _unit_sprite.sprite_type;
          let _bind$17;
          switch (_bind$16.$tag) {
            case 0: {
              const _Picture = _bind$16;
              const _pic = _Picture._0;
              _bind$17 = { _0: Milky2018$selene$math$$Vec2D$op_get(_pic.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_pic.size, 1) };
              break;
            }
            case 1: {
              const _Animation = _bind$16;
              const _anim = _Animation._0;
              _bind$17 = { _0: Milky2018$selene$math$$Vec2D$op_get(moonbitlang$core$array$$Array$at$88$(_anim.frames, 0).size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(moonbitlang$core$array$$Array$at$88$(_anim.frames, 0).size, 1) };
              break;
            }
            case 3: {
              const _ColorRect = _bind$16;
              const _rect = _ColorRect._0;
              _bind$17 = { _0: Milky2018$selene$math$$Vec2D$op_get(_rect.size, 0), _1: Milky2018$selene$math$$Vec2D$op_get(_rect.size, 1) };
              break;
            }
            default: {
              _bind$17 = SuYiTao$45$SYT$CyberScavenger$$update_health_bars_system$46$tuple$47$6659;
            }
          }
          const _unit_width = _bind$17._0;
          const _unit_height = _bind$17._1;
          const bar_width = _unit_width * 1;
          const bar_pos_x = Milky2018$selene$math$$Vec2D$op_get(_unit_pos, 0) - bar_width / 2;
          const bar_pos_y = Milky2018$selene$math$$Vec2D$op_get(_unit_pos, 1) - _unit_height / 2 - 3;
          const bar_pos = { _0: bar_pos_x, _1: bar_pos_y };
          moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, _health.bar_bg_entity, bar_pos);
          moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, _health.bar_fg_entity, bar_pos);
          moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, _health.shield_frame_entity, bar_pos);
          const health_percentage = _health.current / _health.max;
          const _bind$18 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _health.bar_fg_entity);
          if (_bind$18 === undefined) {
          } else {
            const _Some$4 = _bind$18;
            const _fg_sprite = _Some$4;
            const _bind$19 = _fg_sprite.sprite_type;
            if (_bind$19.$tag === 3) {
              const _ColorRect$2 = _bind$19;
              const _rect$2 = _ColorRect$2._0;
              const new_rect_size = { _0: bar_width * health_percentage, _1: 5 };
              const new_rect = { size: new_rect_size, color: _rect$2.color };
              const new_fg_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(new_rect, _fg_sprite.zindex, _fg_sprite.offset, _fg_sprite.layer);
              moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _health.bar_fg_entity, new_fg_sprite);
            }
          }
          const _bind$19 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _health.bar_bg_entity);
          if (_bind$19 === undefined) {
          } else {
            const _Some$4 = _bind$19;
            const _bg_sprite = _Some$4;
            const _bind$20 = _bg_sprite.sprite_type;
            if (_bind$20.$tag === 3) {
              const _ColorRect$2 = _bind$20;
              const _rect$2 = _ColorRect$2._0;
              const new_size = { _0: bar_width, _1: 5 };
              const new_rect = { size: new_size, color: _rect$2.color };
              const new_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(new_rect, _bg_sprite.zindex, _bg_sprite.offset, _bg_sprite.layer);
              moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _health.bar_bg_entity, new_sprite);
            }
          }
          const _bind$20 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _health.shield_frame_entity);
          if (_bind$20 === undefined) {
          } else {
            const _Some$4 = _bind$20;
            const _frame_sprite = _Some$4;
            const is_player = moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit), SuYiTao$45$SYT$CyberScavenger$$update_health_bars_system$46$constr$47$6660);
            const _bind$21 = SuYiTao$45$SYT$CyberScavenger$$team_charge_shield.val;
            let is_shield_active;
            if (_bind$21 === undefined) {
              is_shield_active = false;
            } else {
              const _Some$5 = _bind$21;
              const _s = _Some$5;
              is_shield_active = _s.charges > 0;
            }
            _frame_sprite.visible = is_player && is_shield_active;
            const _bind$22 = _frame_sprite.sprite_type;
            if (_bind$22.$tag === 3) {
              const _ColorRect$2 = _bind$22;
              const _rect$2 = _ColorRect$2._0;
              if (Milky2018$selene$math$$Vec2D$op_get(_rect$2.size, 0) !== bar_width || Milky2018$selene$math$$Vec2D$op_get(_rect$2.size, 1) !== 8) {
                const new_size = { _0: bar_width, _1: 8 };
                const new_rect = { size: new_size, color: _rect$2.color };
                const new_sprite = Milky2018$selene$sprite$$Sprite$from_color_rect$46$inner(new_rect, _frame_sprite.zindex, { _0: 0, _1: -3 }, _frame_sprite.layer);
                new_sprite.visible = _frame_sprite.visible;
                moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _health.shield_frame_entity, new_sprite);
              }
            }
          }
        }
      }
    }
    return 1;
  });
}
const SuYiTao$45$SYT$CyberScavenger$$update_shield_display_system$46$constr$47$6720 = "#00FFFF";
const SuYiTao$45$SYT$CyberScavenger$$update_shield_display_system$46$constr$47$6721 = "bold 24px mplus_hzk";
function SuYiTao$45$SYT$CyberScavenger$$update_shield_display_system(_backend) {
  _L: {
    const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$team_charge_shield.val;
    if (_bind$12 === undefined) {
      break _L;
    } else {
      const _Some = _bind$12;
      const _shield = _Some;
      if (_shield.charges > 0) {
        const display_text = `x${moonbitlang$core$builtin$$Show$to_string$4$(_shield.charges)}`;
        const _bind$13 = SuYiTao$45$SYT$CyberScavenger$$team_shield_display_entity.val;
        if (_bind$13 === undefined) {
          moonbitlang$core$builtin$$println$86$("【UI】: 首次获得护盾，创建显示UI...");
          const new_entity = Milky2018$selene$system$$Entity$new();
          const layout = Milky2018$selene$system$$TextLayout$new(display_text, SuYiTao$45$SYT$CyberScavenger$$update_shield_display_system$46$constr$47$6720, SuYiTao$45$SYT$CyberScavenger$$update_shield_display_system$46$constr$47$6721, undefined, undefined, Option$None$0$);
          const sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(layout, 200, undefined, 1);
          moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, new_entity, sprite);
          SuYiTao$45$SYT$CyberScavenger$$team_shield_display_entity.val = new_entity;
          return;
        } else {
          const _Some$2 = _bind$13;
          const _entity = _Some$2;
          const _bind$14 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _entity);
          if (_bind$14 === undefined) {
          } else {
            const _Some$3 = _bind$14;
            const _old_sprite = _Some$3;
            const _bind$15 = _old_sprite.sprite_type;
            if (_bind$15.$tag === 5) {
              const _TextLayout = _bind$15;
              const _old_layout = _TextLayout._0;
              const _p = _old_layout.content;
              if (!(_p === display_text)) {
                const new_layout = Milky2018$selene$system$$TextLayout$new(display_text, _old_layout.color, _old_layout.font, _old_layout.max_width, _old_layout.align, new Option$Some$0$(_old_layout.line_height));
                const new_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(new_layout, _old_sprite.zindex, undefined, _old_sprite.layer);
                moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _entity, new_sprite);
              }
            }
          }
          const _bind$15 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
          if (_bind$15 === undefined) {
            return;
          } else {
            const _Some$3 = _bind$15;
            const _head = _Some$3;
            const _bind$16 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _head);
            if (_bind$16 === undefined) {
              return;
            } else {
              const _Some$4 = _bind$16;
              const _head_pos = _Some$4;
              const _p = { _0: -10, _1: -10 };
              const new_pos = { _0: _head_pos._0 + _p._0, _1: _head_pos._1 + _p._1 };
              moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, _entity, new_pos);
              return;
            }
          }
        }
      } else {
        break _L;
      }
    }
  }
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$team_shield_display_entity.val;
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _entity = _Some;
    moonbitlang$core$builtin$$println$86$("【UI】: 护盾消失，销毁显示UI...");
    moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, _entity);
    Milky2018$selene$system$$Entity$destroy(_entity);
    SuYiTao$45$SYT$CyberScavenger$$team_shield_display_entity.val = undefined;
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$is_point_inside_centered_rect(point, rect_area) {
  const rect_pos = rect_area.position;
  const rect_size = rect_area.size;
  return Milky2018$selene$math$$Vec2D$op_get(point, 0) >= Milky2018$selene$math$$Vec2D$op_get(rect_pos, 0) - Milky2018$selene$math$$Vec2D$op_get(rect_size, 0) / 2 && (Milky2018$selene$math$$Vec2D$op_get(point, 0) <= Milky2018$selene$math$$Vec2D$op_get(rect_pos, 0) + Milky2018$selene$math$$Vec2D$op_get(rect_size, 0) / 2 && (Milky2018$selene$math$$Vec2D$op_get(point, 1) >= Milky2018$selene$math$$Vec2D$op_get(rect_pos, 1) - Milky2018$selene$math$$Vec2D$op_get(rect_size, 1) / 2 && Milky2018$selene$math$$Vec2D$op_get(point, 1) <= Milky2018$selene$math$$Vec2D$op_get(rect_pos, 1) + Milky2018$selene$math$$Vec2D$op_get(rect_size, 1) / 2));
}
const SuYiTao$45$SYT$CyberScavenger$$cleanup_ui$46$constr$47$6756 = 0;
function SuYiTao$45$SYT$CyberScavenger$$cleanup_ui() {
  moonbitlang$core$builtin$$println$86$("【调试日志 A】: 检测到状态切换，开始清理旧的UI...");
  const _arr = SuYiTao$45$SYT$CyberScavenger$$ui_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      }
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$squad_display_slots.val;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const slot = _arr$2[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, slot.portrait_entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, slot.portrait_entity);
      }
      Milky2018$selene$system$$Entity$destroy(slot.portrait_entity);
      const _bind$13 = moonbitlang$core$builtin$$Map$get$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, slot.delete_button_entity);
      if (_bind$13 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, slot.delete_button_entity);
      }
      const _bind$14 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, slot.delete_button_entity);
      if (_bind$14 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, slot.delete_button_entity);
      }
      Milky2018$selene$system$$Entity$destroy(slot.delete_button_entity);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$3 = SuYiTao$45$SYT$CyberScavenger$$squad_builder_unit_buttons.val;
  const _len$3 = _arr$3.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len$3) {
      const entity = _arr$3[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      }
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$4 = SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val;
  const _len$4 = _arr$4.length;
  let _tmp$4 = 0;
  while (true) {
    const _i = _tmp$4;
    if (_i < _len$4) {
      const entity = _arr$4[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      }
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp$4 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr$5 = SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities.val;
  const _len$5 = _arr$5.length;
  let _tmp$5 = 0;
  while (true) {
    const _i = _tmp$5;
    if (_i < _len$5) {
      const entity = _arr$5[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      }
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp$5 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  SuYiTao$45$SYT$CyberScavenger$$ui_entities.val = [];
  SuYiTao$45$SYT$CyberScavenger$$squad_display_slots.val = [];
  SuYiTao$45$SYT$CyberScavenger$$squad_builder_unit_buttons.val = [];
  SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val = [];
  SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities.val = [];
  moonbitlang$core$builtin$$Map$clear$9$(SuYiTao$45$SYT$CyberScavenger$$buttons);
  SuYiTao$45$SYT$CyberScavenger$$current_synergy_filter.val = SuYiTao$45$SYT$CyberScavenger$$cleanup_ui$46$constr$47$6756;
  SuYiTao$45$SYT$CyberScavenger$$current_shape_filter.val = undefined;
  SuYiTao$45$SYT$CyberScavenger$$selected_unit_for_detail_view.val = undefined;
  moonbitlang$core$builtin$$println$86$("【调试日志 C】: 旧UI清理完毕！");
}
const SuYiTao$45$SYT$CyberScavenger$$add_map$46$constr$47$6789 = 3;
function SuYiTao$45$SYT$CyberScavenger$$add_map() {
  const map_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, map_entity, { _0: -2, _1: -2 });
  const background_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, background_entity, { _0: 0, _1: 0 });
  const background_picture = Milky2018$selene$sprite$$Picture$new({ _0: 1975, _1: 1095 }, "assets/gfx/background_tile.png", undefined, SuYiTao$45$SYT$CyberScavenger$$add_map$46$constr$47$6789);
  const map_sprite = Milky2018$selene$sprite$$Sprite$from_picture(background_picture, -100, undefined, undefined);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, map_entity, map_sprite);
}
function SuYiTao$45$SYT$CyberScavenger$$cleanup_game_world() {
  moonbitlang$core$builtin$$println$86$("【清理】: 正在彻底清理游戏世界中的所有单位...");
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit = _arr[_i];
      if (Milky2018$selene$system$$Entity$is_alive(unit)) {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, unit);
        const _bind$12 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, unit);
        if (_bind$12 === undefined) {
        } else {
          const _Some = _bind$12;
          const _health = _Some;
          moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, _health.bar_bg_entity);
          moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, _health.bar_fg_entity);
          Milky2018$selene$system$$Entity$destroy(_health.bar_bg_entity);
          Milky2018$selene$system$$Entity$destroy(_health.bar_fg_entity);
        }
        moonbitlang$core$builtin$$Map$remove$34$(SuYiTao$45$SYT$CyberScavenger$$healths, unit);
        moonbitlang$core$builtin$$Map$remove$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, unit);
        moonbitlang$core$builtin$$Map$remove$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit);
        moonbitlang$core$builtin$$Map$remove$43$(SuYiTao$45$SYT$CyberScavenger$$destinations, unit);
        moonbitlang$core$builtin$$Map$remove$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, unit);
        moonbitlang$core$builtin$$Map$remove$5$(Milky2018$selene$position$$positions, unit);
        moonbitlang$core$builtin$$Map$remove$48$(Milky2018$selene$velocity$$velocities, unit);
        moonbitlang$core$builtin$$Map$remove$38$(SuYiTao$45$SYT$CyberScavenger$$score_values, unit);
        moonbitlang$core$builtin$$Map$remove$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats, unit);
        moonbitlang$core$builtin$$Map$remove$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, unit);
        moonbitlang$core$builtin$$Map$remove$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, unit);
        moonbitlang$core$builtin$$println$86$("【清理】: 正在清理所有抛射物...");
        const _bind$13 = moonbitlang$core$builtin$$Map$keys$49$(SuYiTao$45$SYT$CyberScavenger$$projectiles);
        _bind$13((projectile_entity) => {
          if (Milky2018$selene$system$$Entity$is_alive(projectile_entity)) {
            moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, projectile_entity);
            moonbitlang$core$builtin$$Map$remove$5$(Milky2018$selene$position$$positions, projectile_entity);
            moonbitlang$core$builtin$$Map$remove$48$(Milky2018$selene$velocity$$velocities, projectile_entity);
            Milky2018$selene$system$$Entity$destroy(projectile_entity);
          }
          return 1;
        });
        moonbitlang$core$builtin$$println$86$("【清理】: 正在清理所有VFX...");
        const _bind$14 = moonbitlang$core$builtin$$Map$keys$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances);
        _bind$14((vfx_entity) => {
          if (Milky2018$selene$system$$Entity$is_alive(vfx_entity)) {
            moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, vfx_entity);
            moonbitlang$core$builtin$$Map$remove$5$(Milky2018$selene$position$$positions, vfx_entity);
            moonbitlang$core$builtin$$Map$remove$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, vfx_entity);
            moonbitlang$core$builtin$$Map$remove$42$(SuYiTao$45$SYT$CyberScavenger$$vfx_movements, vfx_entity);
            Milky2018$selene$system$$Entity$destroy(vfx_entity);
          }
          return 1;
        });
        moonbitlang$core$builtin$$println$86$("【清理】: 正在清理所有拾取物...");
        const _bind$15 = moonbitlang$core$builtin$$Map$keys$33$(SuYiTao$45$SYT$CyberScavenger$$pickups);
        _bind$15((pickup_entity) => {
          if (Milky2018$selene$system$$Entity$is_alive(pickup_entity)) {
            moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, pickup_entity);
            Milky2018$selene$system$$Entity$destroy(pickup_entity);
          }
          return 1;
        });
        Milky2018$selene$system$$Entity$destroy(unit);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val);
  moonbitlang$core$builtin$$Map$clear$49$(SuYiTao$45$SYT$CyberScavenger$$projectiles);
  moonbitlang$core$builtin$$Map$clear$47$(SuYiTao$45$SYT$CyberScavenger$$vfx_instances);
  moonbitlang$core$builtin$$Map$clear$34$(SuYiTao$45$SYT$CyberScavenger$$healths);
  moonbitlang$core$builtin$$Map$clear$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats);
  moonbitlang$core$builtin$$Map$clear$44$(SuYiTao$45$SYT$CyberScavenger$$teams);
  moonbitlang$core$builtin$$Map$clear$43$(SuYiTao$45$SYT$CyberScavenger$$destinations);
  moonbitlang$core$builtin$$Map$clear$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets);
  moonbitlang$core$builtin$$Map$clear$5$(Milky2018$selene$position$$positions);
  moonbitlang$core$builtin$$Map$clear$48$(Milky2018$selene$velocity$$velocities);
  moonbitlang$core$builtin$$Map$clear$38$(SuYiTao$45$SYT$CyberScavenger$$score_values);
  moonbitlang$core$builtin$$Map$clear$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats);
  moonbitlang$core$builtin$$Map$clear$39$(SuYiTao$45$SYT$CyberScavenger$$sizes);
  moonbitlang$core$builtin$$Map$clear$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars);
  moonbitlang$core$builtin$$Map$clear$37$(SuYiTao$45$SYT$CyberScavenger$$team_abilities);
  moonbitlang$core$builtin$$Map$clear$40$(SuYiTao$45$SYT$CyberScavenger$$cooldown_ability_units);
  moonbitlang$core$builtin$$Map$clear$36$(SuYiTao$45$SYT$CyberScavenger$$vfx_follows);
  moonbitlang$core$builtin$$Map$clear$33$(SuYiTao$45$SYT$CyberScavenger$$pickups);
  SuYiTao$45$SYT$CyberScavenger$$add_map();
  moonbitlang$core$builtin$$println$86$("【清理】: 游戏世界彻底清理完毕。");
}
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6808 = "white";
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6809 = "bold 32px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6810 = new Option$Some$0$(1280);
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6811 = SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6810;
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6812 = new ButtonAction$SwitchState(2);
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$42$bind$47$6813 = new ButtonAction$SwitchState(3);
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$42$bind$47$6814 = new ButtonAction$SwitchState(3);
const SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$42$bind$47$6815 = new ButtonAction$SwitchState(3);
function SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui() {
  moonbitlang$core$builtin$$println$86$("【调试日志 D】: 正在创建【主菜单】UI...");
  if (!SuYiTao$45$SYT$CyberScavenger$$audio_unlocked.val) {
    moonbitlang$core$builtin$$println$86$("【音频】: 音频未解锁，正在创建提示界面...");
    const overlay = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, overlay, { _0: 0, _1: 0 });
    const _p = 1280;
    const _p$2 = 720;
    const _p$3 = 0;
    const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p, _p$2, _p$3);
    const _p$4 = "rgba(0, 0, 0, 0.7)";
    const shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4));
    const sprite = Milky2018$selene$sprite$$Sprite$from_shape(shape, 998, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, overlay, sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, overlay, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, overlay);
    const prompt_text = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, prompt_text, { _0: 0, _1: 360 });
    const layout = Milky2018$selene$system$$TextLayout$new("请点击屏幕任意位置以开启声音与音效", SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6808, SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6809, SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6811, 1, Option$None$0$);
    const text_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(layout, 999, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, prompt_text, text_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, prompt_text, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, prompt_text);
    const unlock_button_entity = Milky2018$selene$system$$Entity$new();
    const button_comp = { area: { position: { _0: 640, _1: 360 }, size: { _0: 1280, _1: 720 } }, action: ButtonAction$UnlockAudio, normal_appearance: new ButtonAppearance$FromPicture("", { _0: 0, _1: 0 }), hover_appearance: new ButtonAppearance$FromPicture("", { _0: 0, _1: 0 }), is_hovered: false, category: 0 };
    moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, unlock_button_entity, button_comp);
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, unlock_button_entity);
  }
  const title_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, title_entity, { _0: 450, _1: 200 });
  const title_sprite = Milky2018$selene$sprite$$Sprite$from_animation$46$inner(SuYiTao$45$SYT$CyberScavenger$$title_animation, 1, { _0: -400, _1: -150 }, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, title_entity, title_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, title_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, title_entity);
  const kanban_girl_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, kanban_girl_entity, { _0: 1200, _1: 200 });
  const kanban_girl_sprite = Milky2018$selene$sprite$$Sprite$from_animation$46$inner(SuYiTao$45$SYT$CyberScavenger$$kanban_girl_animation, 1, { _0: -400, _1: -150 }, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, kanban_girl_entity, kanban_girl_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, kanban_girl_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, kanban_girl_entity);
  const scale_transform = Milky2018$selene$math$$Transform$from_scale(1.619, 1.619);
  kanban_girl_sprite.transform = moonbitlang$core$builtin$$Mul$mul$148$(kanban_girl_sprite.transform, scale_transform);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, kanban_girl_entity, kanban_girl_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, kanban_girl_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, kanban_girl_entity);
  const start_button_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, start_button_entity, { _0: 230, _1: 400 });
  const start_normal_pic = Milky2018$selene$sprite$$Picture$new({ _0: 220, _1: 60 }, "assets/gui/start_menu/start.png", undefined, undefined);
  const start_sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(start_normal_pic, 1, { _0: -110, _1: -30 }, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, start_button_entity, start_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, start_button_entity, Milky2018$selene$ui$$Ui$new());
  const start_button_component = { area: { position: { _0: 230, _1: 400 }, size: { _0: 220, _1: 60 } }, action: SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$constr$47$6812, normal_appearance: new ButtonAppearance$FromPicture("assets/gui/start_menu/start.png", { _0: 220, _1: 60 }), hover_appearance: new ButtonAppearance$FromPicture("assets/gui/start_menu/start_light.png", { _0: 220, _1: 60 }), is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, start_button_entity, start_button_component);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, start_button_entity);
  const archive_button_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, archive_button_entity, { _0: 180, _1: 470 });
  const archive_normal_pic = Milky2018$selene$sprite$$Picture$new({ _0: 110, _1: 60 }, "assets/gui/start_menu/archive.png", undefined, undefined);
  const archive_sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(archive_normal_pic, 1, { _0: -60, _1: -30 }, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, archive_button_entity, archive_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, archive_button_entity, Milky2018$selene$ui$$Ui$new());
  const _bind$12 = { position: { _0: 180, _1: 470 }, size: { _0: 110, _1: 60 } };
  const _bind$13 = new ButtonAppearance$FromPicture("assets/gui/start_menu/archive.png", { _0: 110, _1: 60 });
  const _bind$14 = new ButtonAppearance$FromPicture("assets/gui/start_menu/archive_light.png", { _0: 110, _1: 60 });
  const archive_button_component = { area: _bind$12, action: SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$42$bind$47$6813, normal_appearance: _bind$13, hover_appearance: _bind$14, is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, archive_button_entity, archive_button_component);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, archive_button_entity);
  const settings_button_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, settings_button_entity, { _0: 180, _1: 540 });
  const settings_normal_pic = Milky2018$selene$sprite$$Picture$new({ _0: 110, _1: 60 }, "assets/gui/start_menu/settings.png", undefined, undefined);
  Milky2018$selene$sprite$$Picture$new({ _0: 120, _1: 60 }, "assets/gui/start_menu/settings_light.png", undefined, undefined);
  const settings_sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(settings_normal_pic, 1, { _0: -60, _1: -30 }, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, settings_button_entity, settings_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, settings_button_entity, Milky2018$selene$ui$$Ui$new());
  const _bind$15 = { position: { _0: 180, _1: 540 }, size: { _0: 110, _1: 60 } };
  const _bind$16 = new ButtonAppearance$FromPicture("assets/gui/start_menu/settings.png", { _0: 110, _1: 60 });
  const _bind$17 = new ButtonAppearance$FromPicture("assets/gui/start_menu/settings_light.png", { _0: 110, _1: 60 });
  const settings_button_component = { area: _bind$15, action: SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$42$bind$47$6814, normal_appearance: _bind$16, hover_appearance: _bind$17, is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, settings_button_entity, settings_button_component);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, settings_button_entity);
  const about_button_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, about_button_entity, { _0: 180, _1: 610 });
  const about_normal_pic = Milky2018$selene$sprite$$Picture$new({ _0: 110, _1: 60 }, "assets/gui/start_menu/about.png", undefined, undefined);
  Milky2018$selene$sprite$$Picture$new({ _0: 120, _1: 60 }, "assets/gui/start_menu/about_light.png", undefined, undefined);
  const about_sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(about_normal_pic, 1, { _0: -60, _1: -30 }, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, about_button_entity, about_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, about_button_entity, Milky2018$selene$ui$$Ui$new());
  const _bind$18 = { position: { _0: 180, _1: 610 }, size: { _0: 110, _1: 60 } };
  const _bind$19 = new ButtonAppearance$FromPicture("assets/gui/start_menu/about.png", { _0: 110, _1: 60 });
  const _bind$20 = new ButtonAppearance$FromPicture("assets/gui/start_menu/about_light.png", { _0: 110, _1: 60 });
  const about_button_component = { area: _bind$18, action: SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui$46$42$bind$47$6815, normal_appearance: _bind$19, hover_appearance: _bind$20, is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, about_button_entity, about_button_component);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, about_button_entity);
}
const SuYiTao$45$SYT$CyberScavenger$$create_tutorial_joystick_visuals$46$record$47$6856 = { is_pulsing_scale: true, rotation_speed: 0, scale_speed: 2, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
function SuYiTao$45$SYT$CyberScavenger$$create_tutorial_joystick_visuals() {
  const base_pos = { _0: 200, _1: 550 };
  const base_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, base_entity, base_pos);
  const _p = 80;
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p);
  const _p$2 = "rgba(128, 128, 128, 0.3)";
  const base_shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$2));
  const base_sprite = Milky2018$selene$sprite$$Sprite$from_shape(base_shape, 80, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, base_entity, base_sprite);
  const handle_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, handle_entity, base_pos);
  const _p$3 = 40;
  const _tmp$2 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$3);
  const _p$4 = "rgba(200, 200, 200, 0.5)";
  const handle_shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp$2, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4));
  const handle_sprite = Milky2018$selene$sprite$$Sprite$from_shape(handle_shape, 81, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, handle_entity, handle_sprite);
  moonbitlang$core$builtin$$Map$set$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, handle_entity, SuYiTao$45$SYT$CyberScavenger$$create_tutorial_joystick_visuals$46$record$47$6856);
  SuYiTao$45$SYT$CyberScavenger$$tutorial_joystick_entities.val = [base_entity, handle_entity];
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, base_entity);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, handle_entity);
}
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6864 = "white";
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6865 = "bold 36px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6866 = "white";
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6867 = "bold 24px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6868 = new Option$Some$0$(500);
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6869 = SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6868;
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6870 = new Option$Some$0$(26);
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6871 = "gray";
const SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6872 = "36px mplus_hzk";
function SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud() {
  const score_label = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, score_label, { _0: 100, _1: 70 });
  const score_layout = Milky2018$selene$system$$TextLayout$new("Score: 0", SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6864, SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6865, undefined, undefined, Option$None$0$);
  const score_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(score_layout, 100, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, score_label, score_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, score_label, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, score_label);
  SuYiTao$45$SYT$CyberScavenger$$score_display_entity.val = score_label;
  const wave_label = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, wave_label, { _0: 700, _1: 70 });
  const wave_layout = Milky2018$selene$system$$TextLayout$new("Wave: 0", SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6866, SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6867, SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6869, 2, SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6870);
  const wave_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(wave_layout, 100, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, wave_label, wave_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, wave_label, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, wave_label);
  SuYiTao$45$SYT$CyberScavenger$$wave_display_entity.val = wave_label;
  const tutorial_label = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, tutorial_label, { _0: 200, _1: 680 });
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val;
  let initial_tutorial_text;
  switch (_bind$12) {
    case 0: {
      initial_tutorial_text = "按“A”键可左转，按“D”键可右转，按“P”键可暂停";
      break;
    }
    case 1: {
      initial_tutorial_text = "使用 WASD 或方向键移动，按“P”键可暂停";
      break;
    }
    default: {
      initial_tutorial_text = "使用虚拟摇杆移动";
    }
  }
  const tutorial_layout = Milky2018$selene$system$$TextLayout$new(initial_tutorial_text, SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6871, SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud$46$constr$47$6872, undefined, 1, Option$None$0$);
  const tutorial_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(tutorial_layout, 100, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, tutorial_label, tutorial_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, tutorial_label, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, tutorial_label);
  SuYiTao$45$SYT$CyberScavenger$$tutorial_text_entity.val = tutorial_label;
  if (moonbitlang$core$builtin$$Eq$equal$17$(SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val, 2)) {
    SuYiTao$45$SYT$CyberScavenger$$create_tutorial_joystick_visuals();
    return;
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$update_wave_display_system(_backend) {
  if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 1)) {
    const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$wave_display_entity.val;
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const _entity = _Some;
      const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _entity);
      if (_bind$13 === undefined) {
      } else {
        const _Some$2 = _bind$13;
        const _old_sprite = _Some$2;
        const _bind$14 = _old_sprite.sprite_type;
        if (_bind$14.$tag === 5) {
          const _TextLayout = _bind$14;
          const _old_layout = _TextLayout._0;
          const _p = 0;
          const _p$2 = SuYiTao$45$SYT$CyberScavenger$$spawn_timer.val;
          const seconds_to_next_wave = moonbitlang$core$double$$Double$to_int(_p > _p$2 ? _p : _p$2);
          let new_wave_text = SuYiTao$45$SYT$CyberScavenger$$wave_count.val === 0 ? `首波敌人还有 ${moonbitlang$core$builtin$$Show$to_string$4$(seconds_to_next_wave)} 秒来袭` : `目前第 ${moonbitlang$core$builtin$$Show$to_string$4$(SuYiTao$45$SYT$CyberScavenger$$wave_count.val)} 波\n下一波敌人还有 ${moonbitlang$core$builtin$$Show$to_string$4$(seconds_to_next_wave)} 秒来袭`;
          let waves_until_heal = 5 - (SuYiTao$45$SYT$CyberScavenger$$wave_count.val % 5 | 0) | 0;
          if (waves_until_heal === 0) {
            waves_until_heal = 5;
          }
          new_wave_text = `${new_wave_text}\n距下次全队治疗还有 ${moonbitlang$core$builtin$$Show$to_string$4$(waves_until_heal)} 波`;
          const _p$3 = _old_layout.content;
          const _p$4 = new_wave_text;
          if (!(_p$3 === _p$4)) {
            const new_layout = Milky2018$selene$system$$TextLayout$new(new_wave_text, _old_layout.color, _old_layout.font, _old_layout.max_width, 2, new Option$Some$0$(_old_layout.line_height));
            const new_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout$46$inner(new_layout, _old_sprite.zindex, _old_sprite.offset, _old_sprite.layer);
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _entity, new_sprite);
          }
        }
      }
    }
    const _bind$13 = SuYiTao$45$SYT$CyberScavenger$$tutorial_text_entity.val;
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some = _bind$13;
      const _entity = _Some;
      const _bind$14 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _entity);
      if (_bind$14 === undefined) {
        return;
      } else {
        const _Some$2 = _bind$14;
        const _sprite = _Some$2;
        if (SuYiTao$45$SYT$CyberScavenger$$wave_count.val > 0 && _sprite.visible) {
          _sprite.visible = false;
          moonbitlang$core$builtin$$println$86$("【游戏逻辑】: 第一波已开始，隐藏操作提示。");
          return;
        } else {
          return;
        }
      }
    }
  } else {
    return;
  }
}
const SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6905 = "white";
const SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6906 = "bold 24px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6907 = "yellow";
const SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6908 = "bold 24px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$42$bind$47$6909 = new ButtonAction$SwitchState(0);
function SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui() {
  const button_entity = Milky2018$selene$system$$Entity$new();
  const button_pos = { _0: 640, _1: 300 };
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, button_entity, button_pos);
  const layout = Milky2018$selene$system$$TextLayout$new(SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$initial_text$124$1019, SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6905, SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6906, undefined, 1, Option$None$0$);
  const sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(layout, 5, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, button_entity, sprite);
  const button_comp = { area: { position: button_pos, size: { _0: 300, _1: 50 } }, action: ButtonAction$ToggleControlScheme, normal_appearance: new ButtonAppearance$FromTextLayout(layout), hover_appearance: new ButtonAppearance$FromTextLayout(Milky2018$selene$system$$TextLayout$new(SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$initial_text$124$1019, SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6907, SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$constr$47$6908, undefined, 1, Option$None$0$)), is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, button_entity, button_comp);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, button_entity);
  SuYiTao$45$SYT$CyberScavenger$$control_scheme_button.val = button_entity;
  const back_button_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, back_button_entity, { _0: 400, _1: 450 });
  const back_text = Milky2018$selene$sprite$$Text$new$46$inner("---WIP---[Back to Main Menu]", "white", "32px mplus_hzk");
  const back_sprite = Milky2018$selene$sprite$$Sprite$from_text(back_text, 1, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, back_button_entity, back_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, back_button_entity, Milky2018$selene$ui$$Ui$new());
  const _bind$12 = { position: { _0: 400, _1: 425 }, size: { _0: 600, _1: 50 } };
  const _bind$13 = new ButtonAppearance$FromText(back_text);
  const _bind$14 = new ButtonAppearance$FromText(back_text);
  const back_button_component = { area: _bind$12, action: SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui$46$42$bind$47$6909, normal_appearance: _bind$13, hover_appearance: _bind$14, is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, back_button_entity, back_button_component);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, back_button_entity);
}
const SuYiTao$45$SYT$CyberScavenger$$update_control_scheme_display$46$constr$47$6922 = "yellow";
function SuYiTao$45$SYT$CyberScavenger$$update_control_scheme_display() {
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$control_scheme_button.val;
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _entity = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _entity);
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$13;
      const _old_sprite = _Some$2;
      const _bind$14 = SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val;
      let current_text;
      switch (_bind$14) {
        case 0: {
          current_text = "操作模式: AD转向";
          break;
        }
        case 1: {
          current_text = "操作模式: WASD全方向";
          break;
        }
        default: {
          current_text = "操作模式: 虚拟摇杆";
        }
      }
      const _bind$15 = _old_sprite.sprite_type;
      if (_bind$15.$tag === 5) {
        const _TextLayout = _bind$15;
        const _old_layout = _TextLayout._0;
        const _p = _old_layout.content;
        if (!(_p === current_text)) {
          const new_layout = Milky2018$selene$system$$TextLayout$new(current_text, _old_layout.color, _old_layout.font, _old_layout.max_width, _old_layout.align, new Option$Some$0$(_old_layout.line_height));
          const new_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(new_layout, _old_sprite.zindex, undefined, _old_sprite.layer);
          moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _entity, new_sprite);
          const _bind$16 = moonbitlang$core$builtin$$Map$get$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, _entity);
          if (_bind$16 === undefined) {
            return;
          } else {
            const _Some$3 = _bind$16;
            const _button = _Some$3;
            const new_hover_layout = Milky2018$selene$system$$TextLayout$new(current_text, SuYiTao$45$SYT$CyberScavenger$$update_control_scheme_display$46$constr$47$6922, _old_layout.font, _old_layout.max_width, _old_layout.align, new Option$Some$0$(_old_layout.line_height));
            moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, _entity, { area: _button.area, action: _button.action, normal_appearance: new ButtonAppearance$FromTextLayout(new_layout), hover_appearance: new ButtonAppearance$FromTextLayout(new_hover_layout), is_hovered: _button.is_hovered, category: _button.category });
            return;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6940 = { _0: 0, _1: "assets/gui/squad/tabs/orange_normal.png", _2: "assets/gui/squad/tabs/orange_light.png" };
const SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6941 = { _0: 1, _1: "assets/gui/squad/tabs/purple_normal.png", _2: "assets/gui/squad/tabs/purple_light.png" };
const SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6942 = { _0: 2, _1: "assets/gui/squad/tabs/green_normal.png", _2: "assets/gui/squad/tabs/green_light.png" };
const SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6943 = { _0: 3, _1: "assets/gui/squad/tabs/blue_normal.png", _2: "assets/gui/squad/tabs/blue_light.png" };
function SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs() {
  const synergy_tags_to_show = [SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6940, SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6941, SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6942, SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs$46$tuple$47$6943];
  const button_size = { _0: 150, _1: 60 };
  const _end974 = synergy_tags_to_show.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end974) {
      const _bind$12 = moonbitlang$core$array$$Array$at$91$(synergy_tags_to_show, i);
      const _tag = _bind$12._0;
      const _normal_path = _bind$12._1;
      const _hover_path = _bind$12._2;
      const pos = { _0: 150 - (i + 0) * 2, _1: 70 + (i + 0) * 55 };
      const entity = Milky2018$selene$system$$Entity$new();
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, pos);
      const initial_path = moonbitlang$core$builtin$$Eq$equal$108$(SuYiTao$45$SYT$CyberScavenger$$current_synergy_filter.val, _tag) ? _hover_path : _normal_path;
      const picture = Milky2018$selene$sprite$$Picture$new(button_size, initial_path, undefined, undefined);
      const offset = { _0: -button_size._0 / 2, _1: -button_size._1 / 2 };
      const sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(picture, 1, offset, 1);
      moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, entity, sprite);
      moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, entity, Milky2018$selene$ui$$Ui$new());
      const button_comp = { area: { position: pos, size: button_size }, action: new ButtonAction$SetSynergyFilter(_tag), normal_appearance: new ButtonAppearance$FromPicture(_normal_path, button_size), hover_appearance: new ButtonAppearance$FromPicture(_hover_path, button_size), is_hovered: false, category: 0 };
      moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity, button_comp);
      moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, entity);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$setup_squad_builder_grid_buttons() {
  const i = { val: 0 };
  const _bind$12 = moonbitlang$core$builtin$$Map$iter$32$(SuYiTao$45$SYT$CyberScavenger$$unit_definitions);
  _bind$12((entry) => {
    const _unit_type = entry._0;
    const _def = entry._1;
    const row = (i.val / 4 | 0) + 0;
    const col = (i.val % 4 | 0) + 0;
    const pos = { _0: 400 + col * 230, _1: 90 + row * 120 };
    const entity = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, pos);
    const _bind$13 = _def.shape_tag;
    let _bind$14;
    switch (_bind$13) {
      case 0: {
        const _p = 50;
        const _p$2 = 50;
        const _p$3 = 0;
        _bind$14 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p, _p$2, _p$3), _1: { _0: -25, _1: -25 }, _2: 0 };
        break;
      }
      case 1: {
        const _p$4 = 55;
        const _p$5 = 0;
        _bind$14 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Triangle(_p$4, _p$5), _1: { _0: 0, _1: 0 }, _2: 18 };
        break;
      }
      default: {
        const _p$6 = 25;
        _bind$14 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$6), _1: { _0: 0, _1: 0 }, _2: 0 };
      }
    }
    const _base_shape = _bind$14._0;
    const _offset = _bind$14._1;
    const _p$7 = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, _def.color_tag);
    const _p$8 = "#FFFFFF";
    let color_str;
    if (_p$7 === undefined) {
      color_str = _p$8;
    } else {
      const _p$9 = _p$7;
      color_str = _p$9;
    }
    const colored_shape = Milky2018$selene$sprite$$ColoredShape$new(_base_shape, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(color_str));
    const sprite = Milky2018$selene$sprite$$Sprite$from_shape(colored_shape, 1, _offset, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, entity, sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, entity, Milky2018$selene$ui$$Ui$new());
    const button_comp = { area: { position: pos, size: { _0: 125, _1: 125 } }, action: new ButtonAction$SelectUnit(_unit_type), normal_appearance: new ButtonAppearance$FromShape(colored_shape, _offset), hover_appearance: new ButtonAppearance$FromShape(colored_shape, _offset), is_hovered: false, category: 0 };
    moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity, button_comp);
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$squad_builder_unit_buttons.val, entity);
    i.val = i.val + 1 | 0;
    return 1;
  });
}
const SuYiTao$45$SYT$CyberScavenger$$setup_squad_display_slots$46$constr$47$6977 = "pink";
const SuYiTao$45$SYT$CyberScavenger$$setup_squad_display_slots$46$constr$47$6978 = "bold 16px mplus_hzk";
function SuYiTao$45$SYT$CyberScavenger$$setup_squad_display_slots() {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 6) {
      const i_double = i + 0;
      let pos = { _0: 1000, _1: 350 + i_double * 150 };
      if (i >= 3) {
        pos = { _0: 1150, _1: 650 - (i_double - 3) * 150 };
      }
      const portrait_entity = Milky2018$selene$system$$Entity$new();
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, portrait_entity, pos);
      const _p = 1;
      const _tmp$2 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p);
      const _p$2 = "transparent";
      const temp_shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp$2, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$2));
      const sprite = Milky2018$selene$sprite$$Sprite$from_shape(temp_shape, 2, undefined, 1);
      sprite.visible = false;
      moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, portrait_entity, sprite);
      moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, portrait_entity, Milky2018$selene$ui$$Ui$new());
      const delete_button_entity = Milky2018$selene$system$$Entity$new();
      const delete_button_pos = { _0: pos._0 + 20, _1: pos._1 - 20 };
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, delete_button_entity, delete_button_pos);
      const delete_layout = Milky2018$selene$system$$TextLayout$new("X", SuYiTao$45$SYT$CyberScavenger$$setup_squad_display_slots$46$constr$47$6977, SuYiTao$45$SYT$CyberScavenger$$setup_squad_display_slots$46$constr$47$6978, undefined, undefined, Option$None$0$);
      const delete_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(delete_layout, 10, undefined, 1);
      delete_sprite.visible = false;
      moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, delete_button_entity, delete_sprite);
      moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, delete_button_entity, Milky2018$selene$ui$$Ui$new());
      const delete_button_comp = { area: { position: delete_button_pos, size: { _0: 100, _1: 100 } }, action: new ButtonAction$DeselectUnit(i), normal_appearance: new ButtonAppearance$FromTextLayout(delete_layout), hover_appearance: new ButtonAppearance$FromTextLayout(delete_layout), is_hovered: false, category: 0 };
      moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, delete_button_entity, delete_button_comp);
      moonbitlang$core$array$$Array$push$89$(SuYiTao$45$SYT$CyberScavenger$$squad_display_slots.val, { portrait_entity: portrait_entity, delete_button_entity: delete_button_entity });
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$setup_squad_guide_ui() {
  SuYiTao$45$SYT$CyberScavenger$$active_ui_category.val = 1;
  const squad_guide_image_paths = ["assets/gui/guide/squad_guide_01.png", "assets/gui/guide/squad_guide_02.png", "assets/gui/guide/squad_guide_03.png", "assets/gui/guide/squad_guide_04.png", "assets/gui/guide/squad_guide_05.png"];
  const guide_image_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, guide_image_entity, { _0: 0, _1: 0 });
  const current_path = moonbitlang$core$array$$Array$at$86$(squad_guide_image_paths, SuYiTao$45$SYT$CyberScavenger$$current_guide_image_index.val);
  const sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(Milky2018$selene$sprite$$Picture$new({ _0: 1280, _1: 720 }, current_path, undefined, undefined), 999, { _0: 0, _1: 0 }, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, guide_image_entity, sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, guide_image_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$guide_entities.val, guide_image_entity);
  const guide_button_entity = Milky2018$selene$system$$Entity$new();
  const button_comp = { area: { position: { _0: 640, _1: 360 }, size: { _0: 1280, _1: 720 } }, action: ButtonAction$NextGuidePage, normal_appearance: new ButtonAppearance$FromPicture("", { _0: 0, _1: 0 }), hover_appearance: new ButtonAppearance$FromPicture("", { _0: 0, _1: 0 }), is_hovered: false, category: 1 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, guide_button_entity, button_comp);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$guide_entities.val, guide_button_entity);
}
const SuYiTao$45$SYT$CyberScavenger$$setup_squad_builder_ui$46$constr$47$6997 = new ButtonAction$SwitchState(1);
function SuYiTao$45$SYT$CyberScavenger$$setup_squad_builder_ui() {
  if (!SuYiTao$45$SYT$CyberScavenger$$squad_guide_shown.val) {
    moonbitlang$core$builtin$$println$86$("【UI】: 首次进入组队界面，显示新手引导...");
    SuYiTao$45$SYT$CyberScavenger$$is_guide_active.val = true;
    SuYiTao$45$SYT$CyberScavenger$$current_guide_image_index.val = 0;
    SuYiTao$45$SYT$CyberScavenger$$setup_squad_guide_ui();
  } else {
    moonbitlang$core$builtin$$println$86$("【UI】: 组队引导已看过，显示正常组队界面...");
    SuYiTao$45$SYT$CyberScavenger$$is_guide_active.val = false;
  }
  const squad_background = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, squad_background, { _0: 0, _1: 0 });
  const squad_background_pic = Milky2018$selene$sprite$$Picture$new({ _0: 1280, _1: 720 }, "assets/gui/squad/squad_background.png", undefined, undefined);
  const squad_background_sprite = Milky2018$selene$sprite$$Sprite$from_picture(squad_background_pic, 0, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, squad_background, squad_background_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, squad_background, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, squad_background);
  const title = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, title, { _0: 955, _1: 20 });
  const title_pic = Milky2018$selene$sprite$$Picture$new({ _0: 400, _1: 80 }, "assets/gui/squad/squad_title.png", undefined, undefined);
  const title_sprite = Milky2018$selene$sprite$$Sprite$from_picture(title_pic, 1, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, title, title_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, title);
  const confirm_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, confirm_entity, { _0: 480, _1: 450 });
  const confirm_text = Milky2018$selene$sprite$$Text$new$46$inner("[确认队伍并开始]", "white", "32px mplus_hzk");
  const confirm_text_hl = Milky2018$selene$sprite$$Text$new$46$inner("[确认队伍并开始]", "yellow", "32px mplus_hzk");
  const confirm_sprite = Milky2018$selene$sprite$$Sprite$from_text(confirm_text, 1, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, confirm_entity, confirm_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, confirm_entity, Milky2018$selene$ui$$Ui$new());
  const confirm_button_comp = { area: { position: { _0: 480, _1: 450 }, size: { _0: 500, _1: 50 } }, action: SuYiTao$45$SYT$CyberScavenger$$setup_squad_builder_ui$46$constr$47$6997, normal_appearance: new ButtonAppearance$FromText(confirm_text), hover_appearance: new ButtonAppearance$FromText(confirm_text_hl), is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, confirm_entity, confirm_button_comp);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, confirm_entity);
  SuYiTao$45$SYT$CyberScavenger$$setup_filter_tabs();
  SuYiTao$45$SYT$CyberScavenger$$setup_squad_builder_grid_buttons();
  SuYiTao$45$SYT$CyberScavenger$$setup_squad_display_slots();
}
function SuYiTao$45$SYT$CyberScavenger$$cleanup_guide_ui() {
  moonbitlang$core$builtin$$println$86$("【UI清理】: 正在清理引导页面...");
  const _arr = SuYiTao$45$SYT$CyberScavenger$$guide_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity);
      }
      const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
      if (_bind$13 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      }
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  SuYiTao$45$SYT$CyberScavenger$$guide_entities.val = [];
}
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7016 = "red";
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7017 = "bold 80px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7018 = "white";
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7019 = "bold 32px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7020 = "white";
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7021 = "32px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7022 = new ButtonAction$SwitchState(0);
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7023 = "yellow";
const SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7024 = "32px mplus_hzk";
function SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui() {
  const game_over_title = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, game_over_title, { _0: 640, _1: 300 });
  const layout = Milky2018$selene$system$$TextLayout$new("GAME OVER", SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7016, SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7017, undefined, 1, Option$None$0$);
  const sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(layout, 15, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, game_over_title, sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, game_over_title, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, game_over_title);
  const final_score_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, final_score_entity, { _0: 640, _1: 380 });
  const score_text = `最终得分: ${moonbitlang$core$builtin$$Show$to_string$4$(SuYiTao$45$SYT$CyberScavenger$$score.val)}`;
  const score_layout = Milky2018$selene$system$$TextLayout$new(score_text, SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7018, SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7019, undefined, 1, Option$None$0$);
  const score_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(score_layout, 15, undefined, 1);
  const game_over_background = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, game_over_background, { _0: 0, _1: 0 });
  const _p = 1300;
  const _p$2 = 800;
  const _p$3 = 0;
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p, _p$2, _p$3);
  const _p$4 = "rgba(125, 125, 125, 0.50)";
  const background = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4));
  const sprite$2 = Milky2018$selene$sprite$$Sprite$from_shape(background, 10, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, game_over_background, sprite$2);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, game_over_background, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, game_over_background);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, final_score_entity, score_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, final_score_entity, Milky2018$selene$ui$$Ui$new());
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, final_score_entity);
  const back_button = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, back_button, { _0: 640, _1: 450 });
  const back_layout = Milky2018$selene$system$$TextLayout$new("[ 返回主菜单 ]", SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7020, SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7021, undefined, undefined, Option$None$0$);
  const back_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(back_layout, 15, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, back_button, back_sprite);
  moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, back_button, Milky2018$selene$ui$$Ui$new());
  const button_comp = { area: { position: { _0: 640, _1: 450 }, size: { _0: 300, _1: 50 } }, action: SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7022, normal_appearance: new ButtonAppearance$FromTextLayout(back_layout), hover_appearance: new ButtonAppearance$FromTextLayout(Milky2018$selene$system$$TextLayout$new("[ 返回主菜单 ]", SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7023, SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui$46$constr$47$7024, undefined, undefined, Option$None$0$)), is_hovered: false, category: 0 };
  moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, back_button, button_comp);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, back_button);
}
function SuYiTao$45$SYT$CyberScavenger$$update_grid_visibility() {
  let visible_unit_count = 0;
  const _arr = SuYiTao$45$SYT$CyberScavenger$$squad_builder_unit_buttons.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _button = _Some;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
        if (_bind$13 === undefined) {
        } else {
          const _Some$2 = _bind$13;
          const _sprite = _Some$2;
          const _bind$14 = _button.action;
          if (_bind$14.$tag === 1) {
            const _SelectUnit = _bind$14;
            const _unit_type = _SelectUnit._0;
            const _p = moonbitlang$core$builtin$$Map$get$32$(SuYiTao$45$SYT$CyberScavenger$$unit_definitions, _unit_type);
            let def;
            if (_p === undefined) {
              def = $panic();
            } else {
              const _p$2 = _p;
              def = _p$2;
            }
            const _bind$15 = SuYiTao$45$SYT$CyberScavenger$$current_synergy_filter.val;
            let synergy_match;
            if (_bind$15 === undefined) {
              synergy_match = true;
            } else {
              const _Some$3 = _bind$15;
              const _filter = _Some$3;
              synergy_match = moonbitlang$core$builtin$$Eq$equal$80$(def.color_tag, _filter);
            }
            const _bind$16 = SuYiTao$45$SYT$CyberScavenger$$current_shape_filter.val;
            let shape_match;
            if (_bind$16 === undefined) {
              shape_match = true;
            } else {
              const _Some$3 = _bind$16;
              const _filter = _Some$3;
              shape_match = moonbitlang$core$builtin$$Eq$equal$81$(def.shape_tag, _filter);
            }
            if (synergy_match && shape_match) {
              _sprite.visible = true;
              const row = (visible_unit_count / 4 | 0) + 0;
              const col = (visible_unit_count % 4 | 0) + 0;
              const new_pos = { _0: 400 + col * 230, _1: 90 + row * 120 };
              moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, new_pos);
              const _bind$17 = _button.area;
              const _tmp$2 = { position: new_pos, size: _bind$17.size };
              const _tmp$3 = _button.action;
              const _tmp$4 = _button.normal_appearance;
              const _tmp$5 = _button.hover_appearance;
              const _tmp$6 = _button.is_hovered;
              const new_button = { area: _tmp$2, action: _tmp$3, normal_appearance: _tmp$4, hover_appearance: _tmp$5, is_hovered: _tmp$6, category: _button.category };
              moonbitlang$core$builtin$$Map$set$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity, new_button);
              visible_unit_count = visible_unit_count + 1 | 0;
            } else {
              _sprite.visible = false;
            }
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7068 = "italic bold 24px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7069 = new Option$Some$0$(480);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7070 = SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7069;
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7071 = "italic bold 20px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7072 = new Option$Some$0$(480);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7073 = SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7072;
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7074 = new Option$Some$0$(20);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7075 = "italic bold 20px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7076 = new Option$Some$0$(480);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7077 = SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7076;
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7078 = new Option$Some$0$(20);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7079 = "italic bold 20px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7080 = new Option$Some$0$(480);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7081 = SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7080;
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7082 = new Option$Some$0$(20);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7083 = "italic 20px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7084 = new Option$Some$0$(480);
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7085 = SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7084;
const SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7086 = new Option$Some$0$(22);
function SuYiTao$45$SYT$CyberScavenger$$update_detail_panel() {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$9$(SuYiTao$45$SYT$CyberScavenger$$buttons, entity);
      }
      const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
      if (_bind$13 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      }
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val = [];
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$hovered_unit_for_detail_view.val;
  let unit_to_display;
  if (_bind$12 === undefined) {
    unit_to_display = SuYiTao$45$SYT$CyberScavenger$$sticky_unit_for_detail_view.val;
  } else {
    const _Some = _bind$12;
    const _hovered_unit = _Some;
    unit_to_display = _hovered_unit;
  }
  if (unit_to_display === undefined) {
    const placeholder = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, placeholder, { _0: 370, _1: 630 });
    const text = Milky2018$selene$sprite$$Text$new$46$inner("（鼠标悬浮在上方单位，可在此处查看详情）", "white", "18px mplus_hzk");
    const sprite = Milky2018$selene$sprite$$Sprite$from_text(text, 1, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, placeholder, sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, placeholder, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, placeholder);
    return;
  } else {
    const _Some = unit_to_display;
    const _unit_type = _Some;
    const _p = moonbitlang$core$builtin$$Map$get$32$(SuYiTao$45$SYT$CyberScavenger$$unit_definitions, _unit_type);
    let def;
    if (_p === undefined) {
      def = $panic();
    } else {
      const _p$2 = _p;
      def = _p$2;
    }
    const name_entity = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, name_entity, { _0: 370, _1: 565 });
    const name_text = Milky2018$selene$system$$TextLayout$new(def.name, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7068, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7070, 1, Option$None$0$);
    const name_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(name_text, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, name_entity, name_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, name_entity, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, name_entity);
    const desc_hp_pic = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, desc_hp_pic, { _0: 380, _1: 580 });
    const desc_health_text = Milky2018$selene$sprite$$Picture$new({ _0: 26, _1: 26 }, "assets/gui/squad/desc/desc_hp.png", undefined, undefined);
    const desc_hp_pic_sprite = Milky2018$selene$sprite$$Sprite$from_picture(desc_health_text, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, desc_hp_pic, desc_hp_pic_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, desc_hp_pic, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, desc_hp_pic);
    const desc_hp = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, desc_hp, { _0: 410, _1: 600 });
    const desc_hp_text = Milky2018$selene$system$$TextLayout$new(`HP: ${moonbitlang$core$builtin$$Show$to_string$4$(def.hp)}`, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7071, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7073, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7074);
    const desc_hp_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(desc_hp_text, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, desc_hp, desc_hp_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, desc_hp, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, desc_hp);
    const desc_atk_pic = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, desc_atk_pic, { _0: 730, _1: 575 });
    const desc_health_text$2 = Milky2018$selene$sprite$$Picture$new({ _0: 26, _1: 40 }, "assets/gui/squad/desc/desc_atk.png", undefined, undefined);
    const desc_atk_pic_sprite = Milky2018$selene$sprite$$Sprite$from_picture(desc_health_text$2, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, desc_atk_pic, desc_atk_pic_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, desc_atk_pic, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, desc_atk_pic);
    const desc_atk = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, desc_atk, { _0: 760, _1: 600 });
    const desc_atk_text = Milky2018$selene$system$$TextLayout$new(`ATK: ${moonbitlang$core$builtin$$Show$to_string$4$(def.atk)}`, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7075, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7077, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7078);
    const desc_atk_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(desc_atk_text, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, desc_atk, desc_atk_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, desc_atk, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, desc_atk);
    let shape_image_path;
    let shape_name;
    _L: {
      const _bind$13 = def.shape_tag;
      switch (_bind$13) {
        case 0: {
          shape_image_path = "assets/gui/squad/desc/desc_shape_square.png";
          shape_name = "近战单位";
          break _L;
        }
        case 1: {
          shape_image_path = "assets/gui/squad/desc/desc_shape_triangle.png";
          shape_name = "远程单位";
          break _L;
        }
        default: {
          shape_image_path = "assets/gui/squad/desc/desc_shape_circle.png";
          shape_name = "辅助单位";
          break _L;
        }
      }
    }
    const desc_shape_pic = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, desc_shape_pic, { _0: 550, _1: 580 });
    const desc_shape_picture = Milky2018$selene$sprite$$Picture$new({ _0: 26, _1: 40 }, shape_image_path, undefined, undefined);
    const desc_shape_pic_sprite = Milky2018$selene$sprite$$Sprite$from_picture(desc_shape_picture, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, desc_shape_pic, desc_shape_pic_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, desc_shape_pic, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, desc_shape_pic);
    const desc_shape = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, desc_shape, { _0: 580, _1: 600 });
    const desc_shape_text = Milky2018$selene$system$$TextLayout$new(shape_name, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7079, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7081, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7082);
    const desc_shape_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(desc_shape_text, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, desc_shape, desc_shape_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, desc_shape, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, desc_shape);
    const desc_entity = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, desc_entity, { _0: 370, _1: 630 });
    const desc_text = Milky2018$selene$system$$TextLayout$new(`【技能】${def.gdd}`, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7083, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7085, undefined, SuYiTao$45$SYT$CyberScavenger$$update_detail_panel$46$constr$47$7086);
    const desc_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(desc_text, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, desc_entity, desc_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, desc_entity, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$detail_panel_entities.val, desc_entity);
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$update_selected_squad_display() {
  const _end845 = SuYiTao$45$SYT$CyberScavenger$$squad_display_slots.val.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end845) {
      const slot = moonbitlang$core$array$$Array$at$89$(SuYiTao$45$SYT$CyberScavenger$$squad_display_slots.val, i);
      const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, slot.portrait_entity);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _portrait_sprite = _Some;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, slot.delete_button_entity);
        if (_bind$13 === undefined) {
        } else {
          const _Some$2 = _bind$13;
          const _delete_sprite = _Some$2;
          if (i < SuYiTao$45$SYT$CyberScavenger$$selected_squad.val.length) {
            const unit_type = moonbitlang$core$array$$Array$at$62$(SuYiTao$45$SYT$CyberScavenger$$selected_squad.val, i);
            const _p = moonbitlang$core$builtin$$Map$get$32$(SuYiTao$45$SYT$CyberScavenger$$unit_definitions, unit_type);
            let def;
            if (_p === undefined) {
              def = $panic();
            } else {
              const _p$2 = _p;
              def = _p$2;
            }
            const _bind$14 = def.shape_tag;
            let _bind$15;
            switch (_bind$14) {
              case 0: {
                const _p$2 = 30;
                const _p$3 = 30;
                const _p$4 = 0;
                _bind$15 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p$2, _p$3, _p$4), _1: { _0: -15, _1: -15 }, _2: 0 };
                break;
              }
              case 1: {
                const _p$5 = 30;
                const _p$6 = 0;
                _bind$15 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Triangle(_p$5, _p$6), _1: { _0: 0, _1: 0 }, _2: 13 };
                break;
              }
              default: {
                const _p$7 = 15;
                _bind$15 = { _0: new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$7), _1: { _0: 0, _1: 0 }, _2: 0 };
              }
            }
            const _base_shape = _bind$15._0;
            const _offset = _bind$15._1;
            const _p$8 = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, def.color_tag);
            const _p$9 = "#FFFFFF";
            let color_str;
            if (_p$8 === undefined) {
              color_str = _p$9;
            } else {
              const _p$10 = _p$8;
              color_str = _p$10;
            }
            const colored_shape = Milky2018$selene$sprite$$ColoredShape$new(_base_shape, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(color_str));
            const new_sprite = Milky2018$selene$sprite$$Sprite$from_shape(colored_shape, _portrait_sprite.zindex, _offset, _portrait_sprite.layer);
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, slot.portrait_entity, new_sprite);
            _portrait_sprite.visible = true;
            _delete_sprite.visible = true;
          } else {
            _portrait_sprite.visible = false;
            _delete_sprite.visible = false;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7151 = "white";
const SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7152 = "italic 19px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7153 = new Option$Some$0$(200);
const SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7154 = SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7153;
const SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7155 = new Option$Some$0$(24);
function SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel() {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, entity);
      if (_bind$12 === undefined) {
      } else {
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      }
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities.val = [];
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$current_synergy_filter.val;
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _filtered_tag = _Some;
    let background_image_path;
    switch (_filtered_tag) {
      case 0: {
        background_image_path = "assets/gui/squad/synergy/synergy_bg_orange.png";
        break;
      }
      case 1: {
        background_image_path = "assets/gui/squad/synergy/synergy_bg_purple.png";
        break;
      }
      case 2: {
        background_image_path = "assets/gui/squad/synergy/synergy_bg_green.png";
        break;
      }
      default: {
        background_image_path = "assets/gui/squad/synergy/synergy_bg_blue.png";
      }
    }
    const bg_light = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, bg_light, { _0: 37, _1: 356 });
    const bg_light_pic = Milky2018$selene$sprite$$Picture$new({ _0: 250, _1: 320 }, background_image_path, undefined, undefined);
    const bg_light_sprite = Milky2018$selene$sprite$$Sprite$from_picture(bg_light_pic, -1, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, bg_light, bg_light_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, bg_light, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities.val, bg_light);
    const title = Milky2018$selene$system$$Entity$new();
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, title, { _0: 100, _1: 380 });
    const title_pic = Milky2018$selene$sprite$$Picture$new({ _0: 400, _1: 80 }, "assets/gui/squad/synergy/synergy_title.png", undefined, undefined);
    const title_sprite = Milky2018$selene$sprite$$Sprite$from_picture(title_pic, 1, undefined, 1);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, title, title_sprite);
    moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, title, Milky2018$selene$ui$$Ui$new());
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities.val, title);
    const _bind$13 = SuYiTao$45$SYT$CyberScavenger$$current_synergy_filter.val;
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$13;
      const _filtered_tag$2 = _Some$2;
      const _bind$14 = moonbitlang$core$builtin$$Map$get$53$(SuYiTao$45$SYT$CyberScavenger$$synergy_database, _filtered_tag$2);
      if (_bind$14 === undefined) {
        return;
      } else {
        const _Some$3 = _bind$14;
        const _synergy_info = _Some$3;
        let count = 0;
        const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$selected_squad.val;
        const _len$2 = _arr$2.length;
        let _tmp$2 = 0;
        while (true) {
          const _i = _tmp$2;
          if (_i < _len$2) {
            const unit_type = _arr$2[_i];
            const _bind$15 = moonbitlang$core$builtin$$Map$get$32$(SuYiTao$45$SYT$CyberScavenger$$unit_definitions, unit_type);
            if (_bind$15 === undefined) {
            } else {
              const _Some$4 = _bind$15;
              const _def = _Some$4;
              if (moonbitlang$core$builtin$$Eq$equal$80$(_def.color_tag, _filtered_tag$2)) {
                count = count + 1 | 0;
              }
            }
            _tmp$2 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let active_bonus_text = "0%";
        const _arr$3 = _synergy_info.tiers;
        const _len$3 = _arr$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _i = _tmp$3;
          if (_i < _len$3) {
            const tier = _arr$3[_i];
            if (count >= tier.count) {
              active_bonus_text = tier.bonus_text;
            }
            _tmp$3 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const final_text = `${_synergy_info.name}\n${_synergy_info.description}\n\n目前队内有${moonbitlang$core$builtin$$Show$to_string$4$(count)}个单位\n${_synergy_info.state}${active_bonus_text}`;
        const panel_entity = Milky2018$selene$system$$Entity$new();
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, panel_entity, { _0: 60, _1: 450 });
        const panel_layout = Milky2018$selene$system$$TextLayout$new(final_text, SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7151, SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7152, SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7154, 1, SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel$46$constr$47$7155);
        const panel_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(panel_layout, 1, undefined, 1);
        moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, panel_entity, panel_sprite);
        moonbitlang$core$builtin$$Map$set$10$(Milky2018$selene$ui$$uis, panel_entity, Milky2018$selene$ui$$Ui$new());
        moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$synergy_panel_entities.val, panel_entity);
        return;
      }
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7197 = "white";
const SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7198 = "italic bold 24px mplus_hzk";
const SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7199 = "gray";
const SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7200 = new Option$Some$0$(25);
function SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display() {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$active_synergies_display_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$6$(SuYiTao$45$SYT$CyberScavenger$$active_synergies_display_entities.val);
  const entity = Milky2018$selene$system$$Entity$new();
  const layout = Milky2018$selene$system$$TextLayout$new("羁绊增益总览", SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7197, SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7198, undefined, undefined, Option$None$0$);
  const sprite = Milky2018$selene$sprite$$Sprite$from_text_layout(layout, 5, undefined, 1);
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, { _0: 1020, _1: 130 });
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, entity, sprite);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$active_synergies_display_entities.val, entity);
  const counts = moonbitlang$core$builtin$$Map$new$46$inner$123$(8);
  const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$selected_squad.val;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const unit_type = _arr$2[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$32$(SuYiTao$45$SYT$CyberScavenger$$unit_definitions, unit_type);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _def = _Some;
        const _p = moonbitlang$core$builtin$$Map$get$123$(counts, _def.color_tag);
        const _p$2 = 0;
        let current_count;
        if (_p === undefined) {
          current_count = _p$2;
        } else {
          const _p$3 = _p;
          current_count = _p$3;
        }
        moonbitlang$core$builtin$$Map$set$123$(counts, _def.color_tag, current_count + 1 | 0);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const display_info = [];
  const _arr$3 = [0, 1, 2, 3];
  const _len$3 = _arr$3.length;
  let _tmp$3 = 0;
  while (true) {
    const _i = _tmp$3;
    if (_i < _len$3) {
      const color_tag = _arr$3[_i];
      const _p = moonbitlang$core$builtin$$Map$get$123$(counts, color_tag);
      const _p$2 = 0;
      let unit_count;
      if (_p === undefined) {
        unit_count = _p$2;
      } else {
        const _p$3 = _p;
        unit_count = _p$3;
      }
      const _bind$12 = moonbitlang$core$builtin$$Map$get$53$(SuYiTao$45$SYT$CyberScavenger$$synergy_database, color_tag);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _synergy_info = _Some;
        let best_tier = undefined;
        const _arr$4 = _synergy_info.tiers;
        const _len$4 = _arr$4.length;
        let _tmp$4 = 0;
        while (true) {
          const _i$2 = _tmp$4;
          if (_i$2 < _len$4) {
            const tier = _arr$4[_i$2];
            if (unit_count >= tier.count) {
              best_tier = tier;
            }
            _tmp$4 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$13 = best_tier;
        if (_bind$13 === undefined) {
        } else {
          const _Some$2 = _bind$13;
          const _activated_tier = _Some$2;
          if (_activated_tier.count > 0) {
            const text = `[${moonbitlang$core$builtin$$Show$to_string$4$(_activated_tier.count)}] ${_synergy_info.name}:\n ${_synergy_info.state} ${_activated_tier.bonus_text}`;
            moonbitlang$core$array$$Array$push$90$(display_info, { _0: color_tag, _1: text });
          }
        }
      }
      _tmp$3 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const start_pos = { _0: 990, _1: 160 };
  if (display_info.length === 0) {
    const entity$2 = Milky2018$selene$system$$Entity$new();
    const layout$2 = Milky2018$selene$system$$TextLayout$new("无羁绊增益", SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7199, SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$font$124$803, undefined, undefined, Option$None$0$);
    const sprite$2 = Milky2018$selene$sprite$$Sprite$from_text_layout(layout$2, 5, undefined, 1);
    moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity$2, start_pos);
    moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, entity$2, sprite$2);
    moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$active_synergies_display_entities.val, entity$2);
    return;
  } else {
    let _tmp$4 = 0;
    while (true) {
      const i = _tmp$4;
      if (i < display_info.length) {
        const _bind$12 = moonbitlang$core$array$$Array$at$90$(display_info, i);
        const _synergy_color = _bind$12._0;
        const _text = _bind$12._1;
        const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, _synergy_color);
        const _p$2 = "#FFFFFF";
        let color_string;
        if (_p === undefined) {
          color_string = _p$2;
        } else {
          const _p$3 = _p;
          color_string = _p$3;
        }
        const y_pos = Milky2018$selene$math$$Vec2D$op_get(start_pos, 1) + (i + 0) * 55;
        const entity$2 = Milky2018$selene$system$$Entity$new();
        const layout$2 = Milky2018$selene$system$$TextLayout$new(_text, color_string, SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$font$124$803, undefined, undefined, SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display$46$constr$47$7200);
        const sprite$2 = Milky2018$selene$sprite$$Sprite$from_text_layout(layout$2, 5, undefined, 1);
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity$2, { _0: Milky2018$selene$math$$Vec2D$op_get(start_pos, 0), _1: y_pos });
        moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, entity$2, sprite$2);
        moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$active_synergies_display_entities.val, entity$2);
        _tmp$4 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$calculate_active_synergies() {
  const counts = moonbitlang$core$builtin$$Map$new$46$inner$123$(8);
  const _arr = SuYiTao$45$SYT$CyberScavenger$$selected_squad.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit_type = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$32$(SuYiTao$45$SYT$CyberScavenger$$unit_definitions, unit_type);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _def = _Some;
        const _p = moonbitlang$core$builtin$$Map$get$123$(counts, _def.color_tag);
        const _p$2 = 0;
        let current_count;
        if (_p === undefined) {
          current_count = _p$2;
        } else {
          const _p$3 = _p;
          current_count = _p$3;
        }
        moonbitlang$core$builtin$$Map$set$123$(counts, _def.color_tag, current_count + 1 | 0);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$println$86$(`【羁绊计算】: 队伍单位统计: ${moonbitlang$core$builtin$$Show$to_string$111$(counts)}`);
  const calculated_buffs = [];
  let calculated_hp_multiplier = 1;
  const _arr$2 = [0, 1, 2, 3];
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const color = _arr$2[_i];
      const _p = moonbitlang$core$builtin$$Map$get$123$(counts, color);
      const _p$2 = 0;
      let unit_count;
      if (_p === undefined) {
        unit_count = _p$2;
      } else {
        const _p$3 = _p;
        unit_count = _p$3;
      }
      const _bind$12 = moonbitlang$core$builtin$$Map$get$53$(SuYiTao$45$SYT$CyberScavenger$$synergy_database, color);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _synergy_info = _Some;
        let best_tier = undefined;
        const _arr$3 = _synergy_info.tiers;
        const _len$3 = _arr$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _i$2 = _tmp$3;
          if (_i$2 < _len$3) {
            const tier = _arr$3[_i$2];
            if (unit_count >= tier.count) {
              best_tier = tier;
            }
            _tmp$3 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$13 = best_tier;
        if (_bind$13 === undefined) {
        } else {
          const _Some$2 = _bind$13;
          const _activated_tier = _Some$2;
          moonbitlang$core$builtin$$println$86$(`  -> 已激活 \`${_synergy_info.name}\` 等级: ${moonbitlang$core$builtin$$Show$to_string$4$(_activated_tier.count)} 个单位`);
          if (moonbitlang$core$builtin$$Eq$equal$80$(color, 0)) {
            calculated_hp_multiplier = _activated_tier.bonus_value;
          } else {
            const _bind$14 = _activated_tier.effect;
            if (_bind$14 === undefined) {
            } else {
              const _Some$3 = _bind$14;
              const _buff = _Some$3;
              moonbitlang$core$array$$Array$push$82$(calculated_buffs, _buff);
            }
          }
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  SuYiTao$45$SYT$CyberScavenger$$active_synergies.val = { buffs: calculated_buffs, hp_multiplier: calculated_hp_multiplier };
  moonbitlang$core$builtin$$println$86$(`【羁绊】: 最终激活的Buff效果: ${moonbitlang$core$builtin$$Show$to_string$113$(SuYiTao$45$SYT$CyberScavenger$$active_synergies.val.buffs)}`);
  moonbitlang$core$builtin$$println$86$(`【羁绊】: 最终HP乘数: ${moonbitlang$core$builtin$$Show$to_string$115$(SuYiTao$45$SYT$CyberScavenger$$active_synergies.val.hp_multiplier)}`);
}
function SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, shape_tag, color_tag) {
  const new_unit = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, new_unit, pos);
  moonbitlang$core$builtin$$Map$set$44$(SuYiTao$45$SYT$CyberScavenger$$teams, new_unit, 0);
  moonbitlang$core$builtin$$Map$set$50$(SuYiTao$45$SYT$CyberScavenger$$synergy_tags, new_unit, color_tag);
  moonbitlang$core$builtin$$Map$set$51$(SuYiTao$45$SYT$CyberScavenger$$unit_shapes, new_unit, shape_tag);
  let base_shape;
  let offset;
  let radius;
  _L: {
    switch (shape_tag) {
      case 0: {
        const _p = 35;
        const _p$2 = 35;
        const _p$3 = 10;
        const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p, _p$2, _p$3);
        const _tmp$2 = { _0: -17.5, _1: -17.5 };
        base_shape = _tmp;
        offset = _tmp$2;
        radius = 20;
        break _L;
      }
      case 1: {
        const _p$4 = 38;
        const _p$5 = 0;
        const _tmp$3 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Triangle(_p$4, _p$5);
        const _tmp$4 = { _0: 0, _1: 0 };
        base_shape = _tmp$3;
        offset = _tmp$4;
        radius = 18;
        break _L;
      }
      default: {
        const _p$6 = 15;
        const _tmp$5 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$6);
        const _tmp$6 = { _0: 0, _1: 0 };
        base_shape = _tmp$5;
        offset = _tmp$6;
        radius = 15;
        break _L;
      }
    }
  }
  moonbitlang$core$builtin$$Map$set$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, new_unit, { radius: radius });
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, color_tag);
  const _p$2 = "#FFFFFF";
  let color_str;
  if (_p === undefined) {
    color_str = _p$2;
  } else {
    const _p$3 = _p;
    color_str = _p$3;
  }
  const colored_shape = Milky2018$selene$sprite$$ColoredShape$new(base_shape, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(color_str));
  const sprite = Milky2018$selene$sprite$$Sprite$from_shape(colored_shape, 100, offset, undefined);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, new_unit, sprite);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7297 = 12;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7298 = new OnHitEffect$DealDamage(1, SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7297);
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$42$bind$47$7299 = 10;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$42$bind$47$7300 = 0;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7301 = new BuffType$AddDamage(2);
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7302 = 17;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7303 = new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7301, 4, SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7302);
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7304 = new BuffType$MultiplyDamage(1.1);
function SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 2, 3);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 6, max: 6, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7298];
  const _bind$14 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 3);
  const _p$2 = "#FFFFFF";
  let _bind$15;
  if (_p === undefined) {
    _bind$15 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$15 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 120, on_hit_effects: _bind$13, attack_cooldown: 2, current_cooldown: 0, aggro_range: 120, attack_type: 2, aoe_radius: 4, crit_rate: 0.05, attack_cast_vfx: SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$42$bind$47$7299, area_effect_vfx: _bind$14, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$42$bind$47$7300, bullet_color: _bind$15 });
  moonbitlang$core$builtin$$Map$set$37$(SuYiTao$45$SYT$CyberScavenger$$team_abilities, new_unit, { effects: [SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7303, new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle$46$constr$47$7304, 4, undefined)], cooldown: 8, current_cooldown: 8, targeting_rule: 1, cast_vfx: undefined, cast_sfx: undefined });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_square$46$42$bind$47$7314 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_blue_square(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 0, 3);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 10, max: 10, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [new OnHitEffect$DealDamage(2, undefined)];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 3);
  const _p$2 = "#FFFFFF";
  let _bind$16;
  if (_p === undefined) {
    _bind$16 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$16 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 60, on_hit_effects: _bind$13, attack_cooldown: 0.5, current_cooldown: 0, aggro_range: 40, attack_type: 3, aoe_radius: 40, crit_rate: 0, attack_cast_vfx: _bind$14, area_effect_vfx: _bind$15, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_blue_square$46$42$bind$47$7314, bullet_color: _bind$16 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7325 = 12;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7326 = new OnHitEffect$DealDamage(4, SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7325);
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7327 = 13;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7328 = new OnHitEffect$DealDamage(1, SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7327);
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7329 = 11;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$42$bind$47$7330 = 10;
const SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$42$bind$47$7331 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 1, 3);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 7, max: 7, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7326, new OnHitEffect$Chain([SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7328], 4, 200, 0.5, SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$constr$47$7329)];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 300, on_hit_effects: _bind$13, attack_cooldown: 1, current_cooldown: 0, aggro_range: 350, attack_type: 2, aoe_radius: 0, crit_rate: 0.05, attack_cast_vfx: SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$42$bind$47$7330, area_effect_vfx: _bind$14, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle$46$42$bind$47$7331, bullet_color: _bind$15 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7341 = 1;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7342 = new OnHitEffect$DealDamage(1, SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7341);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7343 = new OnHitEffect$Knockback(15);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$42$bind$47$7344 = 0;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7345 = 8;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7346 = new OnHitEffect$Heal(1, SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7345);
function SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 2, 2);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 6, max: 6, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7342, new OnHitEffect$AreaOfEffect([new OnHitEffect$DealDamage(1, undefined)], 100, undefined), SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7343];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 2);
  const _p$2 = "#FFFFFF";
  let _bind$16;
  if (_p === undefined) {
    _bind$16 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$16 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 300, on_hit_effects: _bind$13, attack_cooldown: 1, current_cooldown: 0, aggro_range: 350, attack_type: 1, aoe_radius: 4, crit_rate: 0.05, attack_cast_vfx: _bind$14, area_effect_vfx: _bind$15, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$42$bind$47$7344, bullet_color: _bind$16 });
  moonbitlang$core$builtin$$Map$set$37$(SuYiTao$45$SYT$CyberScavenger$$team_abilities, new_unit, { effects: [SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle$46$constr$47$7346], cooldown: 5, current_cooldown: 0, targeting_rule: 2, cast_vfx: undefined, cast_sfx: undefined });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7357 = 4;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7358 = new OnHitEffect$DealDamage(6, SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7357);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7359 = new BuffType$MultiplySpeed(0.5);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7360 = 4;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7361 = new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7359, 3, SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7360);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7362 = 2;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7363 = new OnHitEffect$Knockback(15);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$42$bind$47$7364 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_green_square(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 0, 2);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 9, max: 9, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [new OnHitEffect$CreateHazardousArea([SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7358, SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7361], 100, 5, SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7362), SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$constr$47$7363];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 2);
  const _p$2 = "#FFFFFF";
  let _bind$16;
  if (_p === undefined) {
    _bind$16 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$16 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 100, on_hit_effects: _bind$13, attack_cooldown: 1, current_cooldown: 0, aggro_range: 100, attack_type: 0, aoe_radius: 4, crit_rate: 0.05, attack_cast_vfx: _bind$14, area_effect_vfx: _bind$15, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_green_square$46$42$bind$47$7364, bullet_color: _bind$16 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7375 = 4;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7376 = new OnHitEffect$DealDamage(3, SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7375);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7377 = new BuffType$MultiplySpeed(0.5);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7378 = 4;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7379 = new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7377, 3, SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7378);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7380 = 2;
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7381 = new OnHitEffect$Knockback(15);
const SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$42$bind$47$7382 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 1, 2);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 6, max: 6, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [new OnHitEffect$DealDamage(2, undefined), new OnHitEffect$CreateHazardousArea([SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7376, SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7379], 100, 5, SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7380), SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$constr$47$7381];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 2);
  const _p$2 = "#FFFFFF";
  let _bind$16;
  if (_p === undefined) {
    _bind$16 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$16 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 300, on_hit_effects: _bind$13, attack_cooldown: 5, current_cooldown: 0, aggro_range: 350, attack_type: 1, aoe_radius: 4, crit_rate: 0.05, attack_cast_vfx: _bind$14, area_effect_vfx: _bind$15, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle$46$42$bind$47$7382, bullet_color: _bind$16 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle$46$42$bind$47$7393 = 0;
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle$46$constr$47$7394 = new PickupData$ShieldData(2);
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle$46$constr$47$7395 = new OnHitEffect$SpawnPickup(0, SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle$46$constr$47$7394);
function SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 2, 0);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 10, max: 10, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 0);
  const _p$2 = "#FFFFFF";
  let _bind$16;
  if (_p === undefined) {
    _bind$16 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$16 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 0, on_hit_effects: _bind$13, attack_cooldown: 999, current_cooldown: 0, aggro_range: 350, attack_type: 1, aoe_radius: 0, crit_rate: 0.05, attack_cast_vfx: _bind$14, area_effect_vfx: _bind$15, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle$46$42$bind$47$7393, bullet_color: _bind$16 });
  moonbitlang$core$builtin$$Map$set$37$(SuYiTao$45$SYT$CyberScavenger$$team_abilities, new_unit, { effects: [SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle$46$constr$47$7395], cooldown: 5, current_cooldown: 10, targeting_rule: 0, cast_vfx: undefined, cast_sfx: undefined });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square$46$constr$47$7406 = new OnHitEffect$Knockback(15);
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square$46$42$bind$47$7407 = 6;
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square$46$42$bind$47$7408 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 0, 0);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 10, max: 10, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [new OnHitEffect$DealDamage(10, undefined), SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square$46$constr$47$7406];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 120, on_hit_effects: _bind$13, attack_cooldown: 2, current_cooldown: 0, aggro_range: 150, attack_type: 3, aoe_radius: 150, crit_rate: 0, attack_cast_vfx: SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square$46$42$bind$47$7407, area_effect_vfx: _bind$14, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square$46$42$bind$47$7408, bullet_color: _bind$15 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$constr$47$7418 = 1;
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$constr$47$7419 = new OnHitEffect$DealDamage(4, SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$constr$47$7418);
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$constr$47$7420 = new OnHitEffect$Knockback(15);
const SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$42$bind$47$7421 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 1, 0);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 6, max: 6, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$constr$47$7419, new OnHitEffect$AreaOfEffect([new OnHitEffect$DealDamage(2, undefined)], 100, undefined), SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$constr$47$7420];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 0);
  const _p$2 = "#FFFFFF";
  let _bind$16;
  if (_p === undefined) {
    _bind$16 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$16 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 300, on_hit_effects: _bind$13, attack_cooldown: 1, current_cooldown: 0, aggro_range: 350, attack_type: 1, aoe_radius: 4, crit_rate: 0.05, attack_cast_vfx: _bind$14, area_effect_vfx: _bind$15, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle$46$42$bind$47$7421, bullet_color: _bind$16 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7432 = new OnHitEffect$Knockback(15);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$42$bind$47$7433 = 0;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7434 = new BuffType$MultiplyCooldown(0.8);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7435 = 9;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7436 = new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7434, 8, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7435);
function SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 2, 1);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 7, max: 7, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [new OnHitEffect$AreaOfEffect([new OnHitEffect$DealDamage(1, undefined)], 100, undefined), SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7432];
  const _bind$14 = undefined;
  const _bind$15 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 1);
  const _p$2 = "#FFFFFF";
  let _bind$16;
  if (_p === undefined) {
    _bind$16 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$16 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 300, on_hit_effects: _bind$13, attack_cooldown: 1, current_cooldown: 0, aggro_range: 350, attack_type: 1, aoe_radius: 4, crit_rate: 0.05, attack_cast_vfx: _bind$14, area_effect_vfx: _bind$15, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$42$bind$47$7433, bullet_color: _bind$16 });
  moonbitlang$core$builtin$$Map$set$37$(SuYiTao$45$SYT$CyberScavenger$$team_abilities, new_unit, { effects: [SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle$46$constr$47$7436], cooldown: 15, current_cooldown: 15, targeting_rule: 1, cast_vfx: undefined, cast_sfx: undefined });
  moonbitlang$core$builtin$$Map$set$40$(SuYiTao$45$SYT$CyberScavenger$$cooldown_ability_units, new_unit, {});
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7447 = new OnHitEffect$Knockback(100);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7448 = new BuffType$MultiplySpeed(0.2);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7449 = 4;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7450 = new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7448, 3, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7449);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$42$bind$47$7451 = 7;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$42$bind$47$7452 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 0, 1);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 9, max: 9, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [new OnHitEffect$DealDamage(4, undefined), SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7447, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$constr$47$7450];
  const _bind$14 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 1);
  const _p$2 = "#FFFFFF";
  let _bind$15;
  if (_p === undefined) {
    _bind$15 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$15 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 130, on_hit_effects: _bind$13, attack_cooldown: 1, current_cooldown: 0, aggro_range: 350, attack_type: 3, aoe_radius: 180, crit_rate: 0.05, attack_cast_vfx: SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$42$bind$47$7451, area_effect_vfx: _bind$14, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square$46$42$bind$47$7452, bullet_color: _bind$15 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7462 = 15;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7463 = new OnHitEffect$DealDamage(4, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7462);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7464 = new BuffType$MultiplySpeed(0.01);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7465 = 4;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7466 = new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7464, 1, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7465);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7467 = 15;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7468 = new OnHitEffect$DealDamage(4, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7467);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7469 = new BuffType$MultiplySpeed(0.01);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7470 = 4;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7471 = new OnHitEffect$ApplyBuff(SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7469, 1, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7470);
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7472 = 14;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$42$bind$47$7473 = 14;
const SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$42$bind$47$7474 = 0;
function SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle(pos) {
  const new_unit = SuYiTao$45$SYT$CyberScavenger$$spawn_base_player_unit(pos, 1, 1);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 7, max: 7, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  const _bind$13 = [SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7463, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7466, new OnHitEffect$Fork([SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7468, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7471], 2, 350, SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$constr$47$7472)];
  const _bind$14 = undefined;
  const _p = moonbitlang$core$builtin$$Map$get$31$(SuYiTao$45$SYT$CyberScavenger$$gdd_color_palette, 1);
  const _p$2 = "#FFFFFF";
  let _bind$15;
  if (_p === undefined) {
    _bind$15 = _p$2;
  } else {
    const _p$3 = _p;
    _bind$15 = _p$3;
  }
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 300, on_hit_effects: _bind$13, attack_cooldown: 3, current_cooldown: 0, aggro_range: 350, attack_type: 2, aoe_radius: 0, crit_rate: 0.05, attack_cast_vfx: SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$42$bind$47$7473, area_effect_vfx: _bind$14, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle$46$42$bind$47$7474, bullet_color: _bind$15 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
  return new_unit;
}
function SuYiTao$45$SYT$CyberScavenger$$spawn_player_unit_by_type(unit_type, pos) {
  switch (unit_type) {
    case 0: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_orange_square(pos);
      break;
    }
    case 1: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_orange_triangle(pos);
      break;
    }
    case 2: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_orange_circle(pos);
      break;
    }
    case 3: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_purple_square(pos);
      break;
    }
    case 4: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_purple_triangle(pos);
      break;
    }
    case 5: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_purple_circle(pos);
      break;
    }
    case 6: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_green_square(pos);
      break;
    }
    case 7: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_green_triangle(pos);
      break;
    }
    case 8: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_green_circle(pos);
      break;
    }
    case 9: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_blue_square(pos);
      break;
    }
    case 10: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_blue_triangle(pos);
      break;
    }
    default: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_blue_circle(pos);
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$init_game_world() {
  moonbitlang$core$builtin$$println$86$("【主逻辑】: 初始化游戏世界...");
  moonbitlang$core$builtin$$println$86$("【主逻辑】: 读取已选队伍 `selected_squad` 并生成单位...");
  moonbitlang$core$builtin$$println$86$("         当前队伍是: {selected_squad.val}");
  SuYiTao$45$SYT$CyberScavenger$$cleanup_game_world();
  SuYiTao$45$SYT$CyberScavenger$$score.val = 0;
  SuYiTao$45$SYT$CyberScavenger$$wave_count.val = 0;
  SuYiTao$45$SYT$CyberScavenger$$spawn_timer.val = 10;
  SuYiTao$45$SYT$CyberScavenger$$calculate_active_synergies();
  const _arr = SuYiTao$45$SYT$CyberScavenger$$selected_squad.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit_type_to_spawn = _arr[_i];
      const spawn_pos = { _0: 350, _1: 500 };
      SuYiTao$45$SYT$CyberScavenger$$spawn_player_unit_by_type(unit_type_to_spawn, spawn_pos);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$println$86$("【主逻辑】: 单位生成完毕！");
}
function SuYiTao$45$SYT$CyberScavenger$$update_ui_system(_backend) {
  if (moonbitlang$core$builtin$$op_notequal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, SuYiTao$45$SYT$CyberScavenger$$prev_ui_state.val)) {
    if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$prev_ui_state.val, 4)) {
      SuYiTao$45$SYT$CyberScavenger$$cleanup_game_world();
    }
    if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$prev_ui_state.val, 2) && moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 1)) {
      SuYiTao$45$SYT$CyberScavenger$$init_game_world();
    }
    SuYiTao$45$SYT$CyberScavenger$$cleanup_ui();
    const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val;
    switch (_bind$12) {
      case 0: {
        SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui();
        break;
      }
      case 2: {
        SuYiTao$45$SYT$CyberScavenger$$setup_squad_builder_ui();
        break;
      }
      case 1: {
        SuYiTao$45$SYT$CyberScavenger$$setup_ingame_hud();
        break;
      }
      case 3: {
        SuYiTao$45$SYT$CyberScavenger$$setup_settings_ui();
        break;
      }
      default: {
        SuYiTao$45$SYT$CyberScavenger$$setup_game_over_ui();
      }
    }
    if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 2)) {
      SuYiTao$45$SYT$CyberScavenger$$selected_squad.val = [];
    }
    SuYiTao$45$SYT$CyberScavenger$$prev_ui_state.val = SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val;
  }
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val;
  switch (_bind$12) {
    case 0: {
      if (Milky2018$selene$system$$is_just_pressed(18)) {
        SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val = 3;
      }
      break;
    }
    case 3: {
      if (Milky2018$selene$system$$is_just_pressed(32)) {
        SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val = 0;
      }
      break;
    }
  }
  if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 2)) {
    SuYiTao$45$SYT$CyberScavenger$$update_grid_visibility();
    SuYiTao$45$SYT$CyberScavenger$$update_selected_squad_display();
    SuYiTao$45$SYT$CyberScavenger$$update_detail_panel();
    SuYiTao$45$SYT$CyberScavenger$$update_synergy_panel();
    SuYiTao$45$SYT$CyberScavenger$$update_active_synergies_display();
  }
  if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 3)) {
    SuYiTao$45$SYT$CyberScavenger$$update_control_scheme_display();
    return;
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$button_system(backend) {
  let click_event_opt = undefined;
  if (Milky2018$selene$system$$is_mouse_just_pressed(0)) {
    click_event_opt = new ClickEvent$MouseClick(Milky2018$selene$system$$mouse.pos);
  } else {
    if (!(Milky2018$selene$system$$just_began_touches.size === 0)) {
      const touches_array = moonbitlang$core$builtin$$Iter$to_array$87$(moonbitlang$core$builtin$$Map$values$24$(Milky2018$selene$system$$just_began_touches));
      if (touches_array.length > 0) {
        click_event_opt = new ClickEvent$TouchClick(moonbitlang$core$array$$Array$at$87$(touches_array, 0).pos);
      }
    }
  }
  const active_pointers = [Milky2018$selene$system$$mouse.pos];
  const _bind$12 = moonbitlang$core$builtin$$Map$values$24$(Milky2018$selene$system$$active_touches);
  _bind$12((touch) => {
    moonbitlang$core$array$$Array$push$60$(active_pointers, touch.pos);
    return 1;
  });
  const _arr = moonbitlang$core$builtin$$Map$to_array$9$(SuYiTao$45$SYT$CyberScavenger$$buttons);
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const entry = _arr[_i];
        const _entity = entry._0;
        const _button = entry._1;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _entity);
        if (_bind$13 === undefined) {
        } else {
          const _Some = _bind$13;
          const _sprite = _Some;
          if (!_sprite.visible) {
            break _L;
          }
        }
        let is_currently_hovered = false;
        const _len$2 = active_pointers.length;
        let _tmp$2 = 0;
        while (true) {
          const _i$2 = _tmp$2;
          if (_i$2 < _len$2) {
            const pointer_pos = active_pointers[_i$2];
            if (SuYiTao$45$SYT$CyberScavenger$$is_point_inside_centered_rect(pointer_pos, _button.area)) {
              is_currently_hovered = true;
              break;
            }
            _tmp$2 = _i$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _p = is_currently_hovered;
        const _p$2 = _button.is_hovered;
        if (!(_p === _p$2)) {
          _button.is_hovered = is_currently_hovered;
          const new_appearance_to_show = is_currently_hovered ? _button.hover_appearance : _button.normal_appearance;
          const _bind$14 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _entity);
          if (_bind$14 === undefined) {
          } else {
            const _Some = _bind$14;
            const _current_sprite = _Some;
            let new_sprite;
            switch (new_appearance_to_show.$tag) {
              case 0: {
                const _FromPicture = new_appearance_to_show;
                const _path = _FromPicture._0;
                const _size = _FromPicture._1;
                const picture = Milky2018$selene$sprite$$Picture$new(_size, _path, undefined, undefined);
                new_sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(picture, _current_sprite.zindex, _current_sprite.offset, _current_sprite.layer);
                break;
              }
              case 1: {
                const _FromAnimation = new_appearance_to_show;
                const _animation = _FromAnimation._0;
                new_sprite = Milky2018$selene$sprite$$Sprite$from_animation$46$inner(_animation, _current_sprite.zindex, _current_sprite.offset, _current_sprite.layer);
                break;
              }
              case 2: {
                const _FromText = new_appearance_to_show;
                const _text = _FromText._0;
                new_sprite = Milky2018$selene$sprite$$Sprite$from_text$46$inner(_text, _current_sprite.zindex, _current_sprite.offset, _current_sprite.layer);
                break;
              }
              case 4: {
                const _FromTextLayout = new_appearance_to_show;
                const _text$2 = _FromTextLayout._0;
                new_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout$46$inner(_text$2, _current_sprite.zindex, _current_sprite.offset, _current_sprite.layer);
                break;
              }
              default: {
                const _FromShape = new_appearance_to_show;
                const _shape = _FromShape._0;
                const _offset = _FromShape._1;
                new_sprite = Milky2018$selene$sprite$$Sprite$from_shape(_shape, _current_sprite.zindex, _offset, _current_sprite.layer);
              }
            }
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _entity, new_sprite);
          }
        }
        if (moonbitlang$core$builtin$$op_notequal$16$(_button.category, SuYiTao$45$SYT$CyberScavenger$$active_ui_category.val)) {
          break _L;
        }
        const _bind$14 = click_event_opt;
        if (_bind$14 === undefined) {
        } else {
          const _Some = _bind$14;
          const _click_event = _Some;
          let click_pos;
          if (_click_event.$tag === 0) {
            const _MouseClick = _click_event;
            click_pos = _MouseClick._0;
          } else {
            const _TouchClick = _click_event;
            click_pos = _TouchClick._0;
          }
          if (SuYiTao$45$SYT$CyberScavenger$$is_point_inside_centered_rect(click_pos, _button.area)) {
            moonbitlang$core$array$$Array$push$144$(SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val, { sfx_type: 6, position: undefined });
            const _bind$15 = _button.action;
            switch (_bind$15.$tag) {
              case 0: {
                const _SwitchState = _bind$15;
                const _target_state = _SwitchState._0;
                SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val = _target_state;
                moonbitlang$core$builtin$$println$86$("【动作】: 切换场景到 {target_state}");
                return undefined;
              }
              case 1: {
                const _SelectUnit = _bind$15;
                const _unit_type = _SelectUnit._0;
                if (SuYiTao$45$SYT$CyberScavenger$$selected_squad.val.length < 6) {
                  moonbitlang$core$array$$Array$push$62$(SuYiTao$45$SYT$CyberScavenger$$selected_squad.val, _unit_type);
                }
                SuYiTao$45$SYT$CyberScavenger$$sticky_unit_for_detail_view.val = _unit_type;
                break;
              }
              case 2: {
                const _DeselectUnit = _bind$15;
                const _index = _DeselectUnit._0;
                if (_index < SuYiTao$45$SYT$CyberScavenger$$selected_squad.val.length) {
                  moonbitlang$core$array$$Array$remove$62$(SuYiTao$45$SYT$CyberScavenger$$selected_squad.val, _index);
                  moonbitlang$core$builtin$$println$86$(`【动作】: 已移除单位, 当前队伍: ${moonbitlang$core$builtin$$Show$to_string$105$(SuYiTao$45$SYT$CyberScavenger$$selected_squad.val)}`);
                }
                return undefined;
              }
              case 3: {
                const _SetSynergyFilter = _bind$15;
                const _synergy_tag = _SetSynergyFilter._0;
                SuYiTao$45$SYT$CyberScavenger$$current_synergy_filter.val = _synergy_tag;
                moonbitlang$core$builtin$$println$86$(`【筛选】: 颜色筛选已设置为 ${moonbitlang$core$builtin$$Show$to_string$107$(_synergy_tag)}`);
                return undefined;
              }
              case 4: {
                const _SetShapeFilter = _bind$15;
                const _shape_tag = _SetShapeFilter._0;
                SuYiTao$45$SYT$CyberScavenger$$current_shape_filter.val = _shape_tag;
                moonbitlang$core$builtin$$println$86$(`【筛选】: 形状筛选已设置为 ${moonbitlang$core$builtin$$Show$to_string$109$(_shape_tag)}`);
                return undefined;
              }
              case 5: {
                if (_click_event.$tag === 1) {
                  moonbitlang$core$builtin$$println$86$("【智能切换】: 检测到首次交互为触摸，自动切换到摇杆模式。");
                  SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val = 2;
                }
                if (!SuYiTao$45$SYT$CyberScavenger$$audio_unlocked.val) {
                  moonbitlang$core$builtin$$println$86$("【音频】: 首次交互，解锁并播放BGM...");
                  SuYiTao$45$SYT$CyberScavenger$$audio_unlocked.val = true;
                  const _p$3 = "assets/sfx/inst.mp3";
                  const _p$4 = 0.1;
                  const _p$5 = true;
                  const handle = backend.method_12(backend.self, _p$3, _p$4, _p$5);
                  SuYiTao$45$SYT$CyberScavenger$$bgm_handle.val = handle;
                  SuYiTao$45$SYT$CyberScavenger$$cleanup_ui();
                  SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui();
                }
                return undefined;
              }
              case 6: {
                if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 2) && !SuYiTao$45$SYT$CyberScavenger$$squad_guide_shown.val) {
                  SuYiTao$45$SYT$CyberScavenger$$current_guide_image_index.val = SuYiTao$45$SYT$CyberScavenger$$current_guide_image_index.val + 1 | 0;
                  SuYiTao$45$SYT$CyberScavenger$$cleanup_guide_ui();
                  if (SuYiTao$45$SYT$CyberScavenger$$current_guide_image_index.val < 5) {
                    moonbitlang$core$builtin$$println$86$(`【UI】: 切换到引导页 ${moonbitlang$core$builtin$$Show$to_string$4$(SuYiTao$45$SYT$CyberScavenger$$current_guide_image_index.val + 1 | 0)}`);
                    SuYiTao$45$SYT$CyberScavenger$$setup_squad_guide_ui();
                  } else {
                    SuYiTao$45$SYT$CyberScavenger$$is_guide_active.val = false;
                    moonbitlang$core$builtin$$println$86$("【UI】: 组队引导已完成，进入正常组队界面。");
                    SuYiTao$45$SYT$CyberScavenger$$active_ui_category.val = 0;
                    SuYiTao$45$SYT$CyberScavenger$$squad_guide_shown.val = true;
                  }
                }
                return undefined;
              }
              default: {
                const _bind$16 = SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val;
                let _tmp$3;
                switch (_bind$16) {
                  case 0: {
                    _tmp$3 = 1;
                    break;
                  }
                  case 1: {
                    _tmp$3 = 2;
                    break;
                  }
                  default: {
                    _tmp$3 = 0;
                  }
                }
                SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val = _tmp$3;
                return undefined;
              }
            }
            return undefined;
          }
        }
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$add_buff(target, buff_type, duration) {
  const new_buff = { buff_type: buff_type, remaining_duration: duration };
  const _bind$12 = moonbitlang$core$builtin$$Map$get$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, target);
  if (_bind$12.$tag === 1) {
    const _Some = _bind$12;
    const _existing_buffs = _Some._0;
    moonbitlang$core$array$$Array$push$75$(_existing_buffs, new_buff);
    moonbitlang$core$builtin$$Map$set$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, target, _existing_buffs);
    return;
  } else {
    moonbitlang$core$builtin$$Map$set$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, target, [new_buff]);
    return;
  }
}
const SuYiTao$45$SYT$CyberScavenger$$apply_damage$46$constr$47$7561 = 0;
function SuYiTao$45$SYT$CyberScavenger$$apply_damage(attacker, target, base_damage) {
  if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, target), SuYiTao$45$SYT$CyberScavenger$$apply_damage$46$constr$47$7561)) {
    const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$team_charge_shield.val;
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const _shield = _Some;
      if (_shield.charges > 0) {
        _shield.charges = _shield.charges - 1 | 0;
        moonbitlang$core$builtin$$println$86$(`【护盾】: 抵挡了一次伤害，剩余次数: ${moonbitlang$core$builtin$$Show$to_string$4$(_shield.charges)}`);
        if (_shield.charges <= 0) {
          SuYiTao$45$SYT$CyberScavenger$$team_charge_shield.val = undefined;
          moonbitlang$core$builtin$$println$86$("【护盾】: 护盾已破碎！");
        }
        return undefined;
      }
    }
  }
  const _bind$12 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, target);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _health = _Some;
    let final_damage = base_damage;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, attacker);
    if (_bind$13 === undefined) {
    } else {
      const _Some$2 = _bind$13;
      const _stats = _Some$2;
      const roll = moonbitlang$core$random$$Rand$double(SuYiTao$45$SYT$CyberScavenger$$global_rng);
      if (roll < _stats.crit_rate) {
        final_damage = base_damage * 2;
        moonbitlang$core$builtin$$println$86$("[Log] Critical Hit!");
      }
    }
    moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: 16, position: { _0: 0, _1: 0 }, rotation: 0, parent_entity: target, to_position: undefined });
    const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
    if (_bind$14 === undefined) {
    } else {
      const _Some$2 = _bind$14;
      const _target_pos = _Some$2;
      moonbitlang$core$array$$Array$push$144$(SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val, { sfx_type: 2, position: _target_pos });
    }
    const new_health = { current: _health.current - final_damage, max: _health.max, bar_bg_entity: _health.bar_bg_entity, bar_fg_entity: _health.bar_fg_entity, shield_frame_entity: _health.shield_frame_entity };
    moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, target, new_health);
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$apply_heal(target, amount) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, target);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _health = _Some;
    const _p = _health.max;
    const _p$2 = _health.current + amount;
    const new_current_hp = _p < _p$2 ? _p : _p$2;
    moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, target, { current: new_current_hp, max: _health.max, bar_bg_entity: _health.bar_bg_entity, bar_fg_entity: _health.bar_fg_entity, shield_frame_entity: _health.shield_frame_entity });
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$apply_knockback(source, target, strength) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, source);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _source_pos = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$13;
      const _target_pos = _Some$2;
      const direction = Milky2018$selene$math$$Vec2D$normalize({ _0: _target_pos._0 - _source_pos._0, _1: _target_pos._1 - _source_pos._1 });
      moonbitlang$core$builtin$$Map$set$48$(Milky2018$selene$velocity$$velocities, target, { _0: direction._0 * strength, _1: direction._1 * strength });
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$get_random_map_position() {
  const x = moonbitlang$core$random$$Rand$double(SuYiTao$45$SYT$CyberScavenger$$global_rng) * 1180 + 50;
  const y = moonbitlang$core$random$$Rand$double(SuYiTao$45$SYT$CyberScavenger$$global_rng) * 620 + 50;
  return { _0: x, _1: y };
}
function SuYiTao$45$SYT$CyberScavenger$$spawn_hazardous_area(source, pos, radius, duration, team, vfx_type_opt, tick_effects) {
  moonbitlang$core$builtin$$println$86$(`[Log Spawning] Spawning hazardous area at (${moonbitlang$core$builtin$$Show$to_string$115$(Milky2018$selene$math$$Vec2D$op_get(pos, 0))}, ${moonbitlang$core$builtin$$Show$to_string$115$(Milky2018$selene$math$$Vec2D$op_get(pos, 1))})`);
  const area_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, area_entity, pos);
  if (vfx_type_opt === undefined) {
  } else {
    const _Some = vfx_type_opt;
    const _vfx_type = _Some;
    moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _vfx_type, position: pos, rotation: 0, parent_entity: undefined, to_position: undefined });
  }
  moonbitlang$core$builtin$$Map$set$55$(SuYiTao$45$SYT$CyberScavenger$$hazardous_areas, area_entity, { source: source, source_team: team, on_tick_effects: tick_effects, radius: radius, remaining_duration: duration, tick_timer: 1 });
}
function SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(source, target, effects) {
  const _len = effects.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const effect = effects[_i];
        switch (effect.$tag) {
          case 0: {
            const _DealDamage = effect;
            const _damage = _DealDamage._0;
            const _vfx_opt = _DealDamage._1;
            SuYiTao$45$SYT$CyberScavenger$$apply_damage(source, target, _damage);
            if (_vfx_opt === undefined) {
            } else {
              const _Some = _vfx_opt;
              const _vfx_type = _Some;
              const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
              if (_bind$12 === undefined) {
              } else {
                const _Some$2 = _bind$12;
                const _target_pos = _Some$2;
                moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _vfx_type, position: _target_pos, rotation: 0, parent_entity: undefined, to_position: undefined });
              }
            }
            break;
          }
          case 1: {
            const _ApplyBuff = effect;
            const _buff_type = _ApplyBuff._0;
            const _duration = _ApplyBuff._1;
            const _vfx_opt$2 = _ApplyBuff._2;
            if (_buff_type.$tag === 4) {
              const _bind$12 = moonbitlang$core$builtin$$Map$get$40$(SuYiTao$45$SYT$CyberScavenger$$cooldown_ability_units, target);
              if (_bind$12 === -1) {
              } else {
                moonbitlang$core$builtin$$println$86$(`【技能豁免】: 单位 ${moonbitlang$core$builtin$$Show$to_string$78$(target)} 是一个冷却技能单位，豁免了冷却缩减Buff。`);
                break _L;
              }
            }
            SuYiTao$45$SYT$CyberScavenger$$add_buff(target, _buff_type, _duration);
            if (_vfx_opt$2 === undefined) {
            } else {
              const _Some = _vfx_opt$2;
              const _vfx_type = _Some;
              const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
              if (_bind$12 === undefined) {
              } else {
                const _Some$2 = _bind$12;
                const _target_pos = _Some$2;
                moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _vfx_type, position: _target_pos, rotation: 0, parent_entity: target, to_position: undefined });
              }
            }
            break;
          }
          case 2: {
            const _CreateHazardousArea = effect;
            const _tick_effects = _CreateHazardousArea._0;
            const _radius = _CreateHazardousArea._1;
            const _duration$2 = _CreateHazardousArea._2;
            const _vfx_opt$3 = _CreateHazardousArea._3;
            const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
            if (_bind$12 === undefined) {
            } else {
              const _Some = _bind$12;
              const _target_pos = _Some;
              const _bind$13 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, source);
              if (_bind$13 === undefined) {
              } else {
                const _Some$2 = _bind$13;
                const _source_team = _Some$2;
                SuYiTao$45$SYT$CyberScavenger$$spawn_hazardous_area(source, _target_pos, _radius, _duration$2, _source_team, _vfx_opt$3, _tick_effects);
              }
            }
            break;
          }
          case 3: {
            const _AreaOfEffect = effect;
            const _effects_in_area = _AreaOfEffect._0;
            const _radius$2 = _AreaOfEffect._1;
            const _vfx = _AreaOfEffect._2;
            const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
            if (_bind$13 === undefined) {
            } else {
              const _Some = _bind$13;
              const _target_pos = _Some;
              const _bind$14 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, source);
              if (_bind$14 === undefined) {
              } else {
                const _Some$2 = _bind$14;
                const _source_team = _Some$2;
                if (_vfx === undefined) {
                } else {
                  const _Some$3 = _vfx;
                  const _vfx_type = _Some$3;
                  moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _vfx_type, position: _target_pos, rotation: 0, parent_entity: undefined, to_position: undefined });
                }
                SuYiTao$45$SYT$CyberScavenger$$apply_effects_in_area(source, _target_pos, _radius$2, _effects_in_area, _source_team);
              }
            }
            break;
          }
          case 4: {
            const _Knockback = effect;
            const _strength = _Knockback._0;
            SuYiTao$45$SYT$CyberScavenger$$apply_knockback(source, target, _strength);
            break;
          }
          case 5: {
            const _Heal = effect;
            const _amount = _Heal._0;
            const _vfx_opt$4 = _Heal._1;
            if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, source), moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, target))) {
              SuYiTao$45$SYT$CyberScavenger$$apply_heal(target, _amount);
            }
            if (_vfx_opt$4 === undefined) {
            } else {
              const _Some = _vfx_opt$4;
              const _vfx_type = _Some;
              const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
              if (_bind$14 === undefined) {
              } else {
                const _Some$2 = _bind$14;
                const _target_pos = _Some$2;
                moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _vfx_type, position: _target_pos, rotation: 0, parent_entity: target, to_position: undefined });
              }
            }
            break;
          }
          case 6: {
            const _Chain = effect;
            const _next_effects = _Chain._0;
            const _max_jumps = _Chain._1;
            const _jump_range = _Chain._2;
            const _falloff = _Chain._3;
            const _beam_vfx = _Chain._4;
            const initial_hit_list = [source, target];
            SuYiTao$45$SYT$CyberScavenger$$execute_chain_recursive(source, target, _next_effects, _max_jumps, _jump_range, _falloff, _beam_vfx, initial_hit_list);
            break;
          }
          case 7: {
            const _Fork = effect;
            const _fork_effects = _Fork._0;
            const _max_extra_targets = _Fork._1;
            const _range = _Fork._2;
            const _beam_vfx$2 = _Fork._3;
            SuYiTao$45$SYT$CyberScavenger$$execute_fork(source, target, _fork_effects, _max_extra_targets, _range, _beam_vfx$2);
            break;
          }
          case 8: {
            const _GainChargeShield = effect;
            const _charges_to_add = _GainChargeShield._0;
            const _bind$14 = SuYiTao$45$SYT$CyberScavenger$$team_charge_shield.val;
            if (_bind$14 === undefined) {
              SuYiTao$45$SYT$CyberScavenger$$team_charge_shield.val = { charges: _charges_to_add };
            } else {
              const _Some = _bind$14;
              const _shield = _Some;
              _shield.charges = _shield.charges + _charges_to_add | 0;
            }
            const _tmp$2 = moonbitlang$core$builtin$$Show$to_string$4$(_charges_to_add);
            const _p = SuYiTao$45$SYT$CyberScavenger$$team_charge_shield.val;
            let _tmp$3;
            if (_p === undefined) {
              _tmp$3 = $panic();
            } else {
              const _p$2 = _p;
              _tmp$3 = _p$2;
            }
            moonbitlang$core$builtin$$println$86$(`【护盾】: 获得了 ${_tmp$2} 次护盾，当前总次数: ${moonbitlang$core$builtin$$Show$to_string$4$(_tmp$3.charges)}`);
            break;
          }
          default: {
            const _SpawnPickup = effect;
            const _pickup_type = _SpawnPickup._0;
            const _data = _SpawnPickup._1;
            const spawn_pos = SuYiTao$45$SYT$CyberScavenger$$get_random_map_position();
            moonbitlang$core$array$$Array$push$146$(SuYiTao$45$SYT$CyberScavenger$$pickup_requests.val, { pickup_type: _pickup_type, position: spawn_pos, data: _data });
            moonbitlang$core$builtin$$println$86$(`【技能效果】: 已请求在 ${moonbitlang$core$builtin$$Show$to_string$116$(spawn_pos)} 生成一个 ${moonbitlang$core$builtin$$Show$to_string$102$(_pickup_type)}。`);
          }
        }
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$apply_effects_in_area(source, origin_pos, radius, effects, source_team) {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _unit_team = _Some;
        if (moonbitlang$core$builtin$$op_notequal$84$(_unit_team, source_team)) {
          const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
          if (_bind$13 === undefined) {
          } else {
            const _Some$2 = _bind$13;
            const _unit_pos = _Some$2;
            if (Milky2018$selene$math$$Vec2D$distance_to(_unit_pos, origin_pos) <= radius) {
              SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(source, unit, effects);
            }
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$execute_chain_recursive$46$constr$47$7704 = 1;
function SuYiTao$45$SYT$CyberScavenger$$execute_chain_recursive(source, current_target, effects, jumps_left, jump_range, damage_falloff, beam_vfx, already_hit) {
  let _tmp = current_target;
  let _tmp$2 = effects;
  let _tmp$3 = jumps_left;
  while (true) {
    const current_target$2 = _tmp;
    const effects$2 = _tmp$2;
    const jumps_left$2 = _tmp$3;
    if (jumps_left$2 <= 0) {
      return undefined;
    }
    let next_target_opt = undefined;
    let min_distance = jump_range;
    const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, current_target$2);
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const _current_pos = _Some;
      const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
      const _len = _arr.length;
      let _tmp$4 = 0;
      while (true) {
        const _i = _tmp$4;
        if (_i < _len) {
          const unit = _arr[_i];
          if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit), SuYiTao$45$SYT$CyberScavenger$$execute_chain_recursive$46$constr$47$7704) && !moonbitlang$core$array$$Array$contains$6$(already_hit, unit)) {
            const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
            if (_bind$13 === undefined) {
            } else {
              const _Some$2 = _bind$13;
              const _next_pos = _Some$2;
              const distance = Milky2018$selene$math$$Vec2D$distance_to(_current_pos, _next_pos);
              if (distance < min_distance) {
                min_distance = distance;
                next_target_opt = unit;
              }
            }
          }
          _tmp$4 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    const _bind$13 = next_target_opt;
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some = _bind$13;
      const _actual_next_target = _Some;
      moonbitlang$core$array$$Array$push$6$(already_hit, _actual_next_target);
      if (beam_vfx === undefined) {
      } else {
        const _Some$2 = beam_vfx;
        const _vfx_type = _Some$2;
        const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, current_target$2);
        if (_bind$14 === undefined) {
        } else {
          const _Some$3 = _bind$14;
          const _from_pos = _Some$3;
          const _bind$15 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _actual_next_target);
          if (_bind$15 === undefined) {
          } else {
            const _Some$4 = _bind$15;
            const _to_pos = _Some$4;
            const _tmp$4 = SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val;
            const _bind$16 = _from_pos;
            const _bind$17 = _to_pos;
            const _bind$18 = undefined;
            moonbitlang$core$array$$Array$push$145$(_tmp$4, { vfx_type: _vfx_type, position: _bind$16, rotation: 0, parent_entity: _bind$18, to_position: _bind$17 });
          }
        }
      }
      const _p = new Array(effects$2.length);
      const _p$2 = effects$2.length;
      let _tmp$4 = 0;
      while (true) {
        const _p$3 = _tmp$4;
        if (_p$3 < _p$2) {
          const _p$4 = effects$2[_p$3];
          let _tmp$5;
          if (_p$4.$tag === 0) {
            const _p$5 = _p$4;
            const _p$6 = _p$5._0;
            const _p$7 = _p$5._1;
            _tmp$5 = new OnHitEffect$DealDamage(_p$6 * damage_falloff, _p$7);
          } else {
            _tmp$5 = _p$4;
          }
          _p[_p$3] = _tmp$5;
          _tmp$4 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const fallen_off_effects = _p;
      SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(source, _actual_next_target, fallen_off_effects);
      _tmp = _actual_next_target;
      _tmp$2 = fallen_off_effects;
      _tmp$3 = jumps_left$2 - 1 | 0;
      continue;
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$execute_fork$46$constr$47$7750 = 1;
function SuYiTao$45$SYT$CyberScavenger$$execute_fork(source, primary_target, effects, max_extra_targets, range, beam_vfx) {
  let extra_targets_found = 0;
  const already_hit = [source, primary_target];
  const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, source);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _source_pos = _Some;
    const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const unit = _arr[_i];
        if (extra_targets_found >= max_extra_targets) {
          break;
        }
        if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit), SuYiTao$45$SYT$CyberScavenger$$execute_fork$46$constr$47$7750) && !moonbitlang$core$array$$Array$contains$6$(already_hit, unit)) {
          const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
          if (_bind$13 === undefined) {
          } else {
            const _Some$2 = _bind$13;
            const _unit_pos = _Some$2;
            if (Milky2018$selene$math$$Vec2D$distance_to(_source_pos, _unit_pos) < range) {
              extra_targets_found = extra_targets_found + 1 | 0;
              moonbitlang$core$array$$Array$push$6$(already_hit, unit);
              if (beam_vfx === undefined) {
              } else {
                const _Some$3 = beam_vfx;
                const _vfx_type = _Some$3;
                const _tmp$2 = SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val;
                const _bind$14 = _source_pos;
                const _bind$15 = _unit_pos;
                const _bind$16 = undefined;
                moonbitlang$core$array$$Array$push$145$(_tmp$2, { vfx_type: _vfx_type, position: _bind$14, rotation: 0, parent_entity: _bind$16, to_position: _bind$15 });
              }
              SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(source, unit, effects);
            }
          }
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$team_ability_system$46$constr$47$7775 = 0;
const SuYiTao$45$SYT$CyberScavenger$$team_ability_system$46$constr$47$7776 = 0;
function SuYiTao$45$SYT$CyberScavenger$$team_ability_system(_backend) {
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$12 = moonbitlang$core$builtin$$Map$iter2$37$(SuYiTao$45$SYT$CyberScavenger$$team_abilities);
  _bind$12((unit, ability) => {
    let current_cooldown_multiplier = 1;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, unit);
    if (_bind$13.$tag === 1) {
      const _Some = _bind$13;
      const _buff_list = _Some._0;
      const _len = _buff_list.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const buff = _buff_list[_i];
          const _bind$14 = buff.buff_type;
          if (_bind$14.$tag === 4) {
            const _MultiplyCooldown = _bind$14;
            const _factor = _MultiplyCooldown._0;
            current_cooldown_multiplier = current_cooldown_multiplier * _factor;
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    if (ability.current_cooldown > 0) {
      ability.current_cooldown = ability.current_cooldown - 0.0166666666666666664 / current_cooldown_multiplier;
      return 1;
    }
    ability.current_cooldown = ability.cooldown;
    const targets = [];
    const _bind$14 = ability.targeting_rule;
    switch (_bind$14) {
      case 0: {
        moonbitlang$core$array$$Array$push$6$(targets, unit);
        break;
      }
      case 1: {
        const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
        const _len = _arr.length;
        let _tmp = 0;
        while (true) {
          const _i = _tmp;
          if (_i < _len) {
            const ally = _arr[_i];
            if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, ally), SuYiTao$45$SYT$CyberScavenger$$team_ability_system$46$constr$47$7775)) {
              moonbitlang$core$array$$Array$push$6$(targets, ally);
            }
            _tmp = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      default: {
        let lowest_health_ally = undefined;
        let min_health_percentage = 1;
        const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
        const _len$2 = _arr$2.length;
        let _tmp$2 = 0;
        while (true) {
          const _i = _tmp$2;
          if (_i < _len$2) {
            const ally = _arr$2[_i];
            if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, ally), SuYiTao$45$SYT$CyberScavenger$$team_ability_system$46$constr$47$7776)) {
              const _bind$15 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, ally);
              if (_bind$15 === undefined) {
              } else {
                const _Some = _bind$15;
                const _health = _Some;
                if (_health.max > 0) {
                  const current_percentage = _health.current / _health.max;
                  if (current_percentage < min_health_percentage) {
                    min_health_percentage = current_percentage;
                    lowest_health_ally = ally;
                  }
                }
              }
            }
            _tmp$2 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$15 = lowest_health_ally;
        if (_bind$15 === undefined) {
        } else {
          const _Some = _bind$15;
          const _target_ally = _Some;
          moonbitlang$core$array$$Array$push$6$(targets, _target_ally);
        }
      }
    }
    if (targets.length > 0) {
      ability.current_cooldown = ability.cooldown;
      const _bind$16 = ability.cast_sfx;
      if (_bind$16 === undefined) {
      } else {
        const _Some = _bind$16;
        const _sfx = _Some;
        moonbitlang$core$array$$Array$push$144$(SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val, { sfx_type: _sfx, position: undefined });
      }
      const _bind$17 = ability.cast_vfx;
      if (_bind$17 === undefined) {
      } else {
        const _Some = _bind$17;
        const _vfx = _Some;
        const _bind$18 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
        if (_bind$18 === undefined) {
        } else {
          const _Some$2 = _bind$18;
          const _pos = _Some$2;
          moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _vfx, position: _pos, rotation: 0, parent_entity: unit, to_position: undefined });
        }
      }
      const _len$3 = targets.length;
      let _tmp$3 = 0;
      while (true) {
        const _i = _tmp$3;
        if (_i < _len$3) {
          const target = targets[_i];
          SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(unit, target, ability.effects);
          _tmp$3 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      _return._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$get_random_edge_position() {
  const side = moonbitlang$core$random$$Rand$int$46$inner(SuYiTao$45$SYT$CyberScavenger$$global_rng, 4);
  let x = 0;
  let y = 0;
  switch (side) {
    case 0: {
      x = moonbitlang$core$random$$Rand$double(SuYiTao$45$SYT$CyberScavenger$$global_rng) * 1280;
      y = -50;
      break;
    }
    case 1: {
      x = moonbitlang$core$random$$Rand$double(SuYiTao$45$SYT$CyberScavenger$$global_rng) * 1280;
      y = 770;
      break;
    }
    case 2: {
      x = -50;
      y = moonbitlang$core$random$$Rand$double(SuYiTao$45$SYT$CyberScavenger$$global_rng) * 720;
      break;
    }
    default: {
      x = 1330;
      y = moonbitlang$core$random$$Rand$double(SuYiTao$45$SYT$CyberScavenger$$global_rng) * 720;
    }
  }
  return { _0: x, _1: y };
}
const SuYiTao$45$SYT$CyberScavenger$$heal_all_player_units$46$constr$47$7834 = 0;
function SuYiTao$45$SYT$CyberScavenger$$heal_all_player_units() {
  moonbitlang$core$builtin$$println$86$("【游戏逻辑】: 触发全队治疗！");
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit = _arr[_i];
      if (Milky2018$selene$system$$Entity$is_alive(unit) && moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit), SuYiTao$45$SYT$CyberScavenger$$heal_all_player_units$46$constr$47$7834)) {
        const _bind$12 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, unit);
        if (_bind$12 === undefined) {
        } else {
          const _Some = _bind$12;
          const _current_health = _Some;
          if (_current_health.current < _current_health.max) {
            const full_health_component = { current: _current_health.max, max: _current_health.max, bar_bg_entity: _current_health.bar_bg_entity, bar_fg_entity: _current_health.bar_fg_entity, shield_frame_entity: _current_health.shield_frame_entity };
            moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, unit, full_health_component);
            moonbitlang$core$builtin$$println$86$(`  - 单位 ${moonbitlang$core$builtin$$Show$to_string$78$(unit)} 已恢复至满血。`);
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$record$47$7844 = { speed: 1.2 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$record$47$7845 = { radius: 15 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$record$47$7846 = { value: 20 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$constr$47$7847 = 1;
const SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$constr$47$7848 = "#ff4800ff";
function SuYiTao$45$SYT$CyberScavenger$$add_new_archer(pos) {
  const new_unit = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, new_unit, pos);
  moonbitlang$core$builtin$$Map$set$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$record$47$7844);
  moonbitlang$core$builtin$$Map$set$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$record$47$7845);
  const _p = 30;
  const _p$2 = 0;
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Triangle(_p, _p$2);
  const _p$3 = "#FF9900";
  const shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$3));
  const sprite = Milky2018$selene$sprite$$Sprite$from_shape(shape, 100, { _0: -15, _1: -15 }, undefined);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, new_unit, sprite);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 8, max: 8, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  moonbitlang$core$builtin$$Map$set$44$(SuYiTao$45$SYT$CyberScavenger$$teams, new_unit, 1);
  moonbitlang$core$builtin$$Map$set$38$(SuYiTao$45$SYT$CyberScavenger$$score_values, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$record$47$7846);
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 250, on_hit_effects: [new OnHitEffect$DealDamage(1, undefined)], attack_cooldown: 1.8, current_cooldown: 0, aggro_range: 5000, attack_type: 1, aoe_radius: 0, crit_rate: 0.1, attack_cast_vfx: undefined, area_effect_vfx: undefined, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$constr$47$7847, bullet_color: SuYiTao$45$SYT$CyberScavenger$$add_new_archer$46$constr$47$7848 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$record$47$7857 = { speed: 1 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$record$47$7858 = { radius: 20 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$record$47$7859 = { value: 20 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$constr$47$7860 = 1;
const SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$constr$47$7861 = 1;
const SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$constr$47$7862 = "#A83232";
function SuYiTao$45$SYT$CyberScavenger$$add_new_bomber(pos) {
  const new_unit = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, new_unit, pos);
  moonbitlang$core$builtin$$Map$set$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$record$47$7857);
  moonbitlang$core$builtin$$Map$set$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$record$47$7858);
  const _p = 30;
  const _p$2 = 30;
  const _p$3 = 0;
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p, _p$2, _p$3);
  const _p$4 = "#A83232";
  const shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4));
  const sprite = Milky2018$selene$sprite$$Sprite$from_shape(shape, 100, { _0: -15, _1: -15 }, undefined);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, new_unit, sprite);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 80, max: 80, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  moonbitlang$core$builtin$$Map$set$44$(SuYiTao$45$SYT$CyberScavenger$$teams, new_unit, 1);
  moonbitlang$core$builtin$$Map$set$38$(SuYiTao$45$SYT$CyberScavenger$$score_values, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$record$47$7859);
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 220, on_hit_effects: [new OnHitEffect$AreaOfEffect([new OnHitEffect$DealDamage(25, undefined)], 80, SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$constr$47$7860)], attack_cooldown: 3.5, current_cooldown: 0, aggro_range: 5000, attack_type: 1, aoe_radius: 0, crit_rate: 0.05, attack_cast_vfx: undefined, area_effect_vfx: undefined, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$constr$47$7861, bullet_color: SuYiTao$45$SYT$CyberScavenger$$add_new_bomber$46$constr$47$7862 });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$record$47$7871 = { speed: 1.5 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$record$47$7872 = { radius: 20 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$record$47$7873 = { value: 10 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$constr$47$7874 = 2;
function SuYiTao$45$SYT$CyberScavenger$$add_new_grunt(pos) {
  const new_unit = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, new_unit, pos);
  moonbitlang$core$builtin$$Map$set$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$record$47$7871);
  moonbitlang$core$builtin$$Map$set$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$record$47$7872);
  const _p = 20;
  const _p$2 = 30;
  const _p$3 = 10;
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p, _p$2, _p$3);
  const _p$4 = "#FF7A5A";
  const shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4));
  const sprite = Milky2018$selene$sprite$$Sprite$from_shape(shape, 100, { _0: -10, _1: -15 }, undefined);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, new_unit, sprite);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 8, max: 8, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  moonbitlang$core$builtin$$Map$set$44$(SuYiTao$45$SYT$CyberScavenger$$teams, new_unit, 1);
  moonbitlang$core$builtin$$Map$set$38$(SuYiTao$45$SYT$CyberScavenger$$score_values, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$record$47$7873);
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 40, on_hit_effects: [new OnHitEffect$DealDamage(1, undefined)], attack_cooldown: 1, current_cooldown: 0, aggro_range: 5000, attack_type: 0, aoe_radius: 0, crit_rate: 0, attack_cast_vfx: undefined, area_effect_vfx: undefined, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_grunt$46$constr$47$7874, bullet_color: undefined });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
}
const SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$record$47$7883 = { speed: 0.8 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$record$47$7884 = { radius: 30 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$record$47$7885 = { value: 50 };
const SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7886 = 0;
const SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7887 = new OnHitEffect$DealDamage(1, SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7886);
const SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7888 = 5;
const SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7889 = 2;
function SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy(pos) {
  const new_unit = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, new_unit, pos);
  moonbitlang$core$builtin$$Map$set$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$record$47$7883);
  moonbitlang$core$builtin$$Map$set$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$record$47$7884);
  const _p = 25;
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p);
  const _p$2 = "#D92A2A";
  const shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$2));
  const sprite = Milky2018$selene$sprite$$Sprite$from_shape(shape, 100, undefined, undefined);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, new_unit, sprite);
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$attach_health_bar();
  const _bar_bg = _bind$12._0;
  const _bar_fg = _bind$12._1;
  const _shield_frame = _bind$12._2;
  moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, new_unit, { current: 30, max: 30, bar_bg_entity: _bar_bg, bar_fg_entity: _bar_fg, shield_frame_entity: _shield_frame });
  moonbitlang$core$builtin$$Map$set$44$(SuYiTao$45$SYT$CyberScavenger$$teams, new_unit, 1);
  moonbitlang$core$builtin$$Map$set$38$(SuYiTao$45$SYT$CyberScavenger$$score_values, new_unit, SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$record$47$7885);
  moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, new_unit, { attack_range: 50, on_hit_effects: [SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7887], attack_cooldown: 2.5, current_cooldown: 0, aggro_range: 5000, attack_type: 3, aoe_radius: 60, crit_rate: 0.05, attack_cast_vfx: SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7888, area_effect_vfx: undefined, attack_sfx: SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy$46$constr$47$7889, bullet_color: undefined });
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$all_units.val, new_unit);
}
function SuYiTao$45$SYT$CyberScavenger$$spawn_enemy(enemy_type, pos) {
  switch (enemy_type) {
    case 0: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_grunt(pos);
      return;
    }
    case 1: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_tank_enemy(pos);
      return;
    }
    case 2: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_archer(pos);
      return;
    }
    default: {
      SuYiTao$45$SYT$CyberScavenger$$add_new_bomber(pos);
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$endless_spawner_system(_backend) {
  SuYiTao$45$SYT$CyberScavenger$$spawn_timer.val = SuYiTao$45$SYT$CyberScavenger$$spawn_timer.val - 0.0166666666666666664;
  if (SuYiTao$45$SYT$CyberScavenger$$spawn_timer.val <= 0) {
    SuYiTao$45$SYT$CyberScavenger$$spawn_timer.val = 10;
    SuYiTao$45$SYT$CyberScavenger$$wave_count.val = SuYiTao$45$SYT$CyberScavenger$$wave_count.val + 1 | 0;
    moonbitlang$core$builtin$$println$86$(`[Game] Wave ${moonbitlang$core$builtin$$Show$to_string$4$(SuYiTao$45$SYT$CyberScavenger$$wave_count.val)} starting!`);
    const num_to_spawn = 8 + (Math.imul(SuYiTao$45$SYT$CyberScavenger$$wave_count.val, 1) | 0) | 0;
    const enemy_pool = [0, 0, 0, 2, 2, 1];
    if (SuYiTao$45$SYT$CyberScavenger$$wave_count.val > 0 && (SuYiTao$45$SYT$CyberScavenger$$wave_count.val % 5 | 0) === 0) {
      SuYiTao$45$SYT$CyberScavenger$$heal_all_player_units();
    }
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < num_to_spawn) {
        const random_index = moonbitlang$core$random$$Rand$int$46$inner(SuYiTao$45$SYT$CyberScavenger$$global_rng, enemy_pool.length);
        const enemy_to_spawn = moonbitlang$core$array$$Array$at$92$(enemy_pool, random_index);
        const spawn_pos = SuYiTao$45$SYT$CyberScavenger$$get_random_edge_position();
        SuYiTao$45$SYT$CyberScavenger$$spawn_enemy(enemy_to_spawn, spawn_pos);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
const SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7908 = { path: "assets/sfx/Shoot.wav", default_volume: 1 };
const SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7909 = { path: "assets/sfx/Shoot.wav", default_volume: 1 };
const SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7910 = { path: "assets/sfx/Hit.wav", default_volume: 0.8 };
const SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7911 = { path: "assets/sfx/Blip.wav", default_volume: 0.8 };
const SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7912 = { path: "assets/sfx/Dead.wav", default_volume: 0.8 };
const SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7913 = { path: "assets/sfx/PowerUp.wav", default_volume: 0.8 };
function SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library() {
  moonbitlang$core$builtin$$Map$set$12$(SuYiTao$45$SYT$CyberScavenger$$sfx_library, 0, SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7908);
  moonbitlang$core$builtin$$Map$set$12$(SuYiTao$45$SYT$CyberScavenger$$sfx_library, 1, SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7909);
  moonbitlang$core$builtin$$Map$set$12$(SuYiTao$45$SYT$CyberScavenger$$sfx_library, 2, SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7910);
  moonbitlang$core$builtin$$Map$set$12$(SuYiTao$45$SYT$CyberScavenger$$sfx_library, 6, SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7911);
  moonbitlang$core$builtin$$Map$set$12$(SuYiTao$45$SYT$CyberScavenger$$sfx_library, 5, SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7912);
  moonbitlang$core$builtin$$Map$set$12$(SuYiTao$45$SYT$CyberScavenger$$sfx_library, 7, SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library$46$record$47$7913);
}
function SuYiTao$45$SYT$CyberScavenger$$audio_spawner_system(backend) {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const request = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$12$(SuYiTao$45$SYT$CyberScavenger$$sfx_library, request.sfx_type);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _template = _Some;
        const final_volume = _template.default_volume;
        const _p = _template.path;
        const _p$2 = false;
        backend.method_12(backend.self, _p, final_volume, _p$2);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val.length > 0) {
    moonbitlang$core$array$$Array$clear$144$(SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val);
    return;
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$add_score(amount) {
  SuYiTao$45$SYT$CyberScavenger$$score.val = SuYiTao$45$SYT$CyberScavenger$$score.val + amount | 0;
  moonbitlang$core$builtin$$println$86$(`【得分】: 增加了 ${moonbitlang$core$builtin$$Show$to_string$4$(amount)} 分, 当前总分: ${moonbitlang$core$builtin$$Show$to_string$4$(SuYiTao$45$SYT$CyberScavenger$$score.val)}`);
}
function SuYiTao$45$SYT$CyberScavenger$$update_score_display_system(_backend) {
  if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 1)) {
    const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$score_display_entity.val;
    if (_bind$12 === undefined) {
      return;
    } else {
      const _Some = _bind$12;
      const _entity = _Some;
      const _bind$13 = moonbitlang$core$builtin$$Map$get$7$(Milky2018$selene$sprite$$sprites, _entity);
      if (_bind$13 === undefined) {
        return;
      } else {
        const _Some$2 = _bind$13;
        const _old_sprite = _Some$2;
        const _bind$14 = _old_sprite.sprite_type;
        if (_bind$14.$tag === 5) {
          const _TextLayout = _bind$14;
          const _old_layout = _TextLayout._0;
          const new_score_text = `Score: ${moonbitlang$core$builtin$$Show$to_string$4$(SuYiTao$45$SYT$CyberScavenger$$score.val)}`;
          const _p = _old_layout.content;
          if (!(_p === new_score_text)) {
            const new_layout = Milky2018$selene$system$$TextLayout$new(new_score_text, _old_layout.color, _old_layout.font, _old_layout.max_width, _old_layout.align, new Option$Some$0$(_old_layout.line_height));
            const new_sprite = Milky2018$selene$sprite$$Sprite$from_text_layout$46$inner(new_layout, _old_sprite.zindex, _old_sprite.offset, _old_sprite.layer);
            moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, _entity, new_sprite);
            return;
          } else {
            return;
          }
        } else {
          return;
        }
      }
    }
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$spawn_projectile(source, target, source_team, effects, speed, sprite) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, source);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _source_pos = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, target);
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$13;
      const _target_pos = _Some$2;
      const projectile_entity = Milky2018$selene$system$$Entity$new();
      moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, projectile_entity, _source_pos);
      moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, projectile_entity, sprite);
      moonbitlang$core$builtin$$Map$set$49$(SuYiTao$45$SYT$CyberScavenger$$projectiles, projectile_entity, { source: source, source_team: source_team, speed: speed, on_hit_effects: effects, max_turn_rate: 0.5, navigation_constant: 1.5 });
      const initial_direction = Milky2018$selene$math$$Vec2D$normalize({ _0: _target_pos._0 - _source_pos._0, _1: _target_pos._1 - _source_pos._1 });
      moonbitlang$core$builtin$$Map$set$48$(Milky2018$selene$velocity$$velocities, projectile_entity, { _0: initial_direction._0 * speed, _1: initial_direction._1 * speed });
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$execute_bullet_attack(attacker, target, stats) {
  moonbitlang$core$builtin$$println$86$(`[Log] Executing Bullet Attack from ${moonbitlang$core$builtin$$Show$to_string$78$(attacker)} to ${moonbitlang$core$builtin$$Show$to_string$78$(target)}`);
  const _bind$12 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, attacker);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _attacker_team = _Some;
    const _p = stats.bullet_color;
    const _p$2 = "red";
    let color_to_use;
    if (_p === undefined) {
      color_to_use = _p$2;
    } else {
      const _p$3 = _p;
      color_to_use = _p$3;
    }
    const _p$3 = 5;
    const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$3);
    const bullet_sprite = Milky2018$selene$sprite$$Sprite$from_shape(Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(color_to_use)), 200, undefined, 0);
    SuYiTao$45$SYT$CyberScavenger$$spawn_projectile(attacker, target, _attacker_team, stats.on_hit_effects, 5, bullet_sprite);
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$apply_projectile_effect(proj_data, actual_hit_target, _hit_pos) {
  SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(proj_data.source, actual_hit_target, proj_data.on_hit_effects);
}
function SuYiTao$45$SYT$CyberScavenger$$projectile_system(_backend) {
  const current_projectiles_snapshot = moonbitlang$core$builtin$$Map$keys$49$(SuYiTao$45$SYT$CyberScavenger$$projectiles);
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  current_projectiles_snapshot((bullet) => {
    const _bind$12 = moonbitlang$core$builtin$$Map$get$49$(SuYiTao$45$SYT$CyberScavenger$$projectiles, bullet);
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const _proj_data = _Some;
      if (Milky2018$selene$system$$Entity$is_alive(bullet)) {
        const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, bullet);
        if (_bind$13 === undefined) {
        } else {
          const _Some$2 = _bind$13;
          const _bullet_pos = _Some$2;
          const _bind$14 = moonbitlang$core$builtin$$Map$get$48$(Milky2018$selene$velocity$$velocities, bullet);
          if (_bind$14 === undefined) {
          } else {
            const _Some$3 = _bind$14;
            const _bullet_vel = _Some$3;
            const current_pos = _bullet_pos;
            if (Milky2018$selene$math$$Vec2D$op_get(current_pos, 0) < 0 || (Milky2018$selene$math$$Vec2D$op_get(current_pos, 0) > 1280 || (Milky2018$selene$math$$Vec2D$op_get(current_pos, 1) < 0 || Milky2018$selene$math$$Vec2D$op_get(current_pos, 1) > 720))) {
              moonbitlang$core$builtin$$Map$remove$49$(SuYiTao$45$SYT$CyberScavenger$$projectiles, bullet);
              moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, bullet);
              return 1;
            }
            let closest_target_for_guidance = undefined;
            let min_guidance_distance = 99999;
            const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
            const _len = _arr.length;
            let _tmp = 0;
            while (true) {
              const _i = _tmp;
              if (_i < _len) {
                const unit = _arr[_i];
                const _bind$15 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit);
                if (_bind$15 === undefined) {
                } else {
                  const _Some$4 = _bind$15;
                  const _unit_team = _Some$4;
                  if (moonbitlang$core$builtin$$op_notequal$84$(_unit_team, _proj_data.source_team)) {
                    const _bind$16 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
                    if (_bind$16 === undefined) {
                    } else {
                      const _Some$5 = _bind$16;
                      const _unit_pos = _Some$5;
                      const distance = Milky2018$selene$math$$Vec2D$distance_to(_bullet_pos, _unit_pos);
                      if (distance < min_guidance_distance) {
                        min_guidance_distance = distance;
                        closest_target_for_guidance = unit;
                      }
                    }
                  }
                }
                _tmp = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$15 = closest_target_for_guidance;
            if (_bind$15 === undefined) {
            } else {
              const _Some$4 = _bind$15;
              const _target = _Some$4;
              const _bind$16 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _target);
              if (_bind$16 === undefined) {
              } else {
                const _Some$5 = _bind$16;
                const _target_pos = _Some$5;
                const line_of_sight = { _0: _target_pos._0 - _bullet_pos._0, _1: _target_pos._1 - _bullet_pos._1 };
                const los_rate = SuYiTao$45$SYT$CyberScavenger$$signed_angle_between(_bullet_vel, line_of_sight);
                const desired_turn_speed = _proj_data.navigation_constant * los_rate;
                const max_turn_this_frame = _proj_data.max_turn_rate * 0.0166666666666666664;
                const actual_turn_angle = Kaida$45$Amethyst$math$$clamp(desired_turn_speed, -max_turn_this_frame, max_turn_this_frame);
                const new_velocity_direction = Milky2018$selene$math$$Vec2D$normalize(SuYiTao$45$SYT$CyberScavenger$$rotate_vec2d(_bullet_vel, actual_turn_angle));
                const _p = _proj_data.speed;
                const final_velocity = { _0: new_velocity_direction._0 * _p, _1: new_velocity_direction._1 * _p };
                moonbitlang$core$builtin$$Map$set$48$(Milky2018$selene$velocity$$velocities, bullet, final_velocity);
              }
            }
            let hit_target = undefined;
            const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
            const _len$2 = _arr$2.length;
            let _tmp$2 = 0;
            while (true) {
              const _i = _tmp$2;
              if (_i < _len$2) {
                const unit = _arr$2[_i];
                const _bind$16 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit);
                if (_bind$16 === undefined) {
                } else {
                  const _Some$4 = _bind$16;
                  const _unit_team = _Some$4;
                  if (moonbitlang$core$builtin$$op_notequal$84$(_unit_team, _proj_data.source_team)) {
                    const _bind$17 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
                    if (_bind$17 === undefined) {
                    } else {
                      const _Some$5 = _bind$17;
                      const _unit_pos = _Some$5;
                      const _bind$18 = moonbitlang$core$builtin$$Map$get$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, unit);
                      if (_bind$18 === undefined) {
                      } else {
                        const _Some$6 = _bind$18;
                        const _unit_size = _Some$6;
                        if (Milky2018$selene$math$$Vec2D$distance_to(_bullet_pos, _unit_pos) < _unit_size.radius) {
                          hit_target = unit;
                          break;
                        }
                      }
                    }
                  }
                }
                _tmp$2 = _i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$16 = hit_target;
            if (_bind$16 === undefined) {
            } else {
              const _Some$4 = _bind$16;
              const _actual_hit_target = _Some$4;
              moonbitlang$core$builtin$$Map$remove$49$(SuYiTao$45$SYT$CyberScavenger$$projectiles, bullet);
              moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, bullet);
              const _bind$17 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _actual_hit_target);
              if (_bind$17 === undefined) {
              } else {
                const _Some$5 = _bind$17;
                const _hit_pos = _Some$5;
                SuYiTao$45$SYT$CyberScavenger$$apply_projectile_effect(_proj_data, _actual_hit_target, _hit_pos);
              }
            }
          }
        }
      } else {
        return 1;
      }
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      _return._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$player_control_system(_backend) {
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _head_entity = _Some;
    let target_direction_opt = undefined;
    const _bind$13 = SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val;
    switch (_bind$13) {
      case 0: {
        let turn_input = 0;
        if (Milky2018$selene$system$$is_pressed(0) || Milky2018$selene$system$$is_pressed(28)) {
          turn_input = -1;
        }
        if (Milky2018$selene$system$$is_pressed(3) || Milky2018$selene$system$$is_pressed(29)) {
          turn_input = 1;
        }
        if (turn_input !== 0) {
          const turn_angle = 4 * turn_input * 0.0166666666666666664;
          SuYiTao$45$SYT$CyberScavenger$$player_facing_vector.val = SuYiTao$45$SYT$CyberScavenger$$rotate_vec2d(SuYiTao$45$SYT$CyberScavenger$$player_facing_vector.val, turn_angle);
        }
        break;
      }
      case 1: {
        let input_vector = { _0: 0, _1: 0 };
        if (Milky2018$selene$system$$is_pressed(22) || Milky2018$selene$system$$is_pressed(26)) {
          input_vector = Milky2018$selene$math$$Vec2D$update(input_vector, 1, Milky2018$selene$math$$Vec2D$op_get(input_vector, 1) - 1);
        }
        if (Milky2018$selene$system$$is_pressed(18) || Milky2018$selene$system$$is_pressed(27)) {
          input_vector = Milky2018$selene$math$$Vec2D$update(input_vector, 1, Milky2018$selene$math$$Vec2D$op_get(input_vector, 1) + 1);
        }
        if (Milky2018$selene$system$$is_pressed(0) || Milky2018$selene$system$$is_pressed(28)) {
          input_vector = Milky2018$selene$math$$Vec2D$update(input_vector, 0, Milky2018$selene$math$$Vec2D$op_get(input_vector, 0) - 1);
        }
        if (Milky2018$selene$system$$is_pressed(3) || Milky2018$selene$system$$is_pressed(29)) {
          input_vector = Milky2018$selene$math$$Vec2D$update(input_vector, 0, Milky2018$selene$math$$Vec2D$op_get(input_vector, 0) + 1);
        }
        if (Milky2018$selene$math$$Vec2D$distance_to(input_vector, { _0: 0, _1: 0 }) > 0.01) {
          target_direction_opt = Milky2018$selene$math$$Vec2D$normalize(input_vector);
        }
        break;
      }
      default: {
        const _bind$14 = SuYiTao$45$SYT$CyberScavenger$$joystick.val;
        if (_bind$14 === undefined) {
        } else {
          const _Some$2 = _bind$14;
          const _joy = _Some$2;
          if (Milky2018$selene$math$$Vec2D$distance_to(_joy.direction, { _0: 0, _1: 0 }) > 0.01) {
            target_direction_opt = Milky2018$selene$math$$Vec2D$normalize(_joy.direction);
          }
        }
      }
    }
    const _bind$15 = target_direction_opt;
    if (_bind$15 === undefined) {
    } else {
      const _Some$2 = _bind$15;
      const _target_direction = _Some$2;
      const current_direction = SuYiTao$45$SYT$CyberScavenger$$player_facing_vector.val;
      const angle_difference = SuYiTao$45$SYT$CyberScavenger$$signed_angle_between(current_direction, _target_direction);
      const turn_angle = angle_difference * 0.1;
      SuYiTao$45$SYT$CyberScavenger$$player_facing_vector.val = SuYiTao$45$SYT$CyberScavenger$$rotate_vec2d(current_direction, turn_angle);
    }
    const _p = Milky2018$selene$math$$Vec2D$normalize(SuYiTao$45$SYT$CyberScavenger$$player_facing_vector.val);
    const _p$2 = 3;
    const final_velocity = { _0: _p._0 * _p$2, _1: _p._1 * _p$2 };
    moonbitlang$core$builtin$$Map$set$48$(Milky2018$selene$velocity$$velocities, _head_entity, final_velocity);
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$path_history_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$54$(SuYiTao$45$SYT$CyberScavenger$$path_histories);
  _bind$12((unit) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$54$(SuYiTao$45$SYT$CyberScavenger$$path_histories, unit);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _history = _Some;
      const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
      if (_bind$14 === undefined) {
      } else {
        const _Some$2 = _bind$14;
        const _pos = _Some$2;
        moonbitlang$core$array$$Array$push$60$(_history.points, _pos);
        if (_history.points.length > 500) {
          moonbitlang$core$array$$Array$remove$60$(_history.points, 0);
        }
        moonbitlang$core$builtin$$Map$set$54$(SuYiTao$45$SYT$CyberScavenger$$path_histories, unit, _history);
      }
    }
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$train_snake_follow_system(_backend) {
  let current_car_opt = undefined;
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
  if (_bind$12 === undefined) {
  } else {
    const _Some = _bind$12;
    const _h = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _h);
    if (_bind$13 === undefined) {
    } else {
      const _Some$2 = _bind$13;
      const _head_data = _Some$2;
      current_car_opt = _head_data.next;
    }
  }
  let car_index = 1;
  while (true) {
    const _bind$13 = current_car_opt;
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some = _bind$13;
      const _car_entity = _Some;
      const _bind$14 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _car_entity);
      if (_bind$14 === undefined) {
      } else {
        const _Some$2 = _bind$14;
        const _car_data = _Some$2;
        const _bind$15 = _car_data.prev;
        if (_bind$15 === undefined) {
        } else {
          const _Some$3 = _bind$15;
          const _leader = _Some$3;
          const _bind$16 = moonbitlang$core$builtin$$Map$get$54$(SuYiTao$45$SYT$CyberScavenger$$path_histories, _leader);
          if (_bind$16 === undefined) {
          } else {
            const _Some$4 = _bind$16;
            const _leader_history = _Some$4;
            const path = _leader_history.points;
            if (path.length < 1) {
              continue;
            }
            const desired_distance_from_head = (car_index + 0) * 40;
            const _bind$17 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
            let head_path_opt;
            if (_bind$17 === undefined) {
              head_path_opt = undefined;
            } else {
              const _Some$5 = _bind$17;
              const _h = _Some$5;
              head_path_opt = moonbitlang$core$builtin$$Map$get$54$(SuYiTao$45$SYT$CyberScavenger$$path_histories, _h);
            }
            if (head_path_opt === undefined) {
            } else {
              const _Some$5 = head_path_opt;
              const _head_history = _Some$5;
              const head_path = _head_history.points;
              if (head_path.length > 1) {
                let target_pos = moonbitlang$core$array$$Array$at$60$(head_path, head_path.length - 1 | 0);
                let distance_travelled_backwards = 0;
                let _tmp = head_path.length - 2 | 0;
                while (true) {
                  const i = _tmp;
                  if (i >= 0) {
                    const p_new = moonbitlang$core$array$$Array$at$60$(head_path, i + 1 | 0);
                    const p_old = moonbitlang$core$array$$Array$at$60$(head_path, i);
                    const segment_length = Milky2018$selene$math$$Vec2D$distance_to(p_new, p_old);
                    if (distance_travelled_backwards + segment_length >= desired_distance_from_head) {
                      const distance_needed_on_this_segment = desired_distance_from_head - distance_travelled_backwards;
                      const ratio = segment_length === 0 ? 0 : distance_needed_on_this_segment / segment_length;
                      target_pos = SuYiTao$45$SYT$CyberScavenger$$vec2d_lerp(p_new, p_old, ratio);
                      break;
                    }
                    distance_travelled_backwards = distance_travelled_backwards + segment_length;
                    _tmp = i - 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, _car_entity, target_pos);
              }
            }
          }
        }
      }
      car_index = car_index + 1 | 0;
      const _bind$15 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _car_entity);
      if (_bind$15 === undefined) {
        current_car_opt = undefined;
      } else {
        const _Some$2 = _bind$15;
        const _car_data = _Some$2;
        current_car_opt = _car_data.next;
      }
      continue;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$_connect_player_unit_to_train(new_unit) {
  moonbitlang$core$builtin$$Map$set$54$(SuYiTao$45$SYT$CyberScavenger$$path_histories, new_unit, { points: [] });
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
  if (_bind$12 === undefined) {
    SuYiTao$45$SYT$CyberScavenger$$player_head.val = new_unit;
    SuYiTao$45$SYT$CyberScavenger$$player_tail.val = new_unit;
    moonbitlang$core$builtin$$Map$set$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, new_unit, { prev: undefined, next: undefined });
    return;
  } else {
    const _p = SuYiTao$45$SYT$CyberScavenger$$player_tail.val;
    let current_tail_entity;
    if (_p === undefined) {
      current_tail_entity = $panic();
    } else {
      const _p$2 = _p;
      current_tail_entity = _p$2;
    }
    const _bind$13 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, current_tail_entity);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _tail_car_comp = _Some;
      moonbitlang$core$builtin$$Map$set$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, current_tail_entity, { prev: _tail_car_comp.prev, next: new_unit });
    }
    moonbitlang$core$builtin$$Map$set$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, new_unit, { prev: current_tail_entity, next: undefined });
    SuYiTao$45$SYT$CyberScavenger$$player_tail.val = new_unit;
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$player_train_management_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$iter2$44$(SuYiTao$45$SYT$CyberScavenger$$teams);
  _bind$12((unit, team) => {
    if (moonbitlang$core$builtin$$Eq$equal$84$(team, 0)) {
      let is_in_train;
      if (moonbitlang$core$builtin$$Eq$equal$85$(SuYiTao$45$SYT$CyberScavenger$$player_head.val, unit)) {
        is_in_train = true;
      } else {
        const _bind$13 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, unit);
        is_in_train = !(_bind$13 === undefined);
      }
      if (!is_in_train) {
        SuYiTao$45$SYT$CyberScavenger$$_connect_player_unit_to_train(unit);
      }
    }
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$relink_train_chain(dead_unit) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, dead_unit);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _dead_car_data = _Some;
    const prev_opt = _dead_car_data.prev;
    const next_opt = _dead_car_data.next;
    if (prev_opt === undefined) {
    } else {
      const _Some$2 = prev_opt;
      const _prev_entity = _Some$2;
      if (next_opt === undefined) {
      } else {
        const _Some$3 = next_opt;
        const _next_entity = _Some$3;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _prev_entity);
        if (_bind$13 === undefined) {
        } else {
          const _Some$4 = _bind$13;
          const _prev_comp = _Some$4;
          moonbitlang$core$builtin$$Map$set$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _prev_entity, { prev: _prev_comp.prev, next: _next_entity });
        }
        const _bind$14 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _next_entity);
        if (_bind$14 === undefined) {
        } else {
          const _Some$4 = _bind$14;
          const _next_comp = _Some$4;
          moonbitlang$core$builtin$$Map$set$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _next_entity, { prev: _prev_entity, next: _next_comp.next });
        }
      }
    }
    if (moonbitlang$core$builtin$$Eq$equal$85$(SuYiTao$45$SYT$CyberScavenger$$player_head.val, dead_unit)) {
      SuYiTao$45$SYT$CyberScavenger$$player_head.val = next_opt;
      if (next_opt === undefined) {
      } else {
        const _Some$2 = next_opt;
        const _new_head = _Some$2;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _new_head);
        if (_bind$13 === undefined) {
        } else {
          const _Some$3 = _bind$13;
          const _comp = _Some$3;
          moonbitlang$core$builtin$$Map$set$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _new_head, { prev: undefined, next: _comp.next });
        }
      }
    }
    if (moonbitlang$core$builtin$$Eq$equal$85$(SuYiTao$45$SYT$CyberScavenger$$player_tail.val, dead_unit)) {
      SuYiTao$45$SYT$CyberScavenger$$player_tail.val = prev_opt;
      if (prev_opt === undefined) {
        return;
      } else {
        const _Some$2 = prev_opt;
        const _new_tail = _Some$2;
        const _bind$13 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _new_tail);
        if (_bind$13 === undefined) {
          return;
        } else {
          const _Some$3 = _bind$13;
          const _comp = _Some$3;
          moonbitlang$core$builtin$$Map$set$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _new_tail, { prev: _comp.prev, next: undefined });
          return;
        }
      }
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$wall_bounce_system(_backend, w, h) {
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _head_entity = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _head_entity);
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$13;
      const _pos = _Some$2;
      const current_pos = _pos;
      let facing_vec = SuYiTao$45$SYT$CyberScavenger$$player_facing_vector.val;
      if (Milky2018$selene$math$$Vec2D$op_get(current_pos, 0) <= 10 && Milky2018$selene$math$$Vec2D$op_get(facing_vec, 0) < 0 || Milky2018$selene$math$$Vec2D$op_get(current_pos, 0) >= w - 10 && Milky2018$selene$math$$Vec2D$op_get(facing_vec, 0) > 0) {
        facing_vec = Milky2018$selene$math$$Vec2D$update(facing_vec, 0, -Milky2018$selene$math$$Vec2D$op_get(facing_vec, 0));
      }
      if (Milky2018$selene$math$$Vec2D$op_get(current_pos, 1) <= 10 && Milky2018$selene$math$$Vec2D$op_get(facing_vec, 1) < 0 || Milky2018$selene$math$$Vec2D$op_get(current_pos, 1) >= h - 10 && Milky2018$selene$math$$Vec2D$op_get(facing_vec, 1) > 0) {
        facing_vec = Milky2018$selene$math$$Vec2D$update(facing_vec, 1, -Milky2018$selene$math$$Vec2D$op_get(facing_vec, 1));
      }
      SuYiTao$45$SYT$CyberScavenger$$player_facing_vector.val = facing_vec;
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$pickup_system(_backend) {
  const player_cars = [];
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
  if (_bind$12 === undefined) {
  } else {
    const _Some = _bind$12;
    const _head = _Some;
    let current_car_opt = _head;
    while (true) {
      const _bind$13 = current_car_opt;
      if (_bind$13 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$13;
        const _car_entity = _Some$2;
        moonbitlang$core$array$$Array$push$6$(player_cars, _car_entity);
        const _bind$14 = moonbitlang$core$builtin$$Map$get$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, _car_entity);
        if (_bind$14 === undefined) {
          current_car_opt = undefined;
        } else {
          const _Some$3 = _bind$14;
          const _car_data = _Some$3;
          current_car_opt = _car_data.next;
        }
        continue;
      }
    }
  }
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$13 = moonbitlang$core$builtin$$Map$iter2$33$(SuYiTao$45$SYT$CyberScavenger$$pickups);
  _bind$13((pickup_entity, pickup_data) => {
    if (!Milky2018$selene$system$$Entity$is_alive(pickup_entity)) {
      return 1;
    }
    const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, pickup_entity);
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const _pickup_pos = _Some;
      const _bind$15 = moonbitlang$core$builtin$$Map$get$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, pickup_entity);
      if (_bind$15 === undefined) {
      } else {
        const _Some$2 = _bind$15;
        const _pickup_size = _Some$2;
        const _len = player_cars.length;
        let _tmp = 0;
        while (true) {
          const _i = _tmp;
          if (_i < _len) {
            const car_entity = player_cars[_i];
            const _bind$16 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, car_entity);
            if (_bind$16 === undefined) {
            } else {
              const _Some$3 = _bind$16;
              const _car_pos = _Some$3;
              const _bind$17 = moonbitlang$core$builtin$$Map$get$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, car_entity);
              if (_bind$17 === undefined) {
              } else {
                const _Some$4 = _bind$17;
                const _car_size = _Some$4;
                const distance = Milky2018$selene$math$$Vec2D$distance_to(_pickup_pos, _car_pos);
                const combined_radius = _pickup_size.radius + _car_size.radius;
                if (distance < combined_radius) {
                  moonbitlang$core$builtin$$println$86$(`【拾取】: 玩家拾取了 ${moonbitlang$core$builtin$$Show$to_string$78$(pickup_entity)}`);
                  const _bind$18 = SuYiTao$45$SYT$CyberScavenger$$player_head.val;
                  if (_bind$18 === undefined) {
                  } else {
                    const _Some$5 = _bind$18;
                    const _head_entity = _Some$5;
                    SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(pickup_entity, _head_entity, pickup_data.effects);
                  }
                  const _bind$19 = pickup_data.pickup_sfx;
                  if (_bind$19 === undefined) {
                  } else {
                    const _Some$5 = _bind$19;
                    const _sfx = _Some$5;
                    moonbitlang$core$array$$Array$push$144$(SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val, { sfx_type: _sfx, position: _pickup_pos });
                  }
                  const _bind$20 = pickup_data.pickup_vfx;
                  if (_bind$20 === undefined) {
                  } else {
                    const _Some$5 = _bind$20;
                    const _vfx = _Some$5;
                    moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _vfx, position: _pickup_pos, rotation: 0, parent_entity: undefined, to_position: undefined });
                  }
                  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, pickup_entity);
                  moonbitlang$core$builtin$$Map$remove$33$(SuYiTao$45$SYT$CyberScavenger$$pickups, pickup_entity);
                  break;
                }
              }
            }
            _tmp = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      _return._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
const SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8197 = 7;
const SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$record$47$8198 = { is_pulsing_scale: true, rotation_speed: 0, scale_speed: 3, scale_amplitude: 0.1, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8199 = SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$record$47$8198;
const SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8200 = 7;
const SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$record$47$8201 = { is_pulsing_scale: false, rotation_speed: 1, scale_speed: 0, scale_amplitude: 0, _current_angle: 0, _time_elapsed: 0 };
const SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8202 = SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$record$47$8201;
function SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library() {
  moonbitlang$core$builtin$$Map$set$14$(SuYiTao$45$SYT$CyberScavenger$$pickup_library, 0, { sprite_template: new SpriteTemplate$Picture("assets/gfx/pickups/ChargeShield.png", { _0: 40, _1: 40 }), pickup_sfx: SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8197, pickup_vfx: undefined, radius: 15, duration: 10, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8199 });
  const _p = 20;
  const _p$2 = 8;
  const _p$3 = 90;
  const _p$4 = "#FF4500";
  moonbitlang$core$builtin$$Map$set$14$(SuYiTao$45$SYT$CyberScavenger$$pickup_library, 1, { sprite_template: new SpriteTemplate$Shape(new $64$Milky2018$47$selene$47$sprite$46$Shape$Cross(_p, _p$2, _p$3), new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4)), pickup_sfx: SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8200, pickup_vfx: undefined, radius: 20, duration: 10, dynamic_transform: SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library$46$constr$47$8202 });
}
const SuYiTao$45$SYT$CyberScavenger$$pickup_spawner_system$46$constr$47$8203 = 8;
function SuYiTao$45$SYT$CyberScavenger$$pickup_spawner_system(_backend) {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$pickup_requests.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const request = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$14$(SuYiTao$45$SYT$CyberScavenger$$pickup_library, request.pickup_type);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _template = _Some;
        const _bind$13 = request.data;
        let _tmp$2;
        if (_bind$13.$tag === 0) {
          const _ShieldData = _bind$13;
          const _charges = _ShieldData._0;
          _tmp$2 = [new OnHitEffect$GainChargeShield(_charges)];
        } else {
          const _HealthData = _bind$13;
          const _amount = _HealthData._0;
          _tmp$2 = [new OnHitEffect$Heal(_amount, SuYiTao$45$SYT$CyberScavenger$$pickup_spawner_system$46$constr$47$8203)];
        }
        const _tmp$3 = _tmp$2;
        const _tmp$4 = _template.pickup_sfx;
        const _tmp$5 = _template.pickup_vfx;
        const pickup_component = { effects: _tmp$3, pickup_sfx: _tmp$4, pickup_vfx: _tmp$5, remaining_duration: _template.duration };
        const pickup_entity = Milky2018$selene$system$$Entity$new();
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, pickup_entity, request.position);
        moonbitlang$core$builtin$$Map$set$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, pickup_entity, { radius: _template.radius });
        const _bind$14 = _template.sprite_template;
        let sprite;
        switch (_bind$14.$tag) {
          case 1: {
            const _Shape = _bind$14;
            const _shape = _Shape._0;
            const _style = _Shape._1;
            sprite = Milky2018$selene$sprite$$Sprite$from_shape(Milky2018$selene$sprite$$ColoredShape$new(_shape, _style), 10, undefined, 0);
            break;
          }
          case 0: {
            const _Picture = _bind$14;
            const _path = _Picture._0;
            const _size = _Picture._1;
            const pic = Milky2018$selene$sprite$$Picture$new(_size, _path, undefined, undefined);
            const offset = { _0: -Milky2018$selene$math$$Vec2D$op_get(_size, 0) / 2, _1: -Milky2018$selene$math$$Vec2D$op_get(_size, 1) / 2 };
            sprite = Milky2018$selene$sprite$$Sprite$from_picture$46$inner(pic, 10, offset, 0);
            break;
          }
          case 2: {
            const _Animation = _bind$14;
            const _anim = _Animation._0;
            const frame_size = _anim.frames.length > 0 ? moonbitlang$core$array$$Array$at$88$(_anim.frames, 0).size : { _0: 0, _1: 0 };
            const offset$2 = { _0: -Milky2018$selene$math$$Vec2D$op_get(frame_size, 0) / 2, _1: -Milky2018$selene$math$$Vec2D$op_get(frame_size, 1) / 2 };
            sprite = Milky2018$selene$sprite$$Sprite$from_animation$46$inner(_anim, 10, offset$2, 0);
            break;
          }
          default: {
            const _p = 0;
            const _p$2 = 0;
            const _p$3 = 0;
            const _tmp$6 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Rect(_p, _p$2, _p$3);
            const _p$4 = "transparent";
            sprite = Milky2018$selene$sprite$$Sprite$from_shape(Milky2018$selene$sprite$$ColoredShape$new(_tmp$6, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4)), 0, undefined, undefined);
          }
        }
        moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, pickup_entity, sprite);
        const _bind$15 = _template.dynamic_transform;
        if (_bind$15 === undefined) {
        } else {
          const _Some$2 = _bind$15;
          const _dt = _Some$2;
          moonbitlang$core$builtin$$Map$set$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, pickup_entity, _dt);
        }
        moonbitlang$core$builtin$$Map$set$33$(SuYiTao$45$SYT$CyberScavenger$$pickups, pickup_entity, pickup_component);
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (SuYiTao$45$SYT$CyberScavenger$$pickup_requests.val.length > 0) {
    moonbitlang$core$array$$Array$clear$146$(SuYiTao$45$SYT$CyberScavenger$$pickup_requests.val);
    return;
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$pickup_lifecycle_system(_backend) {
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$12 = moonbitlang$core$builtin$$Map$iter2$33$(SuYiTao$45$SYT$CyberScavenger$$pickups);
  _bind$12((pickup_entity, pickup_data) => {
    if (pickup_data.remaining_duration > 0) {
      pickup_data.remaining_duration = pickup_data.remaining_duration - 0.0166666666666666664;
      if (pickup_data.remaining_duration <= 0) {
        moonbitlang$core$builtin$$println$86$(`【清理】: 拾取物 ${moonbitlang$core$builtin$$Show$to_string$78$(pickup_entity)} 因超时而被移除。`);
        moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, pickup_entity);
        moonbitlang$core$builtin$$Map$remove$33$(SuYiTao$45$SYT$CyberScavenger$$pickups, pickup_entity);
      }
    } else {
      return 1;
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      _return._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$apply_velocity_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$48$(Milky2018$selene$velocity$$velocities);
  _bind$12((entity) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, entity);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _pos = _Some;
      const _bind$14 = moonbitlang$core$builtin$$Map$get$48$(Milky2018$selene$velocity$$velocities, entity);
      if (_bind$14 === undefined) {
      } else {
        const _Some$2 = _bind$14;
        const _vel = _Some$2;
        const new_pos = { _0: _pos._0 + _vel._0, _1: _pos._1 + _vel._1 };
        moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, entity, new_pos);
      }
    }
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$get_computed_movement_stats(unit) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats, unit);
  if (_bind$12 === undefined) {
  } else {
    const _Some = _bind$12;
    const _base_stats = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, unit);
    if (_bind$13.$tag === 1) {
      const _Some$2 = _bind$13;
      const _buff_list = _Some$2._0;
      let computed_stats = _base_stats;
      const _len = _buff_list.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const buff = _buff_list[_i];
          const _bind$14 = buff.buff_type;
          if (_bind$14.$tag === 6) {
            const _MultiplySpeed = _bind$14;
            const _factor = _MultiplySpeed._0;
            moonbitlang$core$builtin$$println$86$(`[Log] Unit ${moonbitlang$core$builtin$$Show$to_string$78$(unit)} is applying MultiplySpeed buff! Factor: ${moonbitlang$core$builtin$$Show$to_string$115$(_factor)}, Base Speed: ${moonbitlang$core$builtin$$Show$to_string$115$(computed_stats.speed)}`);
            computed_stats = { speed: computed_stats.speed * _factor };
            moonbitlang$core$builtin$$println$86$(`[Log] Unit ${moonbitlang$core$builtin$$Show$to_string$78$(unit)} new computed speed: ${moonbitlang$core$builtin$$Show$to_string$115$(computed_stats.speed)}`);
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return computed_stats;
    } else {
      return _base_stats;
    }
  }
  return undefined;
}
function SuYiTao$45$SYT$CyberScavenger$$enemy_movement_system(_backend) {
  const final_velocities = moonbitlang$core$builtin$$Map$new$46$inner$43$(8);
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      const _bind$12 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, entity);
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        if (_x === 1) {
          let intent_direction = { _0: 0, _1: 0 };
          const _bind$13 = moonbitlang$core$builtin$$Map$get$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, entity);
          if (_bind$13 === undefined) {
          } else {
            const _Some$2 = _bind$13;
            const _target = _Some$2;
            const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, entity);
            if (_bind$14 === undefined) {
            } else {
              const _Some$3 = _bind$14;
              const _enemy_pos = _Some$3;
              const _bind$15 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _target);
              if (_bind$15 === undefined) {
              } else {
                const _Some$4 = _bind$15;
                const _target_pos = _Some$4;
                const _bind$16 = moonbitlang$core$builtin$$Map$get$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, entity);
                if (_bind$16 === undefined) {
                } else {
                  const _Some$5 = _bind$16;
                  const _combat_stats = _Some$5;
                  if (Milky2018$selene$math$$Vec2D$distance_to(_enemy_pos, _target_pos) > _combat_stats.attack_range) {
                    intent_direction = Milky2018$selene$math$$Vec2D$normalize({ _0: _target_pos._0 - _enemy_pos._0, _1: _target_pos._1 - _enemy_pos._1 });
                  }
                }
              }
            }
          }
          let avoidance_direction = { _0: 0, _1: 0 };
          const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, entity);
          if (_bind$14 === undefined) {
          } else {
            const _Some$2 = _bind$14;
            const _pos_a = _Some$2;
            const _bind$15 = moonbitlang$core$builtin$$Map$get$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, entity);
            if (_bind$15 === undefined) {
            } else {
              const _Some$3 = _bind$15;
              const _size_a = _Some$3;
              const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
              const _len$2 = _arr$2.length;
              let _tmp$2 = 0;
              while (true) {
                const _i$2 = _tmp$2;
                if (_i$2 < _len$2) {
                  const other_enemy = _arr$2[_i$2];
                  if (moonbitlang$core$builtin$$op_notequal$6$(entity, other_enemy)) {
                    _L: {
                      _L$2: {
                        const _bind$16 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, other_enemy);
                        if (_bind$16 === undefined) {
                          break _L$2;
                        } else {
                          const _Some$4 = _bind$16;
                          const _x$2 = _Some$4;
                          if (_x$2 === 1) {
                            const _bind$17 = moonbitlang$core$builtin$$Map$get$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, other_enemy);
                            if (_bind$17 === undefined) {
                            } else {
                              const _Some$5 = _bind$17;
                              const _size_b = _Some$5;
                              const _bind$18 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, other_enemy);
                              if (_bind$18 === undefined) {
                              } else {
                                const _Some$6 = _bind$18;
                                const _pos_b = _Some$6;
                                const distance = Milky2018$selene$math$$Vec2D$distance_to(_pos_a, _pos_b);
                                const combined_radius = _size_a.radius + _size_b.radius;
                                if (distance < combined_radius) {
                                  const direction = Milky2018$selene$math$$Vec2D$normalize({ _0: _pos_a._0 - _pos_b._0, _1: _pos_a._1 - _pos_b._1 });
                                  const strength = (combined_radius - distance) / combined_radius;
                                  const push_force = { _0: direction._0 * strength, _1: direction._1 * strength };
                                  const _p = avoidance_direction;
                                  avoidance_direction = { _0: _p._0 + push_force._0, _1: _p._1 + push_force._1 };
                                }
                              }
                            }
                          } else {
                            break _L$2;
                          }
                        }
                        break _L;
                      }
                    }
                  }
                  _tmp$2 = _i$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
          }
          const _p = intent_direction;
          const _p$2 = avoidance_direction;
          const _p$3 = 1.5;
          const _p$4 = { _0: _p$2._0 * _p$3, _1: _p$2._1 * _p$3 };
          const final_direction = { _0: _p._0 + _p$4._0, _1: _p._1 + _p$4._1 };
          let final_velocity = { _0: 0, _1: 0 };
          const _bind$15 = SuYiTao$45$SYT$CyberScavenger$$get_computed_movement_stats(entity);
          if (_bind$15 === undefined) {
          } else {
            const _Some$2 = _bind$15;
            const _move_stats = _Some$2;
            if (Math.sqrt(final_direction._0 * final_direction._0 + final_direction._1 * final_direction._1) > 0.001) {
              const _p$5 = Milky2018$selene$math$$Vec2D$normalize(final_direction);
              const _p$6 = _move_stats.speed;
              final_velocity = { _0: _p$5._0 * _p$6, _1: _p$5._1 * _p$6 };
            }
          }
          moonbitlang$core$builtin$$Map$set$43$(final_velocities, entity, final_velocity);
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$12 = moonbitlang$core$builtin$$Map$iter2$43$(final_velocities);
  _bind$12((entity, final_vel) => {
    moonbitlang$core$builtin$$Map$set$48$(Milky2018$selene$velocity$$velocities, entity, final_vel);
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$setup_joystick_ui(center_pos) {
  const base_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, base_entity, center_pos);
  const _p = 80;
  const _tmp = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p);
  const _p$2 = "rgba(128, 128, 128, 0.5)";
  const base_shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$2));
  const base_sprite = Milky2018$selene$sprite$$Sprite$from_shape(base_shape, 90, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, base_entity, base_sprite);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, base_entity);
  const handle_entity = Milky2018$selene$system$$Entity$new();
  moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, handle_entity, center_pos);
  const _p$3 = 40;
  const _tmp$2 = new $64$Milky2018$47$selene$47$sprite$46$Shape$Circle(_p$3);
  const _p$4 = "rgba(200, 200, 200, 0.7)";
  const handle_shape = Milky2018$selene$sprite$$ColoredShape$new(_tmp$2, new $64$Milky2018$47$selene$47$sprite$46$DrawStyle$Fill(_p$4));
  const handle_sprite = Milky2018$selene$sprite$$Sprite$from_shape(handle_shape, 91, undefined, 1);
  moonbitlang$core$builtin$$Map$set$7$(Milky2018$selene$sprite$$sprites, handle_entity, handle_sprite);
  moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$ui_entities.val, handle_entity);
  return { base_entity: base_entity, handle_entity: handle_entity, base_pos: center_pos, base_radius: 80, handle_radius: 40, active_touch_id: undefined, direction: { _0: 0, _1: 0 } };
}
function SuYiTao$45$SYT$CyberScavenger$$cleanup_joystick_ui(joy) {
  const _p = SuYiTao$45$SYT$CyberScavenger$$ui_entities.val;
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (moonbitlang$core$builtin$$op_notequal$6$(_p$5, joy.base_entity) && moonbitlang$core$builtin$$op_notequal$6$(_p$5, joy.handle_entity)) {
        moonbitlang$core$array$$Array$push$6$(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  SuYiTao$45$SYT$CyberScavenger$$ui_entities.val = _p$2;
  moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, joy.base_entity);
  moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, joy.handle_entity);
  Milky2018$selene$system$$Entity$destroy(joy.base_entity);
  Milky2018$selene$system$$Entity$destroy(joy.handle_entity);
}
function SuYiTao$45$SYT$CyberScavenger$$cleanup_tutorial_joystick() {
  const _p = SuYiTao$45$SYT$CyberScavenger$$tutorial_joystick_entities.val;
  if (_p.length === 0) {
    return undefined;
  }
  moonbitlang$core$builtin$$println$86$("【引导】: 玩家已开始操作，销毁教学摇杆。");
  const _arr = SuYiTao$45$SYT$CyberScavenger$$tutorial_joystick_entities.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const entity = _arr[_i];
      moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, entity);
      moonbitlang$core$builtin$$Map$remove$29$(SuYiTao$45$SYT$CyberScavenger$$dynamic_transforms, entity);
      const _p$2 = SuYiTao$45$SYT$CyberScavenger$$ui_entities.val;
      const _p$3 = [];
      const _p$4 = _p$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$5 = _tmp$2;
        if (_p$5 < _p$4) {
          const _p$6 = _p$2[_p$5];
          if (moonbitlang$core$builtin$$op_notequal$6$(_p$6, entity)) {
            moonbitlang$core$array$$Array$push$6$(_p$3, _p$6);
          }
          _tmp$2 = _p$5 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      SuYiTao$45$SYT$CyberScavenger$$ui_entities.val = _p$3;
      Milky2018$selene$system$$Entity$destroy(entity);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$6$(SuYiTao$45$SYT$CyberScavenger$$tutorial_joystick_entities.val);
}
function SuYiTao$45$SYT$CyberScavenger$$joystick_system(_backend) {
  if (moonbitlang$core$builtin$$Eq$equal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 1) && moonbitlang$core$builtin$$Eq$equal$17$(SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val, 2)) {
    if (moonbitlang$core$builtin$$Eq$equal$17$(SuYiTao$45$SYT$CyberScavenger$$current_control_scheme.val, 2)) {
      const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$joystick.val;
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _joy = _Some;
        const _bind$13 = _joy.active_touch_id;
        if (_bind$13 === undefined) {
        } else {
          const _Some$2 = _bind$13;
          const _active_id = _Some$2;
          const _bind$14 = moonbitlang$core$builtin$$Map$get$24$(Milky2018$selene$system$$just_ended_touches, _active_id);
          if (_bind$14 === undefined) {
          } else {
            SuYiTao$45$SYT$CyberScavenger$$cleanup_joystick_ui(_joy);
            SuYiTao$45$SYT$CyberScavenger$$joystick.val = undefined;
            return undefined;
          }
        }
      }
      const _bind$13 = SuYiTao$45$SYT$CyberScavenger$$joystick.val;
      if (_bind$13 === undefined) {
        const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$ };
        const _bind$14 = moonbitlang$core$builtin$$Map$values$24$(Milky2018$selene$system$$just_began_touches);
        _bind$14((touch) => {
          if (SuYiTao$45$SYT$CyberScavenger$$is_point_inside_centered_rect(touch.pos, SuYiTao$45$SYT$CyberScavenger$$joystick_activation_zone)) {
            SuYiTao$45$SYT$CyberScavenger$$cleanup_tutorial_joystick();
            const new_joy = SuYiTao$45$SYT$CyberScavenger$$setup_joystick_ui(touch.pos);
            new_joy.active_touch_id = touch.id;
            SuYiTao$45$SYT$CyberScavenger$$joystick.val = new_joy;
            _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$9$(undefined);
            return 0;
          }
          return 1;
        });
        const _tmp = _foreach_result.val;
        switch (_tmp.$tag) {
          case 0: {
            break;
          }
          case 1: {
            const _break = _tmp;
            _break._0;
            break;
          }
          case 2: {
            const _return = _tmp;
            return _return._0;
          }
          case 3: {
            $panic();
            break;
          }
          default: {
            $panic();
          }
        }
      }
      const _bind$14 = SuYiTao$45$SYT$CyberScavenger$$joystick.val;
      if (_bind$14 === undefined) {
        return;
      } else {
        const _Some = _bind$14;
        const _joy = _Some;
        const _bind$15 = _joy.active_touch_id;
        if (_bind$15 === undefined) {
          return;
        } else {
          const _Some$2 = _bind$15;
          const _active_id = _Some$2;
          const _bind$16 = moonbitlang$core$builtin$$Map$get$24$(Milky2018$selene$system$$active_touches, _active_id);
          if (_bind$16 === undefined) {
            return;
          } else {
            const _Some$3 = _bind$16;
            const _active_touch = _Some$3;
            const _p = _active_touch.pos;
            const _p$2 = _joy.base_pos;
            const vec_from_center = { _0: _p._0 - _p$2._0, _1: _p._1 - _p$2._1 };
            const distance = Milky2018$selene$math$$Vec2D$distance_to(vec_from_center, { _0: 0, _1: 0 });
            let final_handle_pos;
            if (distance <= _joy.base_radius) {
              final_handle_pos = _active_touch.pos;
            } else {
              const _p$3 = _joy.base_pos;
              const _p$4 = Milky2018$selene$math$$Vec2D$normalize(vec_from_center);
              const _p$5 = _joy.base_radius;
              const _p$6 = { _0: _p$4._0 * _p$5, _1: _p$4._1 * _p$5 };
              final_handle_pos = { _0: _p$3._0 + _p$6._0, _1: _p$3._1 + _p$6._1 };
            }
            let new_direction;
            if (distance <= _joy.base_radius) {
              const _p$3 = _joy.base_radius;
              new_direction = { _0: vec_from_center._0 / _p$3, _1: vec_from_center._1 / _p$3 };
            } else {
              new_direction = Milky2018$selene$math$$Vec2D$normalize(vec_from_center);
            }
            _joy.direction = new_direction;
            moonbitlang$core$builtin$$Map$set$5$(Milky2018$selene$position$$positions, _joy.handle_entity, final_handle_pos);
            return;
          }
        }
      }
    } else {
      const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$joystick.val;
      if (_bind$12 === undefined) {
      } else {
        const _Some = _bind$12;
        const _joy = _Some;
        SuYiTao$45$SYT$CyberScavenger$$cleanup_joystick_ui(_joy);
        SuYiTao$45$SYT$CyberScavenger$$joystick.val = undefined;
      }
      return;
    }
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$init_game(backend) {
  SuYiTao$45$SYT$CyberScavenger$$add_map();
  SuYiTao$45$SYT$CyberScavenger$$setup_vfx_library();
  SuYiTao$45$SYT$CyberScavenger$$setup_sfx_library();
  SuYiTao$45$SYT$CyberScavenger$$setup_pickup_library();
  SuYiTao$45$SYT$CyberScavenger$$spawn_timer.val = 10;
  SuYiTao$45$SYT$CyberScavenger$$wave_count.val = 0;
  SuYiTao$45$SYT$CyberScavenger$$setup_main_menu_ui();
  SuYiTao$45$SYT$CyberScavenger$$is_paused.val = false;
}
function SuYiTao$45$SYT$CyberScavenger$$pause_toggle_system(_backend) {
  if (Milky2018$selene$system$$is_just_pressed(15)) {
    SuYiTao$45$SYT$CyberScavenger$$is_paused.val = !SuYiTao$45$SYT$CyberScavenger$$is_paused.val;
    if (SuYiTao$45$SYT$CyberScavenger$$is_paused.val) {
      moonbitlang$core$builtin$$println$86$("[Game] Paused");
      return;
    } else {
      moonbitlang$core$builtin$$println$86$("[Game] Resumed");
      return;
    }
  } else {
    return;
  }
}
const SuYiTao$45$SYT$CyberScavenger$$check_game_over_system$46$constr$47$8379 = 0;
function SuYiTao$45$SYT$CyberScavenger$$check_game_over_system(_backend) {
  if (moonbitlang$core$builtin$$op_notequal$25$(SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val, 1)) {
    return undefined;
  }
  let living_player_units = 0;
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit = _arr[_i];
      if (Milky2018$selene$system$$Entity$is_alive(unit)) {
        if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit), SuYiTao$45$SYT$CyberScavenger$$check_game_over_system$46$constr$47$8379)) {
          living_player_units = living_player_units + 1 | 0;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (living_player_units === 0) {
    moonbitlang$core$builtin$$println$86$("【游戏逻辑】: 所有玩家单位已阵亡，游戏结束！");
    SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val = 4;
    return;
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$aggro_system(_backend) {
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const unit_a = _arr[_i];
      if (Milky2018$selene$system$$Entity$is_alive(unit_a)) {
        const _bind$12 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit_a);
        if (_bind$12 === undefined) {
        } else {
          const _Some = _bind$12;
          const _team_a = _Some;
          let target_is_valid = true;
          const _bind$13 = moonbitlang$core$builtin$$Map$get$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, unit_a);
          if (_bind$13 === undefined) {
          } else {
            const _Some$2 = _bind$13;
            const _current_target = _Some$2;
            if (!Milky2018$selene$system$$Entity$is_alive(_current_target)) {
              target_is_valid = false;
            } else {
              _L: {
                _L$2: {
                  const _bind$14 = moonbitlang$core$builtin$$Map$get$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, unit_a);
                  if (_bind$14 === undefined) {
                    break _L$2;
                  } else {
                    const _Some$3 = _bind$14;
                    const _stats = _Some$3;
                    const _bind$15 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit_a);
                    if (_bind$15 === undefined) {
                      break _L$2;
                    } else {
                      const _Some$4 = _bind$15;
                      const _pos_a = _Some$4;
                      const _bind$16 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _current_target);
                      if (_bind$16 === undefined) {
                        break _L$2;
                      } else {
                        const _Some$5 = _bind$16;
                        const _pos_target = _Some$5;
                        if (Milky2018$selene$math$$Vec2D$distance_to(_pos_a, _pos_target) > _stats.aggro_range) {
                          target_is_valid = false;
                        }
                      }
                    }
                  }
                  break _L;
                }
                target_is_valid = false;
              }
            }
            if (!target_is_valid) {
              moonbitlang$core$builtin$$Map$remove$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, unit_a);
              moonbitlang$core$builtin$$println$86$(`【索敌】: 单位 ${moonbitlang$core$builtin$$Show$to_string$78$(unit_a)} 的目标已失效，已清除。`);
            }
          }
          const _bind$14 = moonbitlang$core$builtin$$Map$get$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, unit_a);
          if (_bind$14 === undefined) {
            let closest_target = undefined;
            let min_distance = 99999;
            const _bind$15 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit_a);
            if (_bind$15 === undefined) {
            } else {
              const _Some$2 = _bind$15;
              const _pos_a = _Some$2;
              const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
              const _len$2 = _arr$2.length;
              let _tmp$2 = 0;
              while (true) {
                const _i$2 = _tmp$2;
                if (_i$2 < _len$2) {
                  const unit_b = _arr$2[_i$2];
                  if (Milky2018$selene$system$$Entity$is_alive(unit_b)) {
                    const _bind$16 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit_b);
                    if (_bind$16 === undefined) {
                    } else {
                      const _Some$3 = _bind$16;
                      const _team_b = _Some$3;
                      if (moonbitlang$core$builtin$$op_notequal$84$(_team_a, _team_b)) {
                        const _bind$17 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit_b);
                        if (_bind$17 === undefined) {
                        } else {
                          const _Some$4 = _bind$17;
                          const _pos_b = _Some$4;
                          const distance = Milky2018$selene$math$$Vec2D$distance_to(_pos_a, _pos_b);
                          const _bind$18 = moonbitlang$core$builtin$$Map$get$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, unit_a);
                          if (_bind$18 === undefined) {
                          } else {
                            const _Some$5 = _bind$18;
                            const _stats = _Some$5;
                            if (distance < _stats.aggro_range) {
                              if (distance < min_distance) {
                                min_distance = distance;
                                closest_target = unit_b;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  _tmp$2 = _i$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
            const _bind$16 = closest_target;
            if (_bind$16 === undefined) {
            } else {
              const _Some$2 = _bind$16;
              const _target = _Some$2;
              moonbitlang$core$builtin$$Map$set$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, unit_a, _target);
              moonbitlang$core$builtin$$println$86$(`【索敌】: 单位 ${moonbitlang$core$builtin$$Show$to_string$78$(unit_a)} 锁定了新目标 ${moonbitlang$core$builtin$$Show$to_string$78$(_target)}`);
            }
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$buff_system(_backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs);
  _bind$12((unit) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, unit);
    if (_bind$13.$tag === 1) {
      const _Some = _bind$13;
      const _buff_list = _Some._0;
      const updated_buff_list = moonbitlang$core$array$$Array$filter_map$74$(_buff_list, (buff) => {
        const new_duration = buff.remaining_duration - 0.0166666666666666664;
        return new_duration > 0 ? { buff_type: buff.buff_type, remaining_duration: new_duration } : undefined;
      });
      if (updated_buff_list.length === 0) {
        moonbitlang$core$builtin$$Map$remove$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, unit);
      } else {
        moonbitlang$core$builtin$$Map$set$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, unit, updated_buff_list);
      }
    }
    return 1;
  });
}
function SuYiTao$45$SYT$CyberScavenger$$cleanup_system(_backend) {
  if (SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val.length > 0) {
    const _arr = SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const dead_unit = _arr[_i];
        const _bind$12 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, dead_unit);
        if (_bind$12 === undefined) {
        } else {
          const _Some = _bind$12;
          const _x = _Some;
          if (_x === 0) {
            SuYiTao$45$SYT$CyberScavenger$$relink_train_chain(dead_unit);
          }
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _arr$2 = SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val;
    const _len$2 = _arr$2.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const dead_unit = _arr$2[_i];
        moonbitlang$core$builtin$$println$86$(`[Log] Cleanup System is processing: ${moonbitlang$core$builtin$$Show$to_string$78$(dead_unit)}`);
        Milky2018$selene$system$$Entity$destroy(dead_unit);
        const _bind$12 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, dead_unit);
        if (_bind$12 === undefined) {
        } else {
          const _Some = _bind$12;
          const _health = _Some;
          Milky2018$selene$system$$Entity$destroy(_health.bar_bg_entity);
          Milky2018$selene$system$$Entity$destroy(_health.bar_fg_entity);
        }
        moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, dead_unit);
        const _bind$13 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, dead_unit);
        if (_bind$13 === undefined) {
        } else {
          const _Some = _bind$13;
          const _health = _Some;
          moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, _health.bar_bg_entity);
          moonbitlang$core$builtin$$Map$remove$7$(Milky2018$selene$sprite$$sprites, _health.bar_fg_entity);
        }
        moonbitlang$core$builtin$$Map$remove$34$(SuYiTao$45$SYT$CyberScavenger$$healths, dead_unit);
        moonbitlang$core$builtin$$Map$remove$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, dead_unit);
        moonbitlang$core$builtin$$Map$remove$44$(SuYiTao$45$SYT$CyberScavenger$$teams, dead_unit);
        moonbitlang$core$builtin$$Map$remove$43$(SuYiTao$45$SYT$CyberScavenger$$destinations, dead_unit);
        moonbitlang$core$builtin$$Map$remove$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, dead_unit);
        moonbitlang$core$builtin$$Map$remove$5$(Milky2018$selene$position$$positions, dead_unit);
        moonbitlang$core$builtin$$Map$remove$48$(Milky2018$selene$velocity$$velocities, dead_unit);
        moonbitlang$core$builtin$$Map$remove$35$(SuYiTao$45$SYT$CyberScavenger$$train_cars, dead_unit);
        moonbitlang$core$builtin$$Map$remove$38$(SuYiTao$45$SYT$CyberScavenger$$score_values, dead_unit);
        moonbitlang$core$builtin$$Map$remove$45$(SuYiTao$45$SYT$CyberScavenger$$movement_stats, dead_unit);
        moonbitlang$core$builtin$$Map$remove$39$(SuYiTao$45$SYT$CyberScavenger$$sizes, dead_unit);
        moonbitlang$core$builtin$$Map$remove$36$(SuYiTao$45$SYT$CyberScavenger$$vfx_follows, dead_unit);
        moonbitlang$core$builtin$$Map$remove$37$(SuYiTao$45$SYT$CyberScavenger$$team_abilities, dead_unit);
        moonbitlang$core$builtin$$Map$remove$40$(SuYiTao$45$SYT$CyberScavenger$$cooldown_ability_units, dead_unit);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _p = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
    const _p$2 = [];
    const _p$3 = _p.length;
    let _tmp$3 = 0;
    while (true) {
      const _p$4 = _tmp$3;
      if (_p$4 < _p$3) {
        const _p$5 = _p[_p$4];
        if (!moonbitlang$core$array$$Array$contains$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, _p$5)) {
          moonbitlang$core$array$$Array$push$6$(_p$2, _p$5);
        }
        _tmp$3 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    SuYiTao$45$SYT$CyberScavenger$$all_units.val = _p$2;
    moonbitlang$core$array$$Array$clear$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val);
    return;
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$execute_aoe_melee_attack(attacker, stats) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, attacker);
  if (_bind$12 === undefined) {
    return;
  } else {
    const _Some = _bind$12;
    const _attacker_pos = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, attacker);
    if (_bind$13 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$13;
      const _attacker_team = _Some$2;
      moonbitlang$core$builtin$$println$86$(`[Log] Executing AoE Melee Attack from ${moonbitlang$core$builtin$$Show$to_string$78$(attacker)}`);
      SuYiTao$45$SYT$CyberScavenger$$apply_effects_in_area(attacker, _attacker_pos, stats.aoe_radius, stats.on_hit_effects, _attacker_team);
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$execute_melee_attack(attacker, target, stats) {
  moonbitlang$core$builtin$$println$86$(`[Log] Executing Melee Attack from ${moonbitlang$core$builtin$$Show$to_string$78$(attacker)} to ${moonbitlang$core$builtin$$Show$to_string$78$(target)}`);
  SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(attacker, target, stats.on_hit_effects);
}
function SuYiTao$45$SYT$CyberScavenger$$get_computed_stats(unit) {
  const _bind$12 = moonbitlang$core$builtin$$Map$get$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, unit);
  if (_bind$12 === undefined) {
  } else {
    const _Some = _bind$12;
    const _base_stats = _Some;
    const _bind$13 = moonbitlang$core$builtin$$Map$get$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, unit);
    if (_bind$13.$tag === 1) {
      const _Some$2 = _bind$13;
      const _buff_list = _Some$2._0;
      let computed_stats = _base_stats;
      const _len = _buff_list.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const buff = _buff_list[_i];
          const _bind$14 = buff.buff_type;
          switch (_bind$14.$tag) {
            case 0: {
              const _AddDamage = _bind$14;
              const _value = _AddDamage._0;
              const _p = computed_stats.on_hit_effects;
              const _p$2 = new Array(_p.length);
              const _p$3 = _p.length;
              let _tmp$2 = 0;
              while (true) {
                const _p$4 = _tmp$2;
                if (_p$4 < _p$3) {
                  const _p$5 = _p[_p$4];
                  let _tmp$3;
                  if (_p$5.$tag === 0) {
                    const _p$6 = _p$5;
                    const _p$7 = _p$6._0;
                    const _p$8 = _p$6._1;
                    _tmp$3 = new OnHitEffect$DealDamage(_p$7 + _value, _p$8);
                  } else {
                    _tmp$3 = _p$5;
                  }
                  _p$2[_p$4] = _tmp$3;
                  _tmp$2 = _p$4 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              const new_effects = _p$2;
              computed_stats = { ...computed_stats, on_hit_effects: new_effects };
              break;
            }
            case 2: {
              const _AddCritRate = _bind$14;
              const _value$2 = _AddCritRate._0;
              computed_stats = { ...computed_stats, crit_rate: computed_stats.crit_rate + _value$2 };
              break;
            }
            case 5: {
              const _AddAttackRange = _bind$14;
              const _value$3 = _AddAttackRange._0;
              computed_stats = { ...computed_stats, attack_range: computed_stats.attack_range + _value$3 };
              break;
            }
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _len$2 = _buff_list.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const buff = _buff_list[_i];
          const _bind$14 = buff.buff_type;
          switch (_bind$14.$tag) {
            case 1: {
              const _MultiplyDamage = _bind$14;
              const _factor = _MultiplyDamage._0;
              const _p = computed_stats.on_hit_effects;
              const _p$2 = new Array(_p.length);
              const _p$3 = _p.length;
              let _tmp$3 = 0;
              while (true) {
                const _p$4 = _tmp$3;
                if (_p$4 < _p$3) {
                  const _p$5 = _p[_p$4];
                  let _tmp$4;
                  if (_p$5.$tag === 0) {
                    const _p$6 = _p$5;
                    const _p$7 = _p$6._0;
                    const _p$8 = _p$6._1;
                    _tmp$4 = new OnHitEffect$DealDamage(_p$7 * _factor, _p$8);
                  } else {
                    _tmp$4 = _p$5;
                  }
                  _p$2[_p$4] = _tmp$4;
                  _tmp$3 = _p$4 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              const new_effects = _p$2;
              computed_stats = { ...computed_stats, on_hit_effects: new_effects };
              break;
            }
            case 4: {
              const _MultiplyCooldown = _bind$14;
              const _factor$2 = _MultiplyCooldown._0;
              computed_stats = { ...computed_stats, attack_cooldown: computed_stats.attack_cooldown * _factor$2 };
              break;
            }
            case 3: {
              const _MultiplyEffectDuration = _bind$14;
              const _factor$3 = _MultiplyEffectDuration._0;
              const _p$4 = computed_stats.on_hit_effects;
              const _p$5 = new Array(_p$4.length);
              const _p$6 = _p$4.length;
              let _tmp$4 = 0;
              while (true) {
                const _p$7 = _tmp$4;
                if (_p$7 < _p$6) {
                  const _p$8 = _p$4[_p$7];
                  let _tmp$5;
                  switch (_p$8.$tag) {
                    case 1: {
                      const _p$9 = _p$8;
                      const _p$10 = _p$9._0;
                      const _p$11 = _p$9._1;
                      const _p$12 = _p$9._2;
                      _tmp$5 = new OnHitEffect$ApplyBuff(_p$10, _p$11 * _factor$3, _p$12);
                      break;
                    }
                    case 2: {
                      const _p$13 = _p$8;
                      const _p$14 = _p$13._0;
                      const _p$15 = _p$13._1;
                      const _p$16 = _p$13._2;
                      const _p$17 = _p$13._3;
                      _tmp$5 = new OnHitEffect$CreateHazardousArea(_p$14, _p$15, _p$16 * _factor$3, _p$17);
                      break;
                    }
                    default: {
                      _tmp$5 = _p$8;
                    }
                  }
                  _p$5[_p$7] = _tmp$5;
                  _tmp$4 = _p$7 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              const new_effects$2 = _p$5;
              computed_stats = { ...computed_stats, on_hit_effects: new_effects$2 };
              break;
            }
          }
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return computed_stats;
    } else {
      return _base_stats;
    }
  }
  return undefined;
}
const SuYiTao$45$SYT$CyberScavenger$$combat_system$46$constr$47$8526 = 1;
function SuYiTao$45$SYT$CyberScavenger$$combat_system(backend) {
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats);
  _bind$12((unit) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, unit);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _stats = _Some;
      if (_stats.current_cooldown > 0) {
        let current_cooldown_multiplier = 1;
        const _bind$14 = moonbitlang$core$builtin$$Map$get$59$(SuYiTao$45$SYT$CyberScavenger$$active_buffs, unit);
        if (_bind$14.$tag === 1) {
          const _Some$2 = _bind$14;
          const _buff_list = _Some$2._0;
          const _len = _buff_list.length;
          let _tmp = 0;
          while (true) {
            const _i = _tmp;
            if (_i < _len) {
              const buff = _buff_list[_i];
              const _bind$15 = buff.buff_type;
              if (_bind$15.$tag === 4) {
                const _MultiplyCooldown = _bind$15;
                const _factor = _MultiplyCooldown._0;
                current_cooldown_multiplier = current_cooldown_multiplier * _factor;
              }
              _tmp = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const new_cooldown = _stats.current_cooldown - 0.0166666666666666664 / current_cooldown_multiplier;
        moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, unit, { ..._stats, current_cooldown: new_cooldown });
      }
    }
    return 1;
  });
  let _tmp = SuYiTao$45$SYT$CyberScavenger$$attack_targets.head;
  while (true) {
    const _p = _tmp;
    if (_p === undefined) {
      break;
    } else {
      const _p$2 = _p;
      const _p$3 = _p$2;
      const _p$4 = _p$3.key;
      const _p$5 = _p$3.value;
      const _p$6 = _p$3.next;
      _L: {
        _L$2: {
          if (Milky2018$selene$system$$Entity$is_alive(_p$5)) {
            const _p$7 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, _p$5);
            if (_p$7 === undefined) {
              break _L$2;
            } else {
              const _p$8 = SuYiTao$45$SYT$CyberScavenger$$get_computed_stats(_p$4);
              if (_p$8 === undefined) {
              } else {
                const _p$9 = _p$8;
                const _p$10 = _p$9;
                const _p$11 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _p$4);
                if (_p$11 === undefined) {
                } else {
                  const _p$12 = _p$11;
                  const _p$13 = _p$12;
                  const _p$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, _p$5);
                  if (_p$14 === undefined) {
                  } else {
                    const _p$15 = _p$14;
                    const _p$16 = _p$15;
                    const _p$17 = Milky2018$selene$math$$Vec2D$distance_to(_p$13, _p$16);
                    if (_p$17 > _p$10.attack_range) {
                      moonbitlang$core$builtin$$Map$set$43$(SuYiTao$45$SYT$CyberScavenger$$destinations, _p$4, _p$16);
                    } else {
                      moonbitlang$core$builtin$$Map$remove$43$(SuYiTao$45$SYT$CyberScavenger$$destinations, _p$4);
                      if (_p$10.current_cooldown <= 0) {
                        const _p$18 = _p$10.attack_sfx;
                        if (_p$18 === undefined) {
                        } else {
                          const _p$19 = _p$18;
                          const _p$20 = _p$19;
                          moonbitlang$core$array$$Array$push$144$(SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val, { sfx_type: _p$20, position: _p$13 });
                        }
                        const _p$19 = moonbitlang$core$builtin$$Map$get$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, _p$4);
                        if (_p$19 === undefined) {
                        } else {
                          const _p$20 = _p$19;
                          const _p$21 = _p$20;
                          moonbitlang$core$builtin$$Map$set$41$(SuYiTao$45$SYT$CyberScavenger$$combat_stats, _p$4, { ..._p$21, current_cooldown: _p$10.attack_cooldown });
                        }
                        const _p$20 = _p$10.attack_cast_vfx;
                        if (_p$20 === undefined) {
                        } else {
                          const _p$21 = _p$20;
                          const _p$22 = _p$21;
                          moonbitlang$core$array$$Array$push$145$(SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val, { vfx_type: _p$22, position: _p$13, rotation: 0, parent_entity: undefined, to_position: undefined });
                        }
                        const _p$21 = _p$10.attack_type;
                        switch (_p$21) {
                          case 0: {
                            SuYiTao$45$SYT$CyberScavenger$$execute_melee_attack(_p$4, _p$5, _p$10);
                            break;
                          }
                          case 1: {
                            SuYiTao$45$SYT$CyberScavenger$$execute_bullet_attack(_p$4, _p$5, _p$10);
                            break;
                          }
                          case 2: {
                            const _p$22 = _p$10.attack_cast_vfx;
                            if (_p$22 === undefined) {
                            } else {
                              const _p$23 = _p$22;
                              const _p$24 = _p$23;
                              const _tmp$2 = SuYiTao$45$SYT$CyberScavenger$$vfx_requests.val;
                              const _p$25 = _p$13;
                              const _p$26 = _p$16;
                              const _p$27 = undefined;
                              moonbitlang$core$array$$Array$push$145$(_tmp$2, { vfx_type: _p$24, position: _p$25, rotation: 0, parent_entity: _p$27, to_position: _p$26 });
                            }
                            SuYiTao$45$SYT$CyberScavenger$$apply_all_effects(_p$4, _p$5, _p$10.on_hit_effects);
                            break;
                          }
                          default: {
                            SuYiTao$45$SYT$CyberScavenger$$execute_aoe_melee_attack(_p$4, _p$10);
                            moonbitlang$core$builtin$$println$86$("[Log] AoE Attack not implemented yet.");
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            break _L$2;
          }
          break _L;
        }
        moonbitlang$core$builtin$$Map$remove$46$(SuYiTao$45$SYT$CyberScavenger$$attack_targets, _p$4);
      }
      _tmp = _p$6;
      continue;
    }
  }
  const _arr = SuYiTao$45$SYT$CyberScavenger$$all_units.val;
  const _len = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const unit = _arr[_i];
      if (Milky2018$selene$system$$Entity$is_alive(unit)) {
        const _bind$13 = moonbitlang$core$builtin$$Map$get$34$(SuYiTao$45$SYT$CyberScavenger$$healths, unit);
        if (_bind$13 === undefined) {
        } else {
          const _Some = _bind$13;
          const _health = _Some;
          if (_health.current <= 0) {
            moonbitlang$core$array$$Array$push$144$(SuYiTao$45$SYT$CyberScavenger$$sfx_requests.val, { sfx_type: 5, position: undefined });
            moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, unit);
            moonbitlang$core$builtin$$Map$set$34$(SuYiTao$45$SYT$CyberScavenger$$healths, unit, { current: -1, max: _health.max, bar_bg_entity: _health.bar_bg_entity, bar_fg_entity: _health.bar_fg_entity, shield_frame_entity: _health.shield_frame_entity });
            if (moonbitlang$core$builtin$$Eq$equal$117$(moonbitlang$core$builtin$$Map$get$44$(SuYiTao$45$SYT$CyberScavenger$$teams, unit), SuYiTao$45$SYT$CyberScavenger$$combat_system$46$constr$47$8526)) {
              const _bind$14 = moonbitlang$core$builtin$$Map$get$38$(SuYiTao$45$SYT$CyberScavenger$$score_values, unit);
              if (_bind$14 === undefined) {
              } else {
                const _Some$2 = _bind$14;
                const _score_comp = _Some$2;
                const points_to_add = _score_comp.value;
                SuYiTao$45$SYT$CyberScavenger$$add_score(points_to_add);
                const _bind$15 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, unit);
                if (_bind$15 === undefined) {
                } else {
                  const _Some$3 = _bind$15;
                  const _pos = _Some$3;
                  SuYiTao$45$SYT$CyberScavenger$$spawn_kill_score_vfx(points_to_add, _pos);
                }
              }
            }
          }
        }
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$hazardous_area_system(_backend) {
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$9$;
  const _bind$12 = moonbitlang$core$builtin$$Map$keys$55$(SuYiTao$45$SYT$CyberScavenger$$hazardous_areas);
  _bind$12((area_entity) => {
    const _bind$13 = moonbitlang$core$builtin$$Map$get$55$(SuYiTao$45$SYT$CyberScavenger$$hazardous_areas, area_entity);
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _area_data = _Some;
      const new_duration = _area_data.remaining_duration - 0.0166666666666666664;
      const new_tick_timer = _area_data.tick_timer - 0.0166666666666666664;
      if (new_duration <= 0) {
        moonbitlang$core$array$$Array$push$6$(SuYiTao$45$SYT$CyberScavenger$$entities_to_cleanup.val, area_entity);
        moonbitlang$core$builtin$$Map$remove$55$(SuYiTao$45$SYT$CyberScavenger$$hazardous_areas, area_entity);
        return 1;
      }
      if (new_tick_timer <= 0) {
        const _bind$14 = moonbitlang$core$builtin$$Map$get$5$(Milky2018$selene$position$$positions, area_entity);
        if (_bind$14 === undefined) {
        } else {
          const _Some$2 = _bind$14;
          const _area_pos = _Some$2;
          SuYiTao$45$SYT$CyberScavenger$$apply_effects_in_area(_area_data.source, _area_pos, _area_data.radius, _area_data.on_tick_effects, _area_data.source_team);
        }
        const final_updated_data = { source: _area_data.source, source_team: _area_data.source_team, on_tick_effects: _area_data.on_tick_effects, radius: _area_data.radius, remaining_duration: new_duration, tick_timer: 1 };
        moonbitlang$core$builtin$$Map$set$55$(SuYiTao$45$SYT$CyberScavenger$$hazardous_areas, area_entity, final_updated_data);
      } else {
        const final_updated_data = { source: _area_data.source, source_team: _area_data.source_team, on_tick_effects: _area_data.on_tick_effects, radius: _area_data.radius, remaining_duration: new_duration, tick_timer: new_tick_timer };
        moonbitlang$core$builtin$$Map$set$55$(SuYiTao$45$SYT$CyberScavenger$$hazardous_areas, area_entity, final_updated_data);
      }
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      _return._0;
      return;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function SuYiTao$45$SYT$CyberScavenger$$update_game_world_system(backend) {
  if (!SuYiTao$45$SYT$CyberScavenger$$is_paused.val) {
    SuYiTao$45$SYT$CyberScavenger$$player_train_management_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$player_control_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$wall_bounce_system(backend, 1280, 720);
    SuYiTao$45$SYT$CyberScavenger$$enemy_movement_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$aggro_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$combat_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$pickup_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$pickup_spawner_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$pickup_lifecycle_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$team_ability_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$projectile_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$unit_orientation_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$dynamic_transform_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$hazardous_area_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$buff_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$endless_spawner_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$update_wave_display_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$vfx_spawner_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$vfx_update_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$vfx_movement_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$vfx_follow_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$apply_velocity_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$path_history_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$train_snake_follow_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$update_shield_display_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$update_score_display_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$cleanup_system(backend);
    return;
  } else {
    return;
  }
}
function SuYiTao$45$SYT$CyberScavenger$$update_logic_system(backend) {
  const _bind$12 = SuYiTao$45$SYT$CyberScavenger$$current_ui_state.val;
  if (_bind$12 === 1) {
    SuYiTao$45$SYT$CyberScavenger$$check_game_over_system(backend);
    SuYiTao$45$SYT$CyberScavenger$$update_game_world_system(backend);
    return;
  } else {
    return;
  }
}
const SuYiTao$45$SYT$CyberScavenger$$_main$46$constr$47$8611 = new $64$Milky2018$47$selene$47$system$46$Schedule$Render(0);
const SuYiTao$45$SYT$CyberScavenger$$_main$46$constr$47$8612 = new $64$Milky2018$47$selene$47$system$46$Schedule$Render(1);
(() => {
  Milky2018$selene$system$$App$run(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$add_system$46$inner(Milky2018$selene$system$$App$with_fps(Milky2018$selene$system$$App$with_canvas_height(Milky2018$selene$system$$App$with_canvas_width(Milky2018$selene$system$$App$new({ self: Milky2018$selene$45$canvas$$CanvasBackend$new(), method_0: Milky2018$selene$system$$Backend$build$160$, method_1: Milky2018$selene$system$$Backend$draw_picture$160$, method_2: Milky2018$selene$system$$Backend$draw_sprite$160$, method_3: Milky2018$selene$system$$Backend$register_key_events$160$, method_4: Milky2018$selene$system$$Backend$register_mouse_events$160$, method_5: Milky2018$selene$system$$Backend$register_touch_events$160$, method_6: Milky2018$selene$system$$Backend$lock_mouse$160$, method_7: Milky2018$selene$system$$Backend$draw_stroke_rect$160$, method_8: Milky2018$selene$system$$Backend$draw_text$160$, method_9: Milky2018$selene$system$$Backend$draw_text_layout$160$, method_10: Milky2018$selene$system$$Backend$draw_color_rect$160$, method_11: Milky2018$selene$system$$Backend$draw_gradient_rect$160$, method_12: Milky2018$selene$system$$Backend$play_audio$160$, method_13: Milky2018$selene$system$$Backend$stop_audio$160$, method_14: Milky2018$selene$system$$Backend$is_audio_playing$160$, method_15: Milky2018$selene$system$$Backend$get_canvas_size$160$, method_16: Milky2018$selene$system$$Backend$get_zoom$160$, method_17: Milky2018$selene$system$$Backend$get_debug_info$160$, method_18: Milky2018$selene$system$$Backend$preload_img$160$, method_19: Milky2018$selene$system$$Backend$preload_audio$160$, method_20: Milky2018$selene$system$$Backend$set_render_target$160$, method_21: Milky2018$selene$system$$Backend$draw_filled_rect$160$, method_22: Milky2018$selene$system$$Backend$draw_rect_outline$160$, method_23: Milky2018$selene$system$$Backend$draw_filled_circle$160$, method_24: Milky2018$selene$system$$Backend$draw_stroke_circle$160$, method_25: Milky2018$selene$system$$Backend$draw_filled_ellipse$160$, method_26: Milky2018$selene$system$$Backend$draw_stroke_ellipse$160$, method_27: Milky2018$selene$system$$Backend$draw_filled_triangle$160$, method_28: Milky2018$selene$system$$Backend$draw_stroke_triangle$160$, method_29: Milky2018$selene$system$$Backend$draw_cross$160$, method_30: Milky2018$selene$system$$Backend$draw_filled_capsule$160$, method_31: Milky2018$selene$system$$Backend$draw_stroke_capsule$160$ }), 1280), 720), 60), SuYiTao$45$SYT$CyberScavenger$$init_game, $64$Milky2018$47$selene$47$system$46$Schedule$Startup, undefined), SuYiTao$45$SYT$CyberScavenger$$button_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), SuYiTao$45$SYT$CyberScavenger$$joystick_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), SuYiTao$45$SYT$CyberScavenger$$update_ui_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), SuYiTao$45$SYT$CyberScavenger$$update_logic_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), Milky2018$selene$system$$advanced_touch_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), Milky2018$selene$system$$advanced_key_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), Milky2018$selene$system$$advanced_mouse_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), SuYiTao$45$SYT$CyberScavenger$$pause_toggle_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), SuYiTao$45$SYT$CyberScavenger$$update_health_bars_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined), Milky2018$selene$sprite$$render_world_system, SuYiTao$45$SYT$CyberScavenger$$_main$46$constr$47$8611, undefined), Milky2018$selene$sprite$$render_ui_system, SuYiTao$45$SYT$CyberScavenger$$_main$46$constr$47$8612, undefined), SuYiTao$45$SYT$CyberScavenger$$audio_spawner_system, $64$Milky2018$47$selene$47$system$46$Schedule$Update, undefined));
})();
