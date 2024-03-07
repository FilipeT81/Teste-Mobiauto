export interface AlignProps {
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  ph?: number;
  pv?: number;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mh?: number;
  mv?: number;
  w?: number;
  h?: number;
  height?: string;
  bg?: string;
  width?: string;
  radius?: string;
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
}

export function commonAlignProps({
  p,
  pl,
  pr,
  pb,
  pt,
  m,
  mb,
  mt,
  ml,
  mr,
  w,
  h,
  ph,
  pv,
  mh,
  mv,
  bg,
  width,
  height,
  radius,
  position,
}: AlignProps) {
  let align = {};

  if (bg) align = { ...align, background: bg };

  if (p) align = { ...align, padding: p + 'px' };
  if (pl) align = { ...align, 'padding-left': pl + 'px' };
  if (pr) align = { ...align, 'padding-right': pr + 'px' };
  if (pt) align = { ...align, ' padding-top': pt + 'px' };
  if (pb) align = { ...align, 'padding-bottom': pb + 'px' };
  if (m) align = { ...align, margin: m + 'px' };
  if (mt) align = { ...align, 'margin-top': mt + 'px' };
  if (mb) align = { ...align, 'margin-bottom': mb + 'px' };
  if (ml) align = { ...align, 'margin-left': ml + 'px' };
  if (mr) align = { ...align, 'margin-right': mr + 'px' };
  if (w) align = { ...align, width: w + 'px' };
  if (h) align = { ...align, height: h + 'px' };

  if (ph)
    align = {
      ...align,
      'padding-left': Math.floor(ph / 2) + 'px',
      'padding-right': Math.floor(ph / 2) + 'px',
    };
  if (pv)
    align = {
      ...align,
      'padding-top': Math.floor(pv / 2) + 'px',
      'padding-bottom': Math.floor(pv / 2) + 'px',
    };
  if (mh)
    align = {
      ...align,
      'padding-left': Math.floor(mh / 2) + 'px',
      'padding-right': Math.floor(mh / 2) + 'px',
    };
  if (mv)
    align = {
      ...align,
      'padding-top': Math.floor(mv / 2) + 'px',
      'padding-bottom': Math.floor(mv / 2) + 'px',
    };
  if (width) align = { ...align, width };
  if (height) align = { ...align, height };

  if (radius) align = { ...align, 'border-radius': radius };
  if (position) align = { ...align, position: position };

  return align;
}
