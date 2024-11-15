"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9025],
    {
        35483: function (e, t, i) {
            let s, n, a, o, r, l, d, h, p, c, u, g, m, f, b, v, y, S, I, k, w;
            i.d(t, {
                D9: function () {
                    return tB;
                },
                Dr: function () {
                    return sP;
                },
                HE: function () {
                    return eg;
                },
                HQ: function () {
                    return eh;
                },
                J2: function () {
                    return sw;
                },
                LO: function () {
                    return ef;
                },
                MR: function () {
                    return en;
                },
                Uc: function () {
                    return el;
                },
                Uz: function () {
                    return eb;
                },
                XR: function () {
                    return eo;
                },
                g6: function () {
                    return ec;
                },
                tk: function () {
                    return e_;
                },
            });
            var B,
                x = i(75054),
                P = i(2784),
                C = i(80589),
                E = i(52005),
                z = i(67149),
                M = i(92613),
                D = i(43866),
                j = i(51987),
                A = i(17947),
                T = i(24580),
                O = i(10186),
                F = i(95374),
                L = i(17578),
                R = i(99882),
                H = Object.defineProperty,
                Q = Object.defineProperties,
                U = Object.getOwnPropertyDescriptor,
                Z = Object.getOwnPropertyDescriptors,
                K = Object.getOwnPropertyNames,
                _ = Object.getOwnPropertySymbols,
                N = Object.prototype.hasOwnProperty,
                W = Object.prototype.propertyIsEnumerable,
                G = (e, t, i) => (t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (e[t] = i)),
                Y = (e, t) => {
                    for (var i in t || (t = {})) N.call(t, i) && G(e, i, t[i]);
                    if (_) for (var i of _(t)) W.call(t, i) && G(e, i, t[i]);
                    return e;
                },
                $ = (e, t) => Q(e, Z(t)),
                X = (e, t) => {
                    for (var i in t) H(e, i, { get: t[i], enumerable: !0 });
                },
                V = (e, t, i) => (G(e, "symbol" != typeof t ? t + "" : t, i), i),
                q = (e, t, i) =>
                    new Promise((s, n) => {
                        var a = (e) => {
                                try {
                                    r(i.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            },
                            o = (e) => {
                                try {
                                    r(i.throw(e));
                                } catch (e) {
                                    n(e);
                                }
                            },
                            r = (e) => (e.done ? s(e.value) : Promise.resolve(e.value).then(a, o));
                        r((i = i.apply(e, t)).next());
                    }),
                J = class {
                    constructor() {
                        V(this, "onPinchStart"),
                            V(this, "onPinchEnd"),
                            V(this, "onPinch"),
                            V(this, "onKeyDown"),
                            V(this, "onKeyUp"),
                            V(this, "onPointerMove"),
                            V(this, "onPointerUp"),
                            V(this, "onPan"),
                            V(this, "onZoom"),
                            V(this, "onPointerDown"),
                            V(this, "onPointCanvas"),
                            V(this, "onDoubleClickCanvas"),
                            V(this, "onRightPointCanvas"),
                            V(this, "onDragCanvas"),
                            V(this, "onReleaseCanvas"),
                            V(this, "onPointShape"),
                            V(this, "onDoubleClickShape"),
                            V(this, "onRightPointShape"),
                            V(this, "onDragShape"),
                            V(this, "onHoverShape"),
                            V(this, "onUnhoverShape"),
                            V(this, "onReleaseShape"),
                            V(this, "onPointBounds"),
                            V(this, "onDoubleClickBounds"),
                            V(this, "onRightPointBounds"),
                            V(this, "onDragBounds"),
                            V(this, "onHoverBounds"),
                            V(this, "onUnhoverBounds"),
                            V(this, "onReleaseBounds"),
                            V(this, "onPointBoundsHandle"),
                            V(this, "onDoubleClickBoundsHandle"),
                            V(this, "onRightPointBoundsHandle"),
                            V(this, "onDragBoundsHandle"),
                            V(this, "onHoverBoundsHandle"),
                            V(this, "onUnhoverBoundsHandle"),
                            V(this, "onReleaseBoundsHandle"),
                            V(this, "onPointHandle"),
                            V(this, "onDoubleClickHandle"),
                            V(this, "onRightPointHandle"),
                            V(this, "onDragHandle"),
                            V(this, "onHoverHandle"),
                            V(this, "onUnhoverHandle"),
                            V(this, "onReleaseHandle"),
                            V(this, "onShapeBlur"),
                            V(this, "onShapeClone");
                    }
                },
                ee = (((s = ee || {}).Idle = "idle"), (s.Connecting = "connecting"), (s.Connected = "connected"), (s.Disconnected = "disconnected"), s),
                et =
                    (((n = et || {}).Transform = "transform"),
                    (n.Translate = "translate"),
                    (n.TransformSingle = "transformSingle"),
                    (n.Brush = "brush"),
                    (n.Arrow = "arrow"),
                    (n.Draw = "draw"),
                    (n.Erase = "erase"),
                    (n.Rotate = "rotate"),
                    (n.Handle = "handle"),
                    (n.Grid = "grid"),
                    (n.Edit = "edit"),
                    n),
                ei =
                    (((a = ei || {}).Idle = "idle"),
                    (a.PointingHandle = "pointingHandle"),
                    (a.PointingBounds = "pointingBounds"),
                    (a.PointingBoundsHandle = "pointingBoundsHandle"),
                    (a.TranslatingLabel = "translatingLabel"),
                    (a.TranslatingHandle = "translatingHandle"),
                    (a.Translating = "translating"),
                    (a.Transforming = "transforming"),
                    (a.Rotating = "rotating"),
                    (a.Pinching = "pinching"),
                    (a.Brushing = "brushing"),
                    (a.Creating = "creating"),
                    (a.EditingText = "editing-text"),
                    a),
                es = (((o = es || {}).Backward = "backward"), (o.Forward = "forward"), (o.ToFront = "toFront"), (o.ToBack = "toBack"), o),
                en = (((r = en || {}).Top = "top"), (r.CenterVertical = "centerVertical"), (r.Bottom = "bottom"), (r.Left = "left"), (r.CenterHorizontal = "centerHorizontal"), (r.Right = "right"), r),
                ea = (((l = ea || {}).Horizontal = "horizontal"), (l.Vertical = "vertical"), l),
                eo = (((d = eo || {}).Horizontal = "horizontal"), (d.Vertical = "vertical"), d),
                er = (((h = er || {}).Horizontal = "horizontal"), (h.Vertical = "vertical"), h),
                el =
                    (((p = el || {}).Sticky = "sticky"),
                    (p.Ellipse = "ellipse"),
                    (p.Rectangle = "rectangle"),
                    (p.Triangle = "triangle"),
                    (p.Draw = "draw"),
                    (p.Arrow = "arrow"),
                    (p.Line = "line"),
                    (p.Text = "text"),
                    (p.Group = "group"),
                    (p.Image = "image"),
                    (p.Video = "video"),
                    p),
                ed = (((c = ed || {}).Arrow = "arrow"), c),
                eh =
                    (((u = eh || {}).White = "white"),
                    (u.LightGray = "lightGray"),
                    (u.Gray = "gray"),
                    (u.Black = "black"),
                    (u.Green = "green"),
                    (u.Cyan = "cyan"),
                    (u.Blue = "blue"),
                    (u.Indigo = "indigo"),
                    (u.Violet = "violet"),
                    (u.Red = "red"),
                    (u.Orange = "orange"),
                    (u.Yellow = "yellow"),
                    u),
                ep = (((g = ep || {}).Small = "small"), (g.Medium = "medium"), (g.Large = "large"), g),
                ec = (((m = ec || {}).Draw = "draw"), (m.Solid = "solid"), (m.Dashed = "dashed"), (m.Dotted = "dotted"), m),
                eu = (((f = eu || {}).Small = "small"), (f.Medium = "medium"), (f.Large = "large"), (f.ExtraLarge = "extraLarge"), f),
                eg = (((b = eg || {}).Start = "start"), (b.Middle = "middle"), (b.End = "end"), (b.Justify = "justify"), b),
                em = (((v = em || {}).Script = "script"), (v.Sans = "sans"), (v.Serif = "serif"), (v.Mono = "mono"), v),
                ef = (((y = ef || {}).Image = "image"), (y.Video = "video"), y),
                eb = (((S = eb || {}).PNG = "png"), (S.JPG = "jpeg"), (S.WEBP = "webp"), (S.SVG = "svg"), (S.JSON = "json"), S),
                ev = (((I = ev || {}).Transparent = "transparent"), (I.Auto = "auto"), (I.Light = "light"), (I.Dark = "dark"), I),
                ey = new Map(),
                eS = "tldraw-fonts",
                eI = `
@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');

@font-face {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Recursive Mono';
  font-style: normal;
  font-weight: 420;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImqvTxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`,
                ek = P.createContext({});
            function ew() {
                return P.useContext(ek);
            }
            var eB = P.createContext({}),
                ex = {
                    "style.menu.color": "Color",
                    "style.menu.fill": "Fill",
                    "style.menu.dash": "Dash",
                    "style.menu.size": "Size",
                    "style.menu.keep.open": "Keep Open",
                    "style.menu.font": "Font",
                    "style.menu.align": "Align",
                    styles: "Styles",
                    "zoom.in": "Zoom In",
                    "zoom.out": "Zoom Out",
                    to: "To",
                    "menu.tools": "Tools",
                    "menu.transform": "Transform",
                    "menu.file": "File",
                    "menu.edit": "Edit",
                    "menu.view": "View",
                    "menu.preferences": "Preferences",
                    "menu.sign.in": "Sign In",
                    "menu.sign.out": "Sign Out",
                    "become.a.sponsor": "Become a Sponsor",
                    "zoom.to.content": "Back to content",
                    "zoom.to.selection": "Zoom to Selection",
                    "zoom.to.fit": "Zoom to Fit",
                    "zoom.to": "Zoom to",
                    "preferences.dark.mode": "Dark Mode",
                    "preferences.focus.mode": "Focus Mode",
                    "preferences.debug.mode": "Debug Mode",
                    "preferences.show.grid": "Show Grid",
                    "preferences.use.cad.selection": "Use CAD Selection",
                    "preferences.keep.stylemenu.open": "Keep Style Menu Open",
                    "preferences.always.show.snaps": "Always Show Snaps",
                    "preferences.rotate.handles": "Rotate Handles",
                    "preferences.binding.handles": "Binding Handles",
                    "preferences.clone.handles": "Clone Handles",
                    undo: "Undo",
                    redo: "Redo",
                    cut: "Cut",
                    copy: "Copy",
                    paste: "Paste",
                    "copy.as": "Copy As",
                    "export.as": "Export As",
                    "select.all": "Select All",
                    "select.none": "Select None",
                    delete: "Delete",
                    "new.project": "New Project",
                    open: "Open",
                    save: "Save",
                    "save.as": "Save As",
                    "upload.media": "Upload Media",
                    "create.page": "Create Page",
                    "new.page": "New Page",
                    "page.name": "Page Name",
                    duplicate: "Duplicate",
                    cancel: "Cancel",
                    "copy.invite.link": "Copy Invite Link",
                    "copy.readonly.link": "Copy ReadOnly Link",
                    "create.multiplayer.project": "Create a Multiplayer Project",
                    "copy.multiplayer.project": "Copy to Multiplayer Project",
                    select: "Select",
                    eraser: "Eraser",
                    draw: "Draw",
                    arrow: "Arrow",
                    text: "Text",
                    sticky: "Sticky",
                    rectangle: "Rectangle",
                    ellipse: "Ellipse",
                    triangle: "Triangle",
                    line: "Line",
                    rotate: "Rotate",
                    "lock.aspect.ratio": "Lock Aspect Ratio",
                    "unlock.aspect.ratio": "Unlock Aspect Ratio",
                    group: "Group",
                    ungroup: "Ungroup",
                    "move.to.back": "Move to Back",
                    "move.backward": "Move Backward",
                    "move.forward": "Move Forward",
                    "move.to.front": "Move to Front",
                    "reset.angle": "Reset Angle",
                    lock: "Lock",
                    unlock: "Unlock",
                    "align.distribute": "Align / Distribute",
                    "move.to.page": "Move to Page",
                    "flip.horizontal": "Flip Horizontal",
                    "flip.vertical": "Flip Vertical",
                    move: "Move",
                    "to.front": "To Front",
                    forward: "Forward",
                    backward: "Backward",
                    back: "To Back",
                    language: "Language",
                    "translation.link": "Learn More",
                    "dock.position": "Dock Position",
                    bottom: "Bottom",
                    left: "Left",
                    right: "Right",
                    top: "Top",
                    page: "Page",
                    "keyboard.shortcuts": "Keyboard shortcuts",
                    search: "Search",
                    loading: "Loading{dots}",
                    "export.background": "Export Background",
                    transparent: "Transparent",
                    auto: "Auto",
                    light: "Light",
                    dark: "Dark",
                    github: "Github",
                    twitter: "Twitter",
                    discord: "Discord",
                    image: "Image",
                    "align.left": "Align Left",
                    "align.center.x": "Align Horizontal Center",
                    "align.right": "Align Right",
                    "align.top": "Align Top",
                    "align.center.y": "Align Vertical Center",
                    "align.bottom": "Align Bottom",
                    "distribute.x": "Distribute Horizontal",
                    "distribute.y": "Distribute Vertical",
                    "stretch.x": "Stretch Horizontal",
                    "stretch.y": "Stretch Vertical",
                    "dialog.save.firsttime": "Do you want to save your current project?",
                    "dialog.save.again": "Do you want to save changes to your current project?",
                    "dialog.cancel": "Cancel",
                    "dialog.no": "No",
                    "dialog.yes": "Yes",
                    "enter.file.name": "Enter file name",
                },
                eP = [
                    {
                        locale: "ar",
                        label: "عربي",
                        messages: {
                            "style.menu.color": "اللون",
                            "style.menu.fill": "يملأ",
                            "style.menu.dash": "متقطع",
                            "style.menu.size": "حجم",
                            "style.menu.keep.open": "تبقى مفتوحة",
                            "style.menu.font": "الخط",
                            "style.menu.align": "محاذاة",
                            styles: "الأنماط",
                            "zoom.in": "تكبير",
                            "zoom.out": "تصغير",
                            to: "إلى",
                            "menu.tools": "أدوات",
                            "menu.transform": "التحويلات",
                            "menu.file": "ملف",
                            "menu.edit": "تحرير",
                            "menu.view": "معاينة",
                            "menu.preferences": "التفضيلات",
                            "menu.sign.in": "تسجيل الدخول",
                            "menu.sign.out": "خروج",
                            "become.a.sponsor": "كن راعياً",
                            "zoom.to.content": "العودة إلى المحتوى",
                            "zoom.to.selection": "تكبير للتحديد",
                            "zoom.to.fit": "تكبير لتناسب",
                            "zoom.to": "تكبير إلى",
                            "preferences.dark.mode": "الوضع الداكن",
                            "preferences.focus.mode": "وضع التركيز",
                            "preferences.debug.mode": "وضع التصحيح",
                            "preferences.show.grid": "اظهر الشبكة",
                            "preferences.use.cad.selection": "استخدام التحديد CAD",
                            "preferences.keep.stylemenu.open": "الاحتفاظ بقائمة النمط مفتوحة",
                            "preferences.always.show.snaps": "إظهار اللقطات دائمًا",
                            "preferences.rotate.handles": "تدوير المقابض",
                            "preferences.binding.handles": "مقابض ملزمة",
                            "preferences.clone.handles": "مقابض استنساخ",
                            undo: "الغاء",
                            redo: "إعادة",
                            cut: "قطع",
                            copy: "نسح",
                            paste: "لصق",
                            "copy.as": "نسخ الى",
                            "export.as": "صدر الى",
                            "select.all": "اختر الكل",
                            "select.none": "لا تختر شيء",
                            delete: "حذف",
                            "new.project": "مشروع جديد",
                            open: "فتح",
                            save: "حفظ",
                            "save.as": "حفظ باسم",
                            "upload.media": "تحميل الوسائط",
                            "create.page": "إنشاء صفحة",
                            "new.page": "صفحة جديدة",
                            "page.name": "اسم الصفحة",
                            duplicate: "نسخ",
                            cancel: "الغاء",
                            "copy.invite.link": "نسخ رابط الدعوة",
                            "copy.readonly.link": "نسخ رابط دعوة القراءة فقط",
                            "create.multiplayer.project": "قم بإنشاء مشروع متعدد اللاعبين",
                            "copy.multiplayer.project": "نسخ إلى مشروع متعدد اللاعبين",
                            select: "اختر",
                            eraser: "ممحاة",
                            draw: "رسم",
                            arrow: "سهم",
                            text: "نص",
                            sticky: "لاصق",
                            rectangle: "مربع",
                            ellipse: "بيضاوي",
                            triangle: "مثلث",
                            line: "خط",
                            rotate: "دوّر",
                            "lock.aspect.ratio": "قفل نسبة الابعاد",
                            "unlock.aspect.ratio": "فتح قفل نسبة الابعاد",
                            group: "جمّع",
                            ungroup: "فك التجمع",
                            "move.to.back": "انتقل إلى الخلف",
                            "move.backward": "تحريك للخلف",
                            "move.forward": "تحريك للأمام",
                            "move.to.front": "تحرك للأمام",
                            "reset.angle": "إعادة ضبط الزاوية",
                            lock: "قفل",
                            unlock: "الغاء القفل",
                            "move.to.page": "انقل إلى الصفحة",
                            "flip.horizontal": "انعكاس أفقي",
                            "flip.vertical": "انعكاس عمودي",
                            move: "حرّك",
                            "to.front": "للامام",
                            forward: "للخلف",
                            backward: "للوراء",
                            back: "خلف",
                            language: "لغة",
                            "translation.link": "للمزيد",
                            "dock.position": "موقع الادوات",
                            bottom: "اسفل",
                            left: "يسار",
                            right: "يمين",
                            top: "أعلى",
                            page: "صفحة",
                            "keyboard.shortcuts": "اختصارات لوحة المفاتيح",
                            search: "بحث",
                            loading: "{dots}تحميل ",
                            "export.background": "تصدير الخلفية",
                            transparent: "شـفاف",
                            auto: "ذاتي",
                            light: "خفيف",
                            dark: "غامق",
                        },
                    },
                    {
                        locale: "da",
                        label: "Danish",
                        messages: {
                            "style.menu.color": "Farve",
                            "style.menu.fill": "Fyld",
                            "style.menu.dash": "Streg",
                            "style.menu.size": "St\xf8rrelse",
                            "style.menu.keep.open": "Hold \xe5ben",
                            "style.menu.font": "Skrifttype",
                            "style.menu.align": "Juster",
                            styles: "Format",
                            "zoom.in": "Zoom ind",
                            "zoom.out": "Zoom ud",
                            to: "til",
                            "menu.file": "Fil",
                            "menu.edit": "Rediger",
                            "menu.view": "Vis",
                            "menu.preferences": "Indstillinger",
                            "menu.sign.in": "Log ind",
                            "menu.sign.out": "Log ud",
                            "become.a.sponsor": "Bliv sponsor",
                            "zoom.to.selection": "Zoom til valgte",
                            "zoom.to.fit": "Zoom til l\xe6rred",
                            "zoom.to": "Zoom til",
                            "preferences.dark.mode": "M\xf8rkt udseende",
                            "preferences.focus.mode": "Fokus tilstand",
                            "preferences.debug.mode": "Debug tilstand",
                            "preferences.show.grid": "Vis net",
                            "preferences.use.cad.selection": "Brug CAD udv\xe6lgelse",
                            "preferences.keep.stylemenu.open": "Hold formatmenuen \xe5ben",
                            "preferences.always.show.snaps": "Vis altid snaps",
                            "preferences.rotate.handles": "Roteringsh\xe5ndtag",
                            "preferences.binding.handles": "Bindingsh\xe5ndtag",
                            "preferences.clone.handles": "Kloningsh\xe5ndtag",
                            undo: "Fortryd",
                            redo: "Gentag",
                            cut: "Klip",
                            copy: "Kopier",
                            paste: "Inds\xe6t",
                            "copy.as": "Kopier som",
                            "export.as": "Eksporter som",
                            "select.all": "V\xe6lg alt",
                            "select.none": "Frav\xe6lg alt",
                            delete: "Slet",
                            "new.project": "Nyt projekt",
                            open: "\xc5ben",
                            save: "Gem",
                            "save.as": "Gem som",
                            "upload.media": "Upload medie",
                            "create.page": "Opret side",
                            "new.page": "Ny side",
                            "page.name": "Sidenavn",
                            duplicate: "Dupliker",
                            cancel: "Fortryd",
                            "copy.invite.link": "Kopier invitationslink",
                            "create.multiplayer.project": "Opret multiplayer projekt",
                            "copy.multiplayer.project": "Kopier til multiplayer projekt",
                            select: "V\xe6lg",
                            eraser: "Viskel\xe6der",
                            draw: "Tegn",
                            arrow: "Pil",
                            text: "Tekst",
                            sticky: "Note",
                            rectangle: "Rektangel",
                            ellipse: "Ellipse",
                            triangle: "Trekant",
                            line: "Linje",
                            rotate: "Roter",
                            "lock.aspect.ratio": "L\xe5s billedformat",
                            "unlock.aspect.ratio": "Frig\xf8r billedformat",
                            group: "Grupper",
                            ungroup: "Opdel gruppe",
                            "move.to.back": "Placer bagerst",
                            "move.backward": "Flyt tilbage",
                            "move.forward": "Flyt frem",
                            "move.to.front": "L\xe6g forrest",
                            "reset.angle": "Nulstil vinkel",
                            lock: "L\xe5s",
                            unlock: "L\xe5s op",
                            "move.to.page": "Flyt til side",
                            "flip.horizontal": "Vend vandret",
                            "flip.vertical": "Vend lodret",
                            move: "Flyt",
                            "to.front": "Forrest",
                            forward: "Frem",
                            backward: "Tilbage",
                            back: "Bagerst",
                            language: "Sprog",
                        },
                    },
                    {
                        locale: "de",
                        label: "Deutsch",
                        messages: {
                            "style.menu.color": "Farbe",
                            "style.menu.fill": "F\xfcllen",
                            "style.menu.dash": "Strich",
                            "style.menu.size": "Gr\xf6\xdfe",
                            "style.menu.keep.open": "Offen halten",
                            "style.menu.font": "Schriftart",
                            "style.menu.align": "Ausrichten",
                            styles: "Stile",
                            "zoom.in": "Heranzoomen",
                            "zoom.out": "Herauszoomen",
                            to: "zu",
                            "menu.file": "Datei",
                            "menu.edit": "Bearbeiten",
                            "menu.view": "Ansicht",
                            "menu.preferences": "Pr\xe4ferenzen",
                            "menu.sign.in": "Einloggen",
                            "menu.sign.out": "Ausloggen",
                            "become.a.sponsor": "Sponsor werden",
                            "zoom.to.selection": "Zur Auswahl zoomen",
                            "zoom.to.fit": "Zoom anpassen",
                            "zoom.to": "Zoomen nach",
                            "preferences.dark.mode": "Dunkler Modus",
                            "preferences.focus.mode": "Fokus Modus",
                            "preferences.debug.mode": "Debug Modus",
                            "preferences.show.grid": "Gitter anzeigen",
                            "preferences.use.cad.selection": "CAD Auswahl verwenden",
                            "preferences.keep.stylemenu.open": "Stilmen\xfc offen halten",
                            "preferences.always.show.snaps": "Hilfslinien immer anzeigen",
                            "preferences.rotate.handles": "Rotiergriffe",
                            "preferences.binding.handles": "Bindegriffe",
                            "preferences.clone.handles": "Klongriffe",
                            undo: "R\xfcckg\xe4ngig machen",
                            redo: "Wiederherstellen",
                            cut: "Ausschneiden",
                            copy: "Kopieren",
                            paste: "Einf\xfcgen",
                            "copy.as": "Kopieren als",
                            "export.as": "Exportieren als",
                            "select.all": "Alles ausw\xe4hlen",
                            "select.none": "Nichts ausw\xe4hlen",
                            delete: "L\xf6schen",
                            "new.project": "Neues Projekt",
                            open: "\xd6ffnen",
                            save: "Speichern",
                            "save.as": "Speichern als",
                            "upload.media": "Medien hochladen",
                            "create.page": "Seite erstellen",
                            "new.page": "Neue Seite",
                            "page.name": "Seitenname",
                            duplicate: "Duplizieren",
                            cancel: "Abbrechen",
                            "copy.invite.link": "Einladungslink kopieren",
                            "create.multiplayer.project": "Mehrspielerprojekt kreieren",
                            "copy.multiplayer.project": "In Mehrspielerprojekt kopieren",
                            select: "Ausw\xe4hlen",
                            eraser: "Radierer",
                            draw: "Malen",
                            arrow: "Pfeil",
                            text: "Text",
                            sticky: "Notiz",
                            rectangle: "Rechteck",
                            ellipse: "Ellipse",
                            triangle: "Dreieck",
                            line: "Linie",
                            rotate: "Drehen",
                            "lock.aspect.ratio": "Seitenverh\xe4ltnis sperren",
                            "unlock.aspect.ratio": "Seitenverh\xe4ltnis entsperren",
                            group: "Gruppieren",
                            ungroup: "Gruppierung aufheben",
                            "move.to.back": "Nach Hinten verschieben",
                            "move.backward": "R\xfcckw\xe4rts schieben",
                            "move.forward": "Vorw\xe4rts schieben",
                            "move.to.front": "Nach Vorne verschieben",
                            "reset.angle": "Winkel zur\xfccksetzen",
                            lock: "Sperren",
                            unlock: "Entsperren",
                            "move.to.page": "Zu Seite verschieben",
                            "flip.horizontal": "Horizontal spiegeln",
                            "flip.vertical": "Vertikal spiegeln",
                            move: "Verschieben",
                            "to.front": "Nach Vorne",
                            forward: "Vorw\xe4rts",
                            backward: "R\xfcckw\xe4rts",
                            back: "Hinten",
                            language: "Sprache",
                        },
                    },
                    { locale: "en", label: "English", messages: {} },
                    {
                        locale: "es",
                        label: "Espa\xf1ol",
                        messages: {
                            "style.menu.color": "Color",
                            "style.menu.fill": "Relleno",
                            "style.menu.dash": "L\xednea",
                            "style.menu.size": "Tama\xf1o",
                            "style.menu.keep.open": "Mantener abierto",
                            "style.menu.font": "Fuente",
                            "style.menu.align": "Alineaci\xf3n",
                            styles: "Estilos",
                            "zoom.in": "Acercar",
                            "zoom.out": "Alejar",
                            to: "A",
                            "menu.file": "Archivo",
                            "menu.edit": "Editar",
                            "menu.view": "Ver",
                            "menu.preferences": "Preferencias",
                            "menu.sign.in": "Iniciar sesi\xf3n",
                            "menu.sign.out": "Cerrar sesi\xf3n",
                            "become.a.sponsor": "Convi\xe9rtete en patrocinador",
                            "zoom.to.content": "Acercar al contenido",
                            "zoom.to.selection": "Acercar a la selecci\xf3n",
                            "zoom.to.fit": "Ajustar a la ventana",
                            "zoom.to": "Acercar a",
                            "preferences.dark.mode": "Modo oscuro",
                            "preferences.focus.mode": "Modo concentraci\xf3n",
                            "preferences.debug.mode": "Modo depuraci\xf3n",
                            "preferences.show.grid": "Mostrar cuadr\xedcula",
                            "preferences.use.cad.selection": "Usar selecci\xf3n CAD",
                            "preferences.keep.stylemenu.open": "Mantener men\xfa de estilos abierto",
                            "preferences.always.show.snaps": "Mostrar puntos de ajuste",
                            "preferences.rotate.handles": "Control de rotaci\xf3n",
                            "preferences.binding.handles": "Control de vinculaci\xf3n",
                            "preferences.clone.handles": "Control de clonaci\xf3n",
                            undo: "Deshacer",
                            redo: "Rehacer",
                            cut: "Cortar",
                            copy: "Copiar",
                            paste: "Pegar",
                            "copy.as": "Copiar como",
                            "export.as": "Exportar como",
                            "select.all": "Selecionar todo",
                            "select.none": "Selecionar nada",
                            delete: "Borrar",
                            "new.project": "Nuevo Proyecto",
                            open: "Abrir",
                            save: "Guardar",
                            "save.as": "Guardar como",
                            "upload.media": "Subir medios",
                            "create.page": "Crear p\xe1gina",
                            "new.page": "Nueva p\xe1gina",
                            "page.name": "Nombre de p\xe1gina",
                            duplicate: "Duplicar",
                            cancel: "Cancelar",
                            "copy.invite.link": "Copiar invitaci\xf3n",
                            "copy.readonly.link": "Copiar invitaci\xf3n (solo lectura)",
                            "create.multiplayer.project": "Crear proyecto multijugador",
                            "copy.multiplayer.project": "Copiar proyecto multijugador",
                            select: "Seleccionar",
                            eraser: "Borrador",
                            draw: "Dibujar",
                            arrow: "Flecha",
                            text: "Texto",
                            sticky: "Pegatina",
                            rectangle: "Rect\xe1ngulo",
                            ellipse: "Elipse",
                            triangle: "Tri\xe1ngulo",
                            line: "L\xednea",
                            rotate: "Rotar",
                            "lock.aspect.ratio": "Bloquear relaci\xf3n de aspecto",
                            "unlock.aspect.ratio": "Desbloquear relaci\xf3n de aspecto",
                            group: "Agrupar",
                            ungroup: "Desagrupar",
                            "move.to.back": "Mover al fondo",
                            "move.backward": "Mover atr\xe1s",
                            "move.forward": "Mover adelante",
                            "move.to.front": "Mover al frente",
                            "reset.angle": "Restablecer \xe1ngulo",
                            lock: "Bloquear",
                            unlock: "Desbloquear",
                            "move.to.page": "Mover a p\xe1gina",
                            "flip.horizontal": "Voltear horizontalmente",
                            "flip.vertical": "Voltear verticalmente",
                            move: "Mover",
                            "to.front": "Al frente",
                            forward: "Adelante",
                            backward: "Atr\xe1s",
                            back: "Fondo",
                            language: "Idioma",
                            "translation.link": "Saber m\xe1s",
                            "dock.position": "Posici\xf3n del dock",
                            bottom: "Abajo",
                            "keyboard.shortcuts": "Atajos de teclado",
                            loading: "Cargando{dots}",
                            left: "Izquierda",
                            right: "Derecha",
                            top: "Arriba",
                            search: "Buscar",
                            page: "P\xe1gina",
                            image: "Imagen",
                        },
                    },
                    {
                        locale: "fa",
                        label: "فارسی",
                        messages: {
                            "style.menu.color": "رنگ",
                            "style.menu.fill": "توپُر",
                            "style.menu.dash": "خط‌ چین",
                            "style.menu.size": "اندازه",
                            "style.menu.keep.open": "باز باش",
                            "style.menu.font": "فونت",
                            "style.menu.align": "تراز",
                            styles: "استایل‌ها",
                            "zoom.in": "زوم جلو",
                            "zoom.out": "زوم عقب",
                            to: "به",
                            "menu.file": "فایل",
                            "menu.edit": "ویرایش",
                            "menu.view": "نمایش",
                            "menu.preferences": "تنظیم‌ها",
                            "menu.sign.in": "ورود",
                            "menu.sign.out": "خروج",
                            "become.a.sponsor": " حامی شو",
                            "zoom.to.selection": "نمایش انتخاب‌شده‌ها",
                            "zoom.to.fit": "نمایش کل صفحه",
                            "zoom.to": "زوم به ",
                            "preferences.dark.mode": "حالت شب",
                            "preferences.focus.mode": "حالت تمرکز",
                            "preferences.debug.mode": "حالت عیب‌یایی",
                            "preferences.show.grid": "نمایش خطوط راهنما",
                            "preferences.use.cad.selection": "استفاده از حالت انتخابی CAD",
                            "preferences.keep.stylemenu.open": "منوی استایل باز باشه",
                            "preferences.always.show.snaps": "راهنمای لبه‌ها رو نشون بده",
                            "preferences.rotate.handles": "دستگیره‌های چرخش رو نشون بده",
                            "preferences.binding.handles": "دستهٔ لبه‌ها رو نشون بده",
                            "preferences.clone.handles": "دستگیره‌های کپی رو نشون بده",
                            undo: "یه قدم عقب",
                            redo: "یه قدم جلو",
                            cut: "بریدن",
                            copy: "کپی",
                            paste: "جای‌گذاری",
                            "copy.as": "کپی به‌‌عنوان",
                            "export.as": "خروجی با فرمت",
                            "select.all": "انتخاب همه",
                            "select.none": "انتخاب هیچ",
                            delete: " پاک‌کردن",
                            "new.project": "پروژهٔ تازه",
                            open: "باز کن",
                            save: "ذخیره",
                            "save.as": "ذخیره با اسم",
                            "upload.media": "آپلود عکس",
                            "create.page": "ساخت صفحه",
                            "new.page": "صفحهٔ تازه",
                            "page.name": "اسم صفحه",
                            duplicate: "کپی درجا",
                            cancel: "بی‌خیال",
                            "copy.invite.link": "کپی لینک دعوت",
                            "create.multiplayer.project": "ساخت پروژهٔ چندنفره",
                            "copy.multiplayer.project": "کپی در پروژهٔ چندنفره",
                            select: "انتخاب",
                            eraser: "پاک‌کن",
                            draw: "رسم",
                            arrow: "فلِش",
                            text: "متن",
                            sticky: "یادداشت",
                            rectangle: "چارگوش",
                            ellipse: "گردی",
                            triangle: "سه‌گوش",
                            line: "خط",
                            rotate: "چرخش",
                            "lock.aspect.ratio": "تثبیت نسبت ابعاد",
                            "unlock.aspect.ratio": "نسبت ابعاد متغیر",
                            group: "جمع کن",
                            ungroup: "جدا کن",
                            "move.to.back": "ببر آخر",
                            "move.backward": "ببر عقب",
                            "move.forward": "ببر اول",
                            "move.to.front": "ببر جلو",
                            "reset.angle": "حذف چرخش",
                            lock: "قفل‌ کن",
                            unlock: "باز کن",
                            "move.to.page": "ببر به صفحه",
                            "flip.horizontal": "برگردون افقی",
                            "flip.vertical": "برگردون عمودی",
                            move: "جابه‌جاش کن",
                            "to.front": "به اول",
                            forward: "به جلو",
                            backward: "به عقب",
                            back: "به آخر",
                            language: "زبان",
                        },
                    },
                    {
                        locale: "fr",
                        label: "Fran\xe7ais",
                        messages: {
                            "style.menu.color": "Couleur",
                            "style.menu.fill": "Remplir",
                            "style.menu.dash": "Bordure",
                            "style.menu.size": "Taille",
                            "style.menu.keep.open": "Toujours afficher le menu",
                            "style.menu.font": "Police",
                            "style.menu.align": "Alignement",
                            styles: "Styles",
                            "zoom.in": "Zoom avant",
                            "zoom.out": "Zoom arri\xe8re",
                            to: "\xc0",
                            "menu.tools": "Outils",
                            "menu.transform": "Transformation",
                            "menu.file": "Fichier",
                            "menu.edit": "\xc9dition",
                            "menu.view": "Afficher",
                            "menu.preferences": "Pr\xe9f\xe9rences",
                            "menu.sign.in": "S'authentifier",
                            "menu.sign.out": "Se d\xe9connecter",
                            "become.a.sponsor": "Devenir un sponsor",
                            "zoom.to.content": "Retour au contenu",
                            "zoom.to.selection": "Ajuster le zoom \xe0 la s\xe9lection",
                            "zoom.to.fit": "Adapter le zoom au contenu",
                            "zoom.to": "R\xe9tablir le zoom \xe0",
                            "preferences.dark.mode": "Mode sombre",
                            "preferences.focus.mode": "Mode focus",
                            "preferences.debug.mode": "Afficher la barre d\xe9veloppeur",
                            "preferences.show.grid": "Afficher la grille",
                            "preferences.use.cad.selection": "Utiliser la s\xe9lection CAD",
                            "preferences.keep.stylemenu.open": "Toujours afficher le menu styles",
                            "preferences.always.show.snaps": "Afficher les rep\xe8res dynamiques",
                            "preferences.rotate.handles": "Manier la rotation",
                            "preferences.binding.handles": "Manier les liaisons",
                            "preferences.clone.handles": "Manier le clonage",
                            undo: "Annuler",
                            redo: "R\xe9tablir",
                            cut: "Couper",
                            copy: "Copier",
                            paste: "Coller",
                            "copy.as": "Copier au format",
                            "export.as": "Exporter au format",
                            "select.all": "Tout s\xe9lectionner",
                            "select.none": "Tout d\xe9s\xe9lectionner",
                            delete: "Supprimer",
                            "new.project": "Nouveau project",
                            open: "Ouvrir",
                            save: "Enregistrer",
                            "save.as": "Enregistrer sous",
                            "upload.media": "Importer un m\xe9dia",
                            "create.page": "Cr\xe9er une page",
                            "new.page": "Nouvelle Page",
                            "page.name": "Nom de la page",
                            duplicate: "Dupliquer",
                            cancel: "Annuler",
                            "copy.invite.link": "Copier le lien d'invitation",
                            "copy.readonly.link": "Copier le lien en lecture seule d'invitation",
                            "create.multiplayer.project": "Cr\xe9er un project multi-joueurs",
                            "copy.multiplayer.project": "Copier dans un projet multi-joueurs",
                            select: "S\xe9lection",
                            eraser: "Gomme",
                            draw: "Crayon",
                            arrow: "Fl\xe8che",
                            text: "Texte",
                            sticky: "Note",
                            rectangle: "Rectangle",
                            ellipse: "Cercle",
                            triangle: "Triangle",
                            line: "Ligne",
                            rotate: "Rotation",
                            "lock.aspect.ratio": "Verrouiller les proportions",
                            "unlock.aspect.ratio": "D\xe9verrouiller les proportions",
                            group: "Grouper",
                            ungroup: "D\xe9grouper",
                            "move.to.back": "D\xe9placer \xe0 l'arri\xe8re-plan",
                            "move.backward": "Reculer d'un plan",
                            "move.forward": "Avancer d'un plan",
                            "move.to.front": "Placer au premier plan",
                            "reset.angle": "R\xe9initialiser la rotation",
                            lock: "Verrouiller",
                            unlock: "D\xe9verrouiller",
                            "align.distribute": "Alignement / R\xe9partion",
                            "move.to.page": "D\xe9placer vers la page",
                            "flip.horizontal": "Retourner horizontalement",
                            "flip.vertical": "Retourner verticalement",
                            move: "Disposition",
                            "to.front": "Placer au premier plan",
                            forward: "Avancer d'un plan",
                            backward: "Reculer d'un plan",
                            back: "D\xe9placer \xe0 l'arri\xe8re-plan",
                            language: "Langage",
                            "translation.link": "En savoir plus",
                            "dock.position": "Position du dock",
                            bottom: "En bas",
                            left: "\xc0 gauche",
                            right: "\xc0 droite",
                            top: "En haut",
                            page: "Page",
                            "keyboard.shortcuts": "Raccourcis clavier",
                            search: "Rechercher",
                            loading: "Chargement{dots}",
                            "export.background": "Couleur d'arri\xe8re-plan de l'export",
                            transparent: "Transparent",
                            auto: "Automatique",
                            light: "Clair",
                            dark: "Sombre",
                        },
                    },
                    {
                        locale: "he",
                        label: "עברית",
                        messages: {
                            "style.menu.color": "צבע",
                            "style.menu.fill": "מלא",
                            "style.menu.dash": "גבול",
                            "style.menu.size": "גודל",
                            "style.menu.keep.open": "השאר פתוח",
                            "style.menu.font": "גופן",
                            "style.menu.align": "יישור",
                            styles: "עיצוב",
                            "zoom.in": "הגדל תצוגה",
                            "zoom.out": "הקטן תצוגה",
                            to: "ל",
                            "menu.file": "קובץ",
                            "menu.edit": "עריכה",
                            "menu.view": "תצוגה",
                            "menu.preferences": "מאפיינים",
                            "menu.sign.in": "הירשם",
                            "menu.sign.out": "התנתק",
                            "become.a.sponsor": "מתן חסות",
                            "zoom.to.selection": "זום לבחירה",
                            "zoom.to.fit": "זום להתאמה",
                            "zoom.to": "זום ל",
                            "preferences.dark.mode": "מצב חשוך",
                            "preferences.focus.mode": "מצב פוקוס",
                            "preferences.debug.mode": "מצב דיבאג",
                            "preferences.show.grid": "(גריד)הראה רשת עימוד",
                            "preferences.use.cad.selection": "סימון CAD",
                            "preferences.keep.stylemenu.open": "השאר תפריט עיצוב פתוח",
                            "preferences.always.show.snaps": "הראה קווי מתאר",
                            "preferences.rotate.handles": "הראה ידיות סיבוב",
                            "preferences.binding.handles": "הראה ידיות קשירה",
                            "preferences.clone.handles": "הראה ידיות שיכפול",
                            undo: "בטל",
                            redo: "עשה מחדש",
                            cut: "גזור",
                            copy: "העתק",
                            paste: "הדבק",
                            "copy.as": "העתק כ",
                            "export.as": "ייצא כ",
                            "select.all": "בחר הכל",
                            "select.none": "בטל בחירה",
                            delete: "מחק",
                            "new.project": "פרויקט חדש",
                            open: "פתח",
                            save: "שמור",
                            "save.as": "שמור כ",
                            "upload.media": "העלאת מדיה",
                            "create.page": "צור דף",
                            "new.page": "דף חדש",
                            "page.name": "שם הדף",
                            duplicate: "שכפל",
                            cancel: "בטל",
                            "copy.invite.link": "העתק קישור הזמנה",
                            "create.multiplayer.project": "צור פרויקט רב משתתפים",
                            "copy.multiplayer.project": "העתק לפרויקט רב משתתפים",
                            select: "סמן",
                            eraser: "מחק",
                            draw: "צייר",
                            arrow: "חץ",
                            text: "טקסט",
                            sticky: "דביקי",
                            rectangle: "מרובע",
                            ellipse: "אליפסה",
                            triangle: "משולש",
                            line: "קו",
                            rotate: "סובב",
                            "lock.aspect.ratio": "נעל יחס רוחב-גובה",
                            "unlock.aspect.ratio": "שחרר נעילת יחס רוחב-גובה",
                            group: "קבץ",
                            ungroup: "בטל קיבוץ",
                            "move.to.back": "הבא לתחתית",
                            "move.backward": "הזז אחורה",
                            "move.forward": "הזז קדימה",
                            "move.to.front": "הבא לחזית",
                            "reset.angle": "אפס זווית",
                            lock: "נעל",
                            unlock: "שחרר נעילה",
                            "move.to.page": "הזז לדף",
                            "flip.horizontal": "הפוך אופקית",
                            "flip.vertical": "הפוך אנכית",
                            move: "הזז",
                            "to.front": "הבא לקדימה",
                            forward: "קדימה",
                            backward: "אחורה",
                            back: "בחזרה",
                            language: "שפה",
                        },
                    },
                    {
                        locale: "it",
                        label: "Italiano",
                        messages: {
                            "style.menu.color": "Colore",
                            "style.menu.fill": "Riempi",
                            "style.menu.dash": "Tratteggo",
                            "style.menu.size": "Dimensione",
                            "style.menu.keep.open": "Mantieni aperto",
                            "style.menu.font": "Font",
                            "style.menu.align": "Allineamento",
                            styles: "Stile",
                            "zoom.in": "Ingrandisci",
                            "zoom.out": "Rimpicciolisci",
                            to: "Imposta",
                            "menu.file": "File",
                            "menu.edit": "Modifica",
                            "menu.view": "Visualizzazione",
                            "menu.preferences": "Preferenze",
                            "menu.sign.in": "Accedi",
                            "menu.sign.out": "Esci",
                            "become.a.sponsor": "Sponsorizza",
                            "zoom.to.selection": "Adatta alla selezione",
                            "zoom.to.fit": "Adatta",
                            "zoom.to": "Ingrandisci",
                            "preferences.dark.mode": "Modalit\xe0 scura",
                            "preferences.focus.mode": "Modalit\xe0 zen",
                            "preferences.debug.mode": "Modalit\xe0 sviluppatore",
                            "preferences.show.grid": "Mostra griglia",
                            "preferences.use.cad.selection": "Selezione CAD",
                            "preferences.keep.stylemenu.open": "Mantieni menu stile aperto",
                            "preferences.always.show.snaps": "Mostra sempre le guide",
                            "preferences.rotate.handles": "Controlli d'inclinazione",
                            "preferences.binding.handles": "Controlli d'associazione",
                            "preferences.clone.handles": "Controlli di clonazione",
                            undo: "Annulla",
                            redo: "Ripristina",
                            cut: "Taglia",
                            copy: "Copia",
                            paste: "Incolla",
                            "copy.as": "Copia come",
                            "export.as": "Esporta come",
                            "select.all": "Seleziona tutto",
                            "select.none": "Deseleziona tutto",
                            delete: "Elimina",
                            "new.project": "Nuovo progetto",
                            open: "Apri",
                            save: "Salva",
                            "save.as": "Salva come",
                            "upload.media": "Carica contenuti multimediali",
                            "create.page": "Crea nuova pagina",
                            "new.page": "Nuova pagina",
                            "page.name": "Nome pagina",
                            page: "Pagina",
                            duplicate: "Duplica",
                            cancel: "Chiudi",
                            "copy.invite.link": "Copia link invito",
                            "create.multiplayer.project": "Crea progetto multiplayer",
                            "copy.multiplayer.project": "Trasforma in progetto multiplayer",
                            select: "Seleziona",
                            eraser: "Gomma",
                            draw: "Matita",
                            arrow: "Freccia",
                            text: "Casella di testo",
                            sticky: "Post-it",
                            rectangle: "Rettangolo",
                            ellipse: "Ellisse",
                            triangle: "Triangolo",
                            line: "Linea",
                            rotate: "Ruota",
                            "lock.aspect.ratio": "Blocca rapporto lati",
                            "unlock.aspect.ratio": "Sblocca rapporto lati",
                            group: "Raggruppa",
                            ungroup: "Separa",
                            "move.to.back": "Muovi in fondo",
                            "move.backward": "Sposta indietro",
                            "move.forward": "Sposta avanti",
                            "move.to.front": "Muovi in fronte",
                            "reset.angle": "Reimposta angolo",
                            lock: "Blocca",
                            unlock: "Sblocca",
                            "move.to.page": "Trasferisci a pagina",
                            "flip.horizontal": "Ribalta orizzontalmente",
                            "flip.vertical": "Ribalta verticalmente",
                            move: "Sposta",
                            "to.front": "In primo piano",
                            forward: "Sposta avanti",
                            backward: "Sposta indietro",
                            back: "In fondo",
                            language: "Lingua",
                            "dock.position": "Posizione dock",
                            bottom: "In basso",
                            left: "Sinistra",
                            right: "Destra",
                            top: "In Alto",
                        },
                    },
                    {
                        locale: "ja",
                        label: "日本語",
                        messages: {
                            "style.menu.color": "色",
                            "style.menu.fill": "塗りつぶし",
                            "style.menu.dash": "線",
                            "style.menu.size": "大きさ",
                            "style.menu.keep.open": "常に表示",
                            "style.menu.font": "フォント",
                            "style.menu.align": "配置",
                            styles: "スタイル",
                            "zoom.in": "拡大",
                            "zoom.out": "縮小",
                            to: " ",
                            "menu.file": "ファイル",
                            "menu.edit": "編集",
                            "menu.view": "表示",
                            "menu.preferences": "設定",
                            "menu.sign.in": "サインイン",
                            "menu.sign.out": "サインアウト",
                            "become.a.sponsor": "支援する",
                            "zoom.to.selection": "選択したアイテムに合わせて拡大",
                            "zoom.to.fit": "拡大してすべてを表示",
                            "zoom.to": " ",
                            "preferences.dark.mode": "ダークモード",
                            "preferences.focus.mode": "フォーカスモード",
                            "preferences.debug.mode": "デバッグモード",
                            "preferences.show.grid": "グリッドを表示",
                            "preferences.use.cad.selection": "CADの選択法を使用",
                            "preferences.keep.stylemenu.open": "スタイルメニューを常に表示",
                            "preferences.always.show.snaps": "スナップを常に表示",
                            "preferences.rotate.handles": "回転ハンドルを表示",
                            "preferences.binding.handles": "結合ハンドルを表示",
                            "preferences.clone.handles": "クローンハンドルを表示",
                            undo: "元に戻す",
                            redo: "やり直し",
                            cut: "切り取り",
                            copy: "コピー",
                            paste: "貼り付け",
                            "copy.as": "形式を選択してコピー",
                            "export.as": "形式を選択してエクスポート",
                            "select.all": "すべて選択",
                            "select.none": "選択を解除",
                            delete: "削除",
                            "new.project": "新しいプロジェクト",
                            open: "開く",
                            save: "保存",
                            "save.as": "名前をつけて保存",
                            "upload.media": "メディアをアップロード",
                            "create.page": "ページを作成",
                            "new.page": "新規ページ",
                            "page.name": "ページ名",
                            duplicate: "複製",
                            cancel: "キャンセル",
                            "copy.invite.link": "共有リンクをクリップボードにコピー",
                            "create.multiplayer.project": "マルチプレイヤープロジェクトを作成",
                            "copy.multiplayer.project": "マルチプレイヤープロジェクトにコピー",
                            select: "選択",
                            eraser: "消しゴム",
                            draw: "描画",
                            arrow: "矢印",
                            text: "テキスト",
                            sticky: "ふせん",
                            rectangle: "長方形",
                            ellipse: "楕円形",
                            triangle: "三角形",
                            line: "線",
                            rotate: "回転",
                            "lock.aspect.ratio": "縦横比を固定",
                            "unlock.aspect.ratio": "縦横比の固定を解除",
                            group: "グルーピング",
                            ungroup: "グループ解除",
                            "move.to.back": "最後面に移動",
                            "move.backward": "ひとつ後ろに移動",
                            "move.forward": "ひとつ前に移動",
                            "move.to.front": "最背面に移動",
                            "reset.angle": "角度を初期化",
                            lock: "ロック",
                            unlock: "アンロック",
                            "move.to.page": "ページへ移動",
                            "flip.horizontal": "水平方向に反転",
                            "flip.vertical": "垂直方向に反転",
                            move: "移動",
                            "to.front": "最前面へ",
                            forward: "ひとつ前へ",
                            backward: "ひとつ後ろへ",
                            back: "最背面へ",
                            language: "言語",
                        },
                    },
                    {
                        locale: "ko-kr",
                        label: "한국어",
                        messages: {
                            "style.menu.color": "색깔",
                            "style.menu.fill": "채우기",
                            "style.menu.dash": "테두리",
                            "style.menu.size": "크기",
                            "style.menu.keep.open": "항상 열기",
                            "style.menu.font": "글꼴",
                            "style.menu.align": "정렬",
                            styles: "스타일",
                            "zoom.in": "확대",
                            "zoom.out": "축소",
                            to: "to",
                            "menu.file": "파일",
                            "menu.edit": "편집",
                            "menu.view": "보기",
                            "menu.preferences": "설정",
                            "menu.sign.in": "로그인",
                            "menu.sign.out": "로그아웃",
                            "become.a.sponsor": "후원자 되기",
                            "zoom.to.selection": "선택 요소 맞추기",
                            "zoom.to.fit": "전체 맞추기",
                            "zoom.to": "맞추기",
                            "preferences.dark.mode": "다크 모드",
                            "preferences.focus.mode": "집중 모드",
                            "preferences.debug.mode": "디버그 모드",
                            "preferences.show.grid": "격자 보기",
                            "preferences.use.cad.selection": "CAD 선택 사용",
                            "preferences.keep.stylemenu.open": "스타일 메뉴 항상 열기",
                            "preferences.always.show.snaps": "Snap 항상 열기",
                            "preferences.rotate.handles": "회전 보이기",
                            "preferences.binding.handles": "Binding Handles",
                            "preferences.clone.handles": "복제 보이기",
                            undo: "실행 취소",
                            redo: "다시 실행",
                            cut: "자르기",
                            copy: "복사",
                            paste: "붙여넣기",
                            "copy.as": "다른 형식으로 복사하기",
                            "export.as": "내보내기",
                            "select.all": "전체 선택",
                            "select.none": "선택 안함",
                            delete: "삭제하기",
                            "new.project": "새 프로젝트",
                            open: "열기",
                            save: "저장",
                            "save.as": "다른 이름으로 저장",
                            "upload.media": "미디어 업로드",
                            "create.page": "새 페이지 만들기",
                            "new.page": "새 페이지",
                            "page.name": "페이지 이름",
                            duplicate: "복제",
                            cancel: "취소",
                            "copy.invite.link": "초대 링크 복사하기",
                            "create.multiplayer.project": "공동 프로젝트 만들기",
                            "copy.multiplayer.project": "공동 프로젝트로 복사하기",
                            select: "선택",
                            eraser: "지우개",
                            draw: "그리기",
                            arrow: "화살표",
                            text: "텍스트",
                            sticky: "메모",
                            rectangle: "사각형",
                            ellipse: "원",
                            triangle: "삼각형",
                            line: "선",
                            rotate: "회전",
                            "lock.aspect.ratio": "비율 잠금",
                            "unlock.aspect.ratio": "비율 잠금 해제",
                            group: "그룹화",
                            ungroup: "그룹화 해제",
                            "move.to.back": "맨 뒤로 보내기",
                            "move.backward": "뒤로 보내기",
                            "move.forward": "앞으로 가져오기",
                            "move.to.front": "맨 앞으로 가져오기",
                            "reset.angle": "회전 초기화",
                            lock: "잠구기",
                            unlock: "잠금 해제하기",
                            "move.to.page": "페이지로 이동",
                            "flip.horizontal": "수평으로 뒤집기",
                            "flip.vertical": "수직으로 뒤집기",
                            move: "순서",
                            "to.front": "맨 앞으로",
                            forward: "앞으로",
                            backward: "뒤로",
                            back: "맨 뒤로",
                            language: "언어",
                        },
                    },
                    {
                        locale: "ne",
                        label: "नेपाली",
                        messages: {
                            "style.menu.color": "रंग",
                            "style.menu.fill": "भर्नुहोस्",
                            "style.menu.dash": "धर्का",
                            "style.menu.size": "आकार",
                            "style.menu.keep.open": "खुला राख्नुहोस्",
                            "style.menu.font": "फन्ट",
                            "style.menu.align": "पङ्क्तिबद्ध",
                            styles: "शैलीहरू",
                            "zoom.in": "जुम इन",
                            "zoom.out": "जुम आउट",
                            to: "टु",
                            "menu.file": "फाइल",
                            "menu.edit": "सम्पादन गर्नुहोस्",
                            "menu.view": "भ्यू",
                            "menu.preferences": "प्राथमिकताहरू",
                            "menu.sign.in": "साइन इन गर्नुहोस्",
                            "menu.sign.out": "साइन आउट गर्नुहोस्",
                            "become.a.sponsor": "प्रायोजक बन्नुहोस्",
                            "zoom.to.selection": "जुम टु सेलेक्सन",
                            "zoom.to.fit": "जुम टु फिट",
                            "zoom.to": "जुम टु",
                            "preferences.dark.mode": "अँध्यारो मोड",
                            "preferences.focus.mode": "फोकस मोड",
                            "preferences.debug.mode": "डिबग मोड",
                            "preferences.show.grid": "ग्रिड देखाउनुहोस्",
                            "preferences.use.cad.selection": "CAD सेलेक्सन गर्नुहोस्",
                            "preferences.keep.stylemenu.open": "स्टाइल मेनु खुला राख्नुहोस्",
                            "preferences.always.show.snaps": "सधैँ स्न्यापहरू देखाउनुहोस्",
                            "preferences.rotate.handles": "ह्यान्डलहरू घुमाउनुहोस्",
                            "preferences.binding.handles": "बाइन्डिङ ह्यान्डलहरू",
                            "preferences.clone.handles": "क्लोन ह्यान्डलहरू",
                            undo: "पूर्ववत गर्नुहोस्",
                            redo: "पुनः गर्नुहोस्",
                            cut: "कट गर्नुहोस्",
                            copy: "कपि गर्नुहोस्",
                            paste: "पेस्ट गर्नुहोस्",
                            "copy.as": "कपि एज",
                            "export.as": "एक्सपोर्ट एज",
                            "select.all": "सबै छान्नुहोस्",
                            "select.none": "केहि पनि सेलेक्ट नगर्नुहोस्",
                            delete: "मेटाउनुहोस्",
                            "new.project": "नयाँ परियोजना",
                            open: "खोल्नुहोस्",
                            save: "सुरक्षित गर्नुहोस्",
                            "save.as": "सेभ एज",
                            "upload.media": "मिडिया अपलोड गर्नुहोस्",
                            "create.page": "पृष्ठ सिर्जना गर्नुहोस्",
                            "new.page": "नयाँ पृष्ठ सिर्जना गर्नुहोस्",
                            "page.name": "पृष्ठको नाम",
                            duplicate: "अनुलिपि गर्नुहोस्",
                            cancel: "रद्द गर्नुहोस्",
                            "copy.invite.link": "निमन्त्रणा लिङ्क कपि गर्नुहोस्",
                            "create.multiplayer.project": "मल्टिप्लेयर परियोजना सिर्जना गर्नुहोस्",
                            "copy.multiplayer.project": "मल्टिप्लेयर प्रोजेक्टमा कपि गर्नुहोस्",
                            select: "सेलेक्ट",
                            eraser: "इरेजर",
                            draw: "चित्र बनाउनु",
                            arrow: "तीर",
                            text: "शब्द",
                            sticky: "टाँसिने",
                            rectangle: "आयत",
                            ellipse: "दीर्घवृत्त",
                            triangle: "त्रिभुज",
                            line: "रेखा",
                            rotate: "घुमाउनुहोस्",
                            "lock.aspect.ratio": "आकार अनुपात लक गर्नुहोस्",
                            "unlock.aspect.ratio": "आकार अनुपात अनलक गर्नुहोस्",
                            group: "समूह",
                            ungroup: "समूह रद्द गर्नुहोस्",
                            "move.to.back": "पछाडि सार्नुहोस्",
                            "move.backward": "थप पछाडि सार्नुहोस्",
                            "move.forward": "अगाडि सार्नुहोस्",
                            "move.to.front": "थप अगाडि सार्नुहोस्",
                            "reset.angle": "कोण रिसेट गर्नुहोस्",
                            lock: "लक गर्नुहोस्",
                            unlock: "अनलक गर्नुहोस्",
                            "move.to.page": "पृष्ठमा सार्नुहोस्",
                            "flip.horizontal": "तेर्सो फ्लिप गर्नुहोस्",
                            "flip.vertical": "ठाडो फ्लिप गर्नुहोस्",
                            move: "सार्नुहोस्",
                            "to.front": "थप अगाडि",
                            forward: "अगाडि",
                            backward: "पछाडि",
                            back: "थप पछाडि",
                            language: "भाषा",
                        },
                    },
                    {
                        locale: "no",
                        label: "Norwegian",
                        messages: {
                            "style.menu.color": "Farge",
                            "style.menu.fill": "Fyll",
                            "style.menu.dash": "Linje",
                            "style.menu.size": "St\xf8rrelse",
                            "style.menu.keep.open": "Hold \xe5pen",
                            "style.menu.font": "Teksttype",
                            "style.menu.align": "Juster",
                            styles: "Stiler",
                            "zoom.in": "Zoom inn",
                            "zoom.out": "Zoom ut",
                            to: "til",
                            "menu.file": "Fil",
                            "menu.edit": "Rediger",
                            "menu.view": "Vis",
                            "menu.preferences": "Preferanser",
                            "menu.sign.in": "Logg inn",
                            "menu.sign.out": "Logg ut",
                            "become.a.sponsor": "Bli en sponsor",
                            "zoom.to.selection": "Zoom til valg",
                            "zoom.to.fit": "Zoom for \xe5 passe",
                            "zoom.to": "Zoom til",
                            "preferences.dark.mode": "M\xf8rk modus",
                            "preferences.focus.mode": "Fokus modus",
                            "preferences.debug.mode": "Debug modus",
                            "preferences.show.grid": "Vis rutenett",
                            "preferences.use.cad.selection": "Bruk CAD seleksjon",
                            "preferences.keep.stylemenu.open": "Hold stilmeny \xe5pen",
                            "preferences.always.show.snaps": "Vis alltid snaps",
                            "preferences.rotate.handles": "Vis roteringsh\xe5ndtak",
                            "preferences.binding.handles": "Vis bindingsh\xe5ndtak",
                            "preferences.clone.handles": "Vis kloningsh\xe5ndtak",
                            undo: "Angre",
                            redo: "Gj\xf8r om",
                            cut: "Klipp ut",
                            copy: "Kopier",
                            paste: "Lim inn",
                            "copy.as": "Kopier som",
                            "export.as": "Eksporter som",
                            "select.all": "Velg alle",
                            "select.none": "Velg ingen",
                            delete: "Slett",
                            "new.project": "Nytt prosjekt",
                            open: "\xc5pne",
                            save: "Lagre",
                            "save.as": "Lagre som",
                            "upload.media": "Last opp media",
                            "create.page": "Opprett side",
                            "new.page": "Ny side",
                            "page.name": "Sidenavn",
                            duplicate: "Dupliser",
                            cancel: "Avbryt",
                            "copy.invite.link": "Kopier invitasjonslink",
                            "create.multiplayer.project": "Opprett et flerspiller prosjekt",
                            "copy.multiplayer.project": "Kopier til flerspiller prosjekt",
                            select: "Velg",
                            eraser: "Viskel\xe6r",
                            draw: "Tegn",
                            arrow: "Pil",
                            text: "Tekst",
                            sticky: "Lapp",
                            rectangle: "Rektangel",
                            ellipse: "Ellipse",
                            triangle: "Trekant",
                            line: "Linje",
                            rotate: "Roter",
                            "lock.aspect.ratio": "L\xe5s st\xf8rrelsesforhold",
                            "unlock.aspect.ratio": "L\xe5s opp st\xf8rrelsesforhold",
                            group: "Grupper",
                            ungroup: "Avgrupper",
                            "move.to.back": "Flytt bakerst",
                            "move.backward": "Flytt bakover",
                            "move.forward": "Flytt forover",
                            "move.to.front": "Flytt til front",
                            "reset.angle": "Tilbakestill vinkel",
                            lock: "L\xe5s",
                            unlock: "L\xe5s opp",
                            "move.to.page": "Flytt til side",
                            "flip.horizontal": "Snu horisontalt",
                            "flip.vertical": "Snu vertikalt",
                            move: "Flytt",
                            "to.front": "Foran",
                            forward: "Framover",
                            backward: "Bakover",
                            back: "Bakerst",
                            language: "Spr\xe5k",
                        },
                    },
                    {
                        locale: "pl",
                        label: "Polski",
                        messages: {
                            "style.menu.color": "Kolor",
                            "style.menu.fill": "Wypełnienie",
                            "style.menu.dash": "Linia",
                            "style.menu.size": "Rozmiar",
                            "style.menu.keep.open": "Zachowaj otwarte",
                            "style.menu.font": "Czcionka",
                            "style.menu.align": "Wyr\xf3wnanie",
                            styles: "Style",
                            "zoom.in": "Przybliż",
                            "zoom.out": "Oddal",
                            to: "do",
                            "menu.file": "Plik",
                            "menu.edit": "Edycja",
                            "menu.view": "Widok",
                            "menu.preferences": "Preferencje",
                            "menu.sign.in": "Zaloguj",
                            "menu.sign.out": "Wyloguj",
                            "become.a.sponsor": "Zostań sponsorem",
                            "zoom.to.selection": "Przybliż do zaznaczenia",
                            "zoom.to.fit": "Wypełnij ekran",
                            "zoom.to": "Przybliż do",
                            "preferences.dark.mode": "Tryb ciemny",
                            "preferences.focus.mode": "Tryb skupienia",
                            "preferences.debug.mode": "Tryb debugowania",
                            "preferences.show.grid": "Pokaż siatkę",
                            "preferences.use.cad.selection": "Użyj zaznaczania CAD",
                            "preferences.keep.stylemenu.open": "Zachowaj menu styli otwarte",
                            "preferences.always.show.snaps": "Przyciągaj obiekty",
                            "preferences.rotate.handles": "Uchwyty obrotu",
                            "preferences.binding.handles": "Uchwyty powiązania",
                            "preferences.clone.handles": "Uchwyty klonujące",
                            undo: "Cofnij",
                            redo: "Powt\xf3rz",
                            cut: "Wytnij",
                            copy: "Kopiuj",
                            paste: "Wklej",
                            "copy.as": "Kopiuj jako",
                            "export.as": "Eksportuj jako",
                            "select.all": "Zaznacz wszystko",
                            "select.none": "Odznacz wszystko",
                            delete: "Usuń",
                            "new.project": "Nowy projekt",
                            open: "Otw\xf3rz",
                            save: "Zapisz",
                            "save.as": "Zapisz jako",
                            "upload.media": "Załaduj multimedia",
                            "create.page": "Utw\xf3rz stronę",
                            "new.page": "Nowa strona",
                            "page.name": "Nazwa strony",
                            duplicate: "Powiel",
                            cancel: "Anuluj",
                            "copy.invite.link": "Kopiuj link zaproszenia",
                            "create.multiplayer.project": "Stw\xf3rz projekt wieloosobowy",
                            "copy.multiplayer.project": "Kopiuj do projektu wieloosobowego",
                            select: "Zaznacz",
                            eraser: "Gumka",
                            draw: "Rysuj",
                            arrow: "Strzałka",
                            text: "Tekst",
                            sticky: "Naklejka",
                            rectangle: "Prostokąt",
                            ellipse: "Elipsa",
                            triangle: "Tr\xf3jkąt",
                            line: "Linia",
                            rotate: "Obr\xf3ć",
                            "lock.aspect.ratio": "Zablokuj proporcje",
                            "unlock.aspect.ratio": "Odblokuj proporcje",
                            group: "Grupuj",
                            ungroup: "Rozgrupuj",
                            "move.to.back": "Przenieś na tył",
                            "move.backward": "Przesuń do tyłu",
                            "move.forward": "Przesuń do przodu",
                            "move.to.front": "Przenieś na prz\xf3d",
                            "reset.angle": "Resetuj kąt",
                            lock: "Zablokuj",
                            unlock: "Odblokuj",
                            "move.to.page": "Przenieś na stronę",
                            "flip.horizontal": "Odwr\xf3ć w poziomie",
                            "flip.vertical": "Odwr\xf3ć w pionie",
                            move: "Przenieś",
                            "to.front": "Na wierzch",
                            forward: "Do przodu",
                            backward: "Do tyłu",
                            back: "Na sp\xf3d",
                            language: "Język",
                        },
                    },
                    {
                        locale: "pt",
                        label: "Portugu\xeas - Europeu",
                        messages: {
                            "style.menu.color": "Cor",
                            "style.menu.fill": "Preencher",
                            "style.menu.dash": "Tra\xe7o",
                            "style.menu.size": "Tamanho",
                            "style.menu.keep.open": "Manter aberto",
                            "style.menu.font": "Fonte",
                            "style.menu.align": "Alinhamento",
                            styles: "Estilos",
                            "zoom.in": "Aumentar zoom",
                            "zoom.out": "Diminuir zoom",
                            to: "para",
                            "menu.file": "Ficheiro",
                            "menu.edit": "Editar",
                            "menu.view": "Visualizar",
                            "menu.preferences": "Prefer\xeancias",
                            "menu.sign.in": "Entrar",
                            "menu.sign.out": "Sair",
                            "become.a.sponsor": "Torne-se um patrocinador",
                            "zoom.to.selection": "Zoom na sele\xe7\xe3o",
                            "zoom.to.fit": "Zoom para caber",
                            "zoom.to": "Zoom para",
                            "preferences.dark.mode": "Modo Escuro",
                            "preferences.focus.mode": "Modo Foco",
                            "preferences.debug.mode": "Modo Debug",
                            "preferences.show.grid": "Mostrar Grelha",
                            "preferences.use.cad.selection": "Usar sele\xe7\xe3o CAD",
                            "preferences.keep.stylemenu.open": "Manter Menu de Estilos Aberto",
                            "preferences.always.show.snaps": "Mostrar Pontos de Ajuste",
                            "preferences.rotate.handles": "Controlo de Rota\xe7\xe3o",
                            "preferences.binding.handles": "Controlo de Binds",
                            "preferences.clone.handles": "Controlo de Clone",
                            undo: "Desfazer",
                            redo: "Refazer",
                            cut: "Cortar",
                            copy: "Copiar",
                            paste: "Colar",
                            "copy.as": "Copiar como",
                            "export.as": "Exportar como",
                            "select.all": "Selecionar todos",
                            "select.none": "Selecionar nenhum",
                            delete: "Apagar",
                            "new.project": "Novo Projeto",
                            open: "Abrir",
                            save: "Salvar",
                            "save.as": "Salvar Como",
                            "upload.media": "Upload M\xe9dia",
                            "create.page": "Criar P\xe1gina",
                            "new.page": "Nova P\xe1gina",
                            "page.name": "Nome da P\xe1gina",
                            duplicate: "Duplicar",
                            cancel: "Cancelar",
                            "copy.invite.link": "Copiar Link de Convite",
                            "create.multiplayer.project": "Criar um Projeto Multi-Utilizador",
                            "copy.multiplayer.project": "Copiar num Projeto Multi-Utilizador",
                            select: "Selecionar",
                            eraser: "Borracha",
                            draw: "Desenhar",
                            arrow: "Seta",
                            text: "Texto",
                            sticky: "Post-it",
                            rectangle: "Ret\xe2ngulo",
                            ellipse: "Elipse",
                            triangle: "Tri\xe2ngulo",
                            line: "Linha",
                            rotate: "Rodar",
                            "lock.aspect.ratio": "Trancar a Propor\xe7\xe3o",
                            "unlock.aspect.ratio": "Destrancar a Propor\xe7\xe3o",
                            group: "Agrupar",
                            ungroup: "Desagrupar",
                            "move.to.back": "Colocar no Fundo",
                            "move.backward": "Mover abaixo",
                            "move.forward": "Mover acima",
                            "move.to.front": "Colocar \xe0 Frente",
                            "reset.angle": "Reiniciar \xc2ngulo",
                            lock: "Trancar",
                            unlock: "Destrancar",
                            "move.to.page": "Mover para P\xe1gina",
                            "flip.horizontal": "Inverter Horizontalmente",
                            "flip.vertical": "Inverter Verticalmente",
                            move: "Mover",
                            "to.front": "Para Frente",
                            forward: "Avan\xe7ar",
                            backward: "Recuar",
                            back: "Voltar",
                            language: "L\xedngua",
                        },
                    },
                    {
                        locale: "pt-br",
                        label: "Portugu\xeas - Brasil",
                        messages: {
                            "style.menu.color": "Cor",
                            "style.menu.fill": "Preencher",
                            "style.menu.dash": "Tra\xe7o",
                            "style.menu.size": "Tamanho",
                            "style.menu.keep.open": "Manter aberto",
                            "style.menu.font": "Fonte",
                            "style.menu.align": "Alinhamento",
                            styles: "Estilos",
                            "zoom.in": "Aumentar zoom",
                            "zoom.out": "Diminuir zoom",
                            to: "para",
                            "menu.file": "Arquivo",
                            "menu.edit": "Editar",
                            "menu.view": "Visualizar",
                            "menu.preferences": "Prefer\xeancias",
                            "menu.sign.in": "Entrar",
                            "menu.sign.out": "Sair",
                            "become.a.sponsor": "Torne-se um patrocinador",
                            "zoom.to.selection": "Zoom para a sele\xe7\xe3o",
                            "zoom.to.fit": "Zoom para ajuste",
                            "zoom.to": "Zoom para",
                            "preferences.dark.mode": "Modo Escuro",
                            "preferences.focus.mode": "Modo Foco",
                            "preferences.debug.mode": "Modo Debug",
                            "preferences.show.grid": "Mostrar Grade",
                            "preferences.use.cad.selection": "Usar sele\xe7\xe3o CAD",
                            "preferences.keep.stylemenu.open": "Manter Menu de Estilos Aberto",
                            "preferences.always.show.snaps": "Mostrar Pontos de Ajuste",
                            "preferences.rotate.handles": "Controle de Rota\xe7\xe3o",
                            "preferences.binding.handles": "Controle de V\xednculos",
                            "preferences.clone.handles": "Controle de Clone",
                            undo: "Desfazer",
                            redo: "Refazer",
                            cut: "Cortar",
                            copy: "Copiar",
                            paste: "Colar",
                            "copy.as": "Copiar como",
                            "export.as": "Exportar como",
                            "select.all": "Selecionar todos",
                            "select.none": "Selecionar nenhum",
                            delete: "Deletar",
                            "new.project": "Novo Projeto",
                            open: "Abrir",
                            save: "Salvar",
                            "save.as": "Salvar Como",
                            "upload.media": "Carregar M\xeddia",
                            "create.page": "Criar P\xe1gina",
                            "new.page": "Nova P\xe1gina",
                            "page.name": "Nome da P\xe1gina",
                            duplicate: "Duplicar",
                            cancel: "Cancelar",
                            "copy.invite.link": "Copiar Link de Convite",
                            "create.multiplayer.project": "Criar um Projeto Multijogador",
                            "copy.multiplayer.project": "Copiar para Projeto Multijogador",
                            select: "Selecionar",
                            eraser: "Borracha",
                            draw: "Desenhar",
                            arrow: "Seta",
                            text: "Texto",
                            sticky: "Adesivo",
                            rectangle: "Ret\xe2ngulo",
                            ellipse: "Elipse",
                            triangle: "Tri\xe2ngulo",
                            line: "Linha",
                            rotate: "Rotacionar",
                            "lock.aspect.ratio": "Travar Propor\xe7\xe3o da Tela",
                            "unlock.aspect.ratio": "Destravar Propor\xe7\xe3o da Tela",
                            group: "Agrupar",
                            ungroup: "Desagrupar",
                            "move.to.back": "Recuar",
                            "move.backward": "Enviar para Tr\xe1s",
                            "move.forward": "Avan\xe7ar",
                            "move.to.front": "Trazer para Frente",
                            "reset.angle": "Reiniciar \xc2ngulo",
                            lock: "Travar",
                            unlock: "Destravar",
                            "move.to.page": "Mover para P\xe1gina",
                            "flip.horizontal": "Virar Horizontalmente",
                            "flip.vertical": "Virar Verticalmente",
                            move: "Mover",
                            "to.front": "Para Frente",
                            forward: "Avan\xe7ar",
                            backward: "Recuar",
                            back: "Voltar",
                            language: "Idioma",
                        },
                    },
                    {
                        locale: "ru",
                        label: "Russian",
                        messages: {
                            "style.menu.color": "Цвет",
                            "style.menu.fill": "Заполнять",
                            "style.menu.dash": "Штрих",
                            "style.menu.size": "Размер",
                            "style.menu.keep.open": "Держать открытым",
                            "style.menu.font": "Шрифт",
                            "style.menu.align": "Выравнивание",
                            styles: "Стиль",
                            "zoom.in": "Увеличить",
                            "zoom.out": "Уменьшить",
                            to: "к",
                            "menu.tools": "Инструменты",
                            "menu.transform": "Изменение",
                            "menu.file": "Файл",
                            "menu.edit": "Редактирование",
                            "menu.view": "Вид",
                            "menu.preferences": "Настройки",
                            "menu.sign.in": "Войти",
                            "menu.sign.out": "Выйти",
                            "become.a.sponsor": "Стать спонсором",
                            "zoom.to.content": "Вернуться к содержимому",
                            "zoom.to.selection": "Масштабировать по выделению",
                            "zoom.to.fit": "Масштабировать по размеру экрана",
                            "zoom.to": "Масштабировать к",
                            "preferences.dark.mode": "Тёмная тема",
                            "preferences.focus.mode": "Минималистичный режим",
                            "preferences.debug.mode": "Режим отладки",
                            "preferences.show.grid": "Показать сетку",
                            "preferences.use.cad.selection": "Использовать CAD выделение",
                            "preferences.keep.stylemenu.open": "Держать меню стилей открытым",
                            "preferences.always.show.snaps": "Всегда показывать привязки",
                            "preferences.rotate.handles": "Ручки вращения",
                            "preferences.binding.handles": "Ручки привязки",
                            "preferences.clone.handles": "Ручки клонирования",
                            undo: "Отменить",
                            redo: "Повторить",
                            cut: "Вырезать",
                            copy: "Копировать",
                            paste: "Вставить",
                            "copy.as": "Копировать как",
                            "export.as": "Экспортировать как",
                            "select.all": "Выделить всё",
                            "select.none": "Снять выделение",
                            delete: "Удалить",
                            "new.project": "Новый проект",
                            open: "Открыть",
                            save: "Сохранить",
                            "save.as": "Сохранить как",
                            "upload.media": "Загрузить медиафайл",
                            "create.page": "Создать страницу",
                            "new.page": "Новая страница",
                            "page.name": "Название страницы",
                            duplicate: "Дублировать",
                            cancel: "Отменить",
                            "copy.invite.link": "Скопировать ссылку приглашения",
                            "copy.readonly.link": "Скопировать ссылку только для чтения",
                            "create.multiplayer.project": "Создать многопользовательский проект",
                            "copy.multiplayer.project": "Скопировать в многопользовательский проект",
                            select: "Выделить",
                            eraser: "Ластик",
                            draw: "Рисовать",
                            arrow: "Стрелка",
                            text: "Текст",
                            sticky: "Заметка",
                            rectangle: "Прямоугольник",
                            ellipse: "Эллипс",
                            triangle: "Треугольник",
                            line: "Линия",
                            rotate: "Повернуть",
                            "lock.aspect.ratio": "Заблокировать соотношение сторон",
                            "unlock.aspect.ratio": "Разблокировать соотношение сторон",
                            group: "Сгруппировать",
                            ungroup: "Разгруппировать",
                            "move.to.back": "Переместить назад",
                            "move.backward": "Переместить на задний план",
                            "move.forward": "Переместить вперёд",
                            "move.to.front": "Переместить на передний план",
                            "reset.angle": "Сбросить угол",
                            lock: "Блокировать",
                            unlock: "Разблокировать",
                            "align.distribute": "Выровнять / распределить",
                            "move.to.page": "Переместить на страницу",
                            "flip.horizontal": "Перевернуть горизонтально",
                            "flip.vertical": "Перевернуть вертикально",
                            move: "Переместить",
                            "to.front": "На передний план",
                            forward: "Вперед",
                            backward: "На задний план",
                            back: "Назад",
                            language: "Язык",
                            "translation.link": "Подробнее",
                            "dock.position": "Расположение панели инструментов",
                            bottom: "Снизу",
                            left: "Слева",
                            right: "Справа",
                            top: "Сверху",
                            page: "Страница",
                            "keyboard.shortcuts": "Сочетания клавиш",
                            search: "Поиск",
                            loading: "Загрузка",
                            "export.background": "Экспорт фона",
                            transparent: "Прозрачный",
                            auto: "Авто",
                            light: "Светлый",
                            dark: "Тёмный",
                            image: "Изображение",
                            "align.left": "Выровнять по левому краю",
                            "align.center.x": "Выровнять по центру горизонтально",
                            "align.right": "Выровнять по правому краю",
                            "align.top": "Выровнять по верхнему краю",
                            "align.center.y": "Выровнять по центру вертикально",
                            "align.bottom": "Выровнять по нижнему краю",
                            "distribute.x": "Распределить горизонтально",
                            "distribute.y": "Распределить вертикально",
                            "stretch.x": "Растянуть горизонтально",
                            "stretch.y": "Растянуть вертикально",
                            share: "Поделиться",
                            "copy.current.page.link": "Скопировать ссылку на текущую страницу",
                            "copy.project.link": "Скопировать ссылку на проект",
                            "data.too.big.encoded": "Данные слишком велики, чтобы закодировать их в ссылке. Не включайте изображение или видео!",
                            "dialog.save.firsttime": "Сохранить текущий проект?",
                            "dialog.save.again": "Сохранить изменения в текущем проекте?",
                            "dialog.cancel": "Отменить",
                            "dialog.no": "Нет",
                            "dialog.yes": "Да",
                            "enter.file.name": "Введите имя файла",
                        },
                    },
                    {
                        locale: "sv",
                        label: "Svenska",
                        messages: {
                            "style.menu.color": "F\xe4rg",
                            "style.menu.fill": "Ifylld",
                            "style.menu.dash": "Streck",
                            "style.menu.size": "Storlek",
                            "style.menu.keep.open": "H\xe5ll stilmenyn \xf6ppen",
                            "style.menu.font": "Typsnitt",
                            "style.menu.align": "Justera",
                            styles: "Utseende",
                            "zoom.in": "Zooma in",
                            "zoom.out": "Zooma ut",
                            to: "Till",
                            "menu.tools": "Verktyg",
                            "menu.transform": "Transform",
                            "menu.file": "Arkiv",
                            "menu.edit": "Redigera",
                            "menu.view": "Inneh\xe5ll",
                            "menu.preferences": "Inst\xe4llningar",
                            "menu.sign.in": "Logga in",
                            "menu.sign.out": "Logga ut",
                            "become.a.sponsor": "Bli en sponsor",
                            "zoom.to.content": "Anpassa zoom till inneh\xe5ll",
                            "zoom.to.selection": "Anpassa zoom till urval",
                            "zoom.to.fit": "Anpassa zoom till sk\xe4rm",
                            "zoom.to": "Zooma till",
                            "preferences.dark.mode": "M\xf6rkt l\xe4ge",
                            "preferences.focus.mode": "Fokusl\xe4ge",
                            "preferences.debug.mode": "Debugl\xe4ge",
                            "preferences.show.grid": "Visa rutn\xe4t",
                            "preferences.use.cad.selection": "V\xe4lj som i CAD-mjukvara",
                            "preferences.keep.stylemenu.open": "H\xe5ll stilmenyn \xf6ppen",
                            "preferences.always.show.snaps": "Visa alltid f\xe4stpunkter",
                            "preferences.rotate.handles": "Rotationshandtag",
                            "preferences.binding.handles": "Bindningshandtag",
                            "preferences.clone.handles": "Kloningshandtag",
                            undo: "\xc5ngra",
                            redo: "G\xf6r om",
                            cut: "Klipp ut",
                            copy: "Kopiera",
                            paste: "Klistra in",
                            "copy.as": "Kopiera som",
                            "export.as": "Exportera till",
                            "select.all": "V\xe4lj alla",
                            "select.none": "V\xe4lj ingen",
                            delete: "Radera",
                            "new.project": "Nytt projekt",
                            open: "\xd6ppna",
                            save: "Spara",
                            "save.as": "Spara som",
                            "upload.media": "Ladda upp media",
                            "create.page": "Skapa sida",
                            "new.page": "Ny sida",
                            "page.name": "Sidnamn",
                            duplicate: "Duplicera",
                            cancel: "Avbryt",
                            "copy.invite.link": "Kopiera l\xe4nk med redigeringsr\xe4ttigheter",
                            "copy.readonly.link": "Kopiera l\xe4nk med l\xe4sr\xe4ttigheter",
                            "create.multiplayer.project": "Skapa ett Multiplayer-projekt",
                            "copy.multiplayer.project": "Kopiera till Multiplayer-project",
                            select: "V\xe4lj",
                            eraser: "Radera",
                            draw: "Rita",
                            arrow: "Pil",
                            text: "Text",
                            sticky: "Klisterlapp",
                            rectangle: "Rektangel",
                            ellipse: "Ellips",
                            triangle: "Triangel",
                            line: "Linje",
                            rotate: "Rotera",
                            "lock.aspect.ratio": "L\xe5s storleksf\xf6rh\xe5llande",
                            "unlock.aspect.ratio": "L\xe5s upp storleksf\xf6rh\xe5llande",
                            group: "Gruppera",
                            ungroup: "Avgruppera",
                            "move.to.back": "Placera l\xe4ngst bak",
                            "move.backward": "Flytta bak\xe5t",
                            "move.forward": "Flytta fram\xe5t",
                            "move.to.front": "Placera l\xe4ngst fram",
                            "reset.angle": "\xc5terst\xe4ll vinkel",
                            lock: "L\xe5s",
                            unlock: "L\xe5s upp",
                            "align.distribute": "Justera / Placera",
                            "move.to.page": "Flytta till sida",
                            "flip.horizontal": "V\xe4nd horisontellt",
                            "flip.vertical": "V\xe4nd vertikalt",
                            move: "Flytta",
                            "to.front": "Till l\xe4ngst fram",
                            forward: "Fram\xe5t",
                            backward: "Bak\xe5t",
                            back: "Till l\xe4ngst bak",
                            language: "Spr\xe5k",
                            "translation.link": "Mer information",
                            "dock.position": "Dockningsposition",
                            bottom: "Botten",
                            left: "V\xe4nster",
                            right: "H\xf6ger",
                            top: "Topp",
                            page: "Sida",
                            "keyboard.shortcuts": "Tangentbordsgenv\xe4gar",
                            search: "S\xf6k",
                            loading: "Laddar{dots}",
                            "export.background": "Exportbakgrund",
                            transparent: "Transparent",
                            auto: "Auto",
                            light: "Ljus",
                            dark: "M\xf6rk",
                            github: "Github",
                            twitter: "Twitter",
                            discord: "Discord",
                            image: "Bild",
                        },
                    },
                    {
                        locale: "tr",
                        label: "T\xfcrk\xe7e",
                        messages: {
                            "style.menu.color": "Renk",
                            "style.menu.fill": "Doldur",
                            "style.menu.dash": "\xc7izgi",
                            "style.menu.size": "Boyut",
                            "style.menu.keep.open": "A\xe7ık Tut",
                            "style.menu.font": "Yazı Tipi",
                            "style.menu.align": "Hizala",
                            styles: "Stiller",
                            "zoom.in": "Yakınlaştır",
                            "zoom.out": "Uzaklaştır",
                            to: "",
                            "menu.file": "Dosya",
                            "menu.edit": "D\xfczenle",
                            "menu.view": "G\xf6r\xfcnt\xfc",
                            "menu.preferences": "Tercihler",
                            "menu.sign.in": "Giriş Yap",
                            "menu.sign.out": "Oturumu Kapat",
                            "become.a.sponsor": "Sponsor Ol",
                            "zoom.to.selection": "Se\xe7ime Yakınlaştır",
                            "zoom.to.fit": "Sığdırmak i\xe7in Yakınlaştır",
                            "zoom.to": "Yakınlaştır",
                            "preferences.dark.mode": "Karanlık Mod",
                            "preferences.focus.mode": "Odak Modu",
                            "preferences.debug.mode": "Debug Modu",
                            "preferences.show.grid": "Izgarayı G\xf6ster",
                            "preferences.use.cad.selection": "CAD Se\xe7imi Kullan",
                            "preferences.keep.stylemenu.open": "Stil Men\xfcs\xfcn\xfc A\xe7ık Tut",
                            "preferences.always.show.snaps": "Hiza \xc7izgilerini Hep G\xf6ster",
                            "preferences.rotate.handles": "Rotasyon Kontrolc\xfcleri",
                            "preferences.binding.handles": "Bağlama Kontrolc\xfcleri",
                            "preferences.clone.handles": "Klon Kontrolc\xfcleri",
                            undo: "Geri Al",
                            redo: "Yinele",
                            cut: "Kes",
                            copy: "Kopyala",
                            paste: "Yapıştır",
                            "copy.as": "Olarak Kopyala",
                            "export.as": "Olarak Dışarı Aktar",
                            "select.all": "Hepsini Se\xe7",
                            "select.none": "Hi\xe7birini Se\xe7me",
                            delete: "Sil",
                            "new.project": "Yeni Proje",
                            open: "A\xe7",
                            save: "Kaydet",
                            "save.as": "Farklı Kaydet",
                            "upload.media": "Medya Y\xfckle",
                            "create.page": "Sayfa Oluştur",
                            "new.page": "Yeni Sayfa",
                            "page.name": "Sayfa İsmi",
                            duplicate: "Kopya Oluştur",
                            cancel: "İptal",
                            "copy.invite.link": "Davet Linkini Kopyala",
                            "create.multiplayer.project": "\xc7ok Oyunculu Proje Oluştur",
                            "copy.multiplayer.project": "\xc7ok Oyunculu Projeye Kopyala",
                            select: "Se\xe7",
                            eraser: "Silgi",
                            draw: "\xc7izim",
                            arrow: "Ok",
                            text: "Yazı",
                            sticky: "Yapışkan",
                            rectangle: "Dikd\xf6rtgen",
                            ellipse: "Elips",
                            triangle: "\xdc\xe7gen",
                            line: "\xc7izgi",
                            rotate: "D\xf6nd\xfcr",
                            "lock.aspect.ratio": "En Boy Oranını Kilitle",
                            "unlock.aspect.ratio": "En Boy Oranı Kilidini A\xe7",
                            group: "Grupla",
                            ungroup: "Gruplamayı Kaldır",
                            "move.to.back": "Arkaya Taşı",
                            "move.backward": "En Arkaya Taşı",
                            "move.forward": "En \xd6ne Taşı",
                            "move.to.front": "\xd6ne Taşı",
                            "reset.angle": "A\xe7ıyı Sıfırla",
                            lock: "Kilitle",
                            unlock: "Kilidini A\xe7",
                            "move.to.page": "Sayfaya Taşı",
                            "flip.horizontal": "Yatay \xc7evir",
                            "flip.vertical": "Dikey \xc7evir",
                            move: "Taşı",
                            "to.front": "\xd6ne",
                            forward: "En \xd6ne",
                            backward: "En Arkaya",
                            back: "Arkaya",
                            language: "Dil",
                        },
                    },
                    {
                        locale: "uk",
                        label: "Ukrainian",
                        messages: {
                            "style.menu.color": "Колір",
                            "style.menu.fill": "Заповнювати",
                            "style.menu.dash": "Штрих",
                            "style.menu.size": "Розмір",
                            "style.menu.keep.open": "Тримати відкритим",
                            "style.menu.font": "Шрифт",
                            "style.menu.align": "Вирівняти",
                            styles: "Стиль",
                            "zoom.in": "Збільшити",
                            "zoom.out": "Зменшити",
                            to: "до",
                            "menu.file": "Файл",
                            "menu.edit": "Редагування",
                            "menu.view": "Вигляд",
                            "menu.preferences": "Налаштування",
                            "menu.sign.in": "Увійти",
                            "menu.sign.out": "Вийти",
                            "become.a.sponsor": "Стати спонсором",
                            "zoom.to.selection": "Наблизити до виділення",
                            "zoom.to.fit": "Збільшити за розміром екрану",
                            "zoom.to": "Наблизити до",
                            "preferences.dark.mode": "Темна тема",
                            "preferences.focus.mode": "Мінімалістичний режим",
                            "preferences.debug.mode": "Режим налагодження",
                            "preferences.show.grid": "Показати сітку",
                            "preferences.use.cad.selection": "Використовувати CAD виділення",
                            "preferences.keep.stylemenu.open": "Тримати меню стилів відкритим",
                            "preferences.always.show.snaps": "Завжди показувати прив'язки",
                            "preferences.rotate.handles": "Ручки обертання",
                            "preferences.binding.handles": "Ручки прив'язки",
                            "preferences.clone.handles": "Ручки клонування",
                            undo: "Скасувати",
                            redo: "Повторити",
                            cut: "Вирізати",
                            copy: "Скопіювати",
                            paste: "Вставити",
                            "copy.as": "Скопіювати як",
                            "export.as": "Експортувати як",
                            "select.all": "Обрати все",
                            "select.none": "Зняти виділення",
                            delete: "Видалити",
                            "new.project": "Новий проект",
                            open: "Відкрити",
                            save: "Зберегти",
                            "save.as": "Зберегти як",
                            "upload.media": "Завантажити медіа",
                            "create.page": "Створити сторінку",
                            "new.page": "Нова сторінка",
                            "page.name": "Назва сторінки",
                            duplicate: "Дублювати",
                            cancel: "Скасувати",
                            "copy.invite.link": "Скопіювати посилання на запрошення",
                            "create.multiplayer.project": "Створити багатокористувацький проект",
                            "copy.multiplayer.project": "Скопіювати в багатокористувацький проект",
                            select: "Вибирати",
                            eraser: "Ластик",
                            draw: "Малювати",
                            arrow: "Стрілка",
                            text: "Текст",
                            sticky: "Нотатка",
                            rectangle: "Прямокутник",
                            ellipse: "Еліпс",
                            triangle: "Трикутник",
                            line: " Лінія",
                            rotate: "Повернути",
                            "lock.aspect.ratio": "Заблокувати співвідношення сторін",
                            "unlock.aspect.ratio": " Розблокувати співвідношення сторін",
                            group: "Згрупувати",
                            ungroup: " Розгрупувати",
                            "move.to.back": "Перемістити назад",
                            "move.backward": "Перемістити на задній план",
                            "move.forward": "Перемістити вперед",
                            "move.to.front": "Перемістити на передній план",
                            "reset.angle": "Скидання кута",
                            lock: "Блокування",
                            unlock: " Розблокування",
                            "move.to.page": "Перейти на сторінку",
                            "flip.horizontal": "Перевернути горизонтально",
                            "flip.vertical": "Перевернути вертикально",
                            move: "Перемістити",
                            "to.front": "На передній план",
                            forward: " Вперед",
                            backward: "На задній план",
                            back: "Назад",
                            language: "Мова",
                        },
                    },
                    {
                        locale: "zh-ch",
                        label: "简体中文",
                        messages: {
                            "style.menu.color": "颜色",
                            "style.menu.fill": "填充",
                            "style.menu.dash": "边框",
                            "style.menu.size": "尺寸",
                            "style.menu.keep.open": "保持常开",
                            "style.menu.font": "字体",
                            "style.menu.align": "对齐",
                            styles: "样式",
                            "zoom.in": "放大",
                            "zoom.out": "缩小",
                            to: "缩放至",
                            "menu.tools": "工具",
                            "menu.transform": "转换",
                            "menu.file": "文件",
                            "menu.edit": "编辑",
                            "menu.view": "视图",
                            "menu.preferences": "偏好",
                            "menu.sign.in": "登录",
                            "menu.sign.out": "登出",
                            search: "搜索",
                            "become.a.sponsor": "成为赞助者",
                            "zoom.to.selection": "缩放选中",
                            "zoom.to.fit": "自适应缩放",
                            "zoom.to": "缩放至",
                            "zoom.to.content": "缩放至内容",
                            "preferences.dark.mode": "暗黑模式",
                            "preferences.focus.mode": "专注模式",
                            "preferences.debug.mode": "调试模式",
                            "preferences.show.grid": "显示网格",
                            "preferences.use.cad.selection": "使用 CAD 选择",
                            "preferences.keep.stylemenu.open": "保持样式菜单常开",
                            "preferences.always.show.snaps": "总是展示对齐线",
                            "preferences.rotate.handles": "旋转手柄",
                            "preferences.binding.handles": "捆绑手柄",
                            "preferences.clone.handles": "克隆手柄",
                            undo: "撤销",
                            redo: "重做",
                            cut: "剪切",
                            copy: "复制",
                            paste: "粘贴",
                            "copy.as": "复制为",
                            "export.as": "导出为",
                            "select.all": "选中全部",
                            "select.none": "取消选中",
                            delete: "删除",
                            "new.project": "新项目",
                            open: "打开",
                            save: "保存",
                            "save.as": "保存为",
                            "upload.media": "上传媒体文件",
                            "create.page": "创建页面",
                            "new.page": "新页面",
                            "page.name": "页面名称",
                            duplicate: "复制",
                            cancel: "取消",
                            "copy.invite.link": "复制邀请链接",
                            "create.multiplayer.project": "创建多人项目",
                            "copy.multiplayer.project": "复制到多人项目",
                            select: "选择",
                            eraser: "橡皮",
                            draw: "画笔",
                            arrow: "箭头",
                            text: "文本",
                            sticky: "便利贴",
                            rectangle: "矩形",
                            ellipse: "椭圆形",
                            triangle: "三角形",
                            line: "直线",
                            rotate: "旋转",
                            "lock.aspect.ratio": "锁定宽高比",
                            "unlock.aspect.ratio": "解锁宽高比",
                            group: "分组",
                            ungroup: "取消分组",
                            "move.to.back": "置底",
                            "move.backward": "下移一层",
                            "move.forward": "上移一层",
                            "move.to.front": "置顶",
                            "reset.angle": "重置旋转角度",
                            lock: "锁定",
                            unlock: "解锁",
                            "move.to.page": "移动到页面",
                            "flip.horizontal": "水平翻转",
                            "flip.vertical": "垂直翻转",
                            move: "移动",
                            "to.front": "置顶",
                            forward: "上一层",
                            backward: "下一层",
                            back: "置底",
                            language: "语言",
                            "keyboard.shortcuts": "键盘快捷键",
                            "translation.link": "了解更多",
                            page: "页面",
                            "dock.position": "锚点位置",
                            bottom: "下面",
                            left: "左面",
                            right: "右面",
                            top: "上面",
                            "export.background": "导出背景色",
                            transparent: "透明",
                            auto: "自动",
                            light: "明亮",
                            dark: "暗黑",
                            "copy.readonly.link": "复制只读链接",
                            image: "图片",
                            "align.distribute": "对齐 / 分散",
                            "dialog.save.firsttime": "您是否想保存当前的项目？",
                            "dialog.save.again": "您是否想保存对当前项目的更改？",
                            "dialog.cancel": "取消",
                            "dialog.no": "否",
                            "dialog.yes": "是",
                        },
                    },
                    {
                        locale: "zh-tw",
                        label: "繁體中文 (台灣)",
                        messages: {
                            "style.menu.color": "顏色",
                            "style.menu.fill": "填充",
                            "style.menu.dash": "虛線",
                            "style.menu.size": "大小",
                            "style.menu.keep.open": "保持開啟",
                            "style.menu.font": "字型",
                            "style.menu.align": "對齊",
                            styles: "樣式",
                            "zoom.in": "放大",
                            "zoom.out": "縮小",
                            to: "至",
                            "menu.file": "檔案",
                            "menu.edit": "編輯",
                            "menu.view": "檢視",
                            "menu.preferences": "選項",
                            "menu.sign.in": "登入",
                            "menu.sign.out": "登出",
                            "become.a.sponsor": "成為贊助者",
                            "zoom.to.selection": "縮放至選取範圍",
                            "zoom.to.fit": "縮放至適當大小",
                            "zoom.to": "縮放至",
                            "preferences.dark.mode": "深色模式",
                            "preferences.focus.mode": "專注模式",
                            "preferences.debug.mode": "除錯模式",
                            "preferences.show.grid": "顯示網格",
                            "preferences.use.cad.selection": "使用 CAD 選取",
                            "preferences.keep.stylemenu.open": "樣式選單保持開啟",
                            "preferences.always.show.snaps": "永遠顯示對齊線",
                            "preferences.rotate.handles": "旋轉控點",
                            "preferences.binding.handles": "綁定控點",
                            "preferences.clone.handles": "複製控點",
                            undo: "復原",
                            redo: "取消復原",
                            cut: "剪下",
                            copy: "複製",
                            paste: "貼上",
                            "copy.as": "複製成",
                            "export.as": "匯出成",
                            "select.all": "全選",
                            "select.none": "取消選取",
                            delete: "刪除",
                            "new.project": "新專案",
                            open: "開啟",
                            save: "儲存",
                            "save.as": "另存為",
                            "upload.media": "上傳媒體",
                            "create.page": "建立頁面",
                            "new.page": "新頁面",
                            "page.name": "頁面名稱",
                            duplicate: "複製",
                            cancel: "取消",
                            "copy.invite.link": "複製邀請連結",
                            "copy.readonly.link": "複製唯讀連結",
                            "create.multiplayer.project": "建立多人專案",
                            "copy.multiplayer.project": "複製至多人專案",
                            select: "選取",
                            eraser: "橡皮擦",
                            draw: "手繪",
                            arrow: "箭頭",
                            text: "文字",
                            sticky: "便利貼",
                            rectangle: "長方形",
                            ellipse: "橢圓形",
                            triangle: "三角形",
                            line: "直線",
                            rotate: "旋轉",
                            "lock.aspect.ratio": "鎖定長寬比",
                            "unlock.aspect.ratio": "解鎖長寬比",
                            group: "組成群組",
                            ungroup: "取消群組",
                            "move.to.back": "移到最下層",
                            "move.backward": "下移一層",
                            "move.forward": "上移一層",
                            "move.to.front": "移到最上層",
                            "reset.angle": "重設角度",
                            lock: "鎖定",
                            unlock: "解鎖",
                            "move.to.page": "移至頁面",
                            "flip.horizontal": "水平翻轉",
                            "flip.vertical": "垂直翻轉",
                            move: "移動",
                            "to.front": "到最上層",
                            forward: "到上一層",
                            backward: "到下一層",
                            back: "到最下層",
                            language: "語言",
                            "translation.link": "了解詳情",
                            "dock.position": "工具列位置",
                            bottom: "下方",
                            left: "左側",
                            right: "右側",
                            top: "上方",
                            page: "頁面",
                        },
                    },
                ];
            eP.sort((e, t) => (e.locale < t.locale ? -1 : 1));
            var eC = P.createContext({}),
                eE = () => {
                    let e = P.useContext(eC);
                    if (!e) throw Error("useCtx must be inside a Provider with a value");
                    return e;
                },
                { styled: ez, createTheme: eM } = (0, D.Th)({
                    themeMap: Y({}, D.E6),
                    theme: {
                        colors: {
                            bounds: "rgba(65, 132, 244, 1.000)",
                            boundsBg: "rgba(65, 132, 244, 0.05)",
                            hover: "#ececec",
                            overlay: "rgba(0, 0, 0, 0.15)",
                            overlayContrast: "rgba(255, 255, 255, 0.15)",
                            panel: "#fefefe",
                            panelContrast: "#ffffff",
                            selected: "rgba(66, 133, 244, 1.000)",
                            selectedContrast: "#fefefe",
                            text: "#333333",
                            tooltip: "#1d1d1d",
                            tooltipContrast: "#ffffff",
                            warn: "rgba(255, 100, 100, 1)",
                            canvas: "rgb(248, 249, 250)",
                        },
                        shadows: {
                            2: "0px 1px 1px rgba(0, 0, 0, 0.14)",
                            3: "0px 2px 3px rgba(0, 0, 0, 0.14)",
                            4: "0px 4px 5px -1px rgba(0, 0, 0, 0.14)",
                            8: "0px 12px 17px rgba(0, 0, 0, 0.14)",
                            12: "0px 12px 17px rgba(0, 0, 0, 0.14)",
                            24: "0px 24px 38px rgba(0, 0, 0, 0.14)",
                            key: "1px 1px rgba(0,0,0,1)",
                            panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05),
        0px 0px 16px -8px rgba(0, 0, 0, 0.05),
        0px 0px 16px -12px rgba(0, 0, 0, 0.12),
        0px 0px 2px 0px rgba(0, 0, 0, 0.08)`,
                        },
                        space: { 0: "2px", 1: "3px", 2: "4px", 3: "8px", 4: "12px", 5: "16px", 6: "32px", 7: "48px" },
                        fontSizes: { 0: "10px", 1: "12px", 2: "13px", 3: "16px", 4: "18px" },
                        fonts: { ui: '"Recursive", system-ui, sans-serif', body: '"Recursive", system-ui, sans-serif', mono: '"Recursive Mono", monospace' },
                        fontWeights: {},
                        lineHeights: {},
                        letterSpacings: {},
                        sizes: {},
                        borderWidths: { 0: "$1" },
                        borderStyles: {},
                        radii: { 0: "2px", 1: "4px", 2: "8px", 3: "12px", 4: "16px" },
                        zIndices: {},
                        transitions: {},
                    },
                    media: { micro: "(max-width: 370px)", sm: "(min-width: 640px)", md: "(min-width: 768px)", lg: "(min-width: 1024px)" },
                    utils: { zStrokeWidth: () => (e) => (Array.isArray(e) ? { strokeWidth: `calc(${e[0]}px / var(--camera-zoom))` } : { strokeWidth: `calc(${e}px / var(--camera-zoom))` }) },
                }),
                eD = eM({
                    colors: {
                        bounds: "rgba(38, 150, 255, 1.000)",
                        boundsBg: "rgba(38, 150, 255, 0.05)",
                        hover: "#444A50",
                        overlay: "rgba(0, 0, 0, 0.15)",
                        overlayContrast: "rgba(255, 255, 255, 0.15)",
                        panel: "#363D44",
                        panelContrast: "#49555f",
                        selected: "rgba(38, 150, 255, 1.000)",
                        selectedContrast: "#fefefe",
                        text: "#f8f9fa",
                        tooltip: "#1d1d1d",
                        tooltipContrast: "#ffffff",
                        canvas: "#212529",
                    },
                    shadows: {
                        2: "0px 1px 1px rgba(0, 0, 0, 0.24)",
                        3: "0px 2px 3px rgba(0, 0, 0, 0.24)",
                        4: "0px 4px 5px -1px rgba(0, 0, 0, 0.24)",
                        8: "0px 12px 17px rgba(0, 0, 0, 0.24)",
                        12: "0px 12px 17px rgba(0, 0, 0, 0.24)",
                        24: "0px 24px 38px rgba(0, 0, 0, 0.24)",
                        panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05),
      0px 0px 16px -8px rgba(0, 0, 0, 0.09),
      0px 0px 16px -12px rgba(0, 0, 0, 0.2)`,
                    },
                }),
                ej = (e) => e.appState.isLoading;
            function eA() {
                let e = ew().useStore(ej);
                return P.createElement(eT, { hidden: !e }, P.createElement(z.Z, { id: "loading", values: { dots: "..." } }));
            }
            var eT = ez("div", {
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    padding: "8px 16px",
                    fontFamily: "var(--fonts-ui)",
                    fontSize: "var(--fontSizes-1)",
                    boxShadow: "var(--shadows-panel)",
                    backgroundColor: "white",
                    zIndex: 200,
                    pointerEvents: "none",
                    "& > div > *": { pointerEvents: "all" },
                    variants: { transform: { hidden: { transform: "translate(-50%, 100%)" }, visible: { transform: "translate(-50%, 0%)" } } },
                }),
                eO = "-0.03em",
                eF = [0.5, 0.5],
                eL = ".tldr",
                eR = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
                    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
                    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    easeInExpo: (e) => (e <= 0 ? 0 : Math.pow(2, 10 * e - 10)),
                    easeOutExpo: (e) => (e >= 1 ? 1 : 1 - Math.pow(2, -10 * e)),
                    easeInOutExpo: (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2),
                },
                eH = ["#EC5E41", "#F2555A", "#F04F88", "#E34BA9", "#BD54C6", "#9D5BD2", "#7B66DC", "#02B1CC", "#11B3A3", "#39B178", "#55B467", "#FF802B"],
                eQ = "undefined" != typeof Window && /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                eU = "undefined" != typeof Window && /linux/i.test(navigator.userAgent),
                eZ = [".png", ".svg", ".jpg", ".jpeg", ".gif"],
                eK = eQ ? [] : [".mp4", ".webm"],
                e_ = {};
            function eN(e, t) {
                let i = x.cQ.getFromCache(t, e, () => {
                    let [t, i] = e.size;
                    return { minX: 0, maxX: t, minY: 0, maxY: i, width: t, height: i };
                });
                return x.cQ.translateBounds(i, e.point);
            }
            X(e_, {
                LabelMask: () => e1,
                PolygonUtils: () => e3,
                TextAreaUtils: () => tb,
                TextLabel: () => tx,
                clearPrevSize: () => eV,
                defaultStyle: () => tm,
                defaultTextStyle: () => tf,
                fills: () => tt,
                getBoundsRectangle: () => eN,
                getFontFace: () => td,
                getFontSize: () => tl,
                getFontStyle: () => tp,
                getOffsetPolygon: () => e4,
                getShapeStyle: () => tg,
                getStickyFontSize: () => th,
                getStickyFontStyle: () => tc,
                getStickyShapeStyle: () => tu,
                getStrokeWidth: () => tr,
                getTextAlign: () => eG,
                getTextLabelSize: () => eq,
                getTextSvgElement: () => e0,
                stickyFills: () => e7,
                strokes: () => te,
                transformRectangle: () => tM,
                transformSingleRectangle: () => tD,
            });
            var eW = { start: "left", middle: "center", end: "right", justify: "justify" };
            function eG(e = "start") {
                return eW[e];
            }
            "undefined" != typeof window &&
                (null == (is = document.getElementById("__textLabelMeasure")) || is.remove(),
                ((k = document.createElement("pre")).id = "__textLabelMeasure"),
                Object.assign(k.style, {
                    whiteSpace: "pre",
                    width: "auto",
                    border: "1px solid transparent",
                    padding: "4px",
                    margin: "0px",
                    letterSpacing: eO,
                    opacity: "0",
                    position: "absolute",
                    top: "-500px",
                    left: "0px",
                    zIndex: "9999",
                    pointerEvents: "none",
                    userSelect: "none",
                    alignmentBaseline: "mathematical",
                    dominantBaseline: "mathematical",
                    lineHeight: 1.3,
                }),
                (k.tabIndex = -1),
                document.body.appendChild(k),
                (ia = k));
            var eY = "",
                e$ = "",
                eX = [0, 0];
            function eV() {
                eY = "";
            }
            function eq(e, t) {
                return e
                    ? ia
                        ? (ia.parent || document.body.appendChild(ia), e === eY && t === e$)
                            ? eX
                            : ((eY = e), (e$ = t), (ia.textContent = e), (ia.style.font = t), (eX = [ia.offsetWidth || 1, ia.offsetHeight || 1]))
                        : [10, 10]
                    : [16, 32];
            }
            var eJ = RegExp(`${[32, 160, 4961, 65792, 65793, 4153, 4241].map((e) => String.fromCodePoint(e)).join("|")}`);
            function e0(e, t, i, s, n, a = !1) {
                let o = "normal",
                    r = (function (e) {
                        let t = document.createElement("div");
                        t.style.setProperty("position", "absolute"),
                            t.style.setProperty("top", "-9999px"),
                            t.style.setProperty("left", "-9999px"),
                            t.style.setProperty("width", e.width + "px"),
                            t.style.setProperty("height", "min-content"),
                            t.style.setProperty("font-size", e.fontSize + "px"),
                            t.style.setProperty("font-family", e.fontFamily),
                            t.style.setProperty("font-weight", e.fontWeight),
                            t.style.setProperty("line-height", e.lineHeight * e.fontSize + "px"),
                            t.style.setProperty("letter-spacing", e.letterSpacing),
                            t.style.setProperty("text-align", e.textAlign),
                            document.body.appendChild(t);
                        let i = e.text
                            .split(eJ)
                            .flatMap((e) =>
                                e.replaceAll(
                                    `
`,
                                    `
`
                                )
                            )
                            .join(" ")
                            .split(" ");
                        t.innerText = i[0];
                        let s = t.offsetHeight,
                            n = [i[0]],
                            a = [n];
                        for (let e = 1; e < i.length; e++) {
                            let o = i[e];
                            t.innerText += " " + o;
                            let r = t.offsetHeight;
                            r > s && ((s = r), (n = []), a.push(n)), n.push(o);
                        }
                        return t.remove(), a.map((e) => e.join(" "));
                    })({ text: e, wrap: a, width: n, fontSize: t, fontWeight: o, fontFamily: i, fontStyle: "normal", textAlign: "left", letterSpacing: eO, lineHeight: 1 }),
                    l = document.createElementNS("http://www.w3.org/2000/svg", "text");
                l.setAttribute("font-size", t + "px"),
                    l.setAttribute("font-family", i),
                    l.setAttribute("font-weight", o),
                    l.setAttribute("line-height", 1.3 * t + "px"),
                    l.setAttribute("letter-spacing", eO),
                    l.setAttribute("text-align", null != s ? s : "left"),
                    l.setAttribute("dominant-baseline", "mathematical"),
                    l.setAttribute("alignment-baseline", "mathematical");
                let d = r.map((e, i) => {
                    let s = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                    return (
                        (s.textContent =
                            e +
                            `
`),
                        s.setAttribute("y", 1.3 * t * (i + 0.5) + "px"),
                        l.appendChild(s),
                        s
                    );
                });
                switch (s) {
                    case "middle":
                        l.setAttribute("text-align", "center"), l.setAttribute("text-anchor", "middle"), d.forEach((e) => e.setAttribute("x", 4 + n / 2 + ""));
                        break;
                    case "end":
                        l.setAttribute("text-align", "right"), l.setAttribute("text-anchor", "end"), d.forEach((e) => e.setAttribute("x", 4 + n + ""));
                        break;
                    default:
                        l.setAttribute("text-align", "left"), l.setAttribute("text-anchor", "start"), d.forEach((e) => e.setAttribute("x", "4"));
                }
                return l;
            }
            function e1({ id: e, bounds: t, labelSize: i, offset: s, scale: n = 1 }) {
                return P.createElement(
                    "defs",
                    null,
                    P.createElement(
                        "mask",
                        { id: e + "_clip" },
                        P.createElement("rect", { x: -100, y: -100, width: t.width + 200, height: t.height + 200, fill: "white" }),
                        P.createElement("rect", {
                            x: t.width / 2 - (i[0] / 2) * n + ((null == s ? void 0 : s[0]) || 0),
                            y: t.height / 2 - (i[1] / 2) * n + ((null == s ? void 0 : s[1]) || 0),
                            width: i[0] * n,
                            height: i[1] * n,
                            rx: 4 * n,
                            ry: 4 * n,
                            fill: "black",
                            opacity: Math.max(n, 0.8),
                        })
                    )
                );
            }
            var e2 = 2 * Math.PI,
                e5 = class {
                    static inwardEdgeNormal(e) {
                        let t = j.Z.sub(e[1], e[0]),
                            i = j.Z.len2(t);
                        return [-t[0] / i, t[1] / i];
                    }
                    static outwardEdgeNormal(e) {
                        return j.Z.neg(e5.inwardEdgeNormal(e));
                    }
                    static isReflexVertex(e, t) {
                        let i = e.length,
                            s = e[(t + i - 1) % i],
                            n = e[t],
                            a = e[(t + 1) % i];
                        return 0 > e5.leftSide(s, a, n);
                    }
                    static getEdges(e) {
                        return e.map((t, i) => [t, e[(i + 1) % e.length]]);
                    }
                    static edgesIntersection([e, t], [i, s]) {
                        let n = (s[1] - i[1]) * (t[0] - e[0]) - (s[0] - i[0]) * (t[1] - e[1]);
                        if (0 == n) return null;
                        let a = ((s[0] - i[0]) * (e[1] - i[1]) - (s[1] - i[1]) * (e[0] - i[0])) / n,
                            o = ((t[0] - e[0]) * (e[1] - i[1]) - (t[1] - e[1]) * (e[0] - i[0])) / n;
                        return a < 0 || o < 0 || a > 1 || o > 1 ? null : [e[0] + a * (t[0] - e[0]), e[1] + a * (t[1] - e[1])];
                    }
                    static appendArc(e, t, i, s, n, a = !1) {
                        let o = [...e],
                            r = Math.atan2(s[1] - t[1], s[0] - t[0]),
                            l = Math.atan2(n[1] - t[1], n[0] - t[0]);
                        r < 0 && (r += e2), l < 0 && (l += e2);
                        let d = r > l ? r - l : r + e2 - l,
                            h = (a ? -d : e2 - d) / 5;
                        o.push(s);
                        for (let e = 1; e < 5; ++e) {
                            let s = r + h * e;
                            o.push([t[0] + Math.cos(s) * i, t[1] + Math.sin(s) * i]);
                        }
                        return o.push(n), o;
                    }
                    static createOffsetEdge(e, t) {
                        return e.map((e) => j.Z.add(e, t));
                    }
                    static getOffsetPolygon(e, t = 0) {
                        let i = e5.getEdges(e),
                            s = i.map((e) => e5.createOffsetEdge(e, j.Z.mul(e5.outwardEdgeNormal(e), t))),
                            n = [];
                        for (let e = 0; e < s.length; e++) {
                            let a = s[e],
                                o = s[(e + s.length - 1) % s.length],
                                r = e5.edgesIntersection(o, a);
                            r ? n.push(r) : e5.appendArc(n, i[e][0], t, o[1], a[0], !1);
                        }
                        return n;
                    }
                    static createPaddingPolygon(e, t = 0) {
                        let i = e.map((e) => e5.createOffsetEdge(e, e5.inwardEdgeNormal(e))),
                            s = [];
                        for (let n = 0; n < i.length; n++) {
                            let a = i[n],
                                o = i[(n + i.length - 1) % i.length],
                                r = e5.edgesIntersection(o, a);
                            r ? s.push(r) : e5.appendArc(s, e[n][0], t, o[1], a[0], !0);
                        }
                        return s;
                    }
                },
                e3 = e5;
            function e4(e, t) {
                if (e.length < 3) throw Error("Polygon must have at least 3 points");
                let i = e.length;
                return e
                    .map((t, s) => [t, e[(s + 1) % i]])
                    .map(([e, i]) => {
                        let s = j.Z.mul(j.Z.per(j.Z.uni(j.Z.sub(i, e))), t);
                        return [j.Z.add(e, s), j.Z.add(i, s)];
                    })
                    .map((e, t, i) => {
                        let s = (0, A.VB)(e, i[(t + 1) % i.length]);
                        if (void 0 === s) throw Error("Expected an intersection");
                        return s;
                    });
            }
            V(e3, "leftSide", j.Z.isLeft);
            var e8 = "#fafafa",
                e6 = "#343d45",
                e9 = {
                    white: "#f0f1f3",
                    lightGray: "#c6cbd1",
                    gray: "#788492",
                    black: "#1d1d1d",
                    green: "#36b24d",
                    cyan: "#0e98ad",
                    blue: "#1c7ed6",
                    indigo: "#4263eb",
                    violet: "#7746f1",
                    red: "#ff2133",
                    orange: "#ff9433",
                    yellow: "#ffc936",
                },
                e7 = {
                    light: $(Y({}, Object.fromEntries(Object.entries(e9).map(([e, t]) => [e, x.cQ.lerpColor(t, e8, 0.45)]))), { white: "#ffffff", black: "#3d3d3d" }),
                    dark: $(Y({}, Object.fromEntries(Object.entries(e9).map(([e, t]) => [e, x.cQ.lerpColor(x.cQ.lerpColor(t, "#999999", 0.3), e6, 0.4)]))), { white: "#1d1d1d", black: "#bbbbbb" }),
                },
                te = { light: $(Y({}, e9), { white: "#1d1d1d" }), dark: $(Y({}, Object.fromEntries(Object.entries(e9).map(([e, t]) => [e, x.cQ.lerpColor(t, e6, 0.1)]))), { white: "#cecece", black: "#cecece" }) },
                tt = {
                    light: $(Y({}, Object.fromEntries(Object.entries(e9).map(([e, t]) => [e, x.cQ.lerpColor(t, e8, 0.82)]))), { white: "#fefefe" }),
                    dark: $(Y({}, Object.fromEntries(Object.entries(e9).map(([e, t]) => [e, x.cQ.lerpColor(t, e6, 0.82)]))), { white: "rgb(30,33,37)", black: "#1e1e1f" }),
                },
                ti = { small: 2, medium: 3.5, large: 5 },
                ts = { small: 28, medium: 48, large: 96, auto: "auto" },
                tn = { script: '"Caveat Brush"', sans: '"Source Sans Pro"', serif: '"Crimson Pro"', mono: '"Source Code Pro"' },
                ta = { script: 1, sans: 1, serif: 1, mono: 1 },
                to = { small: 24, medium: 36, large: 48, auto: "auto" };
            function tr(e) {
                return ti[e];
            }
            function tl(e, t = "script") {
                return ts[e] * ta[t];
            }
            function td(e = "script") {
                return tn[e];
            }
            function th(e) {
                return to[e];
            }
            function tp(e) {
                let t = tl(e.size, e.font),
                    i = td(e.font),
                    { scale: s = 1 } = e;
                return `${t * s}px/1.3 ${i}`;
            }
            function tc(e) {
                let t = to[e.size],
                    i = td(e.font),
                    { scale: s = 1 } = e;
                return `${t * s}px/1 ${i}`;
            }
            function tu(e, t = !1) {
                let { color: i } = e,
                    s = t ? "dark" : "light",
                    n = "white" === i || "black" === i ? "yellow" : i;
                return { fill: e7[s][n], stroke: te[s][n], color: t ? "#1d1d1d" : "#0d0d0d" };
            }
            function tg(e, t) {
                let { color: i, size: s, isFilled: n } = e,
                    a = ti[s],
                    o = t ? "dark" : "light";
                return { stroke: te[o][i], fill: n ? tt[o][i] : "none", strokeWidth: a };
            }
            var tm = { color: "black", size: "small", isFilled: !1, dash: "draw", scale: 1 },
                tf = $(Y({}, tm), { font: "script", textAlign: "middle" }),
                tb = class {
                    static insertTextFirefox(e, t) {
                        e.setRangeText(t, e.selectionStart || 0, e.selectionEnd || 0, "end"), e.dispatchEvent(new InputEvent("input", { data: t, inputType: "insertText", isComposing: !1 }));
                    }
                    static insert(e, t) {
                        let i = e.ownerDocument,
                            s = i.activeElement;
                        s !== e && e.focus(), i.execCommand("insertText", !1, t) || tb.insertTextFirefox(e, t), s === i.body ? e.blur() : s instanceof HTMLElement && s !== e && s.focus();
                    }
                    static set(e, t) {
                        e.select(), tb.insert(e, t);
                    }
                    static getSelection(e) {
                        let { selectionStart: t, selectionEnd: i } = e;
                        return e.value.slice(t || void 0, i || void 0);
                    }
                    static wrapSelection(e, t, i) {
                        let { selectionStart: s, selectionEnd: n } = e,
                            a = tb.getSelection(e);
                        tb.insert(e, t + a + (null != i ? i : t)), (e.selectionStart = (s || 0) + t.length), (e.selectionEnd = (n || 0) + t.length);
                    }
                    static replace(e, t, i) {
                        let s = 0;
                        e.value.replace(t, (...t) => {
                            let n = s + t[t.length - 2],
                                a = t[0].length;
                            (e.selectionStart = n), (e.selectionEnd = n + a);
                            let o = "string" == typeof i ? i : i(...t);
                            return tb.insert(e, o), (e.selectionStart = n), (s += o.length - a), o;
                        });
                    }
                    static findLineEnd(e, t) {
                        let i =
                            e.lastIndexOf(
                                `
`,
                                t - 1
                            ) + 1;
                        return "	" !== e.charAt(i) ? t : i + 1;
                    }
                    static indent(e) {
                        var t;
                        let { selectionStart: i, selectionEnd: s, value: n } = e,
                            a = n.slice(i, s),
                            o = null == (t = /\n/g.exec(a)) ? void 0 : t.length;
                        if (o && o > 0) {
                            let t =
                                    n.lastIndexOf(
                                        `
`,
                                        i - 1
                                    ) + 1,
                                a = e.value.slice(t, s - 1),
                                o = a.replace(/^|\n/g, "$&  "),
                                r = o.length - a.length;
                            e.setSelectionRange(t, s - 1), tb.insert(e, o), e.setSelectionRange(i + 1, s + r);
                        } else tb.insert(e, "  ");
                    }
                    static unindent(e) {
                        let { selectionStart: t, selectionEnd: i, value: s } = e,
                            n =
                                s.lastIndexOf(
                                    `
`,
                                    t - 1
                                ) + 1,
                            a = tb.findLineEnd(s, i),
                            o = e.value.slice(n, a),
                            r = o.replace(/(^|\n)(\t| {1,2})/g, "$1"),
                            l = o.length - r.length;
                        e.setSelectionRange(n, a), tb.insert(e, r);
                        let d = /\t| {1,2}/.exec(s.slice(n, t)),
                            h = d ? d[0].length : 0,
                            p = t - h;
                        e.setSelectionRange(t - h, Math.max(p, i - l));
                    }
                },
                tv = (e) => e.stopPropagation();
            function ty(e) {
                if (null === e) return e;
                if (e instanceof Date) return new Date(e.getTime());
                if ("object" == typeof e) {
                    if ("function" == typeof e[Symbol.iterator]) {
                        let t = [];
                        if (e.length > 0) for (let i of e) t.push(ty(i));
                        return t;
                    }
                    {
                        let t = Object.keys(e),
                            i = {};
                        if (t.length > 0) for (let s of t) i[s] = ty(e[s]);
                        return i;
                    }
                }
                return e;
            }
            function tS(e, t = 0, i = 0) {
                let [s, n] = e,
                    a = [
                        [s / 2, 0],
                        [s, n],
                        [0, n],
                    ];
                return t && (a = e4(a, t)), i && (a = a.map((e) => j.Z.rotWith(e, [s / 2, n / 2], i))), a;
            }
            function tI(e) {
                let [t, i] = e,
                    s = [
                        [t / 2, 0],
                        [t, i],
                        [0, i],
                    ];
                return [(s[0][0] + s[1][0] + s[2][0]) / 3, (s[0][1] + s[1][1] + s[2][1]) / 3];
            }
            function tk(e, t, i) {
                let { strokeWidth: s } = tg(i),
                    { points: n } = (function (e, t, i) {
                        let [s, n] = t,
                            a = x.cQ.rng(e),
                            o = Array.from([, , ,]).map(() => [a() * i * 0.75, a() * i * 0.75]),
                            r = [j.Z.add([s / 2, 0], o[0]), j.Z.add([s, n], o[1]), j.Z.add([0, n], o[2])],
                            l = Math.round(Math.abs(6 * a())),
                            d = x.cQ.rotateArray([j.Z.pointsBetween(r[0], r[1], 32), j.Z.pointsBetween(r[1], r[2], 32), j.Z.pointsBetween(r[2], r[0], 32)], l);
                        return { points: [...d.flat(), ...d[0]] };
                    })(e, t, s);
                return { points: n, options: { size: s, thinning: 0.65, streamline: 0.3, smoothing: 1, simulatePressure: !1, last: !0 } };
            }
            var tw = class {
                    static getShapeUtil(e) {
                        return iQ(e);
                    }
                    static getSelectedShapes(e, t) {
                        let i = tw.getPage(e, t);
                        return tw.getSelectedIds(e, t).map((e) => i.shapes[e]);
                    }
                    static screenToWorld(e, t) {
                        let i = tw.getPageState(e, e.appState.currentPageId).camera;
                        return j.B.sub(j.B.div(t, i.zoom), i.point);
                    }
                    static getCameraZoom(e) {
                        return x.cQ.clamp(e, 0.1, 5);
                    }
                    static getPage(e, t) {
                        return e.document.pages[t];
                    }
                    static getPageState(e, t) {
                        return e.document.pageStates[t];
                    }
                    static getSelectedIds(e, t) {
                        return tw.getPageState(e, t).selectedIds;
                    }
                    static getShapes(e, t) {
                        return Object.values(tw.getPage(e, t).shapes);
                    }
                    static getCamera(e, t) {
                        return tw.getPageState(e, t).camera;
                    }
                    static getShape(e, t, i) {
                        return tw.getPage(e, i).shapes[t];
                    }
                    static getCenter(e) {
                        return tw.getShapeUtil(e).getCenter(e);
                    }
                    static getBounds(e) {
                        return tw.getShapeUtil(e).getBounds(e);
                    }
                    static getRotatedBounds(e) {
                        return tw.getShapeUtil(e).getRotatedBounds(e);
                    }
                    static getSelectedBounds(e) {
                        return x.cQ.getCommonBounds(tw.getSelectedShapes(e, e.appState.currentPageId).map((e) => tw.getShapeUtil(e).getBounds(e)));
                    }
                    static getParentId(e, t, i) {
                        return tw.getShape(e, t, i).parentId;
                    }
                    static getDocumentBranch(e, t, i) {
                        let s = tw.getShape(e, t, i);
                        return void 0 === s.children ? [t] : [t, ...s.children.flatMap((t) => tw.getDocumentBranch(e, t, i))];
                    }
                    static getSelectedBranchSnapshot(e, t, i) {
                        let s = tw.getPage(e, t),
                            n = tw
                                .getSelectedIds(e, t)
                                .flatMap((i) => tw.getDocumentBranch(e, i, t).map((e) => s.shapes[e]))
                                .filter((e) => !e.isLocked)
                                .map(x.cQ.deepClone);
                        return void 0 !== i ? n.map((e) => Y({ id: e.id }, i(e))) : n;
                    }
                    static getSelectedShapeSnapshot(e, t, i) {
                        let s = tw
                            .getSelectedShapes(e, t)
                            .filter((e) => !e.isLocked)
                            .map(x.cQ.deepClone);
                        return void 0 !== i ? s.map((e) => Y({ id: e.id }, i(e))) : s;
                    }
                    static getAllEffectedShapeIds(e, t, i) {
                        let s = tw.getPage(e, i),
                            n = new Set(t);
                        return (
                            t.forEach((e) => {
                                let t = s.shapes[e];
                                (function e(t) {
                                    void 0 !== t.children &&
                                        t.children
                                            .filter((e) => !n.has(e))
                                            .forEach((t) => {
                                                n.add(t), e(s.shapes[t]);
                                            });
                                })(t),
                                    (function e(t) {
                                        let i = t.parentId;
                                        i !== s.id && (n.has(i) || (n.add(i), e(s.shapes[i])));
                                    })(t),
                                    n.forEach((e) => {
                                        Object.values(s.bindings)
                                            .filter((t) => t.fromId === e || t.toId === e)
                                            .forEach((t) => n.add(t.fromId === e ? t.toId : t.fromId));
                                    });
                            }),
                            Array.from(n.values())
                        );
                    }
                    static getLinkedShapeIds(e, t, i, s = !0) {
                        let n = tw.getSelectedIds(e, t),
                            a = tw.getPage(e, t),
                            o = new Set(n),
                            r = new Set(),
                            l = [...n],
                            d = new Set(
                                Object.values(a.shapes).filter((e) => {
                                    var t;
                                    return "arrow" === e.type && (e.handles.start.bindingId || (null == (t = e.handles) ? void 0 : t.end.bindingId));
                                })
                            );
                        for (; l.length; ) {
                            let e = l.pop();
                            if (!(e && d.size)) break;
                            r.has(e) ||
                                (r.add(e),
                                d.forEach((t) => {
                                    var n, r;
                                    let {
                                            handles: {
                                                start: { bindingId: h },
                                                end: { bindingId: p },
                                            },
                                        } = t,
                                        c = h ? a.bindings[h] : null,
                                        u = p ? a.bindings[p] : null;
                                    c && c.toId === e
                                        ? ("center" === i || ((null == (n = t.decorations) ? void 0 : n.start) && u ? "left" === i : "right" === i)) && (s && o.add(t.id), o.add(e), u && (o.add(u.toId), l.push(u.toId)))
                                        : u && u.toId === e && ("center" === i || ((null == (r = t.decorations) ? void 0 : r.end) && c ? "left" === i : "right" === i)) && (s && o.add(t.id), o.add(e), c && (o.add(c.toId), l.push(c.toId))),
                                        (!c || o.has(c.toId)) && (!u || o.has(u.toId)) && d.delete(t);
                                }));
                        }
                        return Array.from(o.values());
                    }
                    static getChildIndexAbove(e, t, i) {
                        let s = e.document.pages[i],
                            n = s.shapes[t],
                            a;
                        if (n.parentId === s.id)
                            a = Object.values(s.shapes)
                                .filter((e) => e.parentId === s.id)
                                .sort((e, t) => e.childIndex - t.childIndex);
                        else {
                            let e = s.shapes[n.parentId];
                            if (!e.children) throw Error("No children in parent!");
                            a = e.children.map((e) => s.shapes[e]).sort((e, t) => e.childIndex - t.childIndex);
                        }
                        let o = a.indexOf(n),
                            r = a[o + 1];
                        return r ? r.childIndex : n.childIndex + 1;
                    }
                    static getBeforeShape(e, t) {
                        return Object.fromEntries(Object.keys(t).map((t) => [t, e[t]]));
                    }
                    static mutateShapes(e, t, i, s, n = !1) {
                        let a = {},
                            o = {};
                        t.forEach((r, l) => {
                            let d = tw.getShape(e, r, s);
                            if (d.isLocked) return;
                            (null == d ? void 0 : d.type) === "group" &&
                                (1 === t.length || n) &&
                                d.children.forEach((t, n) => {
                                    let r = tw.getShape(e, t, s);
                                    if (r.isLocked) return;
                                    let l = i(r, n);
                                    l && ((a[t] = tw.getBeforeShape(r, l)), (o[t] = l));
                                });
                            let h = i(d, l);
                            h && ((a[r] = tw.getBeforeShape(d, h)), (o[r] = h));
                        });
                        let r = x.cQ.deepMerge(e, { document: { pages: { [e.appState.currentPageId]: { shapes: o } } } });
                        return { before: a, after: o, data: r };
                    }
                    static createShapes(e, t, i) {
                        return {
                            before: {
                                document: {
                                    pages: {
                                        [i]: {
                                            shapes: Y(
                                                {},
                                                Object.fromEntries(
                                                    t.flatMap((t) => {
                                                        let s = [[t.id, void 0]];
                                                        if (t.parentId !== i) {
                                                            let n = tw.getShape(e, t.parentId, i);
                                                            if (!n.children) throw Error("No children in parent!");
                                                            s.push([n.id, { children: n.children }]);
                                                        }
                                                        return s;
                                                    })
                                                )
                                            ),
                                        },
                                    },
                                },
                            },
                            after: {
                                document: {
                                    pages: {
                                        [i]: {
                                            shapes: {
                                                shapes: Y(
                                                    {},
                                                    Object.fromEntries(
                                                        t.flatMap((t) => {
                                                            let s = [[t.id, t]];
                                                            if (t.parentId !== i) {
                                                                let n = tw.getShape(e, t.parentId, i);
                                                                if (!n.children) throw Error("No children in parent!");
                                                                s.push([n.id, { children: [...n.children, t.id] }]);
                                                            }
                                                            return s;
                                                        })
                                                    )
                                                ),
                                            },
                                        },
                                    },
                                },
                            },
                        };
                    }
                    static deleteShapes(e, t, i) {
                        i = i || e.appState.currentPageId;
                        let s = tw.getPage(e, i),
                            n = "string" == typeof t[0] ? t : t.map((e) => e.id);
                        return {
                            before: {
                                document: {
                                    pages: {
                                        [i]: {
                                            shapes: Y(
                                                {},
                                                Object.fromEntries(
                                                    n.flatMap((e) => {
                                                        let t = s.shapes[e],
                                                            n = [[t.id, t]];
                                                        if (t.parentId !== i) {
                                                            let e = s.shapes[t.parentId];
                                                            if (!e.children) throw Error("No children in parent!");
                                                            n.push([e.id, { children: e.children }]);
                                                        }
                                                        return n;
                                                    })
                                                )
                                            ),
                                            bindings: Y(
                                                {},
                                                Object.fromEntries(
                                                    Object.values(s.bindings)
                                                        .filter((e) => n.includes(e.fromId) || n.includes(e.toId))
                                                        .map((e) => [e.id, e])
                                                )
                                            ),
                                        },
                                    },
                                },
                            },
                            after: {
                                document: {
                                    pages: {
                                        [i]: {
                                            shapes: Y(
                                                {},
                                                Object.fromEntries(
                                                    n.flatMap((e) => {
                                                        let t = s.shapes[e],
                                                            i = [[t.id, void 0]];
                                                        if (t.parentId !== s.id) {
                                                            let e = s.shapes[t.parentId];
                                                            if (!e.children) throw Error("No children in parent!");
                                                            i.push([e.id, { children: e.children.filter((e) => e !== t.id) }]);
                                                        }
                                                        return i;
                                                    })
                                                )
                                            ),
                                        },
                                    },
                                },
                            },
                        };
                    }
                    static onSessionComplete(e) {
                        var t, i;
                        let s = null == (i = (t = tw.getShapeUtil(e)).onSessionComplete) ? void 0 : i.call(t, e);
                        return s ? Y(Y({}, e), s) : e;
                    }
                    static onChildrenChange(e, t, i) {
                        var s, n;
                        if (!t.children) return;
                        let a =
                            null == (n = (s = tw.getShapeUtil(t)).onChildrenChange)
                                ? void 0
                                : n.call(
                                      s,
                                      t,
                                      t.children.map((t) => tw.getShape(e, t, i))
                                  );
                        return a ? Y(Y({}, t), a) : t;
                    }
                    static updateArrowBindings(e, t) {
                        var i, s, n, a, o, r;
                        let l = { start: ty(t.handles.start), end: ty(t.handles.end) },
                            d = { isBound: !1, handle: t.handles.start, point: j.B.add(t.handles.start.point, t.point) },
                            h = { isBound: !1, handle: t.handles.end, point: j.B.add(t.handles.end.point, t.point) };
                        if (t.handles.start.bindingId) {
                            let s = (null == (i = t.decorations) ? void 0 : i.start) !== void 0,
                                n = t.handles.start,
                                a = e.bindings[t.handles.start.bindingId];
                            if (!a) throw Error("Could not find a binding to match the start handle's bindingId");
                            let o = e.shapes[a.toId],
                                r = tw.getShapeUtil(o),
                                l = r.getBounds(o),
                                h = r.getExpandedBounds(o),
                                p = s ? x.cQ.expandBounds(l, a.distance) : l,
                                { minX: c, minY: u, width: g, height: m } = h,
                                f = j.B.add([c, u], j.B.mulV([g, m], j.B.rotWith(a.point, [0.5, 0.5], o.rotation || 0)));
                            d = { isBound: !0, hasDecoration: s, binding: a, handle: n, point: f, util: r, target: o, bounds: l, expandedBounds: h, intersectBounds: p, center: r.getCenter(o) };
                        }
                        if (t.handles.end.bindingId) {
                            let i = (null == (s = t.decorations) ? void 0 : s.end) !== void 0,
                                n = t.handles.end,
                                a = e.bindings[t.handles.end.bindingId];
                            if (!a) throw Error("Could not find a binding to match the end handle's bindingId");
                            let o = e.shapes[a.toId],
                                r = tw.getShapeUtil(o),
                                l = r.getBounds(o),
                                d = r.getExpandedBounds(o),
                                p = i ? x.cQ.expandBounds(l, a.distance) : l,
                                { minX: c, minY: u, width: g, height: m } = d,
                                f = j.B.add([c, u], j.B.mulV([g, m], j.B.rotWith(a.point, [0.5, 0.5], o.rotation || 0)));
                            h = { isBound: !0, hasDecoration: i, binding: a, handle: n, point: f, util: r, target: o, bounds: l, expandedBounds: d, intersectBounds: p, center: r.getCenter(o) };
                        }
                        for (let e of ["end", "start"]) {
                            let i = "start" === e ? d : h,
                                s = "start" === e ? h : d;
                            if (i.isBound) {
                                if (i.binding.distance) {
                                    let o = j.B.uni(j.B.sub(i.point, s.point));
                                    switch (i.target.type) {
                                        case "ellipse": {
                                            let n = (0, A.Zz)(
                                                s.point,
                                                o,
                                                i.center,
                                                i.target.radius[0] + (i.hasDecoration ? i.binding.distance : 0),
                                                i.target.radius[1] + (i.hasDecoration ? i.binding.distance : 0),
                                                i.target.rotation || 0
                                            ).points.sort((e, t) => j.B.dist(e, s.point) - j.B.dist(t, s.point));
                                            void 0 !== n[0] && (l[e].point = j.B.toFixed(j.B.sub(n[0], t.point)));
                                            break;
                                        }
                                        case "triangle": {
                                            let n = i.target.point,
                                                a = tS(i.target.size, i.hasDecoration ? 16 : 0, i.target.rotation).map((e) => j.B.add(e, n)),
                                                r = x.cQ
                                                    .pointsToLineSegments(a, !0)
                                                    .map(([e, t]) => (0, A.oA)(s.point, o, e, t))
                                                    .filter((e) => e.didIntersect)
                                                    .flatMap((e) => e.points)
                                                    .sort((e, t) => j.B.dist(e, s.point) - j.B.dist(t, s.point));
                                            void 0 !== r[0] && (l[e].point = j.B.toFixed(j.B.sub(r[0], t.point)));
                                            break;
                                        }
                                        default: {
                                            let r,
                                                d = (0, A.bW)(s.point, o, i.intersectBounds, i.target.rotation)
                                                    .filter((e) => e.didIntersect)
                                                    .map((e) => e.points[0])
                                                    .sort((e, t) => j.B.dist(e, s.point) - j.B.dist(t, s.point));
                                            if (!d[0]) continue;
                                            if (
                                                (s.isBound &&
                                                    (r = (0, A.bW)(s.point, o, s.intersectBounds, s.target.rotation)
                                                        .filter((e) => e.didIntersect)
                                                        .map((e) => e.points[0])
                                                        .sort((e, t) => j.B.dist(e, s.point) - j.B.dist(t, s.point))[0]),
                                                s.isBound &&
                                                    (d.length < 2 || (r && d[0] && 40 > Math.ceil(j.B.dist(d[0], r))) || x.cQ.boundsContain(i.expandedBounds, s.expandedBounds) || x.cQ.boundsCollide(i.expandedBounds, s.expandedBounds)))
                                            ) {
                                                let n = j.B.uni(j.B.sub(s.point, i.point)),
                                                    a = (0, A.bW)(i.point, n, i.bounds, i.target.rotation)
                                                        .filter((e) => e.didIntersect)
                                                        .map((e) => e.points[0]);
                                                if (!a[0]) continue;
                                                (l[e].point = j.B.toFixed(j.B.sub(a[0], t.point))),
                                                    (l["start" === e ? "end" : "start"].point = j.B.toFixed(
                                                        j.B.add(j.B.sub(a[0], t.point), j.B.mul(n, Math.min(j.B.dist(a[0], s.point), 40 * (x.cQ.boundsContain(s.bounds, i.intersectBounds) ? -1 : 1))))
                                                    ));
                                            } else if (!s.isBound && ((d[0] && 40 > j.B.dist(d[0], s.point)) || x.cQ.pointInBounds(s.point, i.intersectBounds))) {
                                                let o = j.B.uni(j.B.sub(i.center, s.point));
                                                return null == (a = (n = tw.getShapeUtil(t)).onHandleChange)
                                                    ? void 0
                                                    : a.call(n, t, { [e]: $(Y({}, t.handles[e]), { point: j.B.toFixed(j.B.add(j.B.sub(s.point, t.point), j.B.mul(o, 40))) }) });
                                            } else d[0] && (l[e].point = j.B.toFixed(j.B.sub(d[0], t.point)));
                                        }
                                    }
                                } else l[e].point = j.B.sub(i.point, t.point);
                            }
                        }
                        return null == (r = (o = tw.getShapeUtil(t)).onHandleChange) ? void 0 : r.call(o, t, l);
                    }
                    static transform(e, t, i) {
                        let s = tw.getShapeUtil(e).transform(e, t, i);
                        return s ? Y(Y({}, e), s) : e;
                    }
                    static transformSingle(e, t, i) {
                        let s = tw.getShapeUtil(e).transformSingle(e, t, i);
                        return s ? Y(Y({}, e), s) : e;
                    }
                    static getRotatedShapeMutation(e, t, i, s) {
                        var n, a;
                        let o = j.B.sub(t, e.point),
                            r = j.B.rotWith(t, i, s),
                            l = j.B.toFixed(j.B.sub(r, o));
                        return void 0 !== e.handles
                            ? null == (a = (n = this.getShapeUtil(e)).onHandleChange)
                                ? void 0
                                : a.call(
                                      n,
                                      $(Y({}, e), { point: l }),
                                      Object.fromEntries(
                                          Object.entries(e.handles).map(([e, t]) => {
                                              let i = j.B.toFixed(j.B.rotWith(t.point, o, s));
                                              return [e, $(Y({}, t), { point: i })];
                                          })
                                      )
                                  )
                            : { point: l, rotation: x.cQ.clampRadians((e.rotation || 0) + s) };
                    }
                    static updateParents(e, t, i) {
                        let s = tw.getPage(e, t);
                        if (0 === i.length) return;
                        let { shapes: n } = tw.getPage(e, t),
                            a = Array.from(new Set(i.map((e) => n[e].parentId).values())).filter((e) => e !== s.id);
                        for (let i of a) {
                            let s = n[i];
                            if (!s.children) throw Error("A shape is parented to a shape without a children array.");
                            tw.onChildrenChange(e, s, t);
                        }
                        tw.updateParents(e, t, a);
                    }
                    static getBinding(e, t, i) {
                        return tw.getPage(e, i).bindings[t];
                    }
                    static getBindings(e, t) {
                        return Object.values(tw.getPage(e, t).bindings);
                    }
                    static getBindableShapeIds(e) {
                        return tw
                            .getShapes(e, e.appState.currentPageId)
                            .filter((e) => tw.getShapeUtil(e).canBind)
                            .sort((e, t) => t.childIndex - e.childIndex)
                            .map((e) => e.id);
                    }
                    static getBindingsWithShapeIds(e, t, i) {
                        return Array.from(new Set(tw.getBindings(e, i).filter((e) => t.includes(e.toId) || t.includes(e.fromId))).values());
                    }
                    static getRelatedBindings(e, t, i) {
                        let s = new Set(t),
                            n = Object.values(tw.getPage(e, i).bindings),
                            a = new Set(n.filter((e) => s.has(e.toId) || s.has(e.fromId))),
                            o = a.size,
                            r = -1;
                        for (; 0 !== r; )
                            a.forEach((e) => {
                                let t = e.fromId;
                                for (let e of n) e.fromId === t && a.add(e), e.toId === t && a.add(e);
                            }),
                                (r = a.size - o),
                                (o = a.size);
                        return Array.from(a.values());
                    }
                    static normalizeText(e) {
                        return e
                            .replace(
                                tw.fixNewLines,
                                `
`
                            )
                            .split(
                                `
`
                            )
                            .map((e) => e || " ").join(`
`);
                    }
                    static assertShapeHasProperty(e, t) {
                        if (void 0 === e[t]) throw Error();
                    }
                    static warn(e) {}
                    static error(e) {}
                    static getSvgString(e, t = 1) {
                        let i = e.cloneNode(!0);
                        return (
                            e.setAttribute("width", +e.getAttribute("width") * t + ""),
                            e.setAttribute("height", +e.getAttribute("height") * t + ""),
                            new XMLSerializer()
                                .serializeToString(i)
                                .replaceAll("&#10;      ", "")
                                .replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1")
                        );
                    }
                    static getSvgAsDataUrl(e, t = 1) {
                        let i = tw.getSvgString(e, t);
                        return `data:image/svg+xml;base64,${window.btoa(unescape(i))}`;
                    }
                    static getImageForSvg(e) {
                        return q(this, arguments, function* (e, t = "png", i = {}) {
                            let { scale: s = 2, quality: n = 1 } = i,
                                a = tw.getSvgString(e, s),
                                o = +e.getAttribute("width"),
                                r = +e.getAttribute("height");
                            if (!a) return;
                            let l = yield new Promise((e) => {
                                let t = new Image();
                                t.crossOrigin = "anonymous";
                                let i = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(a)))}`;
                                (t.onload = () => {
                                    let s = document.createElement("canvas"),
                                        n = s.getContext("2d");
                                    (s.width = o), (s.height = r), n.drawImage(t, 0, 0, o, r), URL.revokeObjectURL(i), e(s);
                                }),
                                    (t.onerror = () => {
                                        console.warn("Could not convert that SVG to an image.");
                                    }),
                                    (t.src = i);
                            });
                            return yield new Promise((e) => l.toBlob((t) => e(t), "image/" + t, n));
                        });
                    }
                },
                tB = tw;
            V(tB, "copyStringToClipboard", (e) => {
                try {
                    navigator.clipboard && navigator.clipboard.write([new ClipboardItem({ "text/plain": new Blob([e], { type: "text/plain" }) })]);
                } catch (i) {
                    let t = document.createElement("textarea");
                    t.setAttribute("position", "fixed"),
                        t.setAttribute("top", "0"),
                        t.setAttribute("readonly", "true"),
                        t.setAttribute("contenteditable", "true"),
                        (t.style.position = "fixed"),
                        (t.value = e),
                        document.body.appendChild(t),
                        t.focus(),
                        t.select();
                    try {
                        let e = document.createRange();
                        e.selectNodeContents(t);
                        let i = window.getSelection();
                        i && (i.removeAllRanges(), i.addRange(e), t.setSelectionRange(0, t.value.length)), document.execCommand("copy");
                    } catch (e) {
                    } finally {
                        document.body.removeChild(t);
                    }
                }
            }),
                V(tB, "flattenShape", (e, t) => {
                    var i;
                    return [
                        t,
                        ...(null != (i = t.children) ? i : [])
                            .map((t) => tw.getShape(e, t, e.appState.currentPageId))
                            .sort((e, t) => e.childIndex - t.childIndex)
                            .flatMap((t) => tw.flattenShape(e, t)),
                    ];
                }),
                V(tB, "flattenPage", (e, t) =>
                    Object.values(e.document.pages[t].shapes)
                        .sort((e, t) => e.childIndex - t.childIndex)
                        .reduce((t, i) => [...t, ...tw.flattenShape(e, i)], [])
                ),
                V(tB, "getTopChildIndex", (e, t) => {
                    let i = tw.getShapes(e, t);
                    return 0 === i.length ? 1 : i.filter((e) => e.parentId === t).sort((e, t) => t.childIndex - e.childIndex)[0].childIndex + 1;
                }),
                V(tB, "fixNewLines", /\r?\n|\r/g);
            var tx = P.memo(function ({ font: e, text: t, color: i, offsetX: s = 0, offsetY: n = 0, scale: a = 1, isEditing: o = !1, onBlur: r, onChange: l, shape: d }) {
                    let h = P.useRef(null),
                        p = P.useRef(!1),
                        c = P.useCallback(
                            (e) => {
                                l(tB.normalizeText(e.currentTarget.value));
                            },
                            [l]
                        ),
                        u = P.useCallback(
                            (e) => {
                                if ("Escape" === e.key) {
                                    e.preventDefault(), e.stopPropagation(), null == r || r();
                                    return;
                                }
                                if ("Tab" === e.key && 0 === t.length) {
                                    e.preventDefault();
                                    return;
                                }
                                if ("Meta" === e.key || e.metaKey) {
                                    if ("z" === e.key && e.metaKey) {
                                        e.shiftKey ? document.execCommand("redo", !1) : document.execCommand("undo", !1), e.stopPropagation(), e.preventDefault();
                                        return;
                                    }
                                } else e.stopPropagation();
                                (e.metaKey || e.ctrlKey) && "=" === e.key && e.preventDefault(),
                                    "Tab" === e.key && (e.preventDefault(), e.shiftKey ? tb.unindent(e.currentTarget) : tb.indent(e.currentTarget), null == l || l(tB.normalizeText(e.currentTarget.value)));
                            },
                            [l]
                        ),
                        g = P.useCallback(
                            (e) => {
                                e.currentTarget.setSelectionRange(0, 0), null == r || r();
                            },
                            [r]
                        ),
                        m = P.useCallback(
                            (e) => {
                                o && p.current && document.activeElement === e.currentTarget && e.currentTarget.select();
                            },
                            [o]
                        ),
                        f = P.useCallback(
                            (e) => {
                                o && e.stopPropagation();
                            },
                            [o]
                        );
                    P.useEffect(() => {
                        o
                            ? requestAnimationFrame(() => {
                                  p.current = !0;
                                  let e = h.current;
                                  e && (e.focus(), e.select());
                              })
                            : null == r || r();
                    }, [o, r]);
                    let b = P.useRef(null);
                    return (
                        P.useLayoutEffect(() => {
                            let i = b.current;
                            if (!i) return;
                            let o = eq(t, e);
                            (i.style.transform = `scale(${a}, ${a}) translate(${s}px, ${n}px)`), (i.style.width = o[0] + 1 + "px"), (i.style.height = o[1] + 1 + "px");
                        }, [t, e, n, s, a]),
                        P.createElement(
                            tP,
                            null,
                            P.createElement(
                                tE,
                                { ref: b, hasText: !!t, isEditing: o, style: { font: e, color: i }, "data-color": null == d ? void 0 : d.style.color },
                                o
                                    ? P.createElement(tz, {
                                          ref: h,
                                          style: { font: e, color: i },
                                          name: "text",
                                          tabIndex: -1,
                                          autoComplete: "false",
                                          autoCapitalize: "false",
                                          autoCorrect: "false",
                                          autoSave: "false",
                                          autoFocus: !0,
                                          placeholder: "",
                                          spellCheck: "true",
                                          wrap: "off",
                                          dir: "auto",
                                          datatype: "wysiwyg",
                                          defaultValue: t,
                                          color: i,
                                          onFocus: m,
                                          onChange: c,
                                          onKeyDown: u,
                                          onBlur: g,
                                          onPointerDown: f,
                                          onContextMenu: tv,
                                          onCopy: tv,
                                          onPaste: tv,
                                          onCut: tv,
                                      })
                                    : t,
                                "​"
                            )
                        )
                    );
                }),
                tP = ez("div", {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    userSelect: "none",
                    variants: { isGhost: { false: { opacity: 1 }, true: { transition: "opacity .2s", opacity: 0.3 } } },
                }),
                tC = { whiteSpace: "pre-wrap", overflowWrap: "break-word", letterSpacing: eO },
                tE = ez(
                    "div",
                    Y(
                        {
                            position: "absolute",
                            padding: "4px",
                            zIndex: 1,
                            minHeight: 1,
                            minWidth: 1,
                            lineHeight: 1,
                            outline: 0,
                            fontWeight: "500",
                            textAlign: "center",
                            backfaceVisibility: "hidden",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none",
                            variants: {
                                hasText: { false: { pointerEvents: "none" }, true: { pointerEvents: "all" } },
                                isEditing: { false: { userSelect: "none" }, true: { background: "$boundsBg", userSelect: "text", WebkitUserSelect: "text" } },
                            },
                        },
                        tC
                    )
                ),
                tz = ez(
                    "textarea",
                    $(
                        Y(
                            {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                width: "100%",
                                height: "100%",
                                border: "none",
                                padding: "4px",
                                resize: "none",
                                textAlign: "inherit",
                                minHeight: "inherit",
                                minWidth: "inherit",
                                lineHeight: "inherit",
                                outline: 0,
                                fontWeight: "inherit",
                                overflow: "hidden",
                                backfaceVisibility: "hidden",
                                display: "inline-block",
                                pointerEvents: "all",
                                background: "$boundsBg",
                                userSelect: "text",
                                WebkitUserSelect: "text",
                                fontSmooth: "always",
                                WebkitFontSmoothing: "subpixel-antialiased",
                                MozOsxFontSmoothing: "auto",
                            },
                            tC
                        ),
                        { "&:focus": { outline: "none", border: "none" } }
                    )
                );
            function tM(e, t, { initialShape: i, transformOrigin: s, scaleX: n, scaleY: a }) {
                return e.rotation || i.isAspectRatioLocked
                    ? {
                          size: j.Z.toFixed(j.Z.mul(i.size, Math.min(Math.abs(n), Math.abs(a)))),
                          point: j.Z.toFixed([t.minX + (t.width - e.size[0]) * (n < 0 ? 1 - s[0] : s[0]), t.minY + (t.height - e.size[1]) * (a < 0 ? 1 - s[1] : s[1])]),
                          rotation: (n < 0 && a >= 0) || (a < 0 && n >= 0) ? (i.rotation ? -i.rotation : 0) : i.rotation,
                      }
                    : { point: j.Z.toFixed([t.minX, t.minY]), size: j.Z.toFixed([t.width, t.height]) };
            }
            function tD(e, t) {
                return { size: j.Z.toFixed([t.width, t.height]), point: j.Z.toFixed([t.minX, t.minY]) };
            }
            var tj = class extends x.NI {
                constructor() {
                    super(...arguments),
                        V(this, "canBind", !1),
                        V(this, "canEdit", !1),
                        V(this, "canClone", !1),
                        V(this, "isAspectRatioLocked", !1),
                        V(this, "hideResizeHandles", !1),
                        V(this, "bindingDistance", 16),
                        V(this, "hitTestPoint", (e, t) => x.cQ.pointInBounds(t, this.getRotatedBounds(e))),
                        V(this, "hitTestLineSegment", (e, t, i) => {
                            let s = x.cQ.getBoundsFromPoints([t, i]),
                                n = this.getBounds(e);
                            return x.cQ.boundsContain(n, s) || e.rotation ? (0, A.Gc)(t, i, x.cQ.getRotatedCorners(this.getBounds(e))).didIntersect : (0, A.WU)(t, i, this.getBounds(e)).length > 0;
                        }),
                        V(this, "create", (e) => (this.refMap.set(e.id, P.createRef()), this.getShape(e))),
                        V(this, "getCenter", (e) => x.cQ.getBoundsCenter(this.getBounds(e))),
                        V(this, "getExpandedBounds", (e) => x.cQ.expandBounds(this.getBounds(e), this.bindingDistance)),
                        V(this, "getBindingPoint", (e, t, i, s, n, a) => {
                            let o = this.getBounds(e),
                                r = this.getExpandedBounds(e);
                            if (!x.cQ.pointInBounds(i, r)) return;
                            let l = (0, A.bW)(s, n, r)
                                .filter((e) => e.didIntersect)
                                .map((e) => e.points[0]);
                            if (!l.length) return;
                            let d = this.getCenter(e),
                                h = l.sort((e, t) => j.B.dist(t, s) - j.B.dist(e, s))[0],
                                p = j.B.med(i, h),
                                c,
                                u;
                            a
                                ? ((c = 8 > j.B.dist(i, d) ? d : i), (u = 0))
                                : ((c = 8 > j.B.distanceToLineSegment(i, p, d) ? d : p),
                                  (u = x.cQ.pointInBounds(i, o)
                                      ? this.bindingDistance
                                      : Math.max(
                                            this.bindingDistance,
                                            x.cQ
                                                .getBoundsSides(o)
                                                .map((e) => j.B.distanceToLineSegment(e[1][0], e[1][1], i))
                                                .sort((e, t) => e - t)[0]
                                        )));
                            let g = j.B.divV(j.B.sub(c, [r.minX, r.minY]), [r.width, r.height]);
                            return { point: j.B.clampV(g, 0, 1), distance: u };
                        }),
                        V(this, "mutate", (e, t) => t),
                        V(this, "transform", (e, t, i) => $(Y({}, e), { point: [t.minX, t.minY] })),
                        V(this, "transformSingle", (e, t, i) => this.transform(e, t, i)),
                        V(this, "updateChildren"),
                        V(this, "onChildrenChange"),
                        V(this, "onHandleChange"),
                        V(this, "onRightPointHandle"),
                        V(this, "onDoubleClickHandle"),
                        V(this, "onDoubleClickBoundsHandle"),
                        V(this, "onSessionComplete"),
                        V(this, "getSvgElement", (e, t) => {
                            var i, s, n, a, o;
                            let r = null == (i = document.getElementById(e.id + "_svg")) ? void 0 : i.cloneNode(!0);
                            if (r) {
                                if (null != (a = null == (n = null == (s = e.label) ? void 0 : s.trim()) ? void 0 : n.length) && a) {
                                    let i = document.createElementNS("http://www.w3.org/2000/svg", "g"),
                                        s = tp(e.style),
                                        n = eq(e.label, s),
                                        a = tl(e.style.size, e.style.font) * (null != (o = e.style.scale) ? o : 1),
                                        l = td(e.style.font).slice(1, -1),
                                        d = e0(e.label, a, l, "middle", n[0], !1),
                                        h = this.getBounds(e);
                                    return (
                                        d.setAttribute("transform", `translate(${h.width / 2 - n[0] / 2}, ${h.height / 2 - n[1] / 2})`),
                                        d.setAttribute("fill", tg(e.style, t).stroke),
                                        d.setAttribute("data-color", e.style.color),
                                        d.setAttribute("transform-origin", "center center"),
                                        i.setAttribute("text-align", "center"),
                                        i.setAttribute("text-anchor", "middle"),
                                        i.appendChild(r),
                                        i.appendChild(d),
                                        i
                                    );
                                }
                                return r;
                            }
                        });
                }
            };
            function tA(e, t) {
                let { start: i, end: s } = e,
                    n = j.Z.dist(i.point, s.point),
                    a = j.Z.med(i.point, s.point),
                    o = (n / 2) * t,
                    r = j.Z.uni(j.Z.vec(i.point, s.point));
                return j.Z.toFixed(10 > Math.abs(o) ? a : j.Z.add(a, j.Z.mul(j.Z.per(r), o)));
            }
            function tT(e, t, i) {
                return x.cQ.circleFromThreePoints(e, i, t);
            }
            function tO(e, t, i, s, n) {
                let a = (0, A.bO)(e, 0.618 * t, i, s).points;
                if (!a) return tB.warn("Could not find an intersection for the arrow head."), { left: e, right: e };
                let o = n ? a[0] : a[1];
                return { left: o ? j.Z.nudge(j.Z.rotWith(o, e, Math.PI / 6), e, -0.382 * t) : e, right: o ? j.Z.nudge(j.Z.rotWith(o, e, -Math.PI / 6), e, -0.382 * t) : e };
            }
            function tF(e, t, i) {
                let s = (0, A.VC)(e, i, e, t).points;
                if (!s) return tB.warn("Could not find an intersection for the arrow head."), { left: e, right: e };
                let n = s[0];
                return { left: n ? j.Z.rotWith(n, e, Math.PI / 6) : e, right: n ? j.Z.rotWith(n, e, -Math.PI / 6) : e };
            }
            function tL(e, t, i, s, n) {
                let { left: a, right: o } = tO(e, t, i, s, n);
                return `M ${a} L ${e} ${o}`;
            }
            function tR(e, t, i) {
                let { left: s, right: n } = tF(e, t, i);
                return `M ${s} L ${e} ${n}`;
            }
            function tH(e, t, i) {
                if (4 >= j.Z.dist2(t, j.Z.med(e, i))) return [e, i];
                let s = [],
                    n = tT(e, t, i),
                    a = [n[0], n[1]],
                    o = n[2],
                    r = j.Z.angle(a, e),
                    l = j.Z.angle(a, i);
                for (let e = 0.05; e < 1; e += 0.05) {
                    let t = x.cQ.lerpAngles(r, l, e);
                    s.push(j.Z.nudgeAtAngle(a, t, o));
                }
                return s;
            }
            function tQ(e, t, i, s) {
                return 2 * Math.PI * t * (x.cQ.getSweep(e, i, s) / (2 * Math.PI));
            }
            function tU({ left: e, middle: t, right: i, stroke: s, strokeWidth: n }) {
                return P.createElement(
                    "g",
                    null,
                    P.createElement("path", { className: "tl-stroke-hitarea", d: `M ${e} L ${t} ${i}` }),
                    P.createElement("path", { d: `M ${e} L ${t} ${i}`, fill: "none", stroke: s, strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round", pointerEvents: "none" })
                );
            }
            var tZ = P.memo(function ({ id: e, style: t, start: i, bend: s, end: n, arrowBend: a, decorationStart: o, decorationEnd: r, isDraw: l, isDarkMode: d }) {
                    let h = j.Z.dist(i, n);
                    if (h < 2) return null;
                    let p = tg(t, d),
                        { strokeWidth: c } = p,
                        u = 1 + 1.618 * c,
                        g = tT(i, s, n),
                        m = [g[0], g[1]],
                        f = g[2],
                        b = tQ(m, f, i, n),
                        v = eR[x.cQ.rng(e)() > 0 ? "easeInOutSine" : "easeInOutCubic"],
                        y = l
                            ? (function (e, t, i, s, n, a, o, r, l, d) {
                                  let h = x.cQ.rng(e),
                                      p = tg(t).strokeWidth,
                                      c = n ? j.Z.rotWith(i, o, p / l) : i,
                                      u = a ? j.Z.rotWith(s, o, -(p / l)) : s,
                                      g = j.Z.angle(o, c),
                                      m = j.Z.angle(o, u),
                                      f = [],
                                      b = 8 + Math.floor((Math.abs(l) / 20) * 1 + h() / 2);
                                  for (let e = 0; e < b; e++) {
                                      let t = d(e / b),
                                          i = x.cQ.lerpAngles(g, m, t);
                                      f.push(j.Z.toFixed(j.Z.nudgeAtAngle(o, i, r)));
                                  }
                                  let v = (0, T.ZP)([c, ...f, u], { size: 1 + p, thinning: 0.618 + 0.2 * h(), easing: eR.easeOutQuad, simulatePressure: !1, streamline: 0, last: !0 });
                                  return x.cQ.getSvgPathFromStroke(v);
                              })(e, t, i, n, o, r, m, f, b, v)
                            : ["M", i[0], i[1], "A", g[2], g[2], 0, 0, a < 0 ? 0 : 1, n[0], n[1]].join(" "),
                        { strokeDasharray: S, strokeDashoffset: I } = x.cQ.getPerfectDashProps(Math.abs(b), u, t.dash, 2, !1),
                        k = Math.min(h / 3, 8 * c),
                        w = o ? tO(i, k, m, f, b < 0) : null,
                        B = r ? tO(n, k, m, f, b >= 0) : null;
                    return P.createElement(
                        P.Fragment,
                        null,
                        P.createElement("path", { className: "tl-stroke-hitarea", d: y }),
                        P.createElement("path", {
                            d: y,
                            fill: l ? p.stroke : "none",
                            stroke: p.stroke,
                            strokeWidth: l ? 0 : u,
                            strokeDasharray: S,
                            strokeDashoffset: I,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            pointerEvents: "none",
                        }),
                        w && P.createElement(tU, { left: w.left, middle: i, right: w.right, stroke: p.stroke, strokeWidth: u }),
                        B && P.createElement(tU, { left: B.left, middle: n, right: B.right, stroke: p.stroke, strokeWidth: u })
                    );
                }),
                tK = P.memo(function ({ id: e, style: t, start: i, end: s, decorationStart: n, decorationEnd: a, isDraw: o, isDarkMode: r }) {
                    let l,
                        d,
                        h,
                        p,
                        c,
                        u = j.Z.dist(i, s);
                    if (u < 2) return null;
                    let g = tg(t, r),
                        { strokeWidth: m } = g,
                        f = 1 + 1.618 * m,
                        b = o
                            ? ((l = x.cQ.rng(e)),
                              (d = tg(t).strokeWidth),
                              (h = n ? j.Z.nudge(i, s, d) : i),
                              (p = a ? j.Z.nudge(s, i, d) : s),
                              (c = (0, T.ZP)([h, p], { size: d, thinning: 0.618 + 0.2 * l(), easing: eR.easeOutQuad, simulatePressure: !0, streamline: 0, last: !0 })),
                              x.cQ.getSvgPathFromStroke(c))
                            : "M" + j.Z.toFixed(i) + "L" + j.Z.toFixed(s),
                        { strokeDasharray: v, strokeDashoffset: y } = x.cQ.getPerfectDashProps(u, 1.618 * m, t.dash, 2, !1),
                        S = Math.min(u / 3, 8 * m),
                        I = n ? tF(i, s, S) : null,
                        k = a ? tF(s, i, S) : null;
                    return P.createElement(
                        P.Fragment,
                        null,
                        P.createElement("path", { className: "tl-stroke-hitarea", d: b }),
                        P.createElement("path", { d: b, fill: g.stroke, stroke: g.stroke, strokeWidth: o ? f / 2 : f, strokeDasharray: v, strokeDashoffset: y, strokeLinecap: "round", strokeLinejoin: "round", pointerEvents: "stroke" }),
                        I && P.createElement(tU, { left: I.left, middle: i, right: I.right, stroke: g.stroke, strokeWidth: f }),
                        k && P.createElement(tU, { left: k.left, middle: s, right: k.right, stroke: g.stroke, strokeWidth: f })
                    );
                }),
                t_ = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "arrow"),
                            V(this, "hideBounds", !0),
                            V(this, "canEdit", !0),
                            V(this, "pathCache", new WeakMap()),
                            V(this, "getShape", (e) => {
                                var t, i, s, n;
                                return Y(
                                    {
                                        id: "id",
                                        type: "arrow",
                                        name: "Arrow",
                                        parentId: "page",
                                        childIndex: 1,
                                        point: [0, 0],
                                        rotation: 0,
                                        bend: 0,
                                        handles: {
                                            start: Y({ id: "start", index: 0, point: [0, 0], canBind: !0 }, null == (t = e.handles) ? void 0 : t.start),
                                            end: Y({ id: "end", index: 1, point: [1, 1], canBind: !0 }, null == (i = e.handles) ? void 0 : i.end),
                                            bend: Y({ id: "bend", index: 2, point: [0.5, 0.5] }, null == (s = e.handles) ? void 0 : s.bend),
                                        },
                                        decorations: null != (n = e.decorations) ? n : { end: "arrow" },
                                        style: Y($(Y({}, tm), { isFilled: !1 }), e.style),
                                        label: "",
                                        labelPoint: [0.5, 0.5],
                                    },
                                    e
                                );
                            }),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, isEditing: t, isGhost: i, meta: s, events: n, onShapeChange: a, onShapeBlur: o }, r) => {
                                    var l, d;
                                    let {
                                            id: h,
                                            label: p = "",
                                            handles: { start: c, bend: u, end: g },
                                            decorations: m = {},
                                            style: f,
                                        } = e,
                                        b = null != (d = null == (l = null == p ? void 0 : p.trim()) ? void 0 : l.length) && d,
                                        v = 1 > j.B.dist(u.point, j.B.toFixed(j.B.med(c.point, g.point))),
                                        y = tp(f),
                                        S = tg(f, s.isDarkMode),
                                        I = b || t ? eq(p, y) : [0, 0],
                                        k = this.getBounds(e),
                                        w = P.useMemo(() => {
                                            let { start: t, bend: i, end: s } = e.handles;
                                            if (v) return j.B.dist(t.point, s.point);
                                            let n = tT(t.point, i.point, s.point);
                                            return Math.abs(tQ(n.slice(0, 2), n[2], t.point, s.point));
                                        }, [e.handles]),
                                        B = Math.max(0.5, Math.min(1, Math.max(w / (I[1] + 128), w / (I[0] + 128)))),
                                        C = P.useMemo(() => {
                                            let t = this.getBounds(e);
                                            return j.B.sub(e.handles.bend.point, j.B.toFixed([t.width / 2, t.height / 2]));
                                        }, [e, B]),
                                        E = P.useCallback(
                                            (e) => {
                                                null == a || a({ id: h, label: e });
                                            },
                                            [a]
                                        );
                                    return P.createElement(
                                        tN,
                                        Y({ ref: r }, n),
                                        P.createElement(tx, { font: y, text: p, color: S.stroke, offsetX: C[0], offsetY: C[1], scale: B, isEditing: t, onChange: E, onBlur: o, shape: e }),
                                        P.createElement(
                                            x.gk,
                                            { id: e.id + "_svg", shapeStyle: f },
                                            P.createElement(
                                                "defs",
                                                null,
                                                P.createElement(
                                                    "mask",
                                                    { id: e.id + "_clip" },
                                                    P.createElement("rect", { x: -100, y: -100, width: k.width + 200, height: k.height + 200, fill: "white" }),
                                                    P.createElement("rect", {
                                                        x: k.width / 2 - (I[0] / 2) * B + C[0],
                                                        y: k.height / 2 - (I[1] / 2) * B + C[1],
                                                        width: I[0] * B,
                                                        height: I[1] * B,
                                                        rx: 4 * B,
                                                        ry: 4 * B,
                                                        fill: "black",
                                                        opacity: 1,
                                                    })
                                                )
                                            ),
                                            P.createElement(
                                                "g",
                                                { pointerEvents: "none", opacity: i ? 0.3 : 1, mask: b || t ? `url(#${e.id}_clip)` : "" },
                                                P.createElement(v ? tK : tZ, {
                                                    id: h,
                                                    style: f,
                                                    start: c.point,
                                                    end: g.point,
                                                    bend: u.point,
                                                    arrowBend: e.bend,
                                                    decorationStart: null == m ? void 0 : m.start,
                                                    decorationEnd: null == m ? void 0 : m.end,
                                                    isDraw: "draw" === f.dash,
                                                    isDarkMode: s.isDarkMode,
                                                })
                                            )
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e, bounds: t }) => {
                                    var i, s;
                                    let {
                                            style: n,
                                            decorations: a,
                                            label: o,
                                            handles: { start: r, bend: l, end: d },
                                        } = e,
                                        h = null != (s = null == (i = null == o ? void 0 : o.trim()) ? void 0 : i.length) && s,
                                        p = tp(n),
                                        c = h ? eq(o, p) : [0, 0],
                                        u = 1 > j.B.dist(l.point, j.B.toFixed(j.B.med(r.point, d.point))),
                                        g = P.useMemo(() => {
                                            let { start: t, bend: i, end: s } = e.handles;
                                            if (u) return j.B.dist(t.point, s.point);
                                            let n = tT(t.point, i.point, s.point);
                                            return Math.abs(tQ(n.slice(0, 2), n[2], t.point, s.point));
                                        }, [e.handles]),
                                        m = Math.max(0.5, Math.min(1, Math.max(g / (c[1] + 128), g / (c[0] + 128)))),
                                        f = P.useMemo(() => {
                                            let t = this.getBounds(e);
                                            return j.B.sub(e.handles.bend.point, [t.width / 2, t.height / 2]);
                                        }, [e, m]);
                                    return P.createElement(
                                        P.Fragment,
                                        null,
                                        h && P.createElement(e1, { id: e.id, scale: m, offset: f, bounds: t, labelSize: c }),
                                        P.createElement("path", {
                                            d: (function (e, t, i, s, n, a) {
                                                let { strokeWidth: o } = tg(e, !1),
                                                    r = Math.min(j.Z.dist(t, s) / 3, 8 * o),
                                                    l = [];
                                                if (1 > j.Z.dist(i, j.Z.toFixed(j.Z.med(t, s)))) l.push(`M ${t} L ${s}`), n && l.push(tR(t, s, r)), a && l.push(tR(s, t, r));
                                                else {
                                                    let e = tT(t, i, s),
                                                        o = [e[0], e[1]],
                                                        d = e[2],
                                                        h = tQ(o, d, t, s);
                                                    l.push(`M ${t} A ${d} ${d} 0 0 ${h > 0 ? "1" : "0"} ${s}`), n && l.push(tL(t, r, o, d, h < 0)), a && l.push(tL(s, r, o, d, h >= 0));
                                                }
                                                return l.join(" ");
                                            })(n, r.point, l.point, d.point, null == a ? void 0 : a.start, null == a ? void 0 : a.end),
                                            mask: h ? `url(#${e.id}_clip)` : "",
                                        }),
                                        h && P.createElement("rect", { x: t.width / 2 - (c[0] / 2) * m + f[0], y: t.height / 2 - (c[1] / 2) * m + f[1], width: c[0] * m, height: c[1] * m, rx: 4 * m, ry: 4 * m, fill: "transparent" })
                                    );
                                })
                            ),
                            V(this, "getBounds", (e) => {
                                let t = x.cQ.getFromCache(this.boundsCache, e, () => {
                                    let {
                                        handles: { start: t, bend: i, end: s },
                                    } = e;
                                    return x.cQ.getBoundsFromPoints(tH(t.point, i.point, s.point));
                                });
                                return x.cQ.translateBounds(t, e.point);
                            }),
                            V(this, "getRotatedBounds", (e) => {
                                let {
                                        handles: { start: t, bend: i, end: s },
                                    } = e,
                                    n = tH(t.point, i.point, s.point),
                                    { minX: a, minY: o, maxX: r, maxY: l } = x.cQ.getBoundsFromPoints(n);
                                return 0 !== e.rotation && (n = n.map((t) => j.B.rotWith(t, [(a + r) / 2, (o + l) / 2], e.rotation || 0))), x.cQ.translateBounds(x.cQ.getBoundsFromPoints(n), e.point);
                            }),
                            V(this, "getCenter", (e) => {
                                let { start: t, end: i } = e.handles;
                                return j.B.add(e.point, j.B.med(t.point, i.point));
                            }),
                            V(this, "shouldRender", (e, t) => t.decorations !== e.decorations || t.handles !== e.handles || t.style !== e.style || t.label !== e.label),
                            V(this, "hitTestPoint", (e, t) => {
                                let {
                                        handles: { start: i, bend: s, end: n },
                                    } = e,
                                    a = j.B.sub(t, e.point),
                                    o = tH(i.point, s.point, n.point);
                                for (let e = 1; e < o.length; e++) if (1 > j.B.distanceToLineSegment(o[e - 1], o[e], a)) return !0;
                                return !1;
                            }),
                            V(this, "hitTestLineSegment", (e, t, i) => {
                                let {
                                        handles: { start: s, bend: n, end: a },
                                    } = e,
                                    o = j.B.sub(t, e.point),
                                    r = j.B.sub(i, e.point),
                                    l = tH(s.point, n.point, a.point);
                                for (let e = 1; e < l.length; e++) if ((0, A.T9)(l[e - 1], l[e], o, r).didIntersect) return !0;
                                return !1;
                            }),
                            V(this, "hitTestBounds", (e, t) => {
                                let { start: i, end: s, bend: n } = e.handles,
                                    a = j.B.add(e.point, i.point),
                                    o = j.B.add(e.point, s.point);
                                if (x.cQ.pointInBounds(a, t) || x.cQ.pointInBounds(o, t)) return !0;
                                if (j.B.isEqual(j.B.med(i.point, s.point), n.point)) return (0, A.WU)(a, o, t).length > 0;
                                {
                                    let [r, l, d] = tT(i.point, n.point, s.point),
                                        h = j.B.add(e.point, [r, l]);
                                    return (0, A.Bc)(h, d, a, o, t).length > 0;
                                }
                            }),
                            V(this, "transform", (e, t, { initialShape: i, scaleX: s, scaleY: n }) => {
                                let a = this.getBounds(i),
                                    o = Y({}, i.handles);
                                ["start", "end"].forEach((e) => {
                                    let [i, r] = o[e].point,
                                        l = i / a.width,
                                        d = r / a.height;
                                    o[e] = $(Y({}, o[e]), { point: [t.width * (s < 0 ? 1 - l : l), t.height * (n < 0 ? 1 - d : d)] });
                                });
                                let { start: r, bend: l, end: d } = o,
                                    h = j.B.dist(r.point, d.point),
                                    p = j.B.med(r.point, d.point),
                                    c = (h / 2) * i.bend,
                                    u = j.B.uni(j.B.vec(r.point, d.point)),
                                    g = j.B.add(p, j.B.mul(j.B.per(u), c));
                                return (o.bend = $(Y({}, l), { point: j.B.toFixed(10 > Math.abs(c) ? p : g) })), { point: j.B.toFixed([t.minX, t.minY]), handles: o };
                            }),
                            V(this, "onDoubleClickHandle", (e, t) => {
                                var i, s;
                                switch (t) {
                                    case "bend":
                                        return { bend: 0, handles: $(Y({}, e.handles), { bend: $(Y({}, e.handles.bend), { point: tA(e.handles, e.bend) }) }) };
                                    case "start":
                                        return { decorations: $(Y({}, e.decorations), { start: (null == (i = e.decorations) ? void 0 : i.start) ? void 0 : "arrow" }) };
                                    case "end":
                                        return { decorations: $(Y({}, e.decorations), { end: (null == (s = e.decorations) ? void 0 : s.end) ? void 0 : "arrow" }) };
                                }
                                return this;
                            }),
                            V(this, "onHandleChange", (e, t) => {
                                let i = x.cQ.deepMerge(e.handles, t),
                                    s = e.bend;
                                if (((i = x.cQ.deepMerge(i, { start: { point: j.B.toFixed(i.start.point) }, end: { point: j.B.toFixed(i.end.point) } })), j.B.isEqual(i.start.point, i.end.point))) return;
                                if ("bend" in t) {
                                    let { start: e, end: t, bend: n } = i,
                                        a = j.B.dist(e.point, t.point),
                                        o = j.B.med(e.point, t.point),
                                        r = j.B.angle(e.point, t.point),
                                        l = j.B.uni(j.B.vec(e.point, t.point)),
                                        d = j.B.add(o, j.B.mul(j.B.per(l), a)),
                                        h = j.B.sub(o, j.B.mul(j.B.per(l), a)),
                                        p = j.B.nearestPointOnLineSegment(d, h, n.point, !0),
                                        c = j.B.dist(o, p) / (a / 2);
                                    s = x.cQ.clamp(c, -0.99, 0.99);
                                    let u = j.B.angle(e.point, p);
                                    j.B.isEqual(o, tA(i, s))
                                        ? (s = 0)
                                        : (function (e, t, i) {
                                              if (i === e || i === t) return !0;
                                              let s = 2 * Math.PI,
                                                  n = (t - e + s) % s;
                                              return n <= Math.PI != (i - e + s) % s > n;
                                          })(r, r + Math.PI, u) && (s *= -1);
                                }
                                let n = { point: e.point, bend: s, handles: $(Y({}, i), { bend: $(Y({}, i.bend), { point: tA(i, s) }) }) },
                                    a = e.point,
                                    o = this.getBounds(Y({}, n)),
                                    r = j.B.sub([o.minX, o.minY], a);
                                return (
                                    j.B.isEqual(r, [0, 0]) ||
                                        (Object.values(n.handles).forEach((e) => {
                                            e.point = j.B.toFixed(j.B.sub(e.point, r));
                                        }),
                                        (n.point = j.B.toFixed(j.B.add(n.point, r)))),
                                    n
                                );
                            }),
                            V(this, "getSvgElement", (e, t) => {
                                var i, s, n, a, o;
                                let r = null == (i = document.getElementById(e.id + "_svg")) ? void 0 : i.cloneNode(!0);
                                if (r) {
                                    if (null != (a = null == (n = null == (s = e.label) ? void 0 : s.trim()) ? void 0 : n.length) && a) {
                                        let i = document.createElementNS("http://www.w3.org/2000/svg", "g"),
                                            s = tp(e.style),
                                            n = eq(e.label, s),
                                            a = tl(e.style.size, e.style.font) * (null != (o = e.style.scale) ? o : 1),
                                            l = td(e.style.font).slice(1, -1),
                                            d = e0(e.label, a, l, "start", n[0], !1),
                                            h,
                                            { start: p, bend: c, end: u } = e.handles;
                                        if (1 > j.B.dist(c.point, j.B.toFixed(j.B.med(p.point, u.point)))) h = j.B.dist(p.point, u.point);
                                        else {
                                            let e = tT(p.point, c.point, u.point);
                                            h = Math.abs(tQ(e.slice(0, 2), e[2], p.point, u.point));
                                        }
                                        let g = Math.max(0.5, Math.min(1, Math.max(h / (n[1] + 128), h / (n[0] + 128)))),
                                            m = this.getBounds(e),
                                            f = j.B.sub(e.handles.bend.point, [m.width / 2, m.height / 2]),
                                            b = m.width / 2 - (n[0] / 2) * g + f[0],
                                            v = m.height / 2 - (n[1] / 2) * g + f[1];
                                        return (
                                            d.setAttribute("transform", `translate(${b}, ${v})`),
                                            d.setAttribute("fill", tg(e.style, t).stroke),
                                            d.setAttribute("transform-origin", "center center"),
                                            i.setAttribute("text-align", "center"),
                                            i.setAttribute("text-anchor", "middle"),
                                            i.appendChild(r),
                                            i.appendChild(d),
                                            i
                                        );
                                    }
                                    return r;
                                }
                            });
                    }
                },
                tN = ez("div", { width: "100%", height: "100%" }),
                tW = { easing: (e) => Math.sin((e * Math.PI) / 2), simulatePressure: !0 },
                tG = { easing: (e) => e * e, simulatePressure: !1 };
            function tY(e) {
                return $(Y({ size: 1 + 1.5 * tg(e.style).strokeWidth, thinning: 0.65, streamline: 0.65, smoothing: 0.65 }, 0.5 === e.points[1][2] ? tW : tG), { last: e.isComplete });
            }
            function t$(e, t) {
                return (0, T.tt)(e.points, t);
            }
            function tX(e) {
                let { points: t } = e;
                if (t.length < 2) return "M 0 0 L 0 0";
                let i = tY(e),
                    s = t$(e, i),
                    n = t[t.length - 1];
                return j.Z.isEqual(s[0].point, n) || s.push({ point: n }), x.cQ.getSvgPathFromStrokePoints(s);
            }
            var tV = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "draw"),
                            V(this, "pointsBoundsCache", new WeakMap([])),
                            V(this, "shapeBoundsCache", new Map()),
                            V(this, "rotatedCache", new WeakMap([])),
                            V(this, "pointCache", {}),
                            V(this, "canClone", !0),
                            V(this, "getShape", (e) => x.cQ.deepMerge({ id: "id", type: "draw", name: "Draw", parentId: "page", childIndex: 1, point: [0, 0], rotation: 0, style: tm, points: [], isComplete: !1 }, e)),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, meta: t, isSelected: i, isGhost: s, events: n }, a) => {
                                    let { points: o, style: r, isComplete: l } = e,
                                        d = P.useMemo(() => (e.points.length < 2 ? "" : x.cQ.getSvgPathFromStroke((0, T.tt)(e.points, tY(e)).map((e) => e.point))), [o, r.size]),
                                        h = P.useMemo(
                                            () =>
                                                "draw" === r.dash
                                                    ? (function (e) {
                                                          if (e.points.length < 2) return "";
                                                          let t = tY(e),
                                                              i = t$(e, t);
                                                          return x.cQ.getSvgPathFromStroke((0, T.ib)(i, t));
                                                      })(e)
                                                    : tX(e),
                                            [o, r.size, r.dash, l]
                                        ),
                                        { stroke: p, fill: c, strokeWidth: u } = tg(r, t.isDarkMode),
                                        g = this.getBounds(e);
                                    if (g.width <= u / 2 && g.height <= u / 2)
                                        return P.createElement(x.gk, Y({ ref: a, id: e.id + "_svg" }, n), P.createElement("circle", { r: 1 + u, fill: p, stroke: p, pointerEvents: "all", opacity: s ? 0.3 : 1 }));
                                    let m = r.isFilled && o.length > 3 && j.B.dist(o[0], o[o.length - 1]) < 2 * u;
                                    if ("draw" === e.style.dash)
                                        return P.createElement(
                                            x.gk,
                                            Y({ ref: a, id: e.id + "_svg" }, n),
                                            P.createElement(
                                                "g",
                                                { opacity: s ? 0.3 : 1 },
                                                P.createElement("path", { className: m || i ? "tl-fill-hitarea" : "tl-stroke-hitarea", d: h }),
                                                m && P.createElement("path", { d: d, stroke: "none", fill: c, strokeLinejoin: "round", strokeLinecap: "round", pointerEvents: "none" }),
                                                P.createElement("path", { d: h, fill: p, stroke: p, strokeWidth: u / 2, strokeLinejoin: "round", strokeLinecap: "round", pointerEvents: "none" })
                                            )
                                        );
                                    let f = { draw: "none", solid: "none", dotted: `0.1 ${4 * u}`, dashed: `${4 * u} ${4 * u}` }[r.dash],
                                        b = { draw: "none", solid: "none", dotted: "0", dashed: "0" }[r.dash];
                                    return P.createElement(
                                        x.gk,
                                        Y({ ref: a, id: e.id + "_svg" }, n),
                                        P.createElement(
                                            "g",
                                            { opacity: s ? 0.3 : 1 },
                                            P.createElement("path", { className: m && i ? "tl-fill-hitarea" : "tl-stroke-hitarea", d: h }),
                                            P.createElement("path", { d: h, fill: m ? c : "none", stroke: "none", strokeWidth: Math.min(4, 2 * u), strokeLinejoin: "round", strokeLinecap: "round", pointerEvents: "none" }),
                                            P.createElement("path", {
                                                d: h,
                                                fill: "none",
                                                stroke: p,
                                                strokeWidth: 1 + 1.5 * u,
                                                strokeDasharray: f,
                                                strokeDashoffset: b,
                                                strokeLinejoin: "round",
                                                strokeLinecap: "round",
                                                pointerEvents: "none",
                                            })
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let { points: t } = e,
                                        i = P.useMemo(() => tX(e), [t]),
                                        s = this.getBounds(e);
                                    return s.width < 4 && s.height < 4 ? P.createElement("circle", { x: s.width / 2, y: s.height / 2, r: 1 }) : P.createElement("path", { d: i });
                                })
                            ),
                            V(this, "transform", (e, t, { initialShape: i, scaleX: s, scaleY: n }) => {
                                let a = x.cQ.getFromCache(this.boundsCache, i, () => x.cQ.getBoundsFromPoints(i.points)),
                                    o = i.points.map(([e, i, o]) => [t.width * (s < 0 ? 1 - e / a.width : e / a.width), t.height * (n < 0 ? 1 - i / a.height : i / a.height), o]),
                                    r = x.cQ.getBoundsFromPoints(e.points);
                                return { points: o, point: j.B.sub([t.minX, t.minY], [r.minX, r.minY]) };
                            }),
                            V(this, "getBounds", (e) => {
                                let t = !this.pointsBoundsCache.has(e.points),
                                    i = this.pointCache[e.id] !== e.point;
                                if (t) {
                                    let t = x.cQ.getBoundsFromPoints(e.points);
                                    this.pointsBoundsCache.set(e.points, t), this.shapeBoundsCache.set(e.id, x.cQ.translateBounds(t, e.point)), (this.pointCache[e.id] = e.point);
                                } else i && !t && ((this.pointCache[e.id] = e.point), this.shapeBoundsCache.set(e.id, x.cQ.translateBounds(this.pointsBoundsCache.get(e.points), e.point)));
                                return this.shapeBoundsCache.get(e.id);
                            }),
                            V(this, "shouldRender", (e, t) => t.points !== e.points || t.style !== e.style || t.isComplete !== e.isComplete),
                            V(this, "hitTestPoint", (e, t) => {
                                let i = j.B.sub(t, e.point);
                                return x.cQ.pointInPolyline(i, e.points);
                            }),
                            V(this, "hitTestLineSegment", (e, t, i) => {
                                let { points: s, point: n } = e,
                                    a = j.B.sub(t, n),
                                    o = j.B.sub(i, n),
                                    r = this.getBounds(e);
                                if (r.width < 8 && r.height < 8) return 5 > j.B.distanceToLineSegment(t, i, x.cQ.getBoundsCenter(r));
                                if ((0, A.WU)(a, o, r)) {
                                    for (let e = 1; e < s.length; e++) if ((0, A.T9)(s[e - 1], s[e], a, o).didIntersect) return !0;
                                }
                                return !1;
                            }),
                            V(this, "hitTestBounds", (e, t) => {
                                if (!e.rotation) {
                                    let i = this.getBounds(e);
                                    return x.cQ.boundsContain(t, i) || ((x.cQ.boundsContain(i, t) || (0, A.Sn)(i, t).length > 0) && (0, A.zb)(x.cQ.translateBounds(t, j.B.neg(e.point)), e.points).length > 0);
                                }
                                let i = this.getRotatedBounds(e),
                                    s = x.cQ.getFromCache(this.rotatedCache, e, () => {
                                        let t = x.cQ.getBoundsCenter(x.cQ.getBoundsFromPoints(e.points));
                                        return e.points.map((i) => j.B.rotWith(i, t, e.rotation || 0));
                                    });
                                return x.cQ.boundsContain(t, i) || (0, A.zb)(x.cQ.translateBounds(t, j.B.neg(e.point)), s).length > 0;
                            });
                    }
                },
                tq = P.memo(function ({ radius: e, style: t, isSelected: i, isDarkMode: s }) {
                    let { stroke: n, strokeWidth: a, fill: o } = tg(t, s),
                        r = 1 + 1.618 * a,
                        l = Math.max(0, e[0] - r / 2),
                        d = Math.max(0, e[1] - r / 2),
                        h = x.cQ.perimeterOfEllipse(l, d),
                        { strokeDasharray: p, strokeDashoffset: c } = x.cQ.getPerfectDashProps(h < 64 ? 2 * h : h, 1.618 * a, t.dash, 4);
                    return P.createElement(
                        P.Fragment,
                        null,
                        P.createElement("ellipse", { className: t.isFilled || i ? "tl-fill-hitarea" : "tl-stroke-hitarea", cx: e[0], cy: e[1], rx: e[0], ry: e[1] }),
                        P.createElement("ellipse", { cx: e[0], cy: e[1], rx: l, ry: d, fill: o, stroke: n, strokeWidth: r, strokeDasharray: p, strokeDashoffset: c, pointerEvents: "none", strokeLinecap: "round", strokeLinejoin: "round" })
                    );
                });
            function tJ(e, t, i) {
                let { strokeWidth: s } = tg(i),
                    n = x.cQ.rng(e),
                    a = t[0] + n() * s * 2,
                    o = t[1] + n() * s * 2,
                    r = x.cQ.perimeterOfEllipse(a, o),
                    l = [],
                    d = Math.PI + Math.PI * n(),
                    h = Math.abs(n()),
                    p = Math.max(16, r / 10);
                for (let e = 0; e < p; e++) {
                    let i = eR.easeInOutSine(e / (p + 1)),
                        s = 2 * d + Math.PI * (2 + h) * i,
                        r = Math.cos(s),
                        c = Math.sin(s);
                    l.push([a * r + t[0], o * c + t[1], i + 0.5 + n() / 2]);
                }
                return (0, T.tt)(l, { size: 1 + 2 * s, thinning: 0.618, end: { taper: r / 8 }, start: { taper: r / 12 }, streamline: 0, simulatePressure: !0 });
            }
            function t0(e, t, i) {
                return x.cQ.getSvgPathFromStrokePoints(tJ(e, t, i));
            }
            var t1 = P.memo(function ({ id: e, radius: t, style: i, isSelected: s, isDarkMode: n }) {
                    let { stroke: a, strokeWidth: o, fill: r } = tg(i, n),
                        l = (function (e, t, i) {
                            let { strokeWidth: s } = tg(i),
                                n = x.cQ.rng(e),
                                a = t[0] + n() * s * 2,
                                o = t[1] + n() * s * 2,
                                r = x.cQ.perimeterOfEllipse(a, o);
                            return x.cQ.getSvgPathFromStroke((0, T.ib)(tJ(e, t, i), { size: 2 + 2 * s, thinning: 0.618, end: { taper: r / 8 }, start: { taper: r / 12 }, streamline: 0, simulatePressure: !0 }));
                        })(e, t, i);
                    return P.createElement(
                        P.Fragment,
                        null,
                        P.createElement("ellipse", { className: i.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea", cx: t[0], cy: t[1], rx: t[0], ry: t[1] }),
                        i.isFilled && P.createElement("path", { d: t0(e, t, i), stroke: "none", fill: r, pointerEvents: "none" }),
                        P.createElement("path", { d: l, fill: a, stroke: a, strokeWidth: o, pointerEvents: "none", strokeLinecap: "round", strokeLinejoin: "round" })
                    );
                }),
                t2 = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "ellipse"),
                            V(this, "canBind", !0),
                            V(this, "canClone", !0),
                            V(this, "canEdit", !0),
                            V(this, "getShape", (e) =>
                                x.cQ.deepMerge({ id: "id", type: "ellipse", name: "Ellipse", parentId: "page", childIndex: 1, point: [0, 0], radius: [1, 1], rotation: 0, style: tm, label: "", labelPoint: [0.5, 0.5] }, e)
                            ),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, isGhost: t, isSelected: i, isBinding: s, isEditing: n, meta: a, bounds: o, events: r, onShapeChange: l, onShapeBlur: d }, h) => {
                                    let { id: p, radius: c, style: u, label: g = "", labelPoint: m = eF } = e,
                                        f = tp(e.style),
                                        b = tg(u, a.isDarkMode),
                                        v = 1 + 1.618 * b.strokeWidth,
                                        y = Math.max(0, c[0] - v / 2),
                                        S = Math.max(0, c[1] - v / 2),
                                        I = "draw" === u.dash ? t1 : tq,
                                        k = P.useCallback((e) => (null == l ? void 0 : l({ id: p, label: e })), [l]);
                                    return P.createElement(
                                        t5,
                                        Y({ ref: h }, r),
                                        P.createElement(tx, { isEditing: n, onChange: k, onBlur: d, font: f, text: g, color: b.stroke, offsetX: (m[0] - 0.5) * o.width, offsetY: (m[1] - 0.5) * o.height, shape: e }),
                                        P.createElement(
                                            x.gk,
                                            { id: e.id + "_svg", opacity: t ? 0.3 : 1, shapeStyle: u },
                                            s && P.createElement("ellipse", { className: "tl-binding-indicator", cx: c[0], cy: c[1], rx: y, ry: S, strokeWidth: this.bindingDistance }),
                                            P.createElement(I, { id: p, radius: c, style: u, isSelected: i, isDarkMode: a.isDarkMode })
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let { id: t, radius: i, style: s } = e,
                                        n = 1 + 1.618 * tg(s).strokeWidth,
                                        a = Math.max(0, i[0] - n / 2),
                                        o = Math.max(0, i[1] - n / 2);
                                    return "draw" === s.dash ? P.createElement("path", { d: t0(t, i, s) }) : P.createElement("ellipse", { cx: i[0], cy: i[1], rx: a, ry: o });
                                })
                            ),
                            V(this, "hitTestPoint", (e, t) => x.cQ.pointInBounds(t, this.getRotatedBounds(e)) && x.cQ.pointInEllipse(t, this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0)),
                            V(this, "hitTestLineSegment", (e, t, i) => (0, A.qx)(t, i, this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0).didIntersect),
                            V(this, "getBounds", (e) => x.cQ.getFromCache(this.boundsCache, e, () => x.cQ.getRotatedEllipseBounds(e.point[0], e.point[1], e.radius[0], e.radius[1], 0))),
                            V(this, "getRotatedBounds", (e) => x.cQ.getRotatedEllipseBounds(e.point[0], e.point[1], e.radius[0], e.radius[1], e.rotation)),
                            V(this, "hitTestBounds", (e, t) => {
                                let i = this.getBounds(e);
                                return x.cQ.boundsContained(i, t) || (0, A.Rt)(this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0, t).length > 0;
                            }),
                            V(this, "shouldRender", (e, t) => t.radius !== e.radius || t.style !== e.style || t.label !== e.label),
                            V(this, "getCenter", (e) => j.B.add(e.point, e.radius)),
                            V(this, "getBindingPoint", (e, t, i, s, n, a) => {
                                {
                                    let t = this.getExpandedBounds(e),
                                        o = this.getCenter(e),
                                        r,
                                        l;
                                    if (!x.cQ.pointInEllipse(i, o, e.radius[0] + this.bindingDistance, e.radius[1] + this.bindingDistance)) return;
                                    if (a) (r = 12 > j.B.dist(i, this.getCenter(e)) ? [0.5, 0.5] : j.B.divV(j.B.sub(i, [t.minX, t.minY]), [t.width, t.height])), (l = 0);
                                    else {
                                        let a = (0, A.Zz)(s, n, o, e.radius[0], e.radius[1], e.rotation || 0).points.sort((e, t) => j.B.dist(e, s) - j.B.dist(t, s))[0];
                                        if ((a || (a = (0, A.qx)(i, o, o, e.radius[0], e.radius[1], e.rotation || 0).points.sort((e, t) => j.B.dist(e, i) - j.B.dist(t, i))[0]), !a)) return;
                                        let d = j.B.med(i, a);
                                        if (
                                            ((r = 12 > j.B.distanceToLineSegment(i, d, this.getCenter(e)) ? [0.5, 0.5] : j.B.divV(j.B.sub(d, [t.minX, t.minY]), [t.width, t.height])),
                                            x.cQ.pointInEllipse(i, o, e.radius[0], e.radius[1], e.rotation || 0))
                                        )
                                            l = this.bindingDistance / 2;
                                        else {
                                            let t = (0, A.qx)(i, o, o, e.radius[0], e.radius[1], e.rotation || 0).points[0];
                                            if (!t) return;
                                            l = Math.max(this.bindingDistance / 2, j.B.dist(i, t));
                                        }
                                    }
                                    return { point: r, distance: l };
                                }
                            }),
                            V(this, "transform", (e, t, { scaleX: i, scaleY: s, initialShape: n }) => {
                                let { rotation: a = 0 } = n;
                                return { point: [t.minX, t.minY], radius: [t.width / 2, t.height / 2], rotation: (i < 0 && s >= 0) || (s < 0 && i >= 0) ? -(a || 0) : a || 0 };
                            }),
                            V(this, "transformSingle", (e, t) => ({ point: j.B.toFixed([t.minX, t.minY]), radius: j.B.div([t.width, t.height], 2) }));
                    }
                },
                t5 = ez("div", { width: "100%", height: "100%" }),
                t3 = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "group"),
                            V(this, "canBind", !0),
                            V(this, "getShape", (e) => x.cQ.deepMerge({ id: "id", type: "group", name: "Group", parentId: "page", childIndex: 1, point: [0, 0], size: [100, 100], rotation: 0, children: [], style: tm }, e)),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, isBinding: t, isGhost: i, isHovered: s, isSelected: n, events: a }, o) => {
                                    let { id: r, size: l } = e,
                                        d = Math.max(0, l[0] - 1),
                                        h = Math.max(0, l[1] - 1),
                                        p = [
                                            [[1, 1], [d, 1], d - 1],
                                            [[d, 1], [d, h], h - 1],
                                            [[d, h], [1, h], d - 1],
                                            [[1, h], [1, 1], h - 1],
                                        ].map(([e, t], i) => P.createElement("line", { key: r + "_" + i, x1: e[0], y1: e[1], x2: t[0], y2: t[1] }));
                                    return P.createElement(
                                        x.gk,
                                        Y({ ref: o }, a),
                                        t && P.createElement("rect", { className: "tl-binding-indicator", strokeWidth: this.bindingDistance }),
                                        P.createElement(
                                            "g",
                                            { opacity: i ? 0.3 : 1 },
                                            P.createElement("rect", { x: 0, y: 0, width: l[0], height: l[1], fill: "transparent", pointerEvents: "all" }),
                                            P.createElement(t4, { stroke: "black", opacity: s || n ? 1 : 0, strokeLinecap: "round", pointerEvents: "stroke" }, p)
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let { id: t, size: i } = e,
                                        s = Math.max(0, i[0] - 1),
                                        n = Math.max(0, i[1] - 1),
                                        a = [
                                            [[1, 1], [s, 1], s - 1],
                                            [[s, 1], [s, n], n - 1],
                                            [[s, n], [1, n], s - 1],
                                            [[1, n], [1, 1], n - 1],
                                        ].map(([e, i], s) => P.createElement("line", { key: t + "_" + s, x1: e[0], y1: e[1], x2: i[0], y2: i[1] }));
                                    return P.createElement(t4, { strokeLinecap: "round", pointerEvents: "stroke" }, a);
                                })
                            ),
                            V(this, "getBounds", (e) => eN(e, this.boundsCache)),
                            V(this, "shouldRender", (e, t) => t.size !== e.size || t.style !== e.style);
                    }
                },
                t4 = ez("g", { strokeWidth: "calc(1.5px * var(--tl-scale))", strokeDasharray: "calc(1px * var(--tl-scale)), calc(3px * var(--tl-scale))" }),
                t8 = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "image"),
                            V(this, "canBind", !0),
                            V(this, "canClone", !0),
                            V(this, "isAspectRatioLocked", !0),
                            V(this, "showCloneHandles", !1),
                            V(this, "getShape", (e) =>
                                x.cQ.deepMerge({ id: "image", type: "image", name: "Image", parentId: "page", childIndex: 1, point: [0, 0], size: [1, 1], rotation: 0, style: $(Y({}, tm), { isFilled: !0 }), assetId: "assetId" }, e)
                            ),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, asset: t = { src: "" }, isBinding: i, isGhost: s, meta: n, events: a, onShapeChange: o }, r) => {
                                    let { size: l, style: d } = e,
                                        { bindingDistance: h } = this,
                                        p = P.useRef(null),
                                        c = P.useRef(null);
                                    return (
                                        P.useLayoutEffect(() => {
                                            let e = c.current;
                                            if (!e) return;
                                            let [t, i] = l;
                                            (e.style.width = `${t}px`), (e.style.height = `${i}px`);
                                        }, [l]),
                                        P.createElement(
                                            x.G7,
                                            Y({ ref: r }, a),
                                            i &&
                                                P.createElement("div", {
                                                    className: "tl-binding-indicator",
                                                    style: {
                                                        position: "absolute",
                                                        top: `calc(${-h}px * var(--tl-zoom))`,
                                                        left: `calc(${-h}px * var(--tl-zoom))`,
                                                        width: `calc(100% + ${2 * h}px * var(--tl-zoom))`,
                                                        height: `calc(100% + ${2 * h}px * var(--tl-zoom))`,
                                                        backgroundColor: "var(--tl-selectFill)",
                                                    },
                                                }),
                                            P.createElement(t6, { ref: c, isDarkMode: n.isDarkMode, isFilled: d.isFilled, isGhost: s }, P.createElement(t9, { id: e.id + "_image", ref: p, src: t.src, alt: "tl_image_asset", draggable: !1 }))
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let {
                                        size: [t, i],
                                    } = e;
                                    return P.createElement("rect", { x: 0, y: 0, rx: 2, ry: 2, width: Math.max(1, t), height: Math.max(1, i) });
                                })
                            ),
                            V(this, "getBounds", (e) => eN(e, this.boundsCache)),
                            V(this, "shouldRender", (e, t) => t.size !== e.size || t.style !== e.style),
                            V(this, "transform", tM),
                            V(this, "transformSingle", tD),
                            V(this, "getSvgElement", (e) => {
                                let t = this.getBounds(e),
                                    i = document.createElementNS("http://www.w3.org/2000/svg", "image");
                                return i.setAttribute("width", `${t.width}`), i.setAttribute("height", `${t.height}`), i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), i;
                            });
                    }
                },
                t6 = (0, D.zo)("div", {
                    pointerEvents: "all",
                    position: "relative",
                    fontFamily: "sans-serif",
                    fontSize: "2em",
                    height: "100%",
                    width: "100%",
                    borderRadius: "3px",
                    perspective: "800px",
                    overflow: "hidden",
                    p: { userSelect: "none" },
                    img: { userSelect: "none" },
                    variants: { isGhost: { false: { opacity: 1 }, true: { transition: "opacity .2s", opacity: 0.3 } }, isFilled: { true: {}, false: {} }, isDarkMode: { true: {}, false: {} } },
                    compoundVariants: [
                        { isFilled: !0, isDarkMode: !0, css: {} },
                        { isFilled: !0, isDarkMode: !1, css: {} },
                    ],
                }),
                t9 = (0, D.zo)("img", { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", maxWidth: "100%", minWidth: "100%", pointerEvents: "none", objectFit: "cover", userSelect: "none", borderRadius: 2 });
            function t7({ strokeWidth: e, size: t }) {
                return P.createElement("rect", { className: "tl-binding-indicator", x: e, y: e, width: Math.max(0, t[0] - e / 2), height: Math.max(0, t[1] - e / 2), strokeWidth: 32 });
            }
            var ie = P.memo(function ({ id: e, style: t, size: i, isSelected: s, isDarkMode: n }) {
                let { stroke: a, strokeWidth: o, fill: r } = tg(t, n),
                    l = 1 + 1.618 * o,
                    d = Math.max(0, i[0] - l / 2),
                    h = Math.max(0, i[1] - l / 2),
                    p = [
                        [[l / 2, l / 2], [d, l / 2], d - l / 2],
                        [[d, l / 2], [d, h], h - l / 2],
                        [[d, h], [l / 2, h], d - l / 2],
                        [[l / 2, h], [l / 2, l / 2], h - l / 2],
                    ].map(([i, s, n], a) => {
                        let { strokeDasharray: r, strokeDashoffset: l } = x.cQ.getPerfectDashProps(n, 1.618 * o, t.dash);
                        return P.createElement("line", { key: e + "_" + a, x1: i[0], y1: i[1], x2: s[0], y2: s[1], strokeDasharray: r, strokeDashoffset: l });
                    });
                return P.createElement(
                    P.Fragment,
                    null,
                    P.createElement("rect", { className: s || t.isFilled ? "tl-fill-hitarea" : "tl-stroke-hitarea", x: l / 2, y: l / 2, width: d, height: h, strokeWidth: 16 }),
                    t.isFilled && P.createElement("rect", { x: l / 2, y: l / 2, width: d, height: h, fill: r, pointerEvents: "none" }),
                    P.createElement("g", { pointerEvents: "none", stroke: a, strokeWidth: l, strokeLinecap: "round" }, p)
                );
            });
            function it(e, t, i) {
                let s, n, a, o, r, l, d, h, p, c, u, g, m, f, b, v;
                let { points: y } =
                        ((s = tg(t)),
                        (n = x.cQ.rng(e)),
                        (a = s.strokeWidth),
                        (o = Math.max(0, i[0])),
                        (r = Math.max(0, i[1])),
                        (l = Array.from([, , , ,]).map(() => [n() * a * 0.75, n() * a * 0.75])),
                        (d = j.Z.add([a / 2, a / 2], l[0])),
                        (h = j.Z.add([o - a / 2, a / 2], l[1])),
                        (p = j.Z.add([o - a / 2, r - a / 2], l[2])),
                        (c = j.Z.add([a / 2, r - a / 2], l[3])),
                        (u = Math.round(Math.abs(8 * n()))),
                        (g = Math.min(o / 4, 2 * a)),
                        (m = Math.min(r / 4, 2 * a)),
                        (f = Math.max(8, Math.floor(o / 16))),
                        (b = Math.max(8, Math.floor(r / 16))),
                        {
                            points: [
                                ...(v = x.cQ.rotateArray(
                                    [
                                        j.Z.pointsBetween(j.Z.add(d, [g, 0]), j.Z.sub(h, [g, 0]), f),
                                        j.Z.pointsBetween(j.Z.add(h, [0, m]), j.Z.sub(p, [0, m]), b),
                                        j.Z.pointsBetween(j.Z.sub(p, [g, 0]), j.Z.add(c, [g, 0]), f),
                                        j.Z.pointsBetween(j.Z.sub(c, [0, m]), j.Z.add(d, [0, m]), b),
                                    ],
                                    u
                                )).flat(),
                                ...v[0],
                            ].slice(5, Math.floor(-((u % 2 == 0 ? f : b) / 2)) + 3),
                        }),
                    { strokeWidth: S } = tg(t);
                return { points: y, options: { size: S, thinning: 0.65, streamline: 0.3, smoothing: 1, simulatePressure: !1, last: !0 } };
            }
            function ii(e, t, i) {
                let { points: s, options: n } = it(e, t, i);
                return x.cQ.getSvgPathFromStrokePoints((0, T.tt)(s, n));
            }
            var is,
                ia,
                io,
                ir = P.memo(function ({ id: e, style: t, size: i, isSelected: s, isDarkMode: n }) {
                    let { isFilled: a } = t,
                        { stroke: o, strokeWidth: r, fill: l } = tg(t, n),
                        d = (function (e, t, i) {
                            let { points: s, options: n } = it(e, t, i),
                                a = (0, T.ZP)(s, n);
                            return x.cQ.getSvgPathFromStroke(a);
                        })(e, t, i),
                        h = ii(e, t, i);
                    return P.createElement(
                        P.Fragment,
                        null,
                        P.createElement("path", { className: t.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea", d: h }),
                        a && P.createElement("path", { d: h, fill: l, pointerEvents: "none" }),
                        P.createElement("path", { d: d, fill: o, stroke: o, strokeWidth: r, pointerEvents: "none" })
                    );
                }),
                il = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "rectangle"),
                            V(this, "canBind", !0),
                            V(this, "canClone", !0),
                            V(this, "canEdit", !0),
                            V(this, "getShape", (e) =>
                                x.cQ.deepMerge({ id: "id", type: "rectangle", name: "Rectangle", parentId: "page", childIndex: 1, point: [0, 0], size: [1, 1], rotation: 0, style: tm, label: "", labelPoint: [0.5, 0.5] }, e)
                            ),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, isEditing: t, isBinding: i, isSelected: s, isGhost: n, meta: a, bounds: o, events: r, onShapeBlur: l, onShapeChange: d }, h) => {
                                    let { id: p, size: c, style: u, label: g = "", labelPoint: m = eF } = e,
                                        f = tp(u),
                                        b = tg(u, a.isDarkMode),
                                        v = "draw" === u.dash ? ir : ie,
                                        y = P.useCallback((e) => (null == d ? void 0 : d({ id: p, label: e })), [d]);
                                    return P.createElement(
                                        id,
                                        Y({ ref: h }, r),
                                        P.createElement(tx, { isEditing: t, onChange: y, onBlur: l, font: f, text: g, color: b.stroke, offsetX: (m[0] - 0.5) * o.width, offsetY: (m[1] - 0.5) * o.height, shape: e }),
                                        P.createElement(
                                            x.gk,
                                            { id: e.id + "_svg", opacity: n ? 0.3 : 1, shapeStyle: u },
                                            i && P.createElement(t7, { strokeWidth: b.strokeWidth, size: c }),
                                            P.createElement(v, { id: p, style: u, size: c, isSelected: s, isDarkMode: a.isDarkMode })
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let { id: t, style: i, size: s } = e,
                                        n = tg(i, !1).strokeWidth;
                                    return "draw" === i.dash ? P.createElement("path", { d: ii(t, i, s) }) : P.createElement("rect", { x: n, y: n, rx: 1, ry: 1, width: Math.max(1, s[0] - 2 * n), height: Math.max(1, s[1] - 2 * n) });
                                })
                            ),
                            V(this, "getBounds", (e) => eN(e, this.boundsCache)),
                            V(this, "shouldRender", (e, t) => t.size !== e.size || t.style !== e.style || t.label !== e.label),
                            V(this, "transform", tM),
                            V(this, "transformSingle", tD);
                    }
                },
                id = ez("div", { width: "100%", height: "100%" }),
                ih = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "sticky"),
                            V(this, "canBind", !0),
                            V(this, "canEdit", !0),
                            V(this, "canClone", !0),
                            V(this, "hideResizeHandles", !0),
                            V(this, "showCloneHandles", !0),
                            V(this, "getShape", (e) => x.cQ.deepMerge({ id: "id", type: "sticky", name: "Sticky", parentId: "page", childIndex: 1, point: [0, 0], size: [200, 200], text: "", rotation: 0, style: tf }, e)),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, meta: t, events: i, isGhost: s, isBinding: n, isEditing: a, onShapeBlur: o, onShapeChange: r }, l) => {
                                    let d = tc(e.style),
                                        { color: h, fill: p } = tu(e.style, t.isDarkMode),
                                        c = P.useRef(null),
                                        u = P.useRef(null),
                                        g = P.useRef(null),
                                        m = P.useRef(!1),
                                        f = P.useCallback((e) => {
                                            e.stopPropagation();
                                        }, []),
                                        b = P.useCallback(
                                            (t) => {
                                                null == r || r({ id: e.id, type: e.type, text: tB.normalizeText(t) });
                                            },
                                            [e.id]
                                        ),
                                        v = P.useCallback(
                                            (e) => {
                                                b(e.currentTarget.value);
                                            },
                                            [r, b]
                                        ),
                                        y = P.useCallback(
                                            (t) => {
                                                if ("Escape" === t.key) {
                                                    t.preventDefault(), t.stopPropagation(), null == o || o();
                                                    return;
                                                }
                                                if ("Tab" === t.key && 0 === e.text.length) {
                                                    t.preventDefault();
                                                    return;
                                                }
                                                if ("Meta" === t.key || t.metaKey) {
                                                    if ("z" === t.key && t.metaKey) {
                                                        t.shiftKey ? document.execCommand("redo", !1) : document.execCommand("undo", !1), t.stopPropagation(), t.preventDefault();
                                                        return;
                                                    }
                                                } else t.stopPropagation();
                                                (t.metaKey || t.ctrlKey) && "=" === t.key && t.preventDefault(),
                                                    "Tab" === t.key &&
                                                        (t.preventDefault(), t.shiftKey ? tb.unindent(t.currentTarget) : tb.indent(t.currentTarget), null == r || r($(Y({}, e), { text: tB.normalizeText(t.currentTarget.value) })));
                                            },
                                            [e, r]
                                        ),
                                        S = P.useCallback((e) => {
                                            e.currentTarget.setSelectionRange(0, 0), null == o || o();
                                        }, []),
                                        I = P.useCallback(
                                            (e) => {
                                                a && m.current && e.currentTarget.select();
                                            },
                                            [a]
                                        );
                                    P.useEffect(() => {
                                        if (a) {
                                            m.current = !0;
                                            let e = u.current;
                                            e.focus(), e.select();
                                        }
                                    }, [a]),
                                        P.useEffect(() => {
                                            let t = g.current,
                                                { size: i } = e,
                                                { offsetHeight: s } = t,
                                                n = ic - 2 * ip;
                                            if (s === i[1] - 2 * ip) return;
                                            if (s > n) {
                                                null == r || r({ id: e.id, size: [i[0], s + 2 * ip] });
                                                return;
                                            }
                                            if (s < n && i[1] > ic) {
                                                null == r || r({ id: e.id, size: [i[0], ic] });
                                                return;
                                            }
                                            let a = u.current;
                                            null == a || a.focus();
                                        }, [e.text, e.size[1], e.style]);
                                    let k = { font: d, color: h, textShadow: t.isDarkMode ? "0.5px 0.5px 2px rgba(255, 255, 255,.25)" : "0.5px 0.5px 2px rgba(255, 255, 255,.5)" };
                                    return P.createElement(
                                        x.G7,
                                        Y({ ref: l }, i),
                                        P.createElement(
                                            iu,
                                            { ref: c, isDarkMode: t.isDarkMode, isGhost: s, style: Y({ backgroundColor: p }, k) },
                                            n &&
                                                P.createElement("div", {
                                                    className: "tl-binding-indicator",
                                                    style: {
                                                        position: "absolute",
                                                        top: -this.bindingDistance,
                                                        left: -this.bindingDistance,
                                                        width: `calc(100% + ${2 * this.bindingDistance}px)`,
                                                        height: `calc(100% + ${2 * this.bindingDistance}px)`,
                                                        backgroundColor: "var(--tl-selectFill)",
                                                    },
                                                }),
                                            P.createElement(im, { ref: g, isEditing: a, alignment: e.style.textAlign }, e.text, "​"),
                                            a &&
                                                P.createElement(ib, {
                                                    ref: u,
                                                    onPointerDown: f,
                                                    value: e.text,
                                                    onChange: v,
                                                    onKeyDown: y,
                                                    onFocus: I,
                                                    onBlur: S,
                                                    tabIndex: -1,
                                                    autoComplete: "false",
                                                    autoCapitalize: "false",
                                                    autoCorrect: "false",
                                                    autoSave: "false",
                                                    autoFocus: !0,
                                                    spellCheck: !0,
                                                    alignment: e.style.textAlign,
                                                    onContextMenu: tv,
                                                    onCopy: tv,
                                                    onPaste: tv,
                                                    onCut: tv,
                                                })
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let {
                                        size: [t, i],
                                    } = e;
                                    return P.createElement("rect", { x: 0, y: 0, rx: 3, ry: 3, width: Math.max(1, t), height: Math.max(1, i) });
                                })
                            ),
                            V(this, "getBounds", (e) => eN(e, this.boundsCache)),
                            V(this, "shouldRender", (e, t) => t.size !== e.size || t.style !== e.style || t.text !== e.text),
                            V(this, "transform", (e, t, { scaleX: i, scaleY: s, transformOrigin: n }) => ({
                                point: j.B.toFixed([t.minX + (t.width - e.size[0]) * (i < 0 ? 1 - n[0] : n[0]), t.minY + (t.height - e.size[1]) * (s < 0 ? 1 - n[1] : n[1])]),
                            })),
                            V(this, "transformSingle", (e) => e),
                            V(this, "getSvgElement", (e, t) => {
                                var i, s;
                                let n = this.getBounds(e),
                                    a = tu(e.style, t),
                                    o = to[e.style.size] * (null != (i = e.style.scale) ? i : 1),
                                    r = td(e.style.font).slice(1, -1),
                                    l = null != (s = e.style.textAlign) ? s : "start",
                                    d = e0(e.text, o, r, l, n.width - 2 * ip, !0);
                                d.setAttribute("fill", a.color), d.setAttribute("transform", `translate(${ip}, ${ip})`);
                                let h = document.createElementNS("http://www.w3.org/2000/svg", "g"),
                                    p = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                return (
                                    p.setAttribute("width", n.width + ""), p.setAttribute("height", n.height + ""), p.setAttribute("fill", a.fill), p.setAttribute("rx", "3"), p.setAttribute("ry", "3"), h.appendChild(p), h.appendChild(d), h
                                );
                            });
                    }
                },
                ip = 16,
                ic = 200,
                iu = ez("div", {
                    pointerEvents: "all",
                    position: "relative",
                    backgroundColor: "rgba(255, 220, 100)",
                    fontFamily: "sans-serif",
                    height: "100%",
                    width: "100%",
                    padding: "16px",
                    borderRadius: "3px",
                    perspective: "800px",
                    variants: {
                        isGhost: { false: { opacity: 1 }, true: { transition: "opacity .2s", opacity: 0.3 } },
                        isDarkMode: {
                            true: { boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)" },
                            false: { boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)" },
                        },
                    },
                }),
                ig = { whiteSpace: "pre-wrap", overflowWrap: "break-word", letterSpacing: eO },
                im = ez(
                    "div",
                    Y(
                        {
                            position: "absolute",
                            top: ip,
                            left: ip,
                            width: `calc(100% - ${2 * ip}px)`,
                            height: "fit-content",
                            font: "inherit",
                            pointerEvents: "none",
                            userSelect: "none",
                            variants: {
                                isEditing: { true: { opacity: 1 }, false: { opacity: 1 } },
                                alignment: { start: { textAlign: "left" }, middle: { textAlign: "center" }, end: { textAlign: "right" }, justify: { textAlign: "justify" } },
                            },
                        },
                        ig
                    )
                ),
                ib = ez(
                    "textarea",
                    $(
                        Y(
                            {
                                width: "100%",
                                height: "100%",
                                border: "none",
                                overflow: "hidden",
                                background: "none",
                                outline: "none",
                                textAlign: "left",
                                font: "inherit",
                                padding: 0,
                                color: "transparent",
                                verticalAlign: "top",
                                resize: "none",
                                caretColor: "black",
                            },
                            ig
                        ),
                        { variants: { alignment: { start: { textAlign: "left" }, middle: { textAlign: "center" }, end: { textAlign: "right" }, justify: { textAlign: "justify" } } }, "&:focus": { outline: "none", border: "none" } }
                    )
                ),
                iv = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "text"),
                            V(this, "isAspectRatioLocked", !0),
                            V(this, "canEdit", !0),
                            V(this, "canBind", !0),
                            V(this, "canClone", !0),
                            V(this, "bindingDistance", 8),
                            V(this, "getShape", (e) => x.cQ.deepMerge({ id: "id", type: "text", name: "Text", parentId: "page", childIndex: 1, point: [0, 0], rotation: 0, text: " ", style: tf }, e)),
                            V(this, "texts", new Map()),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, isBinding: t, isGhost: i, isEditing: s, onShapeBlur: n, onShapeChange: a, meta: o, events: r }, l) => {
                                    let { text: d, style: h } = e,
                                        p = tg(h, o.isDarkMode),
                                        c = tp(e.style),
                                        u = P.useRef(null),
                                        g = P.useRef(!1),
                                        m = P.useRef(d);
                                    P.useLayoutEffect(() => {
                                        if (d !== m.current) {
                                            let t = [0, 0];
                                            this.texts.set(e.id, d);
                                            let i = this.getBounds(e),
                                                s = this.getBounds(e);
                                            switch (e.style.textAlign) {
                                                case "start":
                                                    break;
                                                case "middle":
                                                    t = j.B.div([s.width - i.width, 0], 2);
                                                    break;
                                                case "end":
                                                    t = [s.width - i.width, 0];
                                            }
                                            (m.current = d), null == a || a($(Y({}, e), { id: e.id, point: j.B.sub(e.point, t), text: d }));
                                        }
                                    }, [d]);
                                    let f = P.useCallback(
                                            (t) => {
                                                let i = [0, 0],
                                                    s = tB.normalizeText(t.currentTarget.value),
                                                    n = this.getBounds(e);
                                                this.texts.set(e.id, s);
                                                let o = this.getBounds($(Y({}, e), { text: s }));
                                                switch (e.style.textAlign) {
                                                    case "start":
                                                        break;
                                                    case "middle":
                                                        i = j.B.div([o.width - n.width, 0], 2);
                                                        break;
                                                    case "end":
                                                        i = [o.width - n.width, 0];
                                                }
                                                (m.current = s), null == a || a($(Y({}, e), { id: e.id, point: j.B.sub(e.point, i), text: s }));
                                            },
                                            [e.id, e.point]
                                        ),
                                        b = P.useCallback(
                                            (t) => {
                                                if ("Escape" === t.key) {
                                                    t.preventDefault(), t.stopPropagation(), null == n || n();
                                                    return;
                                                }
                                                if ("Tab" === t.key && 0 === e.text.length) {
                                                    t.preventDefault();
                                                    return;
                                                }
                                                if ("Enter" === t.key && (t.metaKey || t.ctrlKey)) {
                                                    t.preventDefault(), t.stopPropagation(), u.current.blur();
                                                    return;
                                                }
                                                if ("Meta" === t.key || t.metaKey) {
                                                    if ("z" === t.key && t.metaKey) {
                                                        t.shiftKey ? document.execCommand("redo", !1) : document.execCommand("undo", !1), t.stopPropagation(), t.preventDefault();
                                                        return;
                                                    }
                                                } else t.stopPropagation();
                                                (t.metaKey || t.ctrlKey) && "=" === t.key && t.preventDefault(),
                                                    "Tab" === t.key &&
                                                        (t.preventDefault(), t.shiftKey ? tb.unindent(t.currentTarget) : tb.indent(t.currentTarget), null == a || a($(Y({}, e), { text: tB.normalizeText(t.currentTarget.value) })));
                                            },
                                            [e, a]
                                        ),
                                        v = P.useCallback((e) => {
                                            e.currentTarget.setSelectionRange(0, 0), null == n || n();
                                        }, []),
                                        y = P.useCallback(
                                            (e) => {
                                                s && g.current && document.activeElement === e.currentTarget && e.currentTarget.select();
                                            },
                                            [s]
                                        ),
                                        S = P.useCallback(
                                            (e) => {
                                                s && e.stopPropagation();
                                            },
                                            [s]
                                        );
                                    return (
                                        P.useEffect(() => {
                                            s
                                                ? (this.texts.set(e.id, d),
                                                  requestAnimationFrame(() => {
                                                      g.current = !0;
                                                      let e = u.current;
                                                      e && (e.focus(), e.select());
                                                  }))
                                                : null == n || n();
                                        }, [s]),
                                        P.createElement(
                                            x.G7,
                                            Y({ ref: l }, r),
                                            P.createElement(
                                                iy,
                                                { isGhost: i, isEditing: s, onPointerDown: S },
                                                P.createElement(
                                                    iI,
                                                    { style: { font: c, color: p.stroke, textAlign: eG(h.textAlign) }, "data-color": e.style.color },
                                                    t &&
                                                        P.createElement("div", {
                                                            className: "tl-binding-indicator",
                                                            style: {
                                                                position: "absolute",
                                                                top: -this.bindingDistance,
                                                                left: -this.bindingDistance,
                                                                width: `calc(100% + ${2 * this.bindingDistance}px)`,
                                                                height: `calc(100% + ${2 * this.bindingDistance}px)`,
                                                                backgroundColor: "var(--tl-selectFill)",
                                                            },
                                                        }),
                                                    s
                                                        ? P.createElement(ik, {
                                                              ref: u,
                                                              style: { font: c, color: p.stroke },
                                                              name: "text",
                                                              tabIndex: -1,
                                                              autoComplete: "false",
                                                              autoCapitalize: "false",
                                                              autoCorrect: "false",
                                                              autoSave: "false",
                                                              autoFocus: !0,
                                                              placeholder: "",
                                                              spellCheck: "true",
                                                              wrap: "off",
                                                              dir: "auto",
                                                              datatype: "wysiwyg",
                                                              defaultValue: d,
                                                              color: p.stroke,
                                                              onFocus: y,
                                                              onChange: f,
                                                              onKeyDown: b,
                                                              onBlur: v,
                                                              onPointerDown: S,
                                                              onContextMenu: tv,
                                                              onCopy: tv,
                                                              onPaste: tv,
                                                              onCut: tv,
                                                          })
                                                        : d,
                                                    "​"
                                                )
                                            )
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let { width: t, height: i } = this.getBounds(e);
                                    return P.createElement("rect", { x: 0, y: 0, width: t, height: i });
                                })
                            ),
                            V(this, "getBounds", (e) => {
                                let t = x.cQ.getFromCache(this.boundsCache, e, () => {
                                    var t;
                                    if (!io) return { minX: 0, minY: 0, maxX: 10, maxY: 10, width: 10, height: 10 };
                                    io.parentNode || document.body.appendChild(io), (io.style.font = tp(e.style)), (io.textContent = null != (t = this.texts.get(e.id)) ? t : e.text);
                                    let i = io.offsetWidth || 1,
                                        s = io.offsetHeight || 1;
                                    return { minX: 0, maxX: i, minY: 0, maxY: s, width: i, height: s };
                                });
                                return x.cQ.translateBounds(t, e.point);
                            }),
                            V(this, "shouldRender", (e, t) => t.text !== e.text || t.style.scale !== e.style.scale || t.style !== e.style),
                            V(this, "transform", (e, t, { initialShape: i, scaleX: s, scaleY: n }) => {
                                let {
                                    rotation: a = 0,
                                    style: { scale: o = 1 },
                                } = i;
                                return { point: [t.minX, t.minY], rotation: (s < 0 && n >= 0) || (n < 0 && s >= 0) ? -(a || 0) : a, style: $(Y({}, i.style), { scale: o * Math.abs(Math.min(s, n)) }) };
                            }),
                            V(this, "transformSingle", (e, t, { initialShape: i, scaleX: s, scaleY: n }) => {
                                let {
                                    style: { scale: a = 1 },
                                } = i;
                                return { point: j.B.toFixed([t.minX, t.minY]), style: $(Y({}, i.style), { scale: a * Math.max(Math.abs(n), Math.abs(s)) }) };
                            }),
                            V(this, "onDoubleClickBoundsHandle", (e) => {
                                let t = this.getCenter(e),
                                    i = this.getCenter($(Y({}, e), { style: $(Y({}, e.style), { scale: 1 }) }));
                                return { style: $(Y({}, e.style), { scale: 1 }), point: j.B.toFixed(j.B.add(e.point, j.B.sub(t, i))) };
                            }),
                            V(this, "getSvgElement", (e, t) => {
                                var i, s;
                                let n = this.getBounds(e),
                                    a = tg(e.style, t),
                                    o = tl(e.style.size, e.style.font) * (null != (i = e.style.scale) ? i : 1),
                                    r = td(e.style.font).slice(1, -1),
                                    l = null != (s = e.style.textAlign) ? s : "start",
                                    d = e0(e.text, o, r, l, n.width, !1);
                                return d.setAttribute("fill", a.stroke), d.setAttribute("data-color", e.style.color), d;
                            });
                    }
                };
            "undefined" != typeof window &&
                (null == (B = document.getElementById("__textMeasure")) || B.remove(),
                ((w = document.createElement("pre")).id = "__textMeasure"),
                Object.assign(w.style, {
                    whiteSpace: "pre",
                    width: "auto",
                    border: "1px solid transparent",
                    padding: "4px",
                    margin: "0px",
                    letterSpacing: eO,
                    opacity: "0",
                    position: "absolute",
                    top: "-500px",
                    left: "0px",
                    zIndex: "9999",
                    pointerEvents: "none",
                    userSelect: "none",
                    alignmentBaseline: "mathematical",
                    dominantBaseline: "mathematical",
                }),
                (w.tabIndex = -1),
                document.body.appendChild(w),
                (io = w));
            var iy = ez("div", {
                    width: "100%",
                    height: "100%",
                    variants: { isGhost: { false: { opacity: 1 }, true: { transition: "opacity .2s", opacity: 0.3 } }, isEditing: { false: { pointerEvents: "all", userSelect: "all" }, true: { pointerEvents: "none", userSelect: "none" } } },
                }),
                iS = { whiteSpace: "pre-wrap", overflowWrap: "break-word" },
                iI = ez(
                    "div",
                    Y(
                        {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            padding: "4px",
                            zIndex: 1,
                            minHeight: 1,
                            minWidth: 1,
                            lineHeight: 1,
                            letterSpacing: eO,
                            outline: 0,
                            fontWeight: "500",
                            backfaceVisibility: "hidden",
                            userSelect: "none",
                            pointerEvents: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none",
                            isEditing: { false: {}, true: { pointerEvents: "all", background: "$boundsBg", userSelect: "text", WebkitUserSelect: "text" } },
                        },
                        iS
                    )
                ),
                ik = ez(
                    "textarea",
                    $(
                        Y(
                            {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                width: "100%",
                                height: "100%",
                                border: "none",
                                padding: "4px",
                                resize: "none",
                                textAlign: "inherit",
                                minHeight: "inherit",
                                minWidth: "inherit",
                                lineHeight: "inherit",
                                letterSpacing: "inherit",
                                outline: 0,
                                fontWeight: "inherit",
                                overflow: "hidden",
                                backfaceVisibility: "hidden",
                                display: "inline-block",
                                pointerEvents: "all",
                                background: "$boundsBg",
                                userSelect: "text",
                                WebkitUserSelect: "text",
                            },
                            iS
                        ),
                        { "&:focus": { outline: "none", border: "none" } }
                    )
                ),
                iw = P.memo(function ({ id: e, size: t, style: i, isSelected: s, isDarkMode: n }) {
                    let { stroke: a, strokeWidth: o, fill: r } = tg(i, n),
                        l = 1 + 1.618 * o,
                        d = tS(t),
                        h = x.cQ.pointsToLineSegments(d, !0).map(([t, s], n) => {
                            let { strokeDasharray: r, strokeDashoffset: d } = x.cQ.getPerfectDashProps(j.Z.dist(t, s), 1.618 * o, i.dash);
                            return P.createElement("line", { key: e + "_" + n, x1: t[0], y1: t[1], x2: s[0], y2: s[1], stroke: a, strokeWidth: l, strokeLinecap: "round", strokeDasharray: r, strokeDashoffset: d });
                        }),
                        p = d.join();
                    return P.createElement(
                        P.Fragment,
                        null,
                        P.createElement("polygon", { className: i.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea", points: p }),
                        i.isFilled && P.createElement("polygon", { fill: r, points: p, pointerEvents: "none" }),
                        P.createElement("g", { pointerEvents: "stroke" }, h)
                    );
                }),
                iB = P.memo(function ({ id: e, size: t, style: i, isSelected: s, isDarkMode: n }) {
                    let { stroke: a, strokeWidth: o, fill: r } = tg(i, n),
                        l = (function (e, t, i) {
                            let { points: s, options: n } = tk(e, t, i),
                                a = (0, T.ZP)(s, n);
                            return x.cQ.getSvgPathFromStroke(a);
                        })(e, t, i),
                        d = (function (e, t, i) {
                            let { points: s, options: n } = tk(e, t, i);
                            return x.cQ.getSvgPathFromStrokePoints((0, T.tt)(s, n));
                        })(e, t, i);
                    return P.createElement(
                        P.Fragment,
                        null,
                        P.createElement("path", { className: i.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea", d: d }),
                        i.isFilled && P.createElement("path", { d: d, fill: r, pointerEvents: "none" }),
                        P.createElement("path", { d: l, fill: a, stroke: a, strokeWidth: o, pointerEvents: "none" })
                    );
                });
            function ix({ size: e }) {
                let t = tS(e).join();
                return P.createElement("polygon", { className: "tl-binding-indicator", points: t, strokeWidth: 32 });
            }
            var iP = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "triangle"),
                            V(this, "canBind", !0),
                            V(this, "canClone", !0),
                            V(this, "canEdit", !0),
                            V(this, "getShape", (e) =>
                                x.cQ.deepMerge({ id: "id", type: "triangle", name: "Triangle", parentId: "page", childIndex: 1, point: [0, 0], size: [1, 1], rotation: 0, style: tm, label: "", labelPoint: [0.5, 0.5] }, e)
                            ),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, bounds: t, isBinding: i, isEditing: s, isSelected: n, isGhost: a, meta: o, events: r, onShapeChange: l, onShapeBlur: d }, h) => {
                                    let { id: p, label: c = "", size: u, style: g, labelPoint: m = eF } = e,
                                        f = tp(g),
                                        b = tg(g, o.isDarkMode),
                                        v = "draw" === g.dash ? iB : iw,
                                        y = P.useCallback((e) => (null == l ? void 0 : l({ id: p, label: e })), [l]),
                                        S = P.useMemo(() => this.getLabelOffsetY(e), [u]);
                                    return P.createElement(
                                        iC,
                                        Y({ ref: h }, r),
                                        P.createElement(tx, { font: f, text: c, color: b.stroke, offsetX: (m[0] - 0.5) * t.width, offsetY: S + (m[1] - 0.5) * t.height, isEditing: s, onChange: y, onBlur: d, shape: e }),
                                        P.createElement(
                                            x.gk,
                                            { id: e.id + "_svg", opacity: a ? 0.3 : 1, shapeStyle: g },
                                            i && P.createElement(ix, { size: u }),
                                            P.createElement(v, { id: p, style: g, size: u, isSelected: n, isDarkMode: o.isDarkMode })
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let { size: t } = e;
                                    return P.createElement("polygon", { points: tS(t).join() });
                                })
                            ),
                            V(this, "shouldRender", (e, t) => t.size !== e.size || t.style !== e.style || t.label !== e.label),
                            V(this, "getBounds", (e) => eN(e, this.boundsCache)),
                            V(this, "getExpandedBounds", (e) => x.cQ.getBoundsFromPoints(tS(e.size, this.bindingDistance).map((t) => j.Z.add(t, e.point)))),
                            V(this, "hitTestLineSegment", (e, t, i) => (0, A.Gc)(t, i, this.getPoints(e)).didIntersect),
                            V(this, "hitTestBounds", (e, t) => x.cQ.boundsContained(this.getBounds(e), t) || (0, A.ou)(t, this.getPoints(e)).length > 0),
                            V(this, "getBindingPoint", (e, t, i, s, n, a) => {
                                let o = this.getExpandedBounds(e);
                                if (!x.cQ.pointInBounds(i, o)) return;
                                let r = tS(e.size).map((t) => j.Z.add(t, e.point)),
                                    l = tS(e.size, this.bindingDistance).map((t) => j.Z.add(t, e.point)),
                                    d = x.cQ
                                        .pointsToLineSegments(r, !0)
                                        .map(([e, t]) => j.Z.distanceToLineSegment(e, t, i))
                                        .sort((e, t) => e - t)[0];
                                if (!(x.cQ.pointInPolygon(i, l) || d < this.bindingDistance)) return;
                                let h = x.cQ
                                    .pointsToLineSegments(l.concat([l[0]]))
                                    .map((e) => (0, A.oA)(s, n, e[0], e[1]))
                                    .filter((e) => e.didIntersect)
                                    .flatMap((e) => e.points);
                                if (!h.length) return;
                                let p = j.Z.add(tI(e.size), e.point),
                                    c = h.sort((e, t) => j.Z.dist(t, s) - j.Z.dist(e, s))[0],
                                    u = j.Z.med(i, c),
                                    g,
                                    m;
                                a ? ((g = 8 > j.Z.dist(i, p) ? p : i), (m = 0)) : ((g = 8 > j.Z.distanceToLineSegment(i, u, p) ? p : u), (m = x.cQ.pointInPolygon(i, r) ? this.bindingDistance : Math.max(this.bindingDistance, d)));
                                let f = j.Z.divV(j.Z.sub(g, [o.minX, o.minY]), [o.width, o.height]);
                                return { point: j.Z.clampV(f, 0, 1), distance: m };
                            }),
                            V(this, "transform", tM),
                            V(this, "transformSingle", tD),
                            V(this, "getSvgElement", (e) => {
                                var t, i;
                                let s = null == (t = document.getElementById(e.id + "_svg")) ? void 0 : t.cloneNode(!0);
                                if (s) {
                                    if ("label" in e && void 0 !== e.label) {
                                        let t = document.createElementNS("http://www.w3.org/2000/svg", "g"),
                                            n = this.getBounds(e),
                                            a = tp(e.style),
                                            o = void 0 !== e.style.scale ? e.style.scale : 1,
                                            r = tl(e.style.size, e.style.font) * (null != (i = e.style.scale) ? i : 1),
                                            l = td(e.style.font).slice(1, -1),
                                            d = eq(e.label, a),
                                            h = e0(e.label, r, l, "middle", d[0], !1);
                                        return (
                                            h.setAttribute("fill", tg(e.style).stroke),
                                            h.setAttribute("transform-origin", "top left"),
                                            h.setAttribute("transform", `translate(${(n.width - d[0] * o) / 2}, ${(n.height - d[1] * o) / 2 + this.getLabelOffsetY(e)})`),
                                            t.appendChild(s),
                                            t.appendChild(h),
                                            t
                                        );
                                    }
                                    return s;
                                }
                            }),
                            V(this, "getLabelOffsetY", (e) => {
                                let t = j.Z.div(e.size, 2);
                                return (tI(e.size)[1] - t[1]) * 0.72;
                            });
                    }
                    getPoints(e) {
                        let {
                            rotation: t = 0,
                            point: [i, s],
                            size: [n, a],
                        } = e;
                        return [
                            [i + n / 2, s],
                            [i, s + a],
                            [i + n, s + a],
                        ].map((i) => j.Z.rotWith(i, this.getCenter(e), t));
                    }
                },
                iC = ez("div", { width: "100%", height: "100%" }),
                iE = class extends tj {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "video"),
                            V(this, "canBind", !0),
                            V(this, "canEdit", !0),
                            V(this, "canClone", !0),
                            V(this, "isAspectRatioLocked", !0),
                            V(this, "showCloneHandles", !1),
                            V(this, "isStateful", !0),
                            V(this, "getShape", (e) =>
                                x.cQ.deepMerge({ id: "video", type: "video", name: "Video", parentId: "page", childIndex: 1, point: [0, 0], size: [1, 1], rotation: 0, style: tm, assetId: "assetId", isPlaying: !0, currentTime: 0 }, e)
                            ),
                            V(
                                this,
                                "Component",
                                tj.Component(({ shape: e, asset: t = { src: "" }, isBinding: i, isEditing: s, isGhost: n, meta: a, events: o, onShapeChange: r }, l) => {
                                    let d = P.useRef(null),
                                        h = P.useRef(null),
                                        { currentTime: p = 0, size: c, isPlaying: u, style: g } = e;
                                    P.useLayoutEffect(() => {
                                        let e = h.current;
                                        if (!e) return;
                                        let [t, i] = c;
                                        (e.style.width = `${t}px`), (e.style.height = `${i}px`);
                                    }, [c]),
                                        P.useLayoutEffect(() => {
                                            let e = d.current;
                                            e && (u ? e.play() : e.pause());
                                        }, [u]),
                                        P.useLayoutEffect(() => {
                                            let e = d.current;
                                            e && (p === e.currentTime || (e.currentTime = p));
                                        }, [p]);
                                    let m = P.useCallback(() => {
                                            null == r || r({ id: e.id, isPlaying: !0 });
                                        }, []),
                                        f = P.useCallback(() => {
                                            null == r || r({ id: e.id, isPlaying: !1 });
                                        }, []),
                                        b = P.useCallback(() => {
                                            let t = d.current;
                                            t && s && null != r && r({ id: e.id, currentTime: t.currentTime });
                                        }, [s]);
                                    return P.createElement(
                                        x.G7,
                                        Y({ ref: l }, o),
                                        i &&
                                            P.createElement("div", {
                                                className: "tl-binding-indicator",
                                                style: {
                                                    position: "absolute",
                                                    top: -this.bindingDistance,
                                                    left: -this.bindingDistance,
                                                    width: `calc(100% + ${2 * this.bindingDistance}px)`,
                                                    height: `calc(100% + ${2 * this.bindingDistance}px)`,
                                                    backgroundColor: "var(--tl-selectFill)",
                                                },
                                            }),
                                        P.createElement(
                                            iz,
                                            { ref: h, isDarkMode: a.isDarkMode, isGhost: n, isFilled: g.isFilled },
                                            P.createElement(
                                                iM,
                                                { ref: d, id: e.id + "_video", muted: !0, loop: !0, playsInline: !0, disableRemotePlayback: !0, disablePictureInPicture: !0, controls: s, autoPlay: u, onPlay: m, onPause: f, onTimeUpdate: b },
                                                P.createElement("source", { src: t.src })
                                            )
                                        )
                                    );
                                })
                            ),
                            V(
                                this,
                                "Indicator",
                                tj.Indicator(({ shape: e }) => {
                                    let {
                                        size: [t, i],
                                    } = e;
                                    return P.createElement("rect", { x: 0, y: 0, rx: 2, ry: 2, width: Math.max(1, t), height: Math.max(1, i) });
                                })
                            ),
                            V(this, "getBounds", (e) => eN(e, this.boundsCache)),
                            V(this, "shouldRender", (e, t) => t.size !== e.size || t.style !== e.style || t.isPlaying !== e.isPlaying),
                            V(this, "getSvgElement", (e) => {
                                let t = this.getBounds(e),
                                    i = document.createElementNS("http://www.w3.org/2000/svg", "image");
                                return i.setAttribute("width", `${t.width}`), i.setAttribute("height", `${t.height}`), i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), i;
                            }),
                            V(this, "transform", tM),
                            V(this, "transformSingle", tD);
                    }
                },
                iz = (0, D.zo)("div", {
                    pointerEvents: "all",
                    position: "relative",
                    fontFamily: "sans-serif",
                    fontSize: "2em",
                    height: "100%",
                    width: "100%",
                    borderRadius: "3px",
                    perspective: "800px",
                    overflow: "hidden",
                    p: { userSelect: "none" },
                    img: { userSelect: "none" },
                    variants: { isGhost: { false: { opacity: 1 }, true: { transition: "opacity .2s", opacity: 0.3 } }, isFilled: { true: {}, false: {} }, isDarkMode: { true: {}, false: {} } },
                    compoundVariants: [
                        { isFilled: !0, isDarkMode: !0, css: { boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)" } },
                        { isFilled: !0, isDarkMode: !1, css: { boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)" } },
                    ],
                }),
                iM = (0, D.zo)("video", { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", maxWidth: "100%", minWidth: "100%", pointerEvents: "none", objectFit: "cover", userSelect: "none", borderRadius: 2 }),
                iD = new il(),
                ij = new iP(),
                iA = new t2(),
                iT = new tV(),
                iO = new t_(),
                iF = new iv(),
                iL = new t3(),
                iR = new ih(),
                iH = { rectangle: iD, triangle: ij, ellipse: iA, draw: iT, arrow: iO, text: iF, group: iL, sticky: iR, image: new t8(), video: new iE() },
                iQ = (e) => ("string" == typeof e ? iH[e] : iH[e.type]),
                iU = "tldraw_clipboard",
                iZ = class {
                    constructor(e, t, i, s) {
                        V(this, "_idbId"),
                            V(this, "initialState"),
                            V(this, "store"),
                            V(this, "pointer", -1),
                            V(this, "_state"),
                            V(this, "_status", "loading"),
                            V(this, "stack", []),
                            V(this, "_snapshot"),
                            V(this, "useStore"),
                            V(this, "ready"),
                            V(this, "isPaused", !1),
                            V(this, "persist", (e, t) => {
                                if ("ready" === this._status && (this.onPersist && this.onPersist(this._state, e, t), this._idbId)) return O.t8(this._idbId, this._state).catch((e) => console.error(e));
                            }),
                            V(this, "applyPatch", (e, t) => {
                                let i = this._state,
                                    s = x.cQ.deepMerge(this._state, e),
                                    n = this.cleanup(s, i, e, t);
                                return this.onStateWillChange && this.onStateWillChange(n, t), (this._state = n), this.store.setState(this._state, !0), this.onStateDidChange && this.onStateDidChange(this._state, t), this;
                            }),
                            V(this, "migrate", (e) => e),
                            V(this, "cleanup", (e, t, i, s) => e),
                            V(this, "onStateWillChange"),
                            V(this, "onStateDidChange"),
                            V(this, "patchState", (e, t) => (this.applyPatch(e, t), this.onPatch && this.onPatch(this._state, e, t), this)),
                            V(this, "replaceState", (e, t) => {
                                let i = this.cleanup(e, this._state, e, t);
                                return this.onStateWillChange && this.onStateWillChange(i, "replace"), (this._state = i), this.store.setState(this._state, !0), this.onStateDidChange && this.onStateDidChange(this._state, "replace"), this;
                            }),
                            V(
                                this,
                                "setState",
                                (e, t = e.id) => (
                                    this.pointer < this.stack.length - 1 && (this.stack = this.stack.slice(0, this.pointer + 1)),
                                    this.stack.push($(Y({}, e), { id: t })),
                                    (this.pointer = this.stack.length - 1),
                                    this.applyPatch(e.after, t),
                                    this.onCommand && this.onCommand(this._state, e, t),
                                    this.persist(e.after, t),
                                    this
                                )
                            ),
                            V(this, "onReady"),
                            V(this, "onPatch"),
                            V(this, "onCommand"),
                            V(this, "onPersist"),
                            V(this, "onReplace"),
                            V(this, "onReset"),
                            V(this, "onResetHistory"),
                            V(this, "onUndo"),
                            V(this, "onRedo"),
                            V(
                                this,
                                "reset",
                                () => (
                                    this.onStateWillChange && this.onStateWillChange(this.initialState, "reset"),
                                    (this._state = this.initialState),
                                    this.store.setState(this._state, !0),
                                    this.resetHistory(),
                                    this.persist({}, "reset"),
                                    this.onStateDidChange && this.onStateDidChange(this._state, "reset"),
                                    this.onReset && this.onReset(this._state),
                                    this
                                )
                            ),
                            V(this, "replaceHistory", (e, t = e.length - 1) => ((this.stack = e), (this.pointer = t), this.onReplace && this.onReplace(this._state), this)),
                            V(this, "resetHistory", () => ((this.stack = []), (this.pointer = -1), this.onResetHistory && this.onResetHistory(this._state), this)),
                            V(this, "undo", () => {
                                if (!this.isPaused) {
                                    if (!this.canUndo) return this;
                                    let e = this.stack[this.pointer];
                                    this.pointer--, this.applyPatch(e.before, "undo"), this.persist(e.before, "undo");
                                }
                                return this.onUndo && this.onUndo(this._state), this;
                            }),
                            V(this, "redo", () => {
                                if (!this.isPaused) {
                                    if (!this.canRedo) return this;
                                    this.pointer++;
                                    let e = this.stack[this.pointer];
                                    this.applyPatch(e.after, "redo"), this.persist(e.after, "undo");
                                }
                                return this.onRedo && this.onRedo(this._state), this;
                            }),
                            V(this, "setSnapshot", () => ((this._snapshot = Y({}, this._state)), this)),
                            V(this, "forceUpdate", () => {
                                this.store.setState(this._state, !0);
                            }),
                            (this._idbId = t),
                            (this._state = ty(e)),
                            (this._snapshot = ty(e)),
                            (this.initialState = ty(e)),
                            (this.store = (0, L.Z)(() => this._state)),
                            (this.useStore = (0, F.ZP)(this.store)),
                            (this.ready = new Promise((n) => {
                                let a = "none";
                                this._idbId
                                    ? ((a = "restored"),
                                      O.U2(this._idbId)
                                          .then((o) =>
                                              q(this, null, function* () {
                                                  if (o) {
                                                      let n = o;
                                                      if (i) {
                                                          let r = yield O.U2(t + "_version");
                                                          r && r < i && ((n = s ? s(o, e, r) : e), (a = "migrated"));
                                                      }
                                                      yield O.t8(t + "_version", i || -1);
                                                      let r = this._state.appState.isEmptyCanvas;
                                                      (n = this.migrate(n)), (this._state = ty(n)), (this._snapshot = ty(n)), (this._state.appState.isEmptyCanvas = r), this.store.setState(this._state, !0);
                                                  } else yield O.t8(t + "_version", i || -1);
                                                  (this._status = "ready"), n(a);
                                              })
                                          )
                                          .catch((e) => console.error(e)))
                                    : ((this._status = "ready"), n(a));
                            }).then((e) => (this.onReady && this.onReady(e), e)));
                    }
                    pause() {
                        this.isPaused = !0;
                    }
                    resume() {
                        this.isPaused = !1;
                    }
                    get canUndo() {
                        return this.pointer > -1;
                    }
                    get canRedo() {
                        return this.pointer < this.stack.length - 1;
                    }
                    get state() {
                        return this._state;
                    }
                    get status() {
                        return this._status;
                    }
                    get snapshot() {
                        return this._snapshot;
                    }
                };
            function iK(e, t, i = []) {
                let { currentPageId: s } = e,
                    n = {},
                    a = {};
                t.forEach((e) => {
                    (n[e.id] = void 0), (a[e.id] = e);
                });
                let o = {},
                    r = {};
                return (
                    i.forEach((e) => {
                        (o[e.id] = void 0), (r[e.id] = e);
                    }),
                    {
                        id: "create",
                        before: { document: { pages: { [s]: { shapes: n, bindings: o } }, pageStates: { [s]: { selectedIds: [...e.selectedIds] } } } },
                        after: { document: { pages: { [s]: { shapes: a, bindings: r } }, pageStates: { [s]: { selectedIds: t.map((e) => e.id) } } } },
                    }
                );
            }
            var i_ = (e, t) => {
                let i = Y({}, e);
                return t.forEach((e) => (i[e] = void 0)), i;
            };
            function iN(e, t, i = e.currentPageId) {
                var s;
                let n, a, o, r, l, d;
                let {
                        pageState: h,
                        selectedIds: p,
                        document: { assets: c },
                    } = e,
                    { before: u, after: g, assetsToRemove: m } =
                        ((s = e.state),
                        (n = { shapes: {}, bindings: {} }),
                        (a = { shapes: {}, bindings: {} }),
                        (o = []),
                        (r = new Set()),
                        (l = new Set()),
                        t
                            .filter((e) => !tB.getShape(s, e, i).isLocked)
                            .forEach((e) => {
                                r.add(e);
                                let t = tB.getShape(s, e, i);
                                (n.shapes[e] = t),
                                    (a.shapes[e] = void 0),
                                    void 0 !== t.children &&
                                        t.children.forEach((e) => {
                                            r.add(e);
                                            let t = tB.getShape(s, e, i);
                                            (n.shapes[e] = t), (a.shapes[e] = void 0);
                                        }),
                                    t.parentId !== i && o.push(tB.getShape(s, t.parentId, i)),
                                    t.assetId && l.add(t.assetId);
                            }),
                        o.forEach((e) => {
                            var o;
                            t.includes(e.id) ||
                                (r.add(e.id),
                                (n.shapes[e.id] = { children: e.children }),
                                (a.shapes[e.id] = { children: e.children.filter((e) => !t.includes(e)) }),
                                (null == (o = a.shapes[e.id]) ? void 0 : o.children.length) === 0 && ((a.shapes[e.id] = void 0), (n.shapes[e.id] = tB.getShape(s, e.id, i))));
                        }),
                        Object.values((d = tB.getPage(s, i)).bindings)
                            .filter((e) => r.has(e.fromId) || r.has(e.toId))
                            .forEach((e) => {
                                for (let t of [e.toId, e.fromId])
                                    if (void 0 === a.shapes[t]) {
                                        (n.bindings[e.id] = e), (a.bindings[e.id] = void 0);
                                        let i = d.shapes[t];
                                        i &&
                                            i.handles &&
                                            Object.values(i.handles)
                                                .filter((t) => t.bindingId === e.id)
                                                .forEach((i) => {
                                                    var s, o, l, d, h, p;
                                                    (n.shapes[t] = $(Y({}, n.shapes[t]), {
                                                        handles: $(Y({}, null == (s = n.shapes[t]) ? void 0 : s.handles), {
                                                            [i.id]: $(Y({}, null == (l = null == (o = n.shapes[t]) ? void 0 : o.handles) ? void 0 : l[i.id]), { bindingId: e.id }),
                                                        }),
                                                    })),
                                                        r.has(t) ||
                                                            (a.shapes[t] = $(Y({}, a.shapes[t]), {
                                                                handles: $(Y({}, null == (d = a.shapes[t]) ? void 0 : d.handles), {
                                                                    [i.id]: $(Y({}, null == (p = null == (h = a.shapes[t]) ? void 0 : h.handles) ? void 0 : p[i.id]), { bindingId: void 0 }),
                                                                }),
                                                            }));
                                                });
                                    }
                            }),
                        Object.values(s.document.pages)
                            .flatMap((e) => Object.values(e.shapes))
                            .forEach((e) => {
                                "assetId" in e && e.assetId && !r.has(e.id) && l.delete(e.assetId);
                            }),
                        { before: n, after: a, assetsToRemove: Array.from(l) }),
                    f = i_(c, m);
                return {
                    id: "delete",
                    before: { document: { assets: c, pages: { [i]: u }, pageStates: { [i]: { selectedIds: [...e.selectedIds] } } } },
                    after: { document: { assets: f, pages: { [i]: g }, pageStates: { [i]: { selectedIds: p.filter((e) => !t.includes(e)), hoveredId: h.hoveredId && t.includes(h.hoveredId) ? void 0 : h.hoveredId } } } },
                };
            }
            function iW(e, t, i) {
                let {
                        selectedIds: s,
                        currentPageId: n,
                        page: { shapes: a },
                    } = e,
                    o = t.map((e) => tB.getBounds(a[e])),
                    r = 1 === t.length && "group" === a[t[0]].type,
                    l = x.cQ.getCommonBounds(o),
                    { before: d, after: h } = tB.mutateShapes(
                        e.state,
                        t,
                        (e) => {
                            let t = tB.getBounds(e),
                                s = e.parentId !== n;
                            switch (i) {
                                case "horizontal": {
                                    if (s && !r) {
                                        let i = tB.getBounds(a[e.parentId]),
                                            s = x.cQ.getRelativeTransformedBoundingBox(l, l, i, !0, !1).minX - i.minX;
                                        return tB.getShapeUtil(e).transform(e, $(Y({}, t), { minX: t.minX + s, maxX: t.maxX + s }), { type: x.P0.TopLeft, scaleX: 1, scaleY: 1, initialShape: e, transformOrigin: [0.5, 0.5] });
                                    }
                                    let i = x.cQ.getRelativeTransformedBoundingBox(l, l, t, !0, !1);
                                    return tB.getShapeUtil(e).transform(e, i, { type: x.P0.TopLeft, scaleX: -1, scaleY: 1, initialShape: e, transformOrigin: [0.5, 0.5] });
                                }
                                case "vertical": {
                                    if (s && !r) {
                                        let i = tB.getBounds(a[e.parentId]),
                                            s = x.cQ.getRelativeTransformedBoundingBox(l, l, i, !1, !0).minY - i.minY;
                                        return tB.getShapeUtil(e).transform(e, $(Y({}, t), { minY: t.minY + s, maxY: t.maxY + s }), { type: x.P0.TopLeft, scaleX: 1, scaleY: 1, initialShape: e, transformOrigin: [0.5, 0.5] });
                                    }
                                    let i = x.cQ.getRelativeTransformedBoundingBox(l, l, t, !1, !0);
                                    return tB.getShapeUtil(e).transform(e, i, { type: x.P0.TopLeft, scaleX: 1, scaleY: -1, initialShape: e, transformOrigin: [0.5, 0.5] });
                                }
                            }
                        },
                        n,
                        !0
                    );
                return { id: "flip", before: { document: { pages: { [n]: { shapes: d } }, pageStates: { [n]: { selectedIds: s } } } }, after: { document: { pages: { [n]: { shapes: h } }, pageStates: { [n]: { selectedIds: t } } } } };
            }
            function iG(e, t, i) {
                let { currentPageId: s, page: n } = e,
                    a = new Set(t.map((t) => e.getShape(t).parentId)),
                    o = { before: {}, after: {} },
                    r,
                    l,
                    d;
                return (
                    Array.from(a.values()).forEach((a) => {
                        let h = [];
                        if (a === n.id) h = Object.values(n.shapes).sort((e, t) => e.childIndex - t.childIndex);
                        else {
                            let t = e.getShape(a);
                            if (!t.children) throw Error("No children in parent!");
                            h = t.children.map((t) => e.getShape(t)).sort((e, t) => e.childIndex - t.childIndex);
                        }
                        let p = h.map((e) => e.id),
                            c = t
                                .filter((e) => p.includes(e))
                                .map((e) => p.indexOf(e))
                                .sort((e, t) => e - t);
                        if (c.length !== p.length)
                            switch (i) {
                                case "toBack":
                                    for (let e = 0; e < p.length; e++)
                                        if (!c.includes(e)) {
                                            r = e;
                                            break;
                                        }
                                    (d = (l = h[r].childIndex) / (c.length + 1)), (o = tB.mutateShapes(e.state, c.map((e) => h[e].id).reverse(), (e, t) => ({ childIndex: l - (t + 1) * d }), s));
                                    break;
                                case "toFront":
                                    for (let e = p.length - 1; e >= 0; e--)
                                        if (!c.includes(e)) {
                                            r = e;
                                            break;
                                        }
                                    (l = h[r].childIndex),
                                        (d = 1),
                                        (o = tB.mutateShapes(
                                            e.state,
                                            c.map((e) => h[e].id),
                                            (e, t) => ({ childIndex: l + (t + 1) }),
                                            s
                                        ));
                                    break;
                                case "backward": {
                                    let t = {};
                                    for (let e = p.length - 1; e >= 0; e--)
                                        if (c.includes(e)) {
                                            for (let i = e; i >= 0; i--)
                                                if (!c.includes(i)) {
                                                    let s = h[i].childIndex,
                                                        n,
                                                        a;
                                                    0 === i ? ((n = s / 2), (a = s / 2 / (e - i + 1))) : ((a = (s - (n = h[i - 1].childIndex)) / (e - i + 1)), (n += a));
                                                    for (let s = 0; s < e - i; s++) t[h[i + s + 1].id] = n + a * s;
                                                    break;
                                                }
                                        }
                                    Object.values(t).length > 0 &&
                                        (o = tB.mutateShapes(
                                            e.state,
                                            c.map((e) => h[e].id),
                                            (e) => ({ childIndex: t[e.id] }),
                                            s
                                        ));
                                    break;
                                }
                                case "forward": {
                                    let t = {};
                                    for (let e = 0; e < p.length; e++)
                                        if (c.includes(e)) {
                                            for (let i = e; i < p.length; i++)
                                                if (!c.includes(i)) {
                                                    l = h[i].childIndex;
                                                    let s = i === p.length - 1 ? 1 : (h[i + 1].childIndex - l) / (i - e + 1);
                                                    for (let n = 0; n < i - e; n++) t[h[e + n].id] = l + s * (n + 1);
                                                    break;
                                                }
                                        }
                                    Object.values(t).length > 0 &&
                                        (o = tB.mutateShapes(
                                            e.state,
                                            c.map((e) => h[e].id),
                                            (e) => ({ childIndex: t[e.id] }),
                                            s
                                        ));
                                }
                            }
                    }),
                    {
                        id: "move",
                        before: { document: { pages: { [s]: { shapes: o.before } }, pageStates: { [s]: { selectedIds: t } } } },
                        after: { document: { pages: { [s]: { shapes: o.after } }, pageStates: { [s]: { selectedIds: t } } } },
                    }
                );
            }
            function iY(e, t, i) {
                let { currentPageId: s } = e,
                    { before: n, after: a } = tB.mutateShapes(
                        e.state,
                        t,
                        (t) => {
                            var i, s;
                            return null == (s = (i = e.getShapeUtil(t)).onDoubleClickBoundsHandle) ? void 0 : s.call(i, t);
                        },
                        i
                    );
                return {
                    id: "reset_bounds",
                    before: { document: { pages: { [s]: { shapes: n } }, pageStates: { [s]: { selectedIds: t } } } },
                    after: { document: { pages: { [s]: { shapes: a } }, pageStates: { [s]: { selectedIds: t } } } },
                };
            }
            var i$ = 2 * Math.PI;
            function iX(e, t, i) {
                let { currentPageId: s } = e,
                    n = t.map((t) => e.getShape(t)).filter((e) => "isLocked" === i || !e.isLocked),
                    a = n.every((e) => e[i]),
                    o = {},
                    r = {};
                return (
                    n.forEach((e) => {
                        (o[e.id] = { [i]: e[i] }), (r[e.id] = { [i]: !a });
                    }),
                    { id: "toggle", before: { document: { pages: { [s]: { shapes: o } }, pageStates: { [s]: { selectedIds: t } } } }, after: { document: { pages: { [s]: { shapes: r } }, pageStates: { [s]: { selectedIds: t } } } } }
                );
            }
            function iV(e, t, i) {
                let s = t.map((e) => e.id),
                    n = tB.mutateShapes(
                        e.state,
                        s.filter((t) => !e.getShape(t, i).isLocked),
                        (e, i) => t[i],
                        i
                    );
                return { id: "update", before: { document: { pages: { [i]: { shapes: n.before } } } }, after: { document: { pages: { [i]: { shapes: n.after } } } } };
            }
            var iq = {};
            function iJ(e, t) {
                let { document: i, settings: s } = e,
                    { version: n = 0 } = i;
                "assets" in i || (i.assets = {});
                let a = new Set();
                return (
                    Object.values(i.pages).forEach((e) =>
                        Object.values(e.shapes).forEach((t) => {
                            let { parentId: i, children: s, assetId: n } = t;
                            n && a.add(n),
                                i === e.id || e.shapes[i] || (console.warn("Encountered a shape with a missing parent!"), (t.parentId = e.id)),
                                "group" === t.type &&
                                    s &&
                                    s.forEach((i) => {
                                        e.shapes[i] || (console.warn("Encountered a parent with a missing child!", t.id, i), null == s || s.splice(s.indexOf(i), 1));
                                    });
                        })
                    ),
                    Object.keys(i.assets).forEach((e) => {
                        a.has(e) || delete i.assets[e];
                    }),
                    n === t ||
                        (n < 14 &&
                            Object.values(i.pages).forEach((e) => {
                                Object.values(e.shapes)
                                    .filter((e) => "text" === e.type)
                                    .forEach((e) => "script" === e.style.font);
                            }),
                        n <= 13 &&
                            Object.values(i.pages).forEach((e) => {
                                Object.values(e.bindings).forEach((e) => {
                                    Object.assign(e, e.meta);
                                }),
                                    Object.values(e.shapes).forEach((e) => {
                                        Object.entries(e.style).forEach(([t, i]) => {
                                            "string" == typeof i && (e.style[t] = i.toLowerCase());
                                        }),
                                            "arrow" === e.type &&
                                                e.decorations &&
                                                Object.entries(e.decorations).forEach(([t, i]) => {
                                                    "Arrow" === i && (e.decorations = $(Y({}, e.decorations), { [t]: "arrow" }));
                                                });
                                    });
                            }),
                        n <= 13.1 && (i.name = "New Document"),
                        n < 15 && (i.assets = {}),
                        Object.values(i.pages).forEach((e) => {
                            Object.values(e.shapes).forEach((e) => {
                                n < 15.2 && ("image" === e.type || "video" === e.type) && (e.style.isFilled = !0),
                                    n < 15.3 && ("rectangle" === e.type || "triangle" === e.type || "ellipse" === e.type || "arrow" === e.type) && ((e.label = e.text || ""), (e.labelPoint = [0.5, 0.5]));
                            });
                        }),
                        n < 15.4 && (s.dockPosition = "bottom"),
                        n < 15.5 && (s.exportBackground = "transparent"),
                        Object.values(i.pageStates).forEach((e) => {
                            (e.selectedIds = e.selectedIds.filter((t) => void 0 !== i.pages[e.id].shapes[t])), (e.bindingId = void 0), (e.editingId = void 0), (e.hoveredId = void 0), (e.pointedId = void 0);
                        }),
                        (i.version = t)),
                    e
                );
            }
            X(iq, {
                fileToBase64: () => i6,
                fileToText: () => i9,
                getImageSizeFromSrc: () => i7,
                getVideoSizeFromSrc: () => se,
                loadFileHandle: () => i2,
                migrate: () => iJ,
                openAssetsFromFileSystem: () => i8,
                openFromFileSystem: () => i4,
                saveFileHandle: () => i5,
                saveToFileSystem: () => i3,
            });
            var i0 = { mode: "readwrite" },
                i1 = (e) =>
                    q(void 0, null, function* () {
                        return (yield e.queryPermission(i0)) === "granted" || (yield e.requestPermission(i0)) === "granted";
                    });
            function i2() {
                return q(this, null, function* () {
                    if ("undefined" != typeof Window && "_location" in Window) return (yield (0, O.U2)(`Tldraw_file_handle_${window.location.origin}`)) || null;
                });
            }
            function i5(e) {
                return q(this, null, function* () {
                    return (0, O.t8)(`Tldraw_file_handle_${window.location.origin}`, e);
                });
            }
            function i3(e, t, i) {
                return q(this, null, function* () {
                    let s = { name: e.name || "New Document", fileHandle: null != t ? t : null, document: e, assets: {} },
                        n = new Blob([JSON.stringify(s, null, 2)], { type: "application/vnd.Tldraw+json" });
                    if (t && !(yield i1(t))) return null;
                    let a = !R.supported && (null == i ? void 0 : i.length) ? i : `${s.name}`,
                        o = yield (0, R.fileSave)(n, { fileName: `${a}${eL}`, description: "Tldraw File", extensions: [`${eL}`] }, t);
                    return yield i5(o), o;
                });
            }
            function i4() {
                return q(this, null, function* () {
                    var e;
                    let t = yield (0, R.fileOpen)({ description: "Tldraw File", extensions: [`${eL}`], multiple: !1 });
                    if (!t) return null;
                    let i = JSON.parse(
                            yield new Promise((e) => {
                                let i = new FileReader();
                                (i.onloadend = () => {
                                    i.readyState === FileReader.DONE && e(i.result);
                                }),
                                    i.readAsText(t, "utf8");
                            })
                        ),
                        s = null != (e = t.handle) ? e : null;
                    return yield i5(s), { fileHandle: s, document: i.document };
                });
            }
            function i8() {
                return q(this, null, function* () {
                    return (0, R.fileOpen)({ description: "Image or Video", extensions: [...eZ, ...eK], multiple: !0 });
                });
            }
            function i6(e) {
                return new Promise((t, i) => {
                    if (e) {
                        let s = new FileReader();
                        s.readAsDataURL(e), (s.onload = () => t(s.result)), (s.onerror = (e) => i(e)), (s.onabort = (e) => i(e));
                    }
                });
            }
            function i9(e) {
                return new Promise((t, i) => {
                    if (e) {
                        let s = new FileReader();
                        s.readAsText(e), (s.onload = () => t(s.result)), (s.onerror = (e) => i(e)), (s.onabort = (e) => i(e));
                    }
                });
            }
            function i7(e) {
                return new Promise((t, i) => {
                    let s = new Image();
                    (s.onload = () => t([s.width, s.height])), (s.onerror = () => i(Error("Could not get image size"))), (s.src = e);
                });
            }
            function se(e) {
                return new Promise((t, i) => {
                    let s = document.createElement("video");
                    (s.onloadedmetadata = () => t([s.videoWidth, s.videoHeight])), (s.onerror = () => i(Error("Could not get video size"))), (s.src = e);
                });
            }
            ((e, t, i, s) => {
                if ((t && "object" == typeof t) || "function" == typeof t) for (let n of K(t)) !N.call(e, n) && (i || "default" !== n) && H(e, n, { get: () => t[n], enumerable: !(s = U(t, n)) || s.enumerable });
            })(iq, R);
            var st = class {
                    constructor(e) {
                        this.app = e;
                    }
                },
                si = class extends st {
                    constructor(e, t, i, s = !1) {
                        var n, a, o;
                        super(e),
                            V(this, "type", "arrow"),
                            V(this, "performanceMode"),
                            V(this, "status", "translatingHandle"),
                            V(this, "newStartBindingId", x.cQ.uniqueId()),
                            V(this, "draggedBindingId", x.cQ.uniqueId()),
                            V(this, "didBind", !1),
                            V(this, "initialShape"),
                            V(this, "handleId"),
                            V(this, "bindableShapeIds"),
                            V(this, "initialBinding"),
                            V(this, "startBindingShapeId"),
                            V(this, "isCreate"),
                            V(this, "start", () => {}),
                            V(this, "update", () => {
                                var e, t, i;
                                let { initialShape: s } = this,
                                    {
                                        currentPoint: n,
                                        shiftKey: a,
                                        altKey: o,
                                        metaKey: r,
                                        currentGrid: l,
                                        settings: { showGrid: d },
                                    } = this.app,
                                    h = this.app.getShape(s.id);
                                if (h.isLocked) return;
                                let { handles: p } = s,
                                    c = this.handleId;
                                if (!p[c].canBind) return;
                                let u = j.B.sub(n, j.B.add(p[c].point, s.point));
                                if (a) {
                                    let e = o ? j.B.med(p.start.point, p.end.point) : p["start" === c ? "end" : "start"].point,
                                        t = p[c].point,
                                        i = j.B.add(t, u),
                                        s = j.B.angle(e, i),
                                        n = j.B.rotWith(i, e, x.cQ.snapAngleToSegments(s, 24) - s);
                                    u = j.B.add(u, j.B.sub(n, i));
                                }
                                let g = j.B.add(p[c].point, u),
                                    m = { [c]: $(Y({}, p[c]), { point: d ? j.B.snap(g, l) : j.B.toFixed(g), bindingId: void 0 }) },
                                    f = iH.arrow,
                                    b = null == (e = f.onHandleChange) ? void 0 : e.call(f, s, m);
                                if (!b) return;
                                let v = { shape: x.cQ.deepMerge(h, b), bindings: {} },
                                    y,
                                    S = v.shape.handles[this.handleId],
                                    I = v.shape.handles["start" === this.handleId ? "end" : "start"];
                                if (this.startBindingShapeId) {
                                    let e,
                                        t = this.app.page.shapes[this.startBindingShapeId],
                                        i = tB.getShapeUtil(t),
                                        a = i.getCenter(t),
                                        o = v.shape.handles.start,
                                        l = v.shape.handles.end,
                                        d = j.B.add(o.point, v.shape.point);
                                    j.B.isEqual(d, a) && d[1]++;
                                    let p = i.hitTestPoint(t, n),
                                        c = j.B.uni(j.B.sub(d, a)),
                                        u = void 0 !== this.app.getBinding(this.newStartBindingId);
                                    r || i.hitTestPoint(t, j.B.add(v.shape.point, l.point)) || (e = this.findBindingPoint(h, t, "start", this.newStartBindingId, a, a, c, p)),
                                        e && !u
                                            ? ((this.didBind = !0), (v.bindings[this.newStartBindingId] = e), (v.shape = x.cQ.deepMerge(v.shape, { handles: { start: { bindingId: e.id } } })))
                                            : !e && u && ((this.didBind = !1), (v.bindings[this.newStartBindingId] = void 0), (v.shape = x.cQ.deepMerge(s, { handles: { start: { bindingId: void 0 } } })));
                                }
                                if (!r) {
                                    let e = j.B.add(I.point, v.shape.point),
                                        t = j.B.add(S.point, v.shape.point),
                                        i = j.B.uni(j.B.sub(t, e)),
                                        s = j.B.add(v.shape.point, v.shape.handles.start.point),
                                        n = j.B.add(v.shape.point, v.shape.handles.end.point);
                                    for (let a of this.bindableShapeIds
                                        .map((e) => this.app.page.shapes[e])
                                        .sort((e, t) => t.childIndex - e.childIndex)
                                        .filter((e) => {
                                            if (e.isLocked) return !1;
                                            let t = tB.getShapeUtil(e);
                                            return ![s, n].every((i) => t.hitTestPoint(e, i));
                                        }))
                                        if ((y = this.findBindingPoint(h, a, this.handleId, this.draggedBindingId, t, e, i, o))) break;
                                }
                                if (y) (this.didBind = !0), (v.bindings[this.draggedBindingId] = y), (v.shape = x.cQ.deepMerge(v.shape, { handles: { [this.handleId]: { bindingId: this.draggedBindingId } } }));
                                else {
                                    this.didBind = this.didBind || !1;
                                    let e = h.handles[this.handleId].bindingId;
                                    void 0 !== e && ((v.bindings[e] = void 0), (v.shape = x.cQ.deepMerge(v.shape, { handles: { [this.handleId]: { bindingId: void 0 } } })));
                                }
                                let k = null == (i = (t = tB.getShapeUtil(v.shape)).onHandleChange) ? void 0 : i.call(t, v.shape, v.shape.handles);
                                return {
                                    document: {
                                        pages: { [this.app.currentPageId]: { shapes: { [h.id]: Y(Y({}, v.shape), null != k ? k : {}) }, bindings: v.bindings } },
                                        pageStates: { [this.app.currentPageId]: { bindingId: v.shape.handles[c].bindingId } },
                                    },
                                };
                            }),
                            V(this, "cancel", () => {
                                let { initialShape: e, initialBinding: t, newStartBindingId: i, draggedBindingId: s } = this,
                                    n = tB.onSessionComplete(this.app.page.shapes[e.id]),
                                    a = this.isCreate || 4 > j.B.dist(n.handles.start.point, n.handles.end.point),
                                    o = {};
                                return (
                                    (o[s] = void 0),
                                    t && (o[t.id] = a ? void 0 : t),
                                    i && (o[i] = void 0),
                                    {
                                        document: {
                                            pages: { [this.app.currentPageId]: { shapes: { [e.id]: a ? void 0 : e }, bindings: o } },
                                            pageStates: { [this.app.currentPageId]: { selectedIds: a ? [] : [e.id], bindingId: void 0, hoveredId: void 0, editingId: void 0 } },
                                        },
                                    }
                                );
                            }),
                            V(this, "complete", () => {
                                let { initialShape: e, initialBinding: t, newStartBindingId: i, startBindingShapeId: s, handleId: n } = this,
                                    a = tB.onSessionComplete(this.app.page.shapes[e.id]),
                                    o = a.handles[n].bindingId,
                                    r = j.B.dist(a.handles.start.point, a.handles.end.point);
                                if (!(o || t) && r < 4) return this.cancel();
                                let l = {},
                                    d = {};
                                return (
                                    t && ((l[t.id] = this.isCreate ? void 0 : t), (d[t.id] = void 0)),
                                    o && ((l[o] = void 0), (d[o] = this.app.page.bindings[o])),
                                    s && ((l[i] = void 0), (d[i] = this.app.page.bindings[i])),
                                    {
                                        id: "arrow",
                                        before: {
                                            document: {
                                                pages: { [this.app.currentPageId]: { shapes: { [e.id]: this.isCreate ? void 0 : e }, bindings: l } },
                                                pageStates: { [this.app.currentPageId]: { selectedIds: this.isCreate ? [] : [e.id], bindingId: void 0, hoveredId: void 0, editingId: void 0 } },
                                            },
                                        },
                                        after: {
                                            document: {
                                                pages: { [this.app.currentPageId]: { shapes: { [e.id]: a }, bindings: d } },
                                                pageStates: { [this.app.currentPageId]: { selectedIds: [e.id], bindingId: void 0, hoveredId: void 0, editingId: void 0 } },
                                            },
                                        },
                                    }
                                );
                            }),
                            V(this, "findBindingPoint", (e, t, i, s, n, a, o, r) => {
                                let l = tB.getShapeUtil(t.type).getBindingPoint(t, e, n, a, o, r);
                                if (l) return { id: s, type: "arrow", fromId: e.id, toId: t.id, handleId: i, point: j.B.toFixed(l.point), distance: l.distance };
                            }),
                            (this.isCreate = s);
                        let { currentPageId: r } = e.state.appState,
                            l = e.state.document.pages[r];
                        (this.handleId = i), (this.initialShape = ty(l.shapes[t])), (this.bindableShapeIds = tB.getBindableShapeIds(e.state).filter((e) => !(e === this.initialShape.id || e === this.initialShape.parentId)));
                        let d = null == (n = this.initialShape.handles["start" === i ? "end" : "start"]) ? void 0 : n.bindingId;
                        if (d) {
                            let e = null == (a = l.bindings[d]) ? void 0 : a.toId;
                            e && (this.bindableShapeIds = this.bindableShapeIds.filter((t) => t !== e));
                        }
                        let { originPoint: h } = this.app;
                        if (this.isCreate)
                            (this.startBindingShapeId =
                                null ==
                                (o = this.bindableShapeIds
                                    .map((e) => l.shapes[e])
                                    .filter((e) => !e.isLocked && x.cQ.pointInBounds(h, tB.getShapeUtil(e).getBounds(e)))
                                    .sort((e, t) => t.childIndex - e.childIndex)[0])
                                    ? void 0
                                    : o.id),
                                this.startBindingShapeId && this.bindableShapeIds.splice(this.bindableShapeIds.indexOf(this.startBindingShapeId), 1);
                        else {
                            let e = this.initialShape.handles[this.handleId].bindingId;
                            e ? (this.initialBinding = l.bindings[e]) : (this.initialShape.handles[this.handleId].bindingId = void 0);
                        }
                    }
                },
                ss = class extends st {
                    constructor(e) {
                        super(e),
                            V(this, "type", "brush"),
                            V(this, "performanceMode"),
                            V(this, "status", "brushing"),
                            V(this, "initialSelectedIds"),
                            V(this, "shapesToTest"),
                            V(this, "start", () => {}),
                            V(this, "update", () => {
                                let {
                                        initialSelectedIds: e,
                                        shapesToTest: t,
                                        app: { metaKey: i, settings: s, originPoint: n, currentPoint: a },
                                    } = this,
                                    o = x.cQ.getBoundsFromPoints([n, a]),
                                    r = s.isCadSelectMode ? !i && n[0] < a[0] : i,
                                    l = new Set(),
                                    d = new Set(e);
                                t.forEach(({ id: e, selectId: t }) => {
                                    let i = this.app.getShape(e);
                                    if (!l.has(t)) {
                                        let e = this.app.getShapeUtil(i);
                                        (r ? x.cQ.boundsContain(o, e.getBounds(i)) : e.hitTestBounds(i, o)) ? (l.add(t), d.has(t) || d.add(t)) : d.has(t) && d.delete(t);
                                    }
                                });
                                let h = this.app.selectedIds,
                                    p = d.size !== h.length || h.some((e) => !d.has(e)),
                                    c = p ? Array.from(d.values()) : h;
                                return p
                                    ? { appState: { selectByContain: r }, document: { pageStates: { [this.app.currentPageId]: { brush: o, selectedIds: c } } } }
                                    : { appState: { selectByContain: r }, document: { pageStates: { [this.app.currentPageId]: { brush: o } } } };
                            }),
                            V(this, "cancel", () => ({ appState: { selectByContain: !1 }, document: { pageStates: { [this.app.currentPageId]: { brush: null, selectedIds: Array.from(this.initialSelectedIds.values()) } } } })),
                            V(this, "complete", () => ({ appState: { selectByContain: !1 }, document: { pageStates: { [this.app.currentPageId]: { brush: null, selectedIds: [...this.app.selectedIds] } } } }));
                        let { currentPageId: t } = e;
                        (this.initialSelectedIds = new Set(this.app.selectedIds)),
                            (this.shapesToTest = this.app.shapes
                                .filter((e) => !(e.isLocked || e.isHidden || e.parentId !== t || this.initialSelectedIds.has(e.id) || this.initialSelectedIds.has(e.parentId)))
                                .map((e) => ({ id: e.id, bounds: this.app.getShapeUtil(e).getBounds(e), selectId: e.id }))),
                            this.update();
                    }
                },
                sn = class extends st {
                    constructor(e, t) {
                        var i;
                        super(e),
                            V(this, "type", "draw"),
                            V(this, "performanceMode"),
                            V(this, "status", "creating"),
                            V(this, "topLeft"),
                            V(this, "points"),
                            V(this, "initialShape"),
                            V(this, "lastAdjustedPoint"),
                            V(this, "shiftedPoints", []),
                            V(this, "shapeId"),
                            V(this, "isLocked"),
                            V(this, "isExtending"),
                            V(this, "lockedDirection"),
                            V(this, "start", () => {
                                var e;
                                let t = this.app.originPoint,
                                    i = [0, 0, null != (e = t[2]) ? e : 0.5];
                                this.points.push(i);
                                let s = [Math.min(this.topLeft[0], t[0]), Math.min(this.topLeft[1], t[1])],
                                    n = j.B.sub(s, t);
                                return (
                                    (this.topLeft = s),
                                    (this.shiftedPoints = this.points.map((e) => j.B.toFixed(j.B.sub(e, n)).concat(e[2]))),
                                    {
                                        document: {
                                            pages: { [this.app.currentPageId]: { shapes: { [this.shapeId]: { point: this.topLeft, points: this.shiftedPoints } } } },
                                            pageStates: { [this.app.currentPageId]: { selectedIds: [this.shapeId] } },
                                        },
                                    }
                                );
                            }),
                            V(this, "update", () => {
                                let { shapeId: e } = this,
                                    { currentPoint: t, originPoint: i, shiftKey: s, zoom: n } = this.app;
                                if (!this.lockedDirection && this.points.length > 1) {
                                    let e = j.B.sub(t, i);
                                    j.B.len(e) > 3 / n && (this.lockedDirection = Math.abs(e[0]) > Math.abs(e[1]) ? "horizontal" : "vertical");
                                }
                                if (s) {
                                    if (!this.isLocked && this.points.length > 2) {
                                        if (!this.lockedDirection) {
                                            let e = j.B.sub(t, i);
                                            j.B.len(e) > 3 / n && (this.lockedDirection = Math.abs(e[0]) > Math.abs(e[1]) ? "horizontal" : "vertical");
                                        }
                                        this.isLocked = !0;
                                        let e = [...this.lastAdjustedPoint];
                                        "vertical" === this.lockedDirection ? (e[0] = 0) : (e[1] = 0), this.points.push(e.concat(t[2]));
                                    }
                                } else this.isLocked && (this.isLocked = !1);
                                this.isLocked && ("vertical" === this.lockedDirection ? (t[0] = i[0]) : (t[1] = i[1]));
                                let a = this.addPoint(t);
                                if (a) return { document: { pages: { [this.app.currentPageId]: { shapes: { [e]: a } } }, pageStates: { [this.app.currentPageId]: { selectedIds: [e] } } } };
                            }),
                            V(this, "cancel", () => {
                                let { shapeId: e } = this,
                                    t = this.app.currentPageId;
                                return { document: { pages: { [t]: { shapes: { [e]: this.isExtending ? this.initialShape : void 0 } } }, pageStates: { [t]: { selectedIds: [] } } } };
                            }),
                            V(this, "complete", () => {
                                let { shapeId: e } = this,
                                    t = this.app.currentPageId,
                                    i = this.app.getShape(e);
                                return {
                                    id: "create_draw",
                                    before: { document: { pages: { [t]: { shapes: { [e]: this.isExtending ? this.initialShape : void 0 } } }, pageStates: { [t]: { selectedIds: [] } } } },
                                    after: {
                                        document: {
                                            pages: { [t]: { shapes: { [e]: $(Y({}, i), { point: j.B.toFixed(i.point), points: i.points.map((e) => j.B.toFixed(e)), isComplete: !0 }) } } },
                                            pageStates: { [this.app.currentPageId]: { selectedIds: [] } },
                                        },
                                    },
                                };
                            }),
                            V(this, "addPoint", (e) => {
                                let { originPoint: t } = this.app,
                                    i = j.B.toFixed(j.B.sub(e, t)).concat(e[2]);
                                if (j.B.isEqual(this.lastAdjustedPoint, i)) return;
                                this.points.push(i), (this.lastAdjustedPoint = i);
                                let s = [...this.topLeft],
                                    n = [Math.min(this.topLeft[0], e[0]), Math.min(this.topLeft[1], e[1])],
                                    a = j.B.sub(n, t),
                                    o;
                                return (
                                    s[0] !== n[0] || s[1] !== n[1] ? ((this.topLeft = n), (o = this.points.map((e) => j.B.toFixed(j.B.sub(e, a)).concat(e[2])))) : (o = [...this.shiftedPoints, j.B.sub(i, a).concat(i[2])]),
                                    (this.shiftedPoints = o),
                                    { point: this.topLeft, points: o }
                                );
                            });
                        let { originPoint: s } = this.app;
                        (this.shapeId = t), (this.initialShape = this.app.getShape(t)), (this.topLeft = [...this.initialShape.point]);
                        let n = [0, 0, null != (i = s[2]) ? i : 0.5],
                            a = j.B.sub(s, this.topLeft),
                            o = this.initialShape.points.map((e) => j.B.sub(e, a).concat(e[2]));
                        this.isExtending = o.length > 0;
                        let r = [];
                        if (this.isExtending) {
                            let e = o[o.length - 1];
                            if (e) {
                                r.push(e, e);
                                let t = Math.floor(j.B.dist(e, n) / 16);
                                if (t > 1)
                                    for (let i = 0; i < t; i++) {
                                        let s = i / (t - 1);
                                        r.push(j.B.lrp(e, n, s).concat(e[2]));
                                    }
                                else r.push(n, n);
                            }
                        } else r.push(n);
                        (this.points = [...o, ...r]), (this.shiftedPoints = this.points.map((e) => j.B.add(e, a).concat(e[2]))), (this.lastAdjustedPoint = this.points[this.points.length - 1]);
                    }
                },
                sa = class extends st {
                    constructor(e, t, i) {
                        super(e),
                            V(this, "type", "edit"),
                            V(this, "performanceMode"),
                            V(this, "initialShape"),
                            V(this, "initialSelectedIds"),
                            V(this, "currentPageId"),
                            V(this, "isCreating"),
                            V(this, "start", () => {}),
                            V(this, "update", () => {}),
                            V(this, "cancel", () => ({
                                document: {
                                    pages: { [this.currentPageId]: { shapes: { [this.initialShape.id]: this.isCreating ? void 0 : this.initialShape } } },
                                    pageStates: { [this.currentPageId]: { selectedIds: this.isCreating ? [] : this.initialSelectedIds, editingId: void 0 } },
                                },
                            })),
                            V(this, "complete", () => {
                                let e = this.app.getShape(this.initialShape.id);
                                return {
                                    id: "edit",
                                    before: {
                                        document: {
                                            pages: { [this.currentPageId]: { shapes: { [this.initialShape.id]: this.isCreating ? void 0 : this.initialShape } } },
                                            pageStates: { [this.currentPageId]: { selectedIds: this.isCreating ? [] : this.initialSelectedIds, editingId: void 0 } },
                                        },
                                    },
                                    after: { document: { pages: { [this.currentPageId]: { shapes: { [this.initialShape.id]: e } } }, pageStates: { [this.currentPageId]: { selectedIds: [e.id], editingId: void 0 } } } },
                                };
                            }),
                            (this.initialShape = e.getShape(t, e.currentPageId)),
                            (this.currentPageId = e.currentPageId),
                            (this.isCreating = i),
                            (this.initialSelectedIds = [...e.selectedIds]);
                    }
                },
                so = class extends st {
                    constructor(e) {
                        super(e),
                            V(this, "type", "draw"),
                            V(this, "performanceMode"),
                            V(this, "status", "creating"),
                            V(this, "isLocked"),
                            V(this, "lockedDirection"),
                            V(this, "erasedShapes", new Set()),
                            V(this, "erasedBindings", new Set()),
                            V(this, "initialSelectedShapes"),
                            V(this, "erasableShapes"),
                            V(this, "prevPoint"),
                            V(this, "prevEraseShapesSize", 0),
                            V(this, "interval"),
                            V(this, "timestamp1", 0),
                            V(this, "timestamp2", 0),
                            V(this, "prevErasePoint", []),
                            V(this, "loop", () => {
                                let e = Date.now(),
                                    t = e - this.timestamp1,
                                    i = e - this.timestamp2,
                                    { eraseLine: s } = this.app.appState,
                                    n = [...s],
                                    a = !1;
                                t > 16 && this.prevErasePoint !== this.prevPoint && ((a = !0), (n = [...s, this.prevPoint]), (this.prevErasePoint = this.prevPoint)),
                                    i > 32 && n.length > 1 && ((a = !0), n.splice(0, Math.ceil(0.1 * n.length)), (this.timestamp2 = e)),
                                    a && this.app.patchState({ appState: { eraseLine: n } }, "eraseline"),
                                    (this.interval = requestAnimationFrame(this.loop));
                            }),
                            V(this, "start", () => {}),
                            V(this, "update", () => {
                                let { page: e, shiftKey: t, originPoint: i, currentPoint: s, zoom: n } = this.app;
                                if (t) {
                                    let e = j.B.sub(s, i);
                                    if (!this.isLocked && j.B.len(e) > 3 / n) {
                                        if (!this.lockedDirection) {
                                            let e = j.B.sub(s, i);
                                            this.lockedDirection = Math.abs(e[0]) > Math.abs(e[1]) ? "horizontal" : "vertical";
                                        }
                                        this.isLocked = !0;
                                    }
                                } else this.isLocked && (this.isLocked = !1);
                                this.isLocked && ("vertical" === this.lockedDirection ? (s[0] = i[0]) : (s[1] = i[1]));
                                let a = j.B.toFixed(j.B.add(i, j.B.sub(s, i))),
                                    o = new Set([]);
                                this.erasableShapes.forEach((e) => {
                                    if (!this.erasedShapes.has(e) && this.app.getShapeUtil(e).hitTestLineSegment(e, this.prevPoint, a) && (this.erasedShapes.add(e), o.add(e.id), void 0 !== e.children))
                                        for (let t of e.children) this.erasedShapes.add(this.app.getShape(t)), o.add(t);
                                }),
                                    Object.values(e.bindings).forEach((e) => {
                                        for (let t of [e.toId, e.fromId]) o.has(t) && this.erasedBindings.add(e);
                                    }),
                                    this.erasedShapes.forEach((e) => {
                                        this.app.getShape(e.id) || (this.erasedShapes.delete(e), this.erasableShapes.delete(e), o.delete(e.id));
                                    });
                                let r = Array.from(this.erasedShapes.values());
                                if (((this.prevPoint = a), r.length !== this.prevEraseShapesSize))
                                    return (this.prevEraseShapesSize = r.length), { document: { pages: { [e.id]: { shapes: Object.fromEntries(r.map((e) => [e.id, { isGhost: !0 }])) } } } };
                            }),
                            V(this, "cancel", () => {
                                let { page: e } = this.app;
                                cancelAnimationFrame(this.interval),
                                    this.erasedShapes.forEach((e) => {
                                        this.app.getShape(e.id) || (this.erasedShapes.delete(e), this.erasableShapes.delete(e));
                                    });
                                let t = Array.from(this.erasedShapes.values());
                                return {
                                    document: { pages: { [e.id]: { shapes: Object.fromEntries(t.map((e) => [e.id, { isGhost: !1 }])) } }, pageStates: { [e.id]: { selectedIds: this.initialSelectedShapes.map((e) => e.id) } } },
                                    appState: { eraseLine: [] },
                                };
                            }),
                            V(this, "complete", () => {
                                let { page: e } = this.app;
                                cancelAnimationFrame(this.interval),
                                    this.erasedShapes.forEach((e) => {
                                        this.app.getShape(e.id) || (this.erasedShapes.delete(e), this.erasableShapes.delete(e));
                                    }),
                                    this.erasedBindings.forEach((e) => {
                                        this.app.getBinding(e.id) || this.erasedBindings.delete(e);
                                    });
                                let t = Array.from(this.erasedShapes.values()),
                                    i = Array.from(this.erasedBindings.values()),
                                    s = t.map((e) => e.id),
                                    n = i.map((e) => e.id),
                                    a = { shapes: Object.fromEntries(t.map((e) => [e.id, e])), bindings: Object.fromEntries(i.map((e) => [e.id, e])) },
                                    o = { shapes: Object.fromEntries(t.map((e) => [e.id, void 0])), bindings: Object.fromEntries(i.map((e) => [e.id, void 0])) };
                                return (
                                    this.app.shapes.forEach((e) => {
                                        e.handles &&
                                            !o.shapes[e.id] &&
                                            Object.values(e.handles).forEach((t) => {
                                                var i, r;
                                                t.bindingId &&
                                                    n.includes(t.bindingId) &&
                                                    ((a.shapes[e.id] = $(Y({}, a.shapes[e.id]), { handles: $(Y({}, null == (i = a.shapes[e.id]) ? void 0 : i.handles), { [t.id]: t }) })),
                                                    s.includes(e.id) || (o.shapes[e.id] = $(Y({}, o.shapes[e.id]), { handles: $(Y({}, null == (r = o.shapes[e.id]) ? void 0 : r.handles), { [t.id]: $(Y({}, t), { bindingId: void 0 }) }) })));
                                            });
                                    }),
                                    {
                                        id: "erase",
                                        before: {
                                            document: { pages: { [e.id]: a }, pageStates: { [e.id]: { selectedIds: this.initialSelectedShapes.filter((e) => !!this.app.getShape(e.id)).map((e) => e.id) } } },
                                            appState: { eraseLine: [] },
                                        },
                                        after: {
                                            document: {
                                                pages: { [e.id]: o },
                                                pageStates: {
                                                    [e.id]: {
                                                        selectedIds: this.initialSelectedShapes
                                                            .filter((e) => !!this.app.getShape(e.id))
                                                            .filter((e) => !s.includes(e.id))
                                                            .map((e) => e.id),
                                                    },
                                                },
                                            },
                                            appState: { eraseLine: [] },
                                        },
                                    }
                                );
                            }),
                            (this.prevPoint = [...e.originPoint]),
                            (this.initialSelectedShapes = this.app.selectedIds.map((e) => this.app.getShape(e))),
                            (this.erasableShapes = new Set(this.app.shapes.filter((e) => !e.isLocked))),
                            (this.interval = this.loop());
                    }
                },
                sr = class extends st {
                    constructor(e, t) {
                        var i;
                        super(e),
                            V(this, "type", "grid"),
                            V(this, "performanceMode"),
                            V(this, "status", "translating"),
                            V(this, "shape"),
                            V(this, "bounds"),
                            V(this, "initialSelectedIds"),
                            V(this, "initialSiblings"),
                            V(this, "grid", {}),
                            V(this, "columns", 1),
                            V(this, "rows", 1),
                            V(this, "isCopying", !1),
                            V(this, "start", () => {}),
                            V(this, "update", () => {
                                let { currentPageId: e, altKey: t, shiftKey: i, currentPoint: s } = this.app,
                                    n = {},
                                    a = x.cQ.getBoundsCenter(this.bounds),
                                    o = j.B.sub(s, a);
                                i && (Math.abs(o[0]) < Math.abs(o[1]) ? (o[0] = 0) : (o[1] = 0));
                                let r = this.bounds.width + 32,
                                    l = this.bounds.height + 32,
                                    d = Math.ceil(o[0] / r),
                                    h = Math.ceil(o[1] / l),
                                    p = Math.min(d, 0),
                                    c = Math.min(h, 0),
                                    u = Math.max(d, 1),
                                    g = Math.max(h, 1),
                                    m = new Set();
                                t !== this.isCopying &&
                                    (Object.values(this.grid)
                                        .filter((e) => e !== this.shape.id)
                                        .forEach((e) => (n[e] = void 0)),
                                    (this.grid = { "0_0": this.shape.id }),
                                    (this.isCopying = t));
                                for (let e = p; e < u; e++)
                                    for (let i = c; i < g; i++) {
                                        let s = `${e}_${i}`;
                                        if ((m.add(s), this.grid[s] || (0 === e && 0 === i))) continue;
                                        let a = this.getClone(j.B.add(this.shape.point, [e * r, i * l]), t);
                                        (n[a.id] = a), (this.grid[s] = a.id);
                                    }
                                if (
                                    (Object.entries(this.grid).forEach(([e, t]) => {
                                        m.has(e) || ((n[t] = void 0), delete this.grid[e]);
                                    }),
                                    0 !== Object.values(n).length)
                                )
                                    return this.initialSiblings && (n[this.shape.parentId] = { children: [...this.initialSiblings, ...Object.values(this.grid)] }), { document: { pages: { [e]: { shapes: n } }, pageStates: { [e]: {} } } };
                            }),
                            V(this, "cancel", () => {
                                let { currentPageId: e } = this.app,
                                    t = {};
                                return (
                                    Object.values(this.grid).forEach((e) => {
                                        t[e] = void 0;
                                    }),
                                    (t[this.shape.id] = $(Y({}, t[this.shape.id]), { point: this.shape.point })),
                                    this.initialSiblings && (t[this.shape.parentId] = { children: [...this.initialSiblings, this.shape.id] }),
                                    { document: { pages: { [e]: { shapes: t } }, pageStates: { [e]: { selectedIds: [this.shape.id] } } } }
                                );
                            }),
                            V(this, "complete", () => {
                                let { currentPageId: e } = this.app,
                                    t = {},
                                    i = {},
                                    s = [];
                                if (
                                    (Object.values(this.grid).forEach((e) => {
                                        (t[e] = void 0), (i[e] = this.app.getShape(e)), s.push(e);
                                    }),
                                    (t[this.shape.id] = this.shape),
                                    this.initialSiblings &&
                                        ((t[this.shape.parentId] = { children: [...this.initialSiblings, this.shape.id] }), (i[this.shape.parentId] = { children: [...this.initialSiblings, ...Object.values(this.grid)] })),
                                    1 !== s.length)
                                )
                                    return {
                                        id: "grid",
                                        before: { document: { pages: { [e]: { shapes: t } }, pageStates: { [e]: { selectedIds: [], hoveredId: void 0 } } } },
                                        after: { document: { pages: { [e]: { shapes: i } }, pageStates: { [e]: { selectedIds: s, hoveredId: void 0 } } } },
                                    };
                            }),
                            V(this, "getClone", (e, t) => {
                                let i = $(Y({}, this.shape), { id: x.cQ.uniqueId(), point: e });
                                return t || ("sticky" === i.type && (i.text = "")), i;
                            }),
                            (this.shape = this.app.getShape(t)),
                            (this.grid["0_0"] = this.shape.id),
                            (this.bounds = this.app.getShapeBounds(t)),
                            (this.initialSelectedIds = [...this.app.selectedIds]),
                            this.shape.parentId !== this.app.currentPageId && (this.initialSiblings = null == (i = this.app.getShape(this.shape.parentId).children) ? void 0 : i.filter((e) => e !== this.shape.id));
                    }
                },
                sl = {
                    arrow: si,
                    brush: ss,
                    draw: sn,
                    erase: so,
                    handle: class extends st {
                        constructor(e, t, i, s = "move_handle") {
                            super(e),
                                V(this, "type", "handle"),
                                V(this, "performanceMode"),
                                V(this, "status", "translatingHandle"),
                                V(this, "commandId"),
                                V(this, "topLeft"),
                                V(this, "shiftKey", !1),
                                V(this, "initialShape"),
                                V(this, "handleId"),
                                V(this, "start", () => {}),
                                V(this, "update", () => {
                                    var e, t;
                                    let {
                                            initialShape: i,
                                            app: { currentPageId: s, currentPoint: n },
                                        } = this,
                                        a = this.app.getShape(i.id);
                                    if (a.isLocked) return;
                                    let o = a.handles,
                                        r = this.handleId,
                                        l = j.B.sub(n, o[r].point),
                                        d = { [r]: $(Y({}, o[r]), { point: j.B.sub(j.B.add(o[r].point, l), a.point) }) },
                                        h = null == (t = (e = tB.getShapeUtil(a)).onHandleChange) ? void 0 : t.call(e, a, d);
                                    if (h) return { document: { pages: { [s]: { shapes: { [a.id]: h } } } } };
                                }),
                                V(this, "cancel", () => {
                                    let {
                                        initialShape: e,
                                        app: { currentPageId: t },
                                    } = this;
                                    return { document: { pages: { [t]: { shapes: { [e.id]: e } } } } };
                                }),
                                V(this, "complete", () => {
                                    let {
                                        initialShape: e,
                                        app: { currentPageId: t },
                                    } = this;
                                    return {
                                        id: this.commandId,
                                        before: { document: { pages: { [t]: { shapes: { [e.id]: e } } } } },
                                        after: { document: { pages: { [t]: { shapes: { [e.id]: tB.onSessionComplete(this.app.getShape(this.initialShape.id)) } } } } },
                                    };
                                });
                            let { originPoint: n } = e;
                            (this.topLeft = [...n]), (this.handleId = i), (this.initialShape = this.app.getShape(t)), (this.commandId = s);
                        }
                    },
                    rotate: class extends st {
                        constructor(e) {
                            super(e),
                                V(this, "type", "rotate"),
                                V(this, "status", "transforming"),
                                V(this, "performanceMode"),
                                V(this, "delta", [0, 0]),
                                V(this, "commonBoundsCenter"),
                                V(this, "initialAngle"),
                                V(this, "initialShapes"),
                                V(this, "changes", {}),
                                V(this, "start", () => {}),
                                V(this, "update", () => {
                                    let {
                                            commonBoundsCenter: e,
                                            initialShapes: t,
                                            app: { currentPageId: i, currentPoint: s, shiftKey: n },
                                        } = this,
                                        a = {},
                                        o = j.B.angle(e, s) - this.initialAngle;
                                    return (
                                        n && (o = x.cQ.snapAngleToSegments(o, 24)),
                                        t.forEach(({ center: t, shape: i }) => {
                                            let { rotation: s = 0 } = i,
                                                r = 0;
                                            n && (r = x.cQ.snapAngleToSegments(s, 24) - s);
                                            let l = tB.getRotatedShapeMutation(i, t, e, n ? o + r : o);
                                            l && (a[i.id] = l);
                                        }),
                                        (this.changes = a),
                                        { document: { pages: { [i]: { shapes: a } } } }
                                    );
                                }),
                                V(this, "cancel", () => {
                                    let {
                                            initialShapes: e,
                                            app: { currentPageId: t },
                                        } = this,
                                        i = {};
                                    return e.forEach(({ shape: e }) => (i[e.id] = e)), { document: { pages: { [t]: { shapes: i } } } };
                                }),
                                V(this, "complete", () => {
                                    let {
                                            initialShapes: e,
                                            app: { currentPageId: t },
                                        } = this,
                                        i = {},
                                        s = this.changes;
                                    return (
                                        e.forEach(({ shape: { id: e, point: t, rotation: s, handles: n } }) => {
                                            i[e] = { point: t, rotation: s, handles: n };
                                        }),
                                        { id: "rotate", before: { document: { pages: { [t]: { shapes: i } } } }, after: { document: { pages: { [t]: { shapes: s } } } } }
                                    );
                                });
                            let {
                                    app: { currentPageId: t, pageState: i, originPoint: s },
                                } = this,
                                n = tB.getSelectedBranchSnapshot(e.state, t).filter((e) => !e.isLocked);
                            if (0 === n.length) throw Error("No selected shapes!");
                            if (e.rotationInfo.selectedIds === i.selectedIds) {
                                if (void 0 === e.rotationInfo.center) throw Error("We should have a center for rotation!");
                                this.commonBoundsCenter = e.rotationInfo.center;
                            } else (this.commonBoundsCenter = x.cQ.getBoundsCenter(x.cQ.getCommonBounds(n.map(tB.getBounds)))), (e.rotationInfo.selectedIds = i.selectedIds), (e.rotationInfo.center = this.commonBoundsCenter);
                            (this.initialShapes = n.filter((e) => void 0 === e.children).map((e) => ({ shape: e, center: this.app.getShapeUtil(e).getCenter(e) }))), (this.initialAngle = j.B.angle(this.commonBoundsCenter, s));
                        }
                    },
                    transform: class extends st {
                        constructor(e, t = x.P0.BottomRight, i = !1) {
                            super(e),
                                (this.transformType = t),
                                (this.isCreate = i),
                                V(this, "type", "transform"),
                                V(this, "performanceMode"),
                                V(this, "status", "transforming"),
                                V(this, "scaleX", 1),
                                V(this, "scaleY", 1),
                                V(this, "initialShapes"),
                                V(this, "initialShapeIds"),
                                V(this, "initialSelectedIds"),
                                V(this, "shapeBounds"),
                                V(this, "hasUnlockedShapes"),
                                V(this, "isAllAspectRatioLocked"),
                                V(this, "initialCommonBounds"),
                                V(this, "snapInfo", { state: "empty" }),
                                V(this, "prevPoint", [0, 0]),
                                V(this, "speed", 1),
                                V(this, "start", () => {
                                    this.snapInfo = { state: "ready", bounds: this.app.shapes.filter((e) => !this.initialShapeIds.includes(e.id)).map((e) => x.cQ.getBoundsWithCenter(tB.getRotatedBounds(e))) };
                                }),
                                V(this, "update", () => {
                                    let {
                                            transformType: e,
                                            shapeBounds: t,
                                            initialCommonBounds: i,
                                            isAllAspectRatioLocked: s,
                                            app: {
                                                currentPageId: n,
                                                pageState: { camera: a },
                                                viewport: o,
                                                currentPoint: r,
                                                previousPoint: l,
                                                originPoint: d,
                                                shiftKey: h,
                                                altKey: p,
                                                metaKey: c,
                                                currentGrid: u,
                                                settings: { isSnapping: g, showGrid: m },
                                            },
                                        } = this,
                                        f = {},
                                        b = p ? j.B.mul(j.B.sub(r, d), 2) : j.B.sub(r, d),
                                        v = x.cQ.getTransformedBoundingBox(i, e, b, 0, h || s);
                                    p && (v = Y(Y({}, v), x.cQ.centerBounds(v, x.cQ.getBoundsCenter(i)))), m && (v = Y(Y({}, v), x.cQ.snapBoundsToGrid(v, u)));
                                    let y = j.B.dist(r, l) - this.speed;
                                    this.speed = this.speed + y * (y > 1 ? 0.5 : 0.15);
                                    let S = [];
                                    if (((g && !c) || (!g && c)) && this.speed * a.zoom < 10 && "ready" === this.snapInfo.state) {
                                        let t = x.cQ.getSnapPoints(
                                            x.cQ.getBoundsWithCenter(v),
                                            this.snapInfo.bounds.filter((e) => x.cQ.boundsContain(o, e) || x.cQ.boundsCollide(o, e)),
                                            5 / a.zoom
                                        );
                                        t && ((S = t.snapLines), (v = x.cQ.getTransformedBoundingBox(i, e, j.B.sub(b, t.offset), 0, h || s)));
                                    }
                                    return (
                                        (this.scaleX = v.scaleX),
                                        (this.scaleY = v.scaleY),
                                        t.forEach(({ initialShape: e, initialShapeBounds: t, transformOrigin: s }) => {
                                            let n = x.cQ.getRelativeTransformedBoundingBox(v, i, t, this.scaleX < 0, this.scaleY < 0);
                                            m && (n = x.cQ.snapBoundsToGrid(n, u));
                                            let a = tB.transform(this.app.getShape(e.id), n, { type: this.transformType, initialShape: e, scaleX: this.scaleX, scaleY: this.scaleY, transformOrigin: s });
                                            f[e.id] = a;
                                        }),
                                        { appState: { snapLines: S }, document: { pages: { [n]: { shapes: f } } } }
                                    );
                                }),
                                V(this, "cancel", () => {
                                    let {
                                            shapeBounds: e,
                                            app: { currentPageId: t },
                                        } = this,
                                        i = {};
                                    return (
                                        this.isCreate ? e.forEach((e) => (i[e.initialShape.id] = void 0)) : e.forEach((e) => (i[e.initialShape.id] = e.initialShape)),
                                        { appState: { snapLines: [] }, document: { pages: { [t]: { shapes: i } }, pageStates: { [t]: { selectedIds: this.isCreate ? [] : e.map((e) => e.initialShape.id) } } } }
                                    );
                                }),
                                V(this, "complete", () => {
                                    let {
                                        isCreate: e,
                                        shapeBounds: t,
                                        hasUnlockedShapes: i,
                                        app: { currentPageId: s },
                                    } = this;
                                    if (!i) return;
                                    if (this.isCreate && 2 > j.B.dist(this.app.originPoint, this.app.currentPoint)) return this.cancel();
                                    let n = {},
                                        a = {},
                                        o,
                                        r;
                                    return (
                                        e
                                            ? ((o = []),
                                              (r = []),
                                              t.forEach(({ initialShape: e }) => {
                                                  (n[e.id] = void 0), (a[e.id] = this.app.getShape(e.id));
                                              }))
                                            : ((o = this.initialSelectedIds),
                                              (r = this.initialSelectedIds),
                                              t.forEach(({ initialShape: e }) => {
                                                  (n[e.id] = e), (a[e.id] = this.app.getShape(e.id));
                                              })),
                                        {
                                            id: "transform",
                                            before: { appState: { snapLines: [] }, document: { pages: { [s]: { shapes: n } }, pageStates: { [s]: { selectedIds: o, hoveredId: void 0, editingId: void 0 } } } },
                                            after: { appState: { snapLines: [] }, document: { pages: { [s]: { shapes: a } }, pageStates: { [s]: { selectedIds: r, hoveredId: void 0, editingId: void 0 } } } },
                                        }
                                    );
                                }),
                                (this.initialSelectedIds = [...this.app.selectedIds]),
                                (this.app.rotationInfo.selectedIds = [...this.initialSelectedIds]),
                                (this.initialShapes = tB.getSelectedBranchSnapshot(this.app.state, this.app.currentPageId).filter((e) => !e.isLocked)),
                                (this.initialShapeIds = this.initialShapes.map((e) => e.id)),
                                (this.hasUnlockedShapes = this.initialShapes.length > 0),
                                (this.isAllAspectRatioLocked = this.initialShapes.every((e) => e.isAspectRatioLocked || tB.getShapeUtil(e).isAspectRatioLocked));
                            let s = Object.fromEntries(this.initialShapes.map((e) => [e.id, tB.getBounds(e)])),
                                n = Object.values(s);
                            this.initialCommonBounds = x.cQ.getCommonBounds(n);
                            let a = x.cQ.getBoundsFromPoints(n.map(x.cQ.getBoundsCenter));
                            this.shapeBounds = this.initialShapes.map((e) => {
                                let t = s[e.id],
                                    i = x.cQ.getBoundsCenter(t);
                                return { initialShape: e, initialShapeBounds: t, transformOrigin: [(i[0] - a.minX) / a.width, (i[1] - a.minY) / a.height] };
                            });
                        }
                    },
                    transformSingle: class extends st {
                        constructor(e, t, i, s = !1) {
                            super(e),
                                V(this, "type", "transformSingle"),
                                V(this, "status", "transforming"),
                                V(this, "performanceMode"),
                                V(this, "transformType"),
                                V(this, "scaleX", 1),
                                V(this, "scaleY", 1),
                                V(this, "isCreate"),
                                V(this, "initialShape"),
                                V(this, "initialShapeBounds"),
                                V(this, "initialCommonBounds"),
                                V(this, "snapInfo", { state: "empty" }),
                                V(this, "prevPoint", [0, 0]),
                                V(this, "speed", 1),
                                V(this, "start", () => {
                                    this.snapInfo = { state: "ready", bounds: this.app.shapes.filter((e) => e.id !== this.initialShape.id).map((e) => x.cQ.getBoundsWithCenter(tB.getRotatedBounds(e))) };
                                }),
                                V(this, "update", () => {
                                    let {
                                        transformType: e,
                                        initialShape: t,
                                        initialShapeBounds: i,
                                        app: {
                                            settings: { isSnapping: s, showGrid: n },
                                            currentPageId: a,
                                            pageState: { camera: o },
                                            viewport: r,
                                            currentPoint: l,
                                            previousPoint: d,
                                            originPoint: h,
                                            currentGrid: p,
                                            shiftKey: c,
                                            altKey: u,
                                            metaKey: g,
                                        },
                                    } = this;
                                    if (t.isLocked) return;
                                    let m = {},
                                        f = u ? j.B.mul(j.B.sub(l, h), 2) : j.B.sub(l, h),
                                        b = this.app.getShape(t.id),
                                        v = tB.getShapeUtil(b),
                                        y = x.cQ.getTransformedBoundingBox(i, e, f, b.rotation, c || b.isAspectRatioLocked || v.isAspectRatioLocked);
                                    u && (y = Y(Y({}, y), x.cQ.centerBounds(y, x.cQ.getBoundsCenter(i)))), n && (y = Y(Y({}, y), x.cQ.snapBoundsToGrid(y, p)));
                                    let S = j.B.dist(l, d) - this.speed;
                                    this.speed = this.speed + S * (S > 1 ? 0.5 : 0.15);
                                    let I = [];
                                    if (((s && !g) || (!s && g)) && !t.rotation && this.speed * o.zoom < 10 && "ready" === this.snapInfo.state) {
                                        let t = x.cQ.getSnapPoints(
                                            x.cQ.getBoundsWithCenter(y),
                                            this.snapInfo.bounds.filter((e) => x.cQ.boundsContain(r, e) || x.cQ.boundsCollide(r, e)),
                                            5 / o.zoom
                                        );
                                        t && ((I = t.snapLines), (y = x.cQ.getTransformedBoundingBox(i, e, j.B.sub(f, t.offset), b.rotation, c || b.isAspectRatioLocked || v.isAspectRatioLocked)));
                                    }
                                    let k = tB.getShapeUtil(b).transformSingle(b, y, { initialShape: t, type: this.transformType, scaleX: y.scaleX, scaleY: y.scaleY, transformOrigin: [0.5, 0.5] });
                                    return k && (m[b.id] = k), n && k && k.point && (k.point = j.B.snap(k.point, p)), { appState: { snapLines: I }, document: { pages: { [a]: { shapes: m } } } };
                                }),
                                V(this, "cancel", () => {
                                    let {
                                            initialShape: e,
                                            app: { currentPageId: t },
                                        } = this,
                                        i = {};
                                    return this.isCreate ? (i[e.id] = void 0) : (i[e.id] = e), { appState: { snapLines: [] }, document: { pages: { [t]: { shapes: i } }, pageStates: { [t]: { selectedIds: this.isCreate ? [] : [e.id] } } } };
                                }),
                                V(this, "complete", () => {
                                    let {
                                        initialShape: e,
                                        app: { currentPageId: t },
                                    } = this;
                                    if (e.isLocked) return;
                                    if (this.isCreate && 2 > j.B.dist(this.app.originPoint, this.app.currentPoint)) return this.cancel();
                                    let i = {},
                                        s = {};
                                    return (
                                        (i[e.id] = this.isCreate ? void 0 : e),
                                        (s[e.id] = tB.onSessionComplete(this.app.getShape(e.id))),
                                        {
                                            id: "transform_single",
                                            before: { appState: { snapLines: [] }, document: { pages: { [t]: { shapes: i } }, pageStates: { [t]: { selectedIds: this.isCreate ? [] : [e.id], editingId: void 0, hoveredId: void 0 } } } },
                                            after: { appState: { snapLines: [] }, document: { pages: { [t]: { shapes: s } }, pageStates: { [t]: { selectedIds: [e.id], editingId: void 0, hoveredId: void 0 } } } },
                                        }
                                    );
                                }),
                                (this.isCreate = s),
                                (this.transformType = i);
                            let n = this.app.getShape(t);
                            (this.initialShape = n), (this.initialShapeBounds = tB.getBounds(n)), (this.initialCommonBounds = tB.getRotatedBounds(n)), (this.app.rotationInfo.selectedIds = [n.id]);
                        }
                    },
                    translate: class extends st {
                        constructor(e, t = !1, i = !1) {
                            super(e),
                                V(this, "performanceMode"),
                                V(this, "type", "translate"),
                                V(this, "status", "translating"),
                                V(this, "delta", [0, 0]),
                                V(this, "prev", [0, 0]),
                                V(this, "prevPoint", [0, 0]),
                                V(this, "speed", 1),
                                V(this, "cloneInfo", { state: "empty" }),
                                V(this, "snapInfo", { state: "empty" }),
                                V(this, "snapLines", []),
                                V(this, "isCloning", !1),
                                V(this, "isCreate"),
                                V(this, "link"),
                                V(this, "initialIds"),
                                V(this, "hasUnlockedShapes"),
                                V(this, "initialSelectedIds"),
                                V(this, "initialCommonBounds"),
                                V(this, "initialShapes"),
                                V(this, "initialParentChildren"),
                                V(this, "bindingsToDelete"),
                                V(this, "start", () => {
                                    let {
                                            bindingsToDelete: e,
                                            initialIds: t,
                                            app: { currentPageId: i, page: s },
                                        } = this,
                                        n = [],
                                        a = [];
                                    if (
                                        (Object.values(s.shapes).forEach((e) => {
                                            let i = x.cQ.getBoundsWithCenter(tB.getRotatedBounds(e));
                                            n.push(i), t.has(e.id) || a.push(i);
                                        }),
                                        (this.snapInfo = { state: "ready", bounds: n, others: a }),
                                        0 === e.length)
                                    )
                                        return;
                                    let o = {};
                                    return e.forEach((e) => (o[e.id] = void 0)), { document: { pages: { [i]: { bindings: o } } } };
                                }),
                                V(this, "update", () => {
                                    let {
                                            initialParentChildren: e,
                                            initialShapes: t,
                                            initialCommonBounds: i,
                                            bindingsToDelete: s,
                                            app: {
                                                pageState: { camera: n },
                                                settings: { isSnapping: a, showGrid: o },
                                                currentPageId: r,
                                                viewport: l,
                                                selectedIds: d,
                                                currentPoint: h,
                                                previousPoint: p,
                                                originPoint: c,
                                                altKey: u,
                                                shiftKey: g,
                                                metaKey: m,
                                                currentGrid: f,
                                            },
                                        } = this,
                                        b = {},
                                        v = {},
                                        y = {},
                                        S = j.B.sub(h, c),
                                        I = !1;
                                    this.isCreate || (u && !this.isCloning ? ((this.isCloning = !0), (I = !0)) : !u && this.isCloning && ((this.isCloning = !1), (I = !0))), g && (Math.abs(S[0]) < Math.abs(S[1]) ? (S[0] = 0) : (S[1] = 0));
                                    let k = j.B.dist(h, p) - this.speed;
                                    if (((this.speed = this.speed + k * (k > 1 ? 0.5 : 0.15)), (this.snapLines = []), ((a && !m) || (!a && m)) && this.speed * n.zoom < 10 && "ready" === this.snapInfo.state)) {
                                        let e = x.cQ.getSnapPoints(
                                            x.cQ.getBoundsWithCenter(o ? x.cQ.snapBoundsToGrid(x.cQ.translateBounds(i, S), f) : x.cQ.translateBounds(i, S)),
                                            (this.isCloning ? this.snapInfo.bounds : this.snapInfo.others).filter((e) => x.cQ.boundsContain(l, e) || x.cQ.boundsCollide(l, e)),
                                            5 / n.zoom
                                        );
                                        e && ((this.snapLines = e.snapLines), (S = j.B.sub(S, e.offset)));
                                    }
                                    if (((this.prev = S), this.isCloning)) {
                                        if (I) {
                                            if (("empty" === this.cloneInfo.state && this.createCloneInfo(), "empty" === this.cloneInfo.state)) throw Error;
                                            let { clones: i, clonedBindings: n } = this.cloneInfo;
                                            for (let a of ((this.isCloning = !0),
                                            s.forEach((e) => (b[e.id] = e)),
                                            t.forEach((e) => (v[e.id] = { point: e.point })),
                                            i.forEach((t) => {
                                                var i;
                                                if (((v[t.id] = Y({}, t)), t.parentId !== r && !d.includes(t.parentId))) {
                                                    let s = (null == (i = v[t.parentId]) ? void 0 : i.children) || e[t.parentId];
                                                    s.includes(t.id) || (v[t.parentId] = $(Y({}, v[t.parentId]), { children: [...s, t.id] }));
                                                }
                                            }),
                                            n))
                                                b[a.id] = a;
                                            (y.selectedIds = i.map((e) => e.id)),
                                                i.forEach((e) => {
                                                    v[e.id] = $(Y({}, e), { point: o ? j.B.snap(j.B.toFixed(j.B.add(e.point, S)), f) : j.B.toFixed(j.B.add(e.point, S)) });
                                                });
                                        } else {
                                            if ("empty" === this.cloneInfo.state) throw Error;
                                            let { clones: e } = this.cloneInfo;
                                            e.forEach((e) => {
                                                v[e.id] = { point: o ? j.B.snap(j.B.toFixed(j.B.add(e.point, S)), f) : j.B.toFixed(j.B.add(e.point, S)) };
                                            });
                                        }
                                    } else if (I) {
                                        if ("empty" === this.cloneInfo.state) throw Error;
                                        let { clones: i, clonedBindings: n } = this.cloneInfo;
                                        for (let a of ((this.isCloning = !1),
                                        s.forEach((e) => (b[e.id] = void 0)),
                                        i.forEach((t) => {
                                            t.parentId !== r && (v[t.parentId] = $(Y({}, v[t.parentId]), { children: e[t.parentId] }));
                                        }),
                                        i.forEach((e) => (v[e.id] = void 0)),
                                        t.forEach((e) => {
                                            v[e.id] = { point: o ? j.B.snap(j.B.toFixed(j.B.add(e.point, S)), f) : j.B.toFixed(j.B.add(e.point, S)) };
                                        }),
                                        n))
                                            b[a.id] = void 0;
                                        y.selectedIds = t.map((e) => e.id);
                                    } else
                                        t.forEach((e) => {
                                            v[e.id] = { point: o ? j.B.snap(j.B.toFixed(j.B.add(e.point, S)), f) : j.B.toFixed(j.B.add(e.point, S)) };
                                        });
                                    return { appState: { snapLines: this.snapLines }, document: { pages: { [r]: { shapes: v, bindings: b } }, pageStates: { [r]: y } } };
                                }),
                                V(this, "cancel", () => {
                                    let {
                                            initialShapes: e,
                                            initialSelectedIds: t,
                                            bindingsToDelete: i,
                                            app: { currentPageId: s },
                                        } = this,
                                        n = {},
                                        a = {},
                                        o = { editingId: void 0, hoveredId: void 0 };
                                    if (
                                        (i.forEach((e) => (n[e.id] = e)),
                                        this.isCreate ? (e.forEach(({ id: e }) => (a[e] = void 0)), (o.selectedIds = [])) : (e.forEach(({ id: e, point: t }) => (a[e] = $(Y({}, a[e]), { point: t }))), (o.selectedIds = t)),
                                        "ready" === this.cloneInfo.state)
                                    ) {
                                        let { clones: e, clonedBindings: t } = this.cloneInfo;
                                        e.forEach((e) => (a[e.id] = void 0)), t.forEach((e) => (n[e.id] = void 0));
                                    }
                                    return { appState: { snapLines: [] }, document: { pages: { [s]: { shapes: a, bindings: n } }, pageStates: { [s]: o } } };
                                }),
                                V(this, "complete", () => {
                                    let {
                                            initialShapes: e,
                                            initialParentChildren: t,
                                            bindingsToDelete: i,
                                            app: { currentPageId: s },
                                        } = this,
                                        n = {},
                                        a = {},
                                        o = {},
                                        r = {};
                                    if (this.isCloning) {
                                        if (("empty" === this.cloneInfo.state && this.createCloneInfo(), "ready" !== this.cloneInfo.state)) throw Error;
                                        let { clones: e, clonedBindings: i } = this.cloneInfo;
                                        e.forEach((e) => {
                                            (a[e.id] = void 0),
                                                (r[e.id] = this.app.getShape(e.id)),
                                                e.parentId !== s && ((a[e.parentId] = $(Y({}, a[e.parentId]), { children: t[e.parentId] })), (r[e.parentId] = $(Y({}, r[e.parentId]), { children: this.app.getShape(e.parentId).children })));
                                        }),
                                            i.forEach((e) => {
                                                (n[e.id] = void 0), (o[e.id] = this.app.getBinding(e.id));
                                            });
                                    } else
                                        e.forEach((e) => {
                                            (a[e.id] = this.isCreate ? void 0 : $(Y({}, a[e.id]), { point: e.point })), (r[e.id] = Y(Y({}, r[e.id]), this.isCreate ? this.app.getShape(e.id) : { point: this.app.getShape(e.id).point }));
                                        });
                                    return (
                                        i.forEach((e) => {
                                            for (let t of ((n[e.id] = e), [e.toId, e.fromId])) {
                                                let i = this.app.getShape(t);
                                                i.handles &&
                                                    Object.values(i.handles)
                                                        .filter((t) => t.bindingId === e.id)
                                                        .forEach((i) => {
                                                            (a[t] = $(Y({}, a[t]), { handles: {} })), (r[t] = $(Y({}, r[t]), { handles: {} })), (a[t].handles[i.id] = { bindingId: e.id }), (r[t].handles[i.id] = { bindingId: void 0 });
                                                        });
                                            }
                                        }),
                                        {
                                            id: "translate",
                                            before: { appState: { snapLines: [] }, document: { pages: { [s]: { shapes: a, bindings: n } }, pageStates: { [s]: { selectedIds: this.isCreate ? [] : [...this.initialSelectedIds] } } } },
                                            after: { appState: { snapLines: [] }, document: { pages: { [s]: { shapes: r, bindings: o } }, pageStates: { [s]: { selectedIds: [...this.app.selectedIds] } } } },
                                        }
                                    );
                                }),
                                V(this, "createCloneInfo", () => {
                                    let {
                                            initialShapes: e,
                                            initialParentChildren: t,
                                            app: { selectedIds: i, currentPageId: s, page: n },
                                        } = this,
                                        a = {},
                                        o = {},
                                        r = [],
                                        l = [];
                                    e.forEach((e) => {
                                        let i = x.cQ.uniqueId();
                                        (t[i] = t[e.id]), (a[e.id] = i);
                                        let n = $(Y({}, x.cQ.deepClone(e)), { id: i, parentId: e.parentId, childIndex: tB.getChildIndexAbove(this.app.state, e.id, s) });
                                        if ("video" === n.type) {
                                            let t = document.getElementById(e.id + "_video");
                                            t && (n.currentTime = (t.currentTime + 16) % t.duration);
                                        }
                                        l.push(n);
                                    }),
                                        l.forEach((e) => {
                                            void 0 !== e.children && (e.children = e.children.map((e) => a[e]));
                                        }),
                                        l.forEach((e) => {
                                            i.includes(e.parentId) && (e.parentId = a[e.parentId]);
                                        });
                                    let d = new Set(Object.keys(a));
                                    Object.values(n.bindings)
                                        .filter((e) => d.has(e.fromId) || d.has(e.toId))
                                        .forEach((e) => {
                                            if (d.has(e.fromId) && d.has(e.toId)) {
                                                let t = x.cQ.uniqueId(),
                                                    i = $(Y({}, x.cQ.deepClone(e)), { id: t, fromId: a[e.fromId] || e.fromId, toId: a[e.toId] || e.toId });
                                                (o[e.id] = t), r.push(i);
                                            }
                                        }),
                                        l.forEach((e) => {
                                            if (e.handles && e.handles)
                                                for (let t in e.handles) {
                                                    let i = e.handles[t];
                                                    i.bindingId = i.bindingId ? o[i.bindingId] : void 0;
                                                }
                                        }),
                                        l.forEach((e) => {
                                            if (n.shapes[e.id]) throw Error("uh oh, we didn't clone correctly");
                                        }),
                                        (this.cloneInfo = { state: "ready", clones: l, cloneMap: a, clonedBindings: r });
                                }),
                                (this.isCreate = t),
                                (this.link = i);
                            let { currentPageId: s, selectedIds: n, page: a } = this.app;
                            this.initialSelectedIds = [...n];
                            let o = (i ? tB.getLinkedShapeIds(this.app.state, s, i, !1) : n).map((e) => this.app.getShape(e)).filter((e) => !e.isLocked),
                                r = new Set(o.map((e) => e.id));
                            (this.hasUnlockedShapes = o.length > 0),
                                (this.initialShapes = Array.from(new Set(o.filter((e) => !r.has(e.parentId)).flatMap((e) => (e.children ? [e, ...e.children.map((e) => this.app.getShape(e))] : [e]))).values())),
                                (this.initialIds = new Set(this.initialShapes.map((e) => e.id))),
                                (this.bindingsToDelete = []),
                                Object.values(a.bindings)
                                    .filter((e) => this.initialIds.has(e.fromId) || this.initialIds.has(e.toId))
                                    .forEach((e) => {
                                        this.initialIds.has(e.fromId) && (this.initialIds.has(e.toId) || this.bindingsToDelete.push(e));
                                    }),
                                (this.initialParentChildren = {}),
                                this.initialShapes
                                    .map((e) => e.parentId)
                                    .filter((e) => e !== a.id)
                                    .forEach((e) => {
                                        this.initialParentChildren[e] = this.app.getShape(e).children;
                                    }),
                                (this.initialCommonBounds = x.cQ.getCommonBounds(this.initialShapes.map(tB.getRotatedBounds))),
                                (this.app.rotationInfo.selectedIds = [...this.app.selectedIds]);
                        }
                    },
                    grid: sr,
                    edit: sa,
                },
                sd = (e) => sl[e],
                sh = class extends J {
                    constructor(e) {
                        super(),
                            (this.app = e),
                            V(this, "type", "select"),
                            V(this, "previous"),
                            V(this, "status", "idle"),
                            V(this, "setStatus", (e) => {
                                (this.status = e), this.app.setStatus(this.status);
                            }),
                            V(this, "onEnter", () => {
                                this.setStatus("idle");
                            }),
                            V(this, "onExit", () => {
                                this.setStatus("idle");
                            }),
                            V(this, "onCancel", () => {
                                "idle" === this.status ? this.app.selectTool("select") : this.setStatus("idle"), this.app.cancelSession();
                            }),
                            V(this, "getNextChildIndex", () => {
                                let {
                                    shapes: e,
                                    appState: { currentPageId: t },
                                } = this.app;
                                return 0 === e.length ? 1 : e.filter((e) => e.parentId === t).sort((e, t) => t.childIndex - e.childIndex)[0].childIndex + 1;
                            }),
                            V(this, "onPinchStart", () => {
                                this.app.cancelSession(), this.setStatus("pinching");
                            }),
                            V(this, "onPinchEnd", () => {
                                x.cQ.isMobileSafari() && this.app.undoSelect(), this.setStatus("idle");
                            }),
                            V(this, "onPinch", (e, t) => {
                                var i;
                                "pinching" === this.status && (isNaN(e.delta[0]) || isNaN(e.delta[1]) || (this.app.pinchZoom(e.point, e.delta, e.delta[2]), null == (i = this.onPointerMove) || i.call(this, e, t)));
                            }),
                            V(this, "onKeyDown", (e) => {
                                if ("Escape" === e) {
                                    this.onCancel();
                                    return;
                                }
                                if ("Meta" === e || "Control" === e || "Alt" === e) {
                                    this.app.updateSession();
                                    return;
                                }
                            }),
                            V(this, "onKeyUp", (e) => {
                                if ("Meta" === e || "Control" === e || "Alt" === e) {
                                    this.app.updateSession();
                                    return;
                                }
                            }),
                            V(this, "onPointerMove", () => {
                                "creating" === this.status && this.app.updateSession();
                            }),
                            V(this, "onPointerUp", () => {
                                if ("creating" === this.status) {
                                    this.app.completeSession();
                                    let { isToolLocked: e } = this.app.appState;
                                    e || this.app.selectTool("select");
                                }
                                this.setStatus("idle");
                            });
                    }
                },
                sp = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "arrow"),
                            V(this, "onPointerDown", () => {
                                if ("idle" !== this.status) return;
                                let {
                                        currentPoint: e,
                                        currentGrid: t,
                                        settings: { showGrid: i },
                                        appState: { currentPageId: s, currentStyle: n },
                                    } = this.app,
                                    a = this.getNextChildIndex(),
                                    o = x.cQ.uniqueId(),
                                    r = iO.create({ id: o, parentId: s, childIndex: a, point: i ? j.Z.snap(e, t) : e, style: Y({}, n) });
                                this.app.patchCreate([r]), this.app.startSession("arrow", r.id, "end", !0), this.setStatus("creating");
                            });
                    }
                },
                sc = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "draw"),
                            V(this, "lastShapeId"),
                            V(this, "onEnter", () => {
                                this.lastShapeId = void 0;
                            }),
                            V(this, "onCancel", () => {
                                "idle" === this.status ? this.app.selectTool("select") : this.setStatus("idle"), this.app.cancelSession();
                            }),
                            V(this, "onPointerDown", (e) => {
                                if ("idle" !== this.status || this.app.readOnly) return;
                                let {
                                        currentPoint: t,
                                        appState: { currentPageId: i, currentStyle: s },
                                    } = this.app,
                                    n = this.lastShapeId && this.app.getShape(this.lastShapeId);
                                if (e.shiftKey && n) this.app.startSession("draw", n.id), this.setStatus("extending");
                                else {
                                    let e = this.getNextChildIndex(),
                                        n = x.cQ.uniqueId(),
                                        a = iT.create({ id: n, parentId: i, childIndex: e, point: t, style: Y({}, s) });
                                    (this.lastShapeId = n), this.app.patchCreate([a]), this.app.startSession("draw", n), this.setStatus("creating");
                                }
                            }),
                            V(this, "onPointerMove", () => {
                                if (!this.app.readOnly)
                                    switch (this.status) {
                                        case "extending":
                                        case "creating":
                                            this.app.updateSession();
                                    }
                            }),
                            V(this, "onPointerUp", () => {
                                this.app.completeSession(), this.setStatus("idle");
                            });
                    }
                },
                su = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "ellipse"),
                            V(this, "onPointerDown", () => {
                                if (this.app.readOnly || "idle" !== this.status) return;
                                let {
                                        currentPoint: e,
                                        currentGrid: t,
                                        settings: { showGrid: i },
                                        appState: { currentPageId: s, currentStyle: n },
                                    } = this.app,
                                    a = this.getNextChildIndex(),
                                    o = x.cQ.uniqueId(),
                                    r = iA.create({ id: o, parentId: s, childIndex: a, point: i ? j.Z.snap(e, t) : e, style: Y({}, n) });
                                this.app.patchCreate([r]), this.app.startSession("transformSingle", r.id, x.P0.BottomRight, !0), this.setStatus("creating");
                            });
                    }
                },
                sg = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "erase"),
                            V(this, "status", "idle"),
                            V(this, "onPointerDown", () => {
                                this.app.readOnly || ("idle" === this.status && this.setStatus("pointing"));
                            }),
                            V(this, "onPointerMove", (e) => {
                                if (!this.app.readOnly)
                                    switch (this.status) {
                                        case "pointing":
                                            j.Z.dist(e.origin, e.point) > 3 && (this.app.startSession("erase"), this.app.updateSession(), this.setStatus("erasing"));
                                            break;
                                        case "erasing":
                                            this.app.updateSession();
                                    }
                            }),
                            V(this, "onPointerUp", () => {
                                if (!this.app.readOnly) {
                                    switch (this.status) {
                                        case "pointing": {
                                            let e = this.app.shapes
                                                .filter((e) => !e.isLocked)
                                                .filter((e) => this.app.getShapeUtil(e).hitTestPoint(e, this.app.currentPoint))
                                                .flatMap((e) => (e.children ? [e.id, ...e.children] : e.id));
                                            this.app.delete(e);
                                            break;
                                        }
                                        case "erasing":
                                            this.app.completeSession();
                                    }
                                    this.setStatus("idle");
                                }
                            }),
                            V(this, "onCancel", () => {
                                "idle" === this.status ? (this.previous ? this.app.selectTool(this.previous) : this.app.selectTool("select")) : this.setStatus("idle"), this.app.cancelSession();
                            });
                    }
                },
                sm = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "line"),
                            V(this, "onPointerDown", () => {
                                if (this.app.readOnly || "idle" !== this.status) return;
                                let {
                                        currentPoint: e,
                                        currentGrid: t,
                                        settings: { showGrid: i },
                                        appState: { currentPageId: s, currentStyle: n },
                                    } = this.app,
                                    a = this.getNextChildIndex(),
                                    o = x.cQ.uniqueId(),
                                    r = iO.create({ id: o, parentId: s, childIndex: a, point: i ? j.Z.snap(e, t) : e, decorations: { start: void 0, end: void 0 }, style: Y({}, n) });
                                this.app.patchCreate([r]), this.app.startSession("arrow", r.id, "end", !0), this.setStatus("creating");
                            });
                    }
                },
                sf = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "rectangle"),
                            V(this, "onPointerDown", () => {
                                if (this.app.readOnly || "idle" !== this.status) return;
                                let {
                                        currentPoint: e,
                                        currentGrid: t,
                                        settings: { showGrid: i },
                                        appState: { currentPageId: s, currentStyle: n },
                                    } = this.app,
                                    a = this.getNextChildIndex(),
                                    o = x.cQ.uniqueId(),
                                    r = iD.create({ id: o, parentId: s, childIndex: a, point: i ? j.Z.snap(e, t) : e, style: Y({}, n) });
                                this.app.patchCreate([r]), this.app.startSession("transformSingle", r.id, x.P0.BottomRight, !0), this.setStatus("creating");
                            });
                    }
                },
                sb = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "select"),
                            V(this, "pointedId"),
                            V(this, "selectedGroupId"),
                            V(this, "pointedHandleId"),
                            V(this, "pointedBoundsHandle"),
                            V(this, "pointedLinkHandleId"),
                            V(this, "onEnter", () => {
                                this.setStatus("idle");
                            }),
                            V(this, "onExit", () => {
                                this.setStatus("idle");
                            }),
                            V(this, "clonePaint", (e) => {
                                if (0 === this.app.selectedIds.length) return;
                                let t = this.app.selectedIds.map((e) => this.app.getShape(e)),
                                    i = x.cQ.expandBounds(x.cQ.getCommonBounds(t.map(tB.getBounds)), 16),
                                    s = x.cQ.getBoundsCenter(i),
                                    n = [i.width, i.height],
                                    a = [s[0] + n[0] * Math.floor((e[0] + n[0] / 2 - s[0]) / n[0]), s[1] + n[1] * Math.floor((e[1] + n[1] / 2 - s[1]) / n[1])],
                                    o = x.cQ.centerBounds(i, a);
                                this.app.shapes.some((e) => tB.getShapeUtil(e).hitTestBounds(e, o)) || this.app.duplicate(this.app.selectedIds, a);
                            }),
                            V(this, "getShapeClone", (e, t) => {
                                let i = this.app.getShape(e),
                                    s = tB.getShapeUtil(i);
                                if (s.canClone) {
                                    let e = s.getBounds(i),
                                        n = s.getCenter(i),
                                        a = {
                                            top: [e.minX, e.minY - (e.height + 32)],
                                            right: [e.maxX + 32, e.minY],
                                            bottom: [e.minX, e.maxY + 32],
                                            left: [e.minX - (e.width + 32), e.minY],
                                            topLeft: [e.minX - (e.width + 32), e.minY - (e.height + 32)],
                                            topRight: [e.maxX + 32, e.minY - (e.height + 32)],
                                            bottomLeft: [e.minX - (e.width + 32), e.maxY + 32],
                                            bottomRight: [e.maxX + 32, e.maxY + 32],
                                        }[t];
                                    if (0 !== i.rotation) {
                                        let t = j.Z.add(a, [e.width / 2, e.height / 2]),
                                            s = j.Z.rotWith(t, n, i.rotation || 0);
                                        a = j.Z.sub(s, [e.width / 2, e.height / 2]);
                                    }
                                    let o = x.cQ.uniqueId(),
                                        r = $(Y({}, i), { id: o, point: a });
                                    return "sticky" === r.type && (r.text = ""), r;
                                }
                            }),
                            V(this, "onCancel", () => {
                                this.app.session ? this.app.cancelSession() : this.selectNone(), this.setStatus("idle");
                            }),
                            V(this, "onKeyDown", (e, t, i) => {
                                switch (e) {
                                    case "Escape":
                                        this.onCancel();
                                        break;
                                    case "Tab":
                                        if (this.app.readOnly) return;
                                        if (!this.app.pageState.editingId && "idle" === this.status && 1 === this.app.selectedIds.length) {
                                            let [e] = this.app.selectedIds,
                                                t = this.getShapeClone(e, "right");
                                            t && (this.app.createShapes(t), this.setStatus("idle"), "sticky" === t.type && (this.app.select(t.id), this.app.setEditingId(t.id)));
                                        }
                                        break;
                                    case "Meta":
                                    case "Control":
                                    case "Alt":
                                        this.app.updateSession();
                                        break;
                                    case "Enter": {
                                        if (this.app.readOnly) return;
                                        let { pageState: e } = this.app;
                                        1 !== e.selectedIds.length || e.editingId || (this.app.setEditingId(e.selectedIds[0]), i.preventDefault());
                                    }
                                }
                            }),
                            V(this, "onKeyUp", (e, t) => {
                                if ("clonePainting" === this.status && !(t.altKey && t.shiftKey)) {
                                    this.setStatus("idle");
                                    return;
                                }
                                if ("Meta" === e || "Control" === e || "Alt" === e) {
                                    this.app.updateSession();
                                    return;
                                }
                            }),
                            V(this, "onPointerMove", () => {
                                let { originPoint: e, currentPoint: t } = this.app;
                                if (this.app.readOnly && this.app.isPointing) {
                                    this.app.session ? this.app.updateSession() : j.Z.dist(e, t) > 3 && (this.app.startSession("brush"), this.setStatus("brushing"));
                                    return;
                                }
                                switch (this.status) {
                                    case "pointingBoundsHandle":
                                        if (!this.pointedBoundsHandle) throw Error("No pointed bounds handle");
                                        if (j.Z.dist(e, t) > 3) {
                                            if ("rotate" === this.pointedBoundsHandle) this.setStatus("rotating"), this.app.startSession("rotate");
                                            else if ("center" === this.pointedBoundsHandle || "left" === this.pointedBoundsHandle || "right" === this.pointedBoundsHandle)
                                                this.setStatus("translating"), this.app.startSession("translate", !1, this.pointedBoundsHandle);
                                            else {
                                                this.setStatus("transforming");
                                                let e = this.app.selectedIds.flatMap((e) => tB.getDocumentBranch(this.app.state, e, this.app.currentPageId));
                                                1 === e.length ? this.app.startSession("transformSingle", e[0], this.pointedBoundsHandle) : this.app.startSession("transform", this.pointedBoundsHandle);
                                            }
                                            this.app.updateSession();
                                        }
                                        break;
                                    case "pointingCanvas":
                                        j.Z.dist(e, t) > 3 && (this.app.startSession("brush"), this.setStatus("brushing"));
                                        break;
                                    case "pointingClone":
                                        j.Z.dist(e, t) > 3 && (this.setStatus("translatingClone"), this.app.startSession("translate"), this.app.updateSession());
                                        break;
                                    case "pointingBounds":
                                        j.Z.dist(e, t) > 3 && (this.setStatus("translating"), this.app.startSession("translate"), this.app.updateSession());
                                        break;
                                    case "pointingHandle":
                                        if (!this.pointedHandleId) throw Error("No pointed handle");
                                        if (j.Z.dist(e, t) > 3) {
                                            this.setStatus("translatingHandle");
                                            let e = this.app.getShape(this.app.selectedIds[0]);
                                            e && ("bend" === this.pointedHandleId ? this.app.startSession("handle", e.id, this.pointedHandleId) : this.app.startSession("arrow", e.id, this.pointedHandleId, !1), this.app.updateSession());
                                        }
                                        break;
                                    case "clonePainting":
                                        this.clonePaint(t);
                                        break;
                                    default:
                                        this.app.session && this.app.updateSession();
                                }
                            }),
                            V(this, "onPointerDown", (e, t) => {
                                if ("canvas" === e.target && "idle" === this.status) {
                                    let { currentPoint: i } = this.app;
                                    if (!e.spaceKey || 1 !== t.buttons) {
                                        if ("idle" === this.status && e.altKey && e.shiftKey) {
                                            this.setStatus("clonePainting"), this.clonePaint(i);
                                            return;
                                        }
                                        if (!e.shiftKey) {
                                            if ((this.app.onShapeBlur(), e.altKey && this.app.selectedIds.length > 0)) {
                                                this.app.duplicate(this.app.selectedIds, i);
                                                return;
                                            }
                                            this.selectNone();
                                        }
                                        this.setStatus("pointingCanvas");
                                    }
                                }
                            }),
                            V(this, "onPointerUp", (e) => {
                                var t;
                                if ("translatingClone" === this.status || "pointingClone" === this.status) {
                                    this.pointedId && (this.app.completeSession(), this.app.setEditingId(this.pointedId)), this.setStatus("idle"), (this.pointedId = void 0);
                                    return;
                                }
                                if ("pointingBounds" === this.status) {
                                    if ("bounds" === e.target) this.selectNone();
                                    else if (this.app.isSelected(e.target)) e.shiftKey ? this.pointedId !== e.target && this.deselect(e.target) : this.pointedId !== e.target && this.app.selectedIds.length > 1 && this.select(e.target);
                                    else if (this.pointedId === e.target) {
                                        if (this.app.getShape(e.target).isLocked) return;
                                        e.shiftKey ? this.pushSelect(e.target) : this.select(e.target);
                                    }
                                }
                                this.setStatus("idle"),
                                    (this.pointedBoundsHandle = void 0),
                                    (this.pointedHandleId = void 0),
                                    (this.pointedId = void 0),
                                    (null == (t = this.app.session) ? void 0 : t.type) !== "edit" && this.app.completeSession();
                            }),
                            V(this, "onDoubleClickCanvas", () => {
                                this.app.readOnly;
                            }),
                            V(this, "onPointShape", (e, t) => {
                                if ((e.spaceKey && 1 === t.buttons) || this.app.getShape(e.target).isLocked) return;
                                let { editingId: i, hoveredId: s } = this.app.pageState;
                                if ((i && e.target !== i && this.app.onShapeBlur(), ("idle" === this.status || "pointingBounds" === this.status) && e.metaKey && e.shiftKey && s)) {
                                    (this.pointedId = s), this.app.isSelected(s) ? this.deselect(s) : (this.pushSelect(s), this.setStatus("pointingBounds"));
                                    return;
                                }
                                if ("pointingBounds" === this.status) {
                                    let { parentId: t } = this.app.getShape(e.target);
                                    this.pointedId = t === this.app.currentPageId ? e.target : t;
                                    return;
                                }
                                if ("idle" === this.status) {
                                    if ((this.setStatus("pointingBounds"), e.metaKey)) {
                                        e.shiftKey || this.selectNone(), this.app.startSession("brush"), this.setStatus("brushing");
                                        return;
                                    }
                                    let t,
                                        { parentId: i } = this.app.getShape(e.target);
                                    i === this.app.currentPageId ? ((t = e.target), (this.selectedGroupId = void 0)) : i === this.selectedGroupId ? (t = e.target) : ((t = i), (this.selectedGroupId = void 0)),
                                        this.app.isSelected(t) || ((this.pointedId = t), e.shiftKey ? this.pushSelect(t) : this.select(t));
                                }
                            }),
                            V(this, "onDoubleClickShape", (e) => {
                                if (this.app.readOnly) return;
                                let t = this.app.getShape(e.target);
                                if (t.isLocked) {
                                    this.app.select(e.target);
                                    return;
                                }
                                tB.getShapeUtil(t.type).canEdit && (t.parentId === this.app.currentPageId || t.parentId === this.selectedGroupId) && this.app.setEditingId(e.target),
                                    t.parentId !== this.app.currentPageId && (this.selectedGroupId = t.parentId),
                                    this.app.select(e.target);
                            }),
                            V(this, "onRightPointShape", (e) => {
                                this.app.isSelected(e.target) || this.app.select(e.target);
                            }),
                            V(this, "onHoverShape", (e) => {
                                this.app.setHoveredId(e.target);
                            }),
                            V(this, "onUnhoverShape", (e) => {
                                let { currentPageId: t } = this.app;
                                requestAnimationFrame(() => {
                                    t === this.app.currentPageId && this.app.pageState.hoveredId === e.target && this.app.setHoveredId(void 0);
                                });
                            }),
                            V(this, "onPointBounds", (e) => {
                                if (e.metaKey) {
                                    e.shiftKey || this.selectNone(), this.app.startSession("brush"), this.setStatus("brushing");
                                    return;
                                }
                                this.setStatus("pointingBounds");
                            }),
                            V(this, "onRightPointBounds", (e, t) => {
                                t.stopPropagation();
                            }),
                            V(this, "onReleaseBounds", () => {
                                ("translating" === this.status || "brushing" === this.status) && this.app.completeSession(), this.setStatus("idle");
                            }),
                            V(this, "onPointBoundsHandle", (e) => {
                                (this.pointedBoundsHandle = e.target), this.setStatus("pointingBoundsHandle");
                            }),
                            V(this, "onDoubleClickBoundsHandle", (e) => {
                                switch (e.target) {
                                    case "center":
                                    case "left":
                                    case "right":
                                        this.app.select(...tB.getLinkedShapeIds(this.app.state, this.app.currentPageId, e.target, e.shiftKey));
                                        break;
                                    default:
                                        if (1 === this.app.selectedIds.length) {
                                            this.app.resetBounds(this.app.selectedIds);
                                            let e = this.app.getShape(this.app.selectedIds[0]);
                                            "label" in e && this.app.setEditingId(e.id);
                                        }
                                }
                            }),
                            V(this, "onReleaseBoundsHandle", () => {
                                this.setStatus("idle");
                            }),
                            V(this, "onPointHandle", (e) => {
                                (this.pointedHandleId = e.target), this.setStatus("pointingHandle");
                            }),
                            V(this, "onDoubleClickHandle", (e) => {
                                if ("bend" === e.target) {
                                    let { selectedIds: e } = this.app;
                                    if (1 !== e.length) return;
                                    let t = this.app.getShape(e[0]);
                                    tB.getShapeUtil(t.type).canEdit && (t.parentId === this.app.currentPageId || t.parentId === this.selectedGroupId) && this.app.setEditingId(t.id);
                                    return;
                                }
                                this.app.toggleDecoration(e.target);
                            }),
                            V(this, "onReleaseHandle", () => {
                                this.setStatus("idle");
                            }),
                            V(this, "onShapeClone", (e) => {
                                let t = this.app.selectedIds[0],
                                    i = this.getShapeClone(t, e.target);
                                "left" === e.target || "right" === e.target || "top" === e.target || "bottom" === e.target
                                    ? i && (this.app.createShapes(i), (this.pointedId = i.id), this.setStatus("pointingClone"))
                                    : (this.setStatus("gridCloning"), this.app.startSession("grid", t));
                            });
                    }
                    deselect(e) {
                        this.app.select(...this.app.selectedIds.filter((t) => t !== e));
                    }
                    select(e) {
                        this.app.select(e);
                    }
                    pushSelect(e) {
                        let t = this.app.getShape(e);
                        this.app.select(...this.app.selectedIds.filter((e) => e !== t.parentId), e);
                    }
                    selectNone() {
                        this.app.selectNone();
                    }
                },
                sv = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "sticky"),
                            V(this, "shapeId"),
                            V(this, "onPointerDown", () => {
                                if (!this.app.readOnly) {
                                    if ("creating" === this.status) {
                                        this.setStatus("idle"), this.app.appState.isToolLocked || this.app.selectTool("select");
                                        return;
                                    }
                                    if ("idle" === this.status) {
                                        let {
                                                currentPoint: e,
                                                currentGrid: t,
                                                settings: { showGrid: i },
                                                appState: { currentPageId: s, currentStyle: n },
                                            } = this.app,
                                            a = this.getNextChildIndex(),
                                            o = x.cQ.uniqueId();
                                        this.shapeId = o;
                                        let r = iR.create({ id: o, parentId: s, childIndex: a, point: i ? j.Z.snap(e, t) : e, style: Y({}, n) }),
                                            l = iR.getBounds(r);
                                        (r.point = j.Z.sub(r.point, [l.width / 2, l.height / 2])), this.app.patchCreate([r]), this.app.startSession("translate"), this.setStatus("creating");
                                    }
                                }
                            }),
                            V(this, "onPointerUp", () => {
                                this.app.readOnly || ("creating" === this.status && (this.setStatus("idle"), this.app.completeSession(), this.app.selectTool("select"), this.app.setEditingId(this.shapeId)));
                            });
                    }
                },
                sy = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "text"),
                            V(this, "stopEditingShape", () => {
                                this.setStatus("idle"), this.app.appState.isToolLocked || this.app.selectTool("select");
                            }),
                            V(this, "onKeyUp", () => {}),
                            V(this, "onKeyDown", () => {}),
                            V(this, "onPointerDown", () => {
                                if ("creating" === this.status) {
                                    this.stopEditingShape();
                                    return;
                                }
                                if ("idle" === this.status) {
                                    let {
                                        currentPoint: e,
                                        currentGrid: t,
                                        settings: { showGrid: i },
                                    } = this.app;
                                    this.app.createTextShapeAtPoint(i ? j.Z.snap(e, t) : e, void 0, !0), this.setStatus("creating");
                                    return;
                                }
                            }),
                            V(this, "onPointerUp", () => {}),
                            V(this, "onPointShape", (e) => {
                                if (this.app.readOnly) return;
                                let t = this.app.getShape(e.target);
                                "text" === t.type && (this.setStatus("idle"), this.app.setEditingId(t.id));
                            }),
                            V(this, "onShapeBlur", () => {
                                this.app.readOnly || this.stopEditingShape();
                            });
                    }
                },
                sS = class extends sh {
                    constructor() {
                        super(...arguments),
                            V(this, "type", "triangle"),
                            V(this, "onPointerDown", () => {
                                if (this.app.readOnly || "idle" !== this.status) return;
                                let {
                                        currentPoint: e,
                                        currentGrid: t,
                                        settings: { showGrid: i },
                                        appState: { currentPageId: s, currentStyle: n },
                                    } = this.app,
                                    a = this.getNextChildIndex(),
                                    o = x.cQ.uniqueId(),
                                    r = ij.create({ id: o, parentId: s, childIndex: a, point: i ? j.Z.snap(e, t) : e, style: Y({}, n) });
                                this.app.patchCreate([r]), this.app.startSession("transformSingle", r.id, x.P0.BottomRight, !0), this.setStatus("creating");
                            });
                    }
                },
                sI = x.cQ.uniqueId(),
                sk = class extends iZ {
                    constructor(e, t = {}) {
                        super(sk.defaultState, e, sk.version, (e, t, i) => iJ($(Y({}, t), { document: $(Y(Y({}, t.document), e.document), { version: i }) }), sk.version)),
                            V(this, "callbacks", {}),
                            V(this, "tools", {
                                select: new sb(this),
                                erase: new sg(this),
                                text: new sy(this),
                                draw: new sc(this),
                                ellipse: new su(this),
                                rectangle: new sf(this),
                                triangle: new sS(this),
                                line: new sm(this),
                                arrow: new sp(this),
                                sticky: new sv(this),
                            }),
                            V(this, "currentTool", this.tools.select),
                            V(this, "session"),
                            V(this, "readOnly", !1),
                            V(this, "isDirty", !1),
                            V(this, "isCreating", !1),
                            V(this, "originPoint", [0, 0]),
                            V(this, "currentPoint", [0, 0]),
                            V(this, "previousPoint", [0, 0]),
                            V(this, "shiftKey", !1),
                            V(this, "altKey", !1),
                            V(this, "metaKey", !1),
                            V(this, "ctrlKey", !1),
                            V(this, "spaceKey", !1),
                            V(this, "isPointing", !1),
                            V(this, "isForcePanning", !1),
                            V(this, "isPastePrevented", !1),
                            V(this, "editingStartTime", -1),
                            V(this, "fileSystemHandle", null),
                            V(
                                this,
                                "viewport",
                                x.cQ.getBoundsFromPoints([
                                    [0, 0],
                                    [100, 100],
                                ])
                            ),
                            V(
                                this,
                                "rendererBounds",
                                x.cQ.getBoundsFromPoints([
                                    [0, 0],
                                    [100, 100],
                                ])
                            ),
                            V(this, "selectHistory", { stack: [[]], pointer: 0 }),
                            V(this, "clipboard"),
                            V(this, "rotationInfo", { selectedIds: [], center: [0, 0] }),
                            V(this, "migrate", (e) => iJ(e, sk.version)),
                            V(this, "onReady", () => {
                                var e, t;
                                this.loadDocument(this.document),
                                    i2().then((e) => {
                                        this.fileSystemHandle = e;
                                    });
                                try {
                                    this.patchState($(Y({}, iJ(this.state, sk.version)), { appState: { status: "idle" } }));
                                } catch (e) {
                                    console.error("The data appears to be corrupted. Resetting!", e),
                                        localStorage.setItem(this.document.id + "_corrupted", JSON.stringify(this.document)),
                                        this.patchState($(Y({}, sk.defaultState), { appState: $(Y({}, sk.defaultState.appState), { status: "idle" }) }));
                                }
                                null == (t = (e = this.callbacks).onMount) || t.call(e, this);
                            }),
                            V(this, "cleanup", (e, t) => {
                                var i;
                                let s = Y({}, e);
                                s.document !== t.document &&
                                    Object.entries(s.document.pages).forEach(([e, i]) => {
                                        if (void 0 === i) {
                                            delete s.document.pages[e], delete s.document.pageStates[e];
                                            return;
                                        }
                                        let n = t.document.pages[e],
                                            a = {};
                                        if (!n || i.shapes !== n.shapes || i.bindings !== n.bindings) {
                                            (i.shapes = Y({}, i.shapes)), (i.bindings = Y({}, i.bindings));
                                            let t = new Set();
                                            Object.entries(i.shapes).forEach(([o, r]) => {
                                                var l;
                                                let d;
                                                r ? (d = r.parentId) : ((d = null == (l = null == n ? void 0 : n.shapes[o]) ? void 0 : l.parentId), delete i.shapes[o]),
                                                    i.id === s.appState.currentPageId && (null == n ? void 0 : n.shapes[o]) !== r && (a[o] = r),
                                                    d && d !== e && void 0 !== i.shapes[d] && t.add(i.shapes[d]);
                                            }),
                                                Object.keys(i.bindings).forEach((e) => {
                                                    i.bindings[e] || delete i.bindings[e];
                                                }),
                                                (s.document.pages[e] = i);
                                            let o = tB.getRelatedBindings(s, Object.keys(a), e),
                                                r = new Set();
                                            o.forEach((t) => {
                                                if (!i.bindings[t.id]) return;
                                                let n = i.shapes[t.toId],
                                                    a = i.shapes[t.fromId];
                                                if (!(n && a)) {
                                                    delete s.document.pages[e].bindings[t.id];
                                                    return;
                                                }
                                                if (r.has(a)) return;
                                                let o = tB.updateArrowBindings(i, a);
                                                if ((r.add(a), o)) {
                                                    let e = Y(Y({}, a), o);
                                                    i.shapes[a.id] = e;
                                                }
                                            }),
                                                t.forEach((e) => {
                                                    if (!e) throw Error("no group!");
                                                    let t = e.children.filter((e) => void 0 !== i.shapes[e]),
                                                        s = x.cQ.getCommonBounds(
                                                            t
                                                                .map((e) => i.shapes[e])
                                                                .filter(Boolean)
                                                                .map((e) => tB.getRotatedBounds(e))
                                                        );
                                                    i.shapes[e.id] = $(Y({}, e), { point: [s.minX, s.minY], size: [s.width, s.height], children: t });
                                                });
                                        }
                                        let o = Y({}, s.document.pageStates[e]);
                                        o.brush || delete o.brush,
                                            o.hoveredId && !i.shapes[o.hoveredId] && delete o.hoveredId,
                                            o.bindingId && !i.bindings[o.bindingId] && (tB.warn(`Could not find the binding of ${e}`), delete o.bindingId),
                                            o.editingId && !i.shapes[o.editingId] && (tB.warn("Could not find the editing shape!"), delete o.editingId),
                                            (s.document.pageStates[e] = o);
                                    }),
                                    Object.keys(null != (i = s.document.assets) ? i : {}).forEach((e) => {
                                        var t, i;
                                        (null == (t = s.document.assets) ? void 0 : t[e]) || null == (i = s.document.assets) || delete i[e];
                                    });
                                let n = s.appState.currentPageId,
                                    a = s.document.pageStates[n];
                                if (s.room && s.room !== t.room) {
                                    let e = $(Y({}, s.room), { users: Y({}, s.room.users) });
                                    t.room &&
                                        Object.values(t.room.users)
                                            .filter(Boolean)
                                            .forEach((t) => {
                                                void 0 === e.users[t.id] && delete e.users[t.id];
                                            }),
                                        (s.room = e);
                                }
                                return s.room && (s.room.users[s.room.userId] = $(Y({}, s.room.users[s.room.userId]), { point: this.currentPoint, selectedIds: a.selectedIds })), this.readOnly && (s.document.pages = t.document.pages), s;
                            }),
                            V(this, "broadcastPatch", (e, t) => {
                                var i, s, n, a, o, r, l, d, h;
                                let p = {},
                                    c = {},
                                    u = {},
                                    g = null == (n = null == (s = null == (i = null == e ? void 0 : e.document) ? void 0 : i.pages) ? void 0 : s[this.currentPageId]) ? void 0 : n.shapes,
                                    m = null == (r = null == (o = null == (a = null == e ? void 0 : e.document) ? void 0 : a.pages) ? void 0 : o[this.currentPageId]) ? void 0 : r.bindings,
                                    f = null == (l = null == e ? void 0 : e.document) ? void 0 : l.assets;
                                g &&
                                    Object.keys(g).forEach((e) => {
                                        p[e] = this.getShape(e, this.currentPageId);
                                    }),
                                    m &&
                                        Object.keys(m).forEach((e) => {
                                            c[e] = this.getBinding(e, this.currentPageId);
                                        }),
                                    f &&
                                        Object.keys(f).forEach((e) => {
                                            u[e] = this.document.assets[e];
                                        }),
                                    null == (h = (d = this.callbacks).onChangePage) || h.call(d, this, p, c, u, t);
                            }),
                            V(this, "onPatch", (e, t, i) => {
                                var s, n, a, o, r, l;
                                ((this.callbacks.onChangePage && (null == (n = null == (s = null == t ? void 0 : t.document) ? void 0 : s.pages) ? void 0 : n[this.currentPageId])) ||
                                    (null == (a = null == t ? void 0 : t.document) ? void 0 : a.assets)) &&
                                    ((null == (o = null == t ? void 0 : t.document) ? void 0 : o.assets) || (this.session && "brush" !== this.session.type && "erase" !== this.session.type && "draw" !== this.session.type)) &&
                                    this.broadcastPatch(t, !1),
                                    null == (l = (r = this.callbacks).onPatch) || l.call(r, this, t, i);
                            }),
                            V(this, "onCommand", (e, t, i) => {
                                var s, n;
                                this.clearSelectHistory(), (this.isDirty = !0), null == (n = (s = this.callbacks).onCommand) || n.call(s, this, t, i);
                            }),
                            V(this, "onReplace", () => {
                                this.clearSelectHistory(), (this.isDirty = !1);
                            }),
                            V(this, "onUndo", () => {
                                var e, t;
                                (this.rotationInfo.selectedIds = [...this.selectedIds]), null == (t = (e = this.callbacks).onUndo) || t.call(e, this);
                            }),
                            V(this, "onRedo", () => {
                                var e, t;
                                (this.rotationInfo.selectedIds = [...this.selectedIds]), null == (t = (e = this.callbacks).onRedo) || t.call(e, this);
                            }),
                            V(this, "onPersist", (e, t) => {
                                var i, s;
                                null == (s = (i = this.callbacks).onPersist) || s.call(i, this), this.broadcastPatch(t, !0);
                            }),
                            V(this, "prevSelectedIds", this.selectedIds),
                            V(this, "onStateDidChange", (e, t) => {
                                var i, s, n, a;
                                null == (s = (i = this.callbacks).onChange) || s.call(i, this, t),
                                    this.room &&
                                        this.selectedIds !== this.prevSelectedIds &&
                                        (null == (a = (n = this.callbacks).onChangePresence) || a.call(n, this, $(Y({}, this.room.users[this.room.userId]), { selectedIds: this.selectedIds, session: !!this.session })),
                                        (this.prevSelectedIds = this.selectedIds));
                            }),
                            V(this, "preventPaste", () => {
                                if (this.isPastePrevented) return;
                                let e = (e) => e.stopImmediatePropagation();
                                document.addEventListener("paste", e, { capture: !0 }),
                                    window.addEventListener(
                                        "pointerup",
                                        () => {
                                            setTimeout(() => {
                                                document.removeEventListener("paste", e, { capture: !0 }), (this.isPastePrevented = !1);
                                            }, 50);
                                        },
                                        { once: !0 }
                                    ),
                                    (this.isPastePrevented = !0);
                            }),
                            V(this, "justSent", !1),
                            V(this, "getReservedContent", (e, t = this.currentPageId) => {
                                let { bindings: i } = this.document.pages[t],
                                    s = {},
                                    n = {},
                                    a = Object.values(i),
                                    o = [new Map(a.map((e) => [e.toId, e])), new Map(a.map((e) => [e.fromId, e]))],
                                    r = [];
                                this.session && e.forEach((e) => r.push(e)), this.pageState.editingId && r.push(this.pageState.editingId);
                                let l = new Set(r),
                                    d = new Set();
                                for (; r.length > 0; ) {
                                    let e = r.pop();
                                    if (!e) break;
                                    if (d.has(e)) continue;
                                    d.add(e);
                                    let i = this.getShape(e);
                                    (s[e] = i),
                                        i.parentId !== t && r.push(i.parentId),
                                        i.children && r.push(...i.children),
                                        o
                                            .map((e) => e.get(i.id))
                                            .filter(Boolean)
                                            .forEach((e) => {
                                                (n[e.id] = e), r.push(e.toId, e.fromId);
                                            });
                                }
                                return { reservedShapes: s, reservedBindings: n, strongReservedShapeIds: l };
                            }),
                            V(this, "replacePageContent", (e, t, i, s = this.currentPageId) => {
                                if (this.justSent) return (this.justSent = !1), this;
                                let n = this.document.pages[this.currentPageId];
                                return (
                                    Object.values(e).forEach((t) => {
                                        t.parentId === s || n.shapes[t.parentId] || e[t.parentId] || (console.warn("Added a shape without a parent on the page"), (t.parentId = s));
                                    }),
                                    this.useStore.setState((n) => {
                                        let { hoveredId: a, editingId: o, bindingId: r, selectedIds: l } = n.document.pageStates[s],
                                            d = [...l],
                                            h = o && n.document.pages[this.currentPageId].shapes[o];
                                        h && d.push(h.id);
                                        let { reservedShapes: p, reservedBindings: c, strongReservedShapeIds: u } = this.getReservedContent(d, this.currentPageId);
                                        Object.values(p)
                                            .filter((e) => !("text" in e))
                                            .forEach((t) => {
                                                let i = e[t.id];
                                                if (i) {
                                                    if (!("arrow" === t.type || u.has(t.id))) {
                                                        e[t.id] = i;
                                                        return;
                                                    }
                                                    "decorations" in i && "decorations" in t && (e[t.id] = $(Y({}, t), { decorations: i.decorations })), (t.style = i.style);
                                                }
                                            });
                                        let g = Y(Y({}, e), p);
                                        h && (g[h.id] = h);
                                        let m = Y(Y({}, t), c),
                                            f = Y({}, i),
                                            b = $(Y({}, n), {
                                                document: $(Y({}, n.document), {
                                                    pages: { [s]: $(Y({}, n.document.pages[s]), { shapes: g, bindings: m }) },
                                                    assets: f,
                                                    pageStates: $(Y({}, n.document.pageStates), {
                                                        [s]: $(Y({}, n.document.pageStates[s]), {
                                                            selectedIds: l.filter((e) => void 0 !== g[e]),
                                                            hoveredId: a ? (void 0 === g[a] ? void 0 : a) : void 0,
                                                            editingId: o,
                                                            bindingId: r ? (void 0 === m[r] ? void 0 : r) : void 0,
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            v = b.document.pages[s],
                                            y = tB.getRelatedBindings(b, Object.keys(g), s),
                                            S = new Set();
                                        return (
                                            y.forEach((e) => {
                                                if (!v.bindings[e.id]) return;
                                                let t = v.shapes[e.fromId];
                                                if (S.has(t)) return;
                                                let i = tB.updateArrowBindings(v, t);
                                                if ((S.add(t), i)) {
                                                    let e = Y(Y({}, t), i);
                                                    v.shapes[t.id] = e;
                                                }
                                            }),
                                            Object.values(g).forEach((e) => {
                                                if ("group" !== e.type) return;
                                                let t = e.children.filter((e) => void 0 !== v.shapes[e]),
                                                    i = x.cQ.getCommonBounds(
                                                        t
                                                            .map((e) => v.shapes[e])
                                                            .filter(Boolean)
                                                            .map((e) => tB.getRotatedBounds(e))
                                                    );
                                                v.shapes[e.id] = $(Y({}, e), { point: [i.minX, i.minY], size: [i.width, i.height], children: t });
                                            }),
                                            (this.state.document = b.document),
                                            b
                                        );
                                    }, !0),
                                    this
                                );
                            }),
                            V(this, "updateBounds", (e) => {
                                this.rendererBounds = e;
                                let { point: t, zoom: i } = this.camera;
                                this.updateViewport(t, i), !this.readOnly && this.session && this.session.update();
                            }),
                            V(this, "updateViewport", (e, t) => {
                                let { width: i, height: s } = this.rendererBounds,
                                    [n, a] = j.B.sub(j.B.div([0, 0], t), e),
                                    [o, r] = j.B.sub(j.B.div([i, s], t), e);
                                this.viewport = { minX: n, minY: a, maxX: o, maxY: r, height: o - n, width: r - a };
                            }),
                            V(this, "setEditingId", (e, t = !1) => {
                                if (!this.readOnly) {
                                    if (e) this.startSession("edit", e, t);
                                    else {
                                        if (!this.pageState.editingId) return;
                                        this.completeSession();
                                    }
                                    (this.editingStartTime = performance.now()), this.patchState({ document: { pageStates: { [this.currentPageId]: { editingId: e } } } }, "set_editing_id");
                                }
                            }),
                            V(this, "setHoveredId", (e) => {
                                this.patchState({ document: { pageStates: { [this.currentPageId]: { hoveredId: e } } } }, "set_hovered_id");
                            }),
                            V(this, "setSetting", (e, t) => {
                                if (this.session) return this;
                                let i = { settings: { [e]: "function" == typeof t ? t(this.settings[e]) : t } };
                                return this.patchState(i, `settings:${e}`), this.persist(i), this;
                            }),
                            V(this, "toggleFocusMode", () => {
                                if (this.session) return this;
                                let e = { settings: { isFocusMode: !this.settings.isFocusMode } };
                                return this.patchState(e, "settings:toggled_focus_mode"), this.persist(e), this;
                            }),
                            V(this, "togglePenMode", () => {
                                if (this.session) return this;
                                let e = { settings: { isPenMode: !this.settings.isPenMode } };
                                return this.patchState(e, "settings:toggled_pen_mode"), this.persist(e), this;
                            }),
                            V(this, "toggleDarkMode", () => {
                                if (this.session) return this;
                                let e = { settings: { isDarkMode: !this.settings.isDarkMode } };
                                return this.patchState(e, "settings:toggled_dark_mode"), this.persist(e), this;
                            }),
                            V(this, "toggleZoomSnap", () => {
                                if (this.session) return this;
                                let e = { settings: { isZoomSnap: !this.settings.isZoomSnap } };
                                return this.patchState(e, "settings:toggled_zoom_snap"), this.persist(e), this;
                            }),
                            V(this, "toggleDebugMode", () => {
                                if (this.session) return this;
                                let e = { settings: { isDebugMode: !this.settings.isDebugMode } };
                                return this.patchState(e, "settings:toggled_debug"), this.persist(e), this;
                            }),
                            V(this, "setMenuOpen", (e) => {
                                let t = { appState: { isMenuOpen: e } };
                                return this.patchState(t, "ui:toggled_menu_opened"), this.persist(t), this;
                            }),
                            V(this, "setIsLoading", (e) => {
                                let t = { appState: { isLoading: e } };
                                return this.patchState(t, "ui:toggled_is_loading"), this.persist(t), this;
                            }),
                            V(this, "setDisableAssets", (e) => (this.patchState({ appState: { disableAssets: e } }, "ui:toggled_disable_images"), this)),
                            V(this, "toggleGrid", () => {
                                if (this.session) return this;
                                let e = { settings: { showGrid: !this.settings.showGrid } };
                                return this.patchState(e, "settings:toggled_grid"), this.persist(e), this;
                            }),
                            V(this, "selectTool", (e) => {
                                if (this.readOnly || this.session) return this;
                                this.isPointing = !1;
                                let t = this.tools[e];
                                return t === this.currentTool
                                    ? (this.patchState({ appState: { isToolLocked: !1 } }), this)
                                    : (this.currentTool.onExit(),
                                      (t.previous = this.currentTool.type),
                                      (this.currentTool = t),
                                      this.currentTool.onEnter(),
                                      this.patchState({ appState: { activeTool: e, isToolLocked: !1 } }, `selected_tool:${e}`));
                            }),
                            V(this, "toggleToolLock", () => (this.session ? this : this.patchState({ appState: { isToolLocked: !this.appState.isToolLocked } }, "toggled_tool_lock"))),
                            V(
                                this,
                                "resetDocument",
                                () => (
                                    this.session ||
                                        ((this.session = void 0),
                                        (this.currentTool = this.tools.select),
                                        (sk.defaultDocument.pages.page.name = "Page 1"),
                                        this.resetHistory().clearSelectHistory().loadDocument(sk.defaultDocument).persist({})),
                                    this
                                )
                            ),
                            V(this, "updateUsers", (e, t = !1) => {
                                this.patchState({ room: { users: Object.fromEntries(e.map((e) => [e.id, e])) } }, t ? "room:self:update" : "room:user:update");
                            }),
                            V(this, "removeUser", (e) => {
                                this.patchState({ room: { users: { [e]: void 0 } } });
                            }),
                            V(this, "mergeDocument", (e) => {
                                if (this.document.id !== e.id)
                                    return this.replaceState($(Y({}, iJ($(Y({}, this.state), { document: e }), sk.version)), { appState: $(Y({}, this.appState), { currentPageId: Object.keys(e.pages)[0] }) })), this;
                                let t = Y({}, this.document.pageStates),
                                    i = $(Y({}, this.appState), {
                                        currentPageId: e.pages[this.currentPageId] ? this.currentPageId : Object.keys(e.pages)[0],
                                        pages: Object.values(e.pages).map((e, t) => ({ id: e.id, name: e.name, childIndex: e.childIndex || t })),
                                    });
                                this.resetHistory(),
                                    Object.keys(this.document.pages).forEach((i) => {
                                        e.pages[i] || (i === this.appState.currentPageId && (this.cancelSession(), this.selectNone()), (t[i] = void 0));
                                    }),
                                    this.session && this.selectedIds.filter((t) => !e.pages[this.currentPageId].shapes[t]).forEach((t) => (e.pages[this.currentPageId].shapes[t] = this.page.shapes[t])),
                                    Object.entries(t).forEach(([t, i]) => {
                                        i.selectedIds = i.selectedIds.filter((i) => !!e.pages[t].shapes[i]);
                                    });
                                let { editingId: s } = this.pageState;
                                return (
                                    s && ((e.pages[this.currentPageId].shapes[s] = this.page.shapes[s]), (t[this.currentPageId].selectedIds = [s])),
                                    this.replaceState($(Y({}, iJ($(Y({}, this.state), { document: $(Y({}, e), { pageStates: t }) }), sk.version)), { appState: i }), "merge")
                                );
                            }),
                            V(this, "updateDocument", (e, t = "updated_document") => {
                                let i = this.state,
                                    s = $(Y({}, i), { document: $(Y({}, i.document), { assets: e.assets }) });
                                e.pages[this.currentPageId] || (s.appState = $(Y({}, i.appState), { currentPageId: Object.keys(e.pages)[0] }));
                                let n = 1;
                                for (let t of Object.values(e.pages)) t !== i.document.pages[t.id] && ((s.document.pages[t.id] = t), t.name || ((s.document.pages[t.id].name = `Page ${n + 1}`), n++));
                                for (let t of Object.values(e.pageStates))
                                    if (t !== i.document.pageStates[t.id]) {
                                        s.document.pageStates[t.id] = t;
                                        let i = e.pages[t.id];
                                        for (let e of ["bindingId", "editingId", "hoveredId", "pointedId"]) i.shapes[e] || (t[e] = void 0);
                                        t.selectedIds = t.selectedIds.filter((t) => !!e.pages[i.id].shapes[t]);
                                    }
                                return this.replaceState(iJ(s, s.document.version || 0), `${t}:${e.id}`);
                            }),
                            V(
                                this,
                                "loadRoom",
                                (e) => (this.patchState({ room: { id: e, userId: sI, users: { [sI]: { id: sI, color: eH[Math.floor(Math.random() * eH.length)], point: [100, 100], selectedIds: [], activeShapes: [] } } } }), this)
                            ),
                            V(this, "loadDocument", (e) => {
                                this.setIsLoading(!0), this.selectNone(), this.resetHistory(), this.clearSelectHistory(), (this.session = void 0);
                                let t = $(Y({}, sk.defaultState), {
                                    settings: Y({}, this.state.settings),
                                    document: e,
                                    appState: $(Y(Y({}, sk.defaultState.appState), this.state.appState), { currentPageId: Object.keys(e.pages)[0], disableAssets: this.disableAssets }),
                                });
                                this.replaceState(iJ(t, sk.version), "loaded_document");
                                let { point: i, zoom: s } = this.camera;
                                return this.updateViewport(i, s), this.setIsLoading(!1), this;
                            }),
                            V(this, "loadPageFromURL", (e, t) => {
                                let i = e.id,
                                    s = $(Y({}, this.state.document), { pageStates: $(Y({}, this.state.document.pageStates), { [i]: t }), pages: $(Y({}, this.document.pages), { [i]: e }) });
                                this.loadDocument(s), this.persist({});
                            }),
                            V(this, "newProject", () => {
                                this.isLocal && ((this.fileSystemHandle = null), this.resetDocument());
                            }),
                            V(this, "saveProject", () =>
                                q(this, null, function* () {
                                    if (this.readOnly) return;
                                    let e = yield i3(iJ(this.state, sk.version).document, this.fileSystemHandle);
                                    return (this.fileSystemHandle = e), this.persist({}), (this.isDirty = !1), this;
                                })
                            ),
                            V(this, "saveProjectAs", (e) =>
                                q(this, null, function* () {
                                    try {
                                        let t = yield i3(this.document, null, e);
                                        (this.fileSystemHandle = t), this.persist({}), (this.isDirty = !1);
                                    } catch (e) {
                                        console.error(e.message);
                                    }
                                    return this;
                                })
                            ),
                            V(this, "openProject", () =>
                                q(this, null, function* () {
                                    if (this.isLocal)
                                        try {
                                            let e = yield i4();
                                            if (!e) throw Error();
                                            let { fileHandle: t, document: i } = e;
                                            this.loadDocument(i), (this.fileSystemHandle = t), this.zoomToFit(), this.persist({});
                                        } catch (e) {
                                            console.error(e);
                                        } finally {
                                            this.persist({});
                                        }
                                })
                            ),
                            V(this, "openAsset", () =>
                                q(this, null, function* () {
                                    if (!this.disableAssets)
                                        try {
                                            let e = yield i8();
                                            if (Array.isArray(e)) this.addMediaFromFiles(e, this.centerPoint);
                                            else {
                                                if (!e) return;
                                                this.addMediaFromFiles([e]);
                                            }
                                        } catch (e) {
                                            console.error(e);
                                        } finally {
                                            this.persist({});
                                        }
                                })
                            ),
                            V(this, "signOut", () => {}),
                            V(this, "getAppState", () => this.appState),
                            V(this, "getPage", (e = this.currentPageId) => tB.getPage(this.state, e || this.currentPageId)),
                            V(this, "getShapes", (e = this.currentPageId) => tB.getShapes(this.state, e || this.currentPageId)),
                            V(this, "getBindings", (e = this.currentPageId) => tB.getBindings(this.state, e || this.currentPageId)),
                            V(this, "getShape", (e, t = this.currentPageId) => tB.getShape(this.state, e, t)),
                            V(this, "getShapeBounds", (e, t = this.currentPageId) => tB.getBounds(this.getShape(e, t))),
                            V(this, "getBinding", (e, t = this.currentPageId) => tB.getBinding(this.state, e, t)),
                            V(this, "getPageState", (e = this.currentPageId) => tB.getPageState(this.state, e || this.currentPageId)),
                            V(this, "getPagePoint", (e, t = this.currentPageId) => {
                                let { camera: i } = this.getPageState(t);
                                return j.B.sub(j.B.div(e, i.zoom), i.point);
                            }),
                            V(this, "createPage", (e, t) => {
                                if (this.readOnly) return this;
                                let { width: i, height: s } = this.rendererBounds;
                                return this.setState(
                                    (function (e, t, i = x.cQ.uniqueId(), s = "Page") {
                                        let { currentPageId: n } = e,
                                            a = Object.values(e.state.document.pages).sort((e, t) => {
                                                var i, s;
                                                return (null != (i = e.childIndex) ? i : 0) - (null != (s = t.childIndex) ? s : 0);
                                            }),
                                            o = a[a.length - 1],
                                            r = (null == o ? void 0 : o.childIndex) ? (null == o ? void 0 : o.childIndex) + 1 : 1,
                                            l = {
                                                id: i,
                                                name: (function (e, t) {
                                                    var i;
                                                    let s = e,
                                                        n = new Set(t);
                                                    for (; n.has(s); ) s = (null == (i = /^.*(\d+)$/.exec(s)) ? void 0 : i[1]) ? s.replace(/(\d+)(?=\D?)$/, (e) => (+e + 1).toString()) : `${s} 1`;
                                                    return s;
                                                })(
                                                    s,
                                                    a.map((e) => {
                                                        var t;
                                                        return null != (t = e.name) ? t : "";
                                                    })
                                                ),
                                                childIndex: r,
                                                shapes: {},
                                                bindings: {},
                                            };
                                        return {
                                            id: "create_page",
                                            before: { appState: { currentPageId: n }, document: { pages: { [i]: void 0 }, pageStates: { [i]: void 0 } } },
                                            after: {
                                                appState: { currentPageId: l.id },
                                                document: { pages: { [i]: l }, pageStates: { [i]: { id: i, selectedIds: [], camera: { point: t, zoom: 1 }, editingId: void 0, bindingId: void 0, hoveredId: void 0, pointedId: void 0 } } },
                                            },
                                        };
                                    })(this, [-i / 2, -s / 2], e, t)
                                );
                            }),
                            V(this, "changePage", (e) => this.setState({ id: "change_page", before: { appState: { currentPageId: this.currentPageId } }, after: { appState: { currentPageId: e } } })),
                            V(this, "movePage", (e, t) =>
                                this.readOnly
                                    ? this
                                    : this.setState(
                                          (function (e, t, i) {
                                              let { pages: s } = e.document,
                                                  n = s[t],
                                                  a = Object.values(s).sort((e, t) => {
                                                      var i, s;
                                                      return (null != (i = e.childIndex) ? i : 0) - (null != (s = t.childIndex) ? s : 0);
                                                  }),
                                                  o = a.indexOf(n),
                                                  r = [...a];
                                              return (
                                                  r.splice(o, 1),
                                                  r.splice(i > o ? i - 1 : i, 0, n),
                                                  {
                                                      id: "move_page",
                                                      before: { document: { pages: Object.fromEntries(a.map((e) => [e.id, { childIndex: e.childIndex }])) } },
                                                      after: { document: { pages: Object.fromEntries(r.map((e, t) => [e.id, { childIndex: t }])) } },
                                                  }
                                              );
                                          })(this, e, t)
                                      )
                            ),
                            V(this, "renamePage", (e, t) =>
                                this.readOnly
                                    ? this
                                    : this.setState(
                                          (function (e, t, i) {
                                              let { page: s } = e;
                                              return { id: "rename_page", before: { document: { pages: { [t]: { name: s.name } } } }, after: { document: { pages: { [t]: { name: i } } } } };
                                          })(this, e, t)
                                      )
                            ),
                            V(this, "duplicatePage", (e) =>
                                this.readOnly
                                    ? this
                                    : this.setState(
                                          (function (e, t) {
                                              let {
                                                      currentPageId: i,
                                                      pageState: { camera: s },
                                                  } = e,
                                                  n = e.document.pages[t],
                                                  a = x.cQ.uniqueId(),
                                                  o = $(Y({}, n), {
                                                      id: a,
                                                      name: n.name + " Copy",
                                                      shapes: Object.fromEntries(Object.entries(n.shapes).map(([e, t]) => [e, $(Y({}, t), { parentId: t.parentId === n.id ? a : t.parentId })])),
                                                  });
                                              return {
                                                  id: "duplicate_page",
                                                  before: { appState: { currentPageId: i }, document: { pages: { [a]: void 0 }, pageStates: { [a]: void 0 } } },
                                                  after: {
                                                      appState: { currentPageId: a },
                                                      document: {
                                                          pages: { [a]: o },
                                                          pageStates: { [a]: $(Y({}, n), { id: a, selectedIds: [], camera: Y({}, s), editingId: void 0, bindingId: void 0, hoveredId: void 0, pointedId: void 0 }) },
                                                      },
                                                  },
                                              };
                                          })(this, e)
                                      )
                            ),
                            V(this, "deletePage", (e) =>
                                this.readOnly
                                    ? this
                                    : Object.values(this.document.pages).length <= 1
                                    ? this
                                    : this.setState(
                                          (function (e, t) {
                                              let {
                                                      currentPageId: i,
                                                      document: { pages: s, pageStates: n },
                                                  } = e,
                                                  a = Object.values(s).sort((e, t) => (e.childIndex || 0) - (t.childIndex || 0)),
                                                  o = a.findIndex((e) => e.id === t),
                                                  r;
                                              return (
                                                  (r = t === i ? (o === a.length - 1 ? a[a.length - 2].id : a[o + 1].id) : i),
                                                  {
                                                      id: "delete_page",
                                                      before: { appState: { currentPageId: t }, document: { pages: { [t]: Y({}, s[t]) }, pageStates: { [t]: Y({}, n[t]) } } },
                                                      after: { appState: { currentPageId: r }, document: { pages: { [t]: void 0 }, pageStates: { [t]: void 0 } } },
                                                  }
                                              );
                                          })(this, e || this.currentPageId)
                                      )
                            ),
                            V(this, "cut", (e = this.selectedIds, t) => (null == t || t.preventDefault(), this.copy(e, t), this.readOnly || this.delete(e), this)),
                            V(this, "copy", (e = this.selectedIds, t) => {
                                var i;
                                null == t || t.preventDefault(), (this.clipboard = this.getContent(e));
                                let s = `<tldraw>${JSON.stringify(Y({ type: "tldr/clipboard" }, this.clipboard))}</tldraw>`;
                                return (
                                    (function (e) {
                                        q(this, null, function* () {
                                            return (0, O.t8)(iU, e);
                                        });
                                    })(s),
                                    t && (null == (i = t.clipboardData) || i.setData("text/html", s)),
                                    navigator.clipboard && window.ClipboardItem && navigator.clipboard.write([new ClipboardItem({ "text/html": new Blob([s], { type: "text/html" }) })]),
                                    this
                                );
                            }),
                            V(this, "paste", (e, t) =>
                                q(this, null, function* () {
                                    var i, s;
                                    if (this.readOnly) return;
                                    let n = [],
                                        a = [],
                                        o,
                                        r = (e) =>
                                            q(this, null, function* () {
                                                let t = document.createElement("div");
                                                t.innerHTML = e;
                                                let i = t.firstChild;
                                                i.style.setProperty("background-color", "transparent");
                                                let s = yield tB.getImageForSvg(i, "svg", { scale: 1, quality: 1 });
                                                if (s) {
                                                    let e = new File([s], "image.svg");
                                                    n.push(e);
                                                } else l(e);
                                            }),
                                        l = (t) => {
                                            let i = this.getPagePoint(null != e ? e : this.centerPoint, this.currentPageId),
                                                s = t.includes(`
`);
                                            a.push(
                                                tB
                                                    .getShapeUtil("text")
                                                    .getShape({
                                                        id: x.cQ.uniqueId(),
                                                        type: "text",
                                                        parentId: this.appState.currentPageId,
                                                        text: tB.normalizeText(t.trim()),
                                                        point: i,
                                                        style: $(Y({}, this.appState.currentStyle), { textAlign: s ? "start" : this.appState.currentStyle.textAlign }),
                                                    })
                                            );
                                        },
                                        d = (e) => {
                                            var t;
                                            try {
                                                let i = null == (t = e.match(/<tldraw>(.*)<\/tldraw>/)) ? void 0 : t[1];
                                                if (!i) return;
                                                let s = JSON.parse(i);
                                                if ("tldr/clipboard" === s.type) {
                                                    o = s;
                                                    return;
                                                }
                                                throw Error("Not tldraw data!");
                                            } catch (t) {
                                                l(e);
                                            }
                                        };
                                    if (void 0 !== t) {
                                        let e = Array.from(null != (s = null == (i = t.clipboardData) ? void 0 : i.items) ? s : []);
                                        yield Promise.all(
                                            e.map((e) =>
                                                q(this, null, function* () {
                                                    var t;
                                                    let { type: i, kind: s } = e;
                                                    switch (s) {
                                                        case "string": {
                                                            let s = yield new Promise((t) => e.getAsString(t));
                                                            switch (i) {
                                                                case "text/html":
                                                                    if (null == (t = s.match(/<tldraw>(.*)<\/tldraw>/)) ? void 0 : t[1]) {
                                                                        d(s);
                                                                        return;
                                                                    }
                                                                    break;
                                                                case "text/plain":
                                                                    s.startsWith("<svg") ? yield r(s) : l(s);
                                                            }
                                                            break;
                                                        }
                                                        case "file": {
                                                            let t = e.getAsFile();
                                                            t && n.push(t);
                                                        }
                                                    }
                                                })
                                            )
                                        );
                                    }
                                    if (o) return this.insertContent(o, { point: e, select: !0 }), this;
                                    if (n.length) return this.addMediaFromFiles(n, e), this;
                                    if (a.length) {
                                        let t = this.getPagePoint(null != e ? e : this.centerPoint, this.currentPageId),
                                            i = j.B.add(t, [0, 0]);
                                        return (
                                            a.forEach((e, t) => {
                                                let s = tB.getBounds(e);
                                                0 === t && ((i[0] -= s.width / 2), (i[1] -= s.height / 2)), (e.point = [...i]), (i[0] += s.width);
                                            }),
                                            this.createShapes(...a),
                                            this
                                        );
                                    }
                                    return (
                                        this.clipboard
                                            ? this.insertContent(this.clipboard)
                                            : (function () {
                                                  return q(this, null, function* () {
                                                      return (0, O.U2)(iU);
                                                  });
                                              })().then((e) => {
                                                  e && d(e);
                                              }),
                                        this
                                    );
                                })
                            ),
                            V(this, "getSvg", (...e) =>
                                q(this, [...e], function* (e = this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes), t = {}) {
                                    if (0 === e.length) return;
                                    let i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                                        s = document.createElementNS("http://www.w3.org/2000/svg", "defs"),
                                        n = document.createElementNS("http://www.w3.org/2000/svg", "style");
                                    if (("undefined" != typeof window && window.focus(), t.includeFonts))
                                        try {
                                            let { fonts: e } = yield fetch(sk.assetSrc, { mode: "no-cors" }).then((e) => e.json());
                                            n.textContent = `
          @font-face {
            font-family: 'Caveat Brush';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.caveat}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Code Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.source_code_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.source_sans_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Crimson Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.crimson_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          `;
                                        } catch (e) {
                                            tB.warn("Could not find tldraw-assets.json file.");
                                        }
                                    else n.textContent = "@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');";
                                    s.append(n), i.append(s);
                                    let a = e.map((e) => this.getShape(e, this.currentPageId)).sort((e, t) => e.childIndex - t.childIndex),
                                        o = x.cQ.getCommonBounds(a.map(tB.getRotatedBounds)),
                                        r = t.padding || 16,
                                        l = (e) => {
                                            let t = tB.getShapeUtil(e),
                                                i = t.getBounds(e),
                                                s = t.getSvgElement(e, this.settings.isDarkMode);
                                            if (s)
                                                return (
                                                    "image" === e.type ? s.setAttribute("xlink:href", this.document.assets[e.assetId].src) : "video" === e.type && s.setAttribute("xlink:href", this.serializeVideo(e.id)),
                                                    s.setAttribute(
                                                        "transform",
                                                        `translate(${(r + e.point[0] - o.minX).toFixed(2)}, ${(r + e.point[1] - o.minY).toFixed(2)}) rotate(${((180 * (e.rotation || 0)) / Math.PI).toFixed(2)}, ${(i.width / 2).toFixed(
                                                            2
                                                        )}, ${(i.height / 2).toFixed(2)})`
                                                    ),
                                                    s
                                                );
                                        };
                                    a.forEach((e) => {
                                        var t;
                                        if (null == (t = e.children) ? void 0 : t.length) {
                                            let t = document.createElementNS("http://www.w3.org/2000/svg", "g");
                                            e.children.forEach((e) => {
                                                let i = l(this.getShape(e, this.currentPageId));
                                                i && t.append(i);
                                            }),
                                                i.append(t);
                                            return;
                                        }
                                        let s = l(e);
                                        s && i.append(s);
                                    }),
                                        i.setAttribute("viewBox", [0, 0, o.width + 2 * r, o.height + 2 * r].join(" ")),
                                        i.setAttribute("width", (o.width + 2 * r).toString()),
                                        i.setAttribute("height", (o.height + 2 * r).toString());
                                    let d = this.settings.exportBackground,
                                        h = "#212529",
                                        p = "rgb(248, 249, 250)";
                                    switch (d) {
                                        case "auto":
                                            i.style.setProperty("background-color", this.settings.isDarkMode ? h : p);
                                            break;
                                        case "dark":
                                            i.style.setProperty("background-color", h);
                                            break;
                                        case "light":
                                            i.style.setProperty("background-color", p);
                                            break;
                                        default:
                                            i.style.setProperty("background-color", "transparent");
                                    }
                                    return i.querySelectorAll(".tl-fill-hitarea, .tl-stroke-hitarea, .tl-binding-indicator").forEach((e) => e.remove()), i;
                                })
                            ),
                            V(this, "copySvg", (...e) =>
                                q(this, [...e], function* (e = this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes)) {
                                    if (0 === e.length) return;
                                    let t = yield this.getSvg(e);
                                    if (!t) return;
                                    let i = tB.getSvgString(t, 1);
                                    this.clipboard = this.getContent(e);
                                    let s = JSON.stringify(Y({ type: "tldr/clipboard" }, this.clipboard));
                                    return (
                                        navigator.clipboard &&
                                            window.ClipboardItem &&
                                            navigator.clipboard.write([new ClipboardItem({ "text/html": new Blob([s], { type: "text/html" }), "text/plain": new Blob([i], { type: "text/plain" }) })]),
                                        i
                                    );
                                })
                            ),
                            V(this, "getContent", (e) => {
                                let t = this.getPage(this.currentPageId);
                                if ((e && 0 === e.length) || (e || (e = this.selectedIds), 0 === e.length && (e = Object.keys(t.shapes)), 0 === e.length)) return;
                                let i = e
                                        .map((e) => t.shapes[e])
                                        .flatMap((e) => {
                                            var i;
                                            return [e, ...(null != (i = e.children) ? i : []).map((e) => t.shapes[e])];
                                        })
                                        .map(ty),
                                    s = new Set(i.map((e) => e.id));
                                i.forEach((e) => {
                                    e.parentId === this.currentPageId && (e.parentId = "currentPageId");
                                });
                                let n = Object.values(t.bindings)
                                        .filter((e) => {
                                            if (s.has(e.fromId) || s.has(e.toId)) return !0;
                                            if (s.has(e.fromId)) {
                                                let t = i.find((t) => t.id === e.fromId).handles;
                                                t &&
                                                    Object.values(t).forEach((t) => {
                                                        t.bindingId === e.id && (t.bindingId = void 0);
                                                    });
                                            }
                                            if (s.has(e.toId)) {
                                                let t = i.find((t) => t.id === e.toId).handles;
                                                t &&
                                                    Object.values(t).forEach((t) => {
                                                        t.bindingId === e.id && (t.bindingId = void 0);
                                                    });
                                            }
                                            return !1;
                                        })
                                        .map(ty),
                                    a = [
                                        ...new Set(
                                            i
                                                .map((e) => {
                                                    if (e.assetId) return this.document.assets[e.assetId];
                                                })
                                                .filter(Boolean)
                                                .map(ty)
                                        ),
                                    ];
                                return { shapes: i, bindings: n, assets: a };
                            }),
                            V(this, "copyJson", (e = this.selectedIds) => {
                                let t = this.getContent(e);
                                return t && tB.copyStringToClipboard(JSON.stringify(t)), this;
                            }),
                            V(this, "exportJson", (e = this.selectedIds) => {
                                let t = this.getContent(e);
                                if (t) {
                                    let e = new Blob([JSON.stringify(t)], { type: "application/json" }),
                                        i = URL.createObjectURL(e),
                                        s = document.createElement("a");
                                    (s.href = i), (s.download = "export.json"), s.click();
                                }
                                return this;
                            }),
                            V(this, "insertContent", (e, t = {}) =>
                                this.setState(
                                    (function (e, t, i = {}) {
                                        let { currentPageId: s } = e,
                                            { point: n, select: a, overwrite: o } = i,
                                            r = e.document.pages[s],
                                            l = { shapes: {}, bindings: {} },
                                            d = {},
                                            h = { shapes: {}, bindings: {} };
                                        if (o) {
                                            for (let e of t.shapes) (l.shapes[e.id] = r.shapes[e.id]), (h.shapes[e.id] = e);
                                            if (t.bindings) for (let e of t.bindings) (l.bindings[e.id] = r.bindings[e.id]), (h.bindings[e.id] = e);
                                            if (t.assets) for (let e of t.assets) d[e.id] = e;
                                        } else {
                                            let i = {},
                                                a = tB.getTopChildIndex(e.state, s),
                                                o = t.shapes
                                                    .sort((e, t) => e.childIndex - t.childIndex)
                                                    .map((e) => {
                                                        let t = x.cQ.uniqueId();
                                                        return (i[e.id] = t), $(Y({}, x.cQ.deepClone(e)), { id: t });
                                                    }),
                                                r = new Set();
                                            for (; o.length > 0; ) {
                                                let e = o.shift();
                                                if (!e) break;
                                                if ((r.add(e.id), "currentPageId" === e.parentId)) (e.parentId = s), (e.childIndex = a++);
                                                else {
                                                    e.parentId = i[e.parentId];
                                                    let t = h.shapes[e.parentId];
                                                    if (!t) {
                                                        r.has(e.id) && (e.parentId = "currentPageId"), o.push(e);
                                                        continue;
                                                    }
                                                    t.children.push(e.id);
                                                }
                                                e.children && (e.children = []), (l.shapes[e.id] = void 0), (h.shapes[e.id] = e);
                                            }
                                            Object.values(h.shapes).forEach((e) => {
                                                e.children && 0 === e.children.length && (delete l.shapes[e.id], delete h.shapes[e.id]);
                                            }),
                                                t.bindings &&
                                                    t.bindings.forEach((e) => {
                                                        let t = x.cQ.uniqueId();
                                                        i[e.id] = t;
                                                        let s = i[e.toId],
                                                            n = i[e.fromId];
                                                        if (!s || !n) {
                                                            if (n) {
                                                                let t = h.shapes[n].handles;
                                                                t &&
                                                                    Object.values(t).forEach((t) => {
                                                                        t.bindingId === e.id && (t.bindingId = void 0);
                                                                    });
                                                            }
                                                            if (s) {
                                                                let t = h.shapes[s].handles;
                                                                t &&
                                                                    Object.values(t).forEach((t) => {
                                                                        t.bindingId === e.id && (t.bindingId = void 0);
                                                                    });
                                                            }
                                                            return;
                                                        }
                                                        let a = h.shapes[n].handles;
                                                        a &&
                                                            Object.values(a).forEach((i) => {
                                                                i.bindingId === e.id && (i.bindingId = t);
                                                            }),
                                                            h.shapes[s].handles &&
                                                                Object.values(h.shapes[s].handles).forEach((i) => {
                                                                    i.bindingId === e.id && (i.bindingId = t);
                                                                });
                                                        let o = $(Y({}, x.cQ.deepClone(e)), { id: t, toId: s, fromId: n });
                                                        (l.bindings[o.id] = void 0), (h.bindings[o.id] = o);
                                                    });
                                            let p = Object.values(h.shapes);
                                            if (p.length > 0) {
                                                if (n) {
                                                    let e = x.cQ.getCommonBounds(p.map((e) => tB.getBounds(e))),
                                                        t = x.cQ.getBoundsCenter(e);
                                                    p.forEach((e) => {
                                                        e.point && (e.point = j.B.sub(n, j.B.sub(t, e.point)));
                                                    });
                                                } else {
                                                    let t = x.cQ.getCommonBounds(p.map(tB.getBounds));
                                                    if (!(x.cQ.boundsContain(e.viewport, t) || x.cQ.boundsCollide(e.viewport, t))) {
                                                        let i = j.B.toFixed(e.getPagePoint(e.centerPoint)),
                                                            s = x.cQ.centerBounds(t, i),
                                                            n = j.B.sub(x.cQ.getBoundsCenter(s), x.cQ.getBoundsCenter(t));
                                                        p.forEach((e) => {
                                                            e.point = j.B.toFixed(j.B.add(e.point, n));
                                                        });
                                                    }
                                                }
                                            }
                                            if (t.assets) for (let e of t.assets) d[e.id] = e;
                                        }
                                        let p = document.createElement("textarea");
                                        return (
                                            Object.values(h.shapes).forEach((e) => {
                                                "text" in e && ((p.innerHTML = e.text), (e.text = p.value)), "label" in e && ((p.innerHTML = e.label), (e.label = p.value));
                                            }),
                                            p.remove(),
                                            {
                                                id: "insert",
                                                before: { document: { pages: { [s]: l }, pageStates: { [s]: { selectedIds: [...e.selectedIds] } } } },
                                                after: { document: { pages: { [s]: h }, assets: d, pageStates: { [s]: { selectedIds: a ? Object.keys(h.shapes) : [...e.selectedIds] } } } },
                                            }
                                        );
                                    })(this, e, t),
                                    "insert_content"
                                )
                            ),
                            V(this, "getImage", (...e) =>
                                q(this, [...e], function* (e = "png", t = {}) {
                                    let { ids: i = this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes) } = t,
                                        s = yield this.getSvg(i, { includeFonts: "svg" !== e });
                                    if (!s) return;
                                    if ("svg" === e) return new Blob([tB.getSvgString(s, 1)], { type: "image/svg+xml" });
                                    let n = yield tB.getImageForSvg(s, e, t);
                                    if (n) return n;
                                })
                            ),
                            V(this, "copyImage", (...e) =>
                                q(this, [...e], function* (e = "png", t = {}) {
                                    if ("svg" === e) {
                                        this.copySvg(t.ids);
                                        return;
                                    }
                                    if (!(navigator.clipboard && window.ClipboardItem)) {
                                        console.warn("Sorry, your browser does not support copying images.");
                                        return;
                                    }
                                    let i = yield this.getImage(e, t);
                                    i && navigator.clipboard.write([new ClipboardItem({ [i.type]: i })]);
                                })
                            ),
                            V(this, "exportImage", (...e) =>
                                q(this, [...e], function* (e = "png", t = {}) {
                                    var i;
                                    let { pageId: s = this.currentPageId } = t,
                                        n = yield this.getImage(e, t);
                                    if (!n) return;
                                    let a = null != (i = this.document.pages[s].name) ? i : "export";
                                    if (this.callbacks.onExport) this.callbacks.onExport(this, { name: a, type: e, blob: n });
                                    else {
                                        let t = URL.createObjectURL(n),
                                            i = document.createElement("a");
                                        (i.href = t), (i.download = `${a}.${e}`), i.click();
                                    }
                                })
                            ),
                            V(this, "setCamera", (e, t, i) => (this.updateViewport(e, t), this.patchState({ document: { pageStates: { [this.currentPageId]: { camera: { point: e, zoom: t } } } } }, i), this)),
                            V(this, "resetCamera", () => this.setCamera(this.centerPoint, 1, "reset_camera")),
                            V(this, "pan", (e) => {
                                let { camera: t } = this.pageState;
                                return this.setCamera(j.B.toFixed(j.B.sub(t.point, e)), t.zoom, "panned");
                            }),
                            V(this, "pinchZoom", (e, t, i) => {
                                let { camera: s } = this.pageState,
                                    n = j.B.sub(s.point, j.B.div(t, s.zoom)),
                                    a = j.B.sub(j.B.div(e, s.zoom), n),
                                    o = j.B.sub(j.B.div(e, i), n);
                                return this.setCamera(j.B.toFixed(j.B.add(n, j.B.sub(o, a))), i, "pinch_zoomed");
                            }),
                            V(this, "zoomTo", (e, t = this.centerPoint) => {
                                let { zoom: i, point: s } = this.camera,
                                    n = j.B.sub(j.B.div(t, i), s),
                                    a = j.B.sub(j.B.div(t, e), s);
                                return this.setCamera(j.B.toFixed(j.B.add(s, j.B.sub(a, n))), e, "zoomed_camera");
                            }),
                            V(this, "zoomIn", () => {
                                let e = Math.round((100 * this.camera.zoom) / 25),
                                    t = tB.getCameraZoom((e + 1) * 0.25);
                                return this.zoomTo(t);
                            }),
                            V(this, "zoomOut", () => {
                                let e = Math.round((100 * this.camera.zoom) / 25),
                                    t = tB.getCameraZoom((e - 1) * 0.25);
                                return this.zoomTo(t);
                            }),
                            V(this, "zoomToFit", () => {
                                let {
                                    shapes: e,
                                    pageState: { camera: t },
                                } = this;
                                if (0 === e.length) return this;
                                let { rendererBounds: i } = this,
                                    s = x.cQ.getCommonBounds(e.map(tB.getBounds)),
                                    n = tB.getCameraZoom(Math.min((i.width - 128) / s.width, (i.height - 128) / s.height));
                                n = t.zoom === n || t.zoom < 1 ? Math.min(1, n) : n;
                                let a = (i.width - s.width * n) / 2 / n,
                                    o = (i.height - s.height * n) / 2 / n;
                                return this.setCamera(j.B.toFixed(j.B.sub([a, o], [s.minX, s.minY])), n, "zoomed_to_fit");
                            }),
                            V(this, "zoomToSelection", () => {
                                if (0 === this.selectedIds.length) return this;
                                let { rendererBounds: e } = this,
                                    t = tB.getSelectedBounds(this.state),
                                    i = tB.getCameraZoom(Math.min((e.width - 128) / t.width, (e.height - 128) / t.height));
                                i = this.camera.zoom === i || this.camera.zoom < 1 ? Math.min(1, i) : i;
                                let s = (e.width - t.width * i) / 2 / i,
                                    n = (e.height - t.height * i) / 2 / i;
                                return this.setCamera(j.B.toFixed(j.B.sub([s, n], [t.minX, t.minY])), i, "zoomed_to_selection");
                            }),
                            V(this, "zoomToContent", () => {
                                let e = this.shapes,
                                    t = this.pageState;
                                if (0 === e.length) return this;
                                let { rendererBounds: i } = this,
                                    { zoom: s } = t.camera,
                                    n = x.cQ.getCommonBounds(e.map(tB.getBounds)),
                                    a = (i.width - n.width * s) / 2 / s,
                                    o = (i.height - n.height * s) / 2 / s;
                                return this.setCamera(j.B.toFixed(j.B.sub([a, o], [n.minX, n.minY])), this.camera.zoom, "zoomed_to_content");
                            }),
                            V(this, "resetZoom", () => this.zoomTo(1)),
                            V(
                                this,
                                "zoomBy",
                                x.cQ.throttle((e, t) => {
                                    let { zoom: i } = this.camera,
                                        s = tB.getCameraZoom(i - e * i);
                                    return this.zoomTo(s, t);
                                }, 16)
                            ),
                            V(this, "clearSelectHistory", () => ((this.selectHistory.pointer = 0), (this.selectHistory.stack = [this.selectedIds]), this)),
                            V(
                                this,
                                "addToSelectHistory",
                                (e) => (
                                    this.selectHistory.pointer < this.selectHistory.stack.length && (this.selectHistory.stack = this.selectHistory.stack.slice(0, this.selectHistory.pointer + 1)),
                                    this.selectHistory.pointer++,
                                    this.selectHistory.stack.push(e),
                                    this
                                )
                            ),
                            V(this, "setSelectedIds", (e, t = !1) => {
                                let i = t ? [...this.pageState.selectedIds, ...e] : [...e];
                                return this.patchState({ appState: { activeTool: "select" }, document: { pageStates: { [this.currentPageId]: { selectedIds: i } } } }, "selected");
                            }),
                            V(this, "undoSelect", () => (this.selectHistory.pointer > 0 && (this.selectHistory.pointer--, this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer])), this)),
                            V(this, "redoSelect", () => (this.selectHistory.pointer < this.selectHistory.stack.length - 1 && (this.selectHistory.pointer++, this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer])), this)),
                            V(
                                this,
                                "select",
                                (...e) => (
                                    e.forEach((e) => {
                                        if (!this.page.shapes[e]) throw Error(`That shape does not exist on page ${this.currentPageId}`);
                                    }),
                                    this.setSelectedIds(e),
                                    this.addToSelectHistory(e),
                                    this
                                )
                            ),
                            V(
                                this,
                                "selectAll",
                                (e = this.currentPageId) => (
                                    this.session ||
                                        (this.setSelectedIds(
                                            Object.values(this.document.pages[e].shapes)
                                                .filter((t) => t.parentId === e)
                                                .map((e) => e.id)
                                        ),
                                        this.addToSelectHistory(this.selectedIds),
                                        this.selectTool("select")),
                                    this
                                )
                            ),
                            V(this, "selectNone", () => (this.setSelectedIds([]), this.addToSelectHistory(this.selectedIds), this)),
                            V(this, "startSession", (e, ...t) => {
                                var i, s;
                                if (this.readOnly && "brush" !== e) return this;
                                this.session && (tB.warn(`Already in a session! (${this.session.constructor.name})`), this.cancelSession());
                                let n = sd(e);
                                this.session = new n(this, ...t);
                                let a = this.session.start();
                                return a && this.patchState(a, `session:start_${this.session.constructor.name}`), null == (s = (i = this.callbacks).onSessionStart) || s.call(i, this, this.session.constructor.name), this;
                            }),
                            V(this, "updateSession", () => {
                                let { session: e } = this;
                                if (!e) return this;
                                let t = e.update();
                                return t ? this.patchState(t, `session:${null == e ? void 0 : e.constructor.name}`) : this;
                            }),
                            V(this, "cancelSession", () => {
                                var e, t;
                                let { session: i } = this;
                                if (!i) return this;
                                this.session = void 0;
                                let s = i.cancel();
                                return s && this.patchState(s, `session:cancel:${i.constructor.name}`), this.setEditingId(), null == (t = (e = this.callbacks).onSessionEnd) || t.call(e, this, i.constructor.name), this;
                            }),
                            V(this, "completeSession", () => {
                                var e, t, i, s, n, a, o, r, l;
                                let { session: d } = this;
                                if (!d) return this;
                                this.session = void 0;
                                let h = d.complete();
                                return (
                                    void 0 === h
                                        ? ((this.isCreating = !1),
                                          this.patchState(
                                              { appState: { status: "idle" }, document: { pageStates: { [this.currentPageId]: { editingId: void 0, bindingId: void 0, hoveredId: void 0 } } } },
                                              `session:complete:${d.constructor.name}`
                                          ))
                                        : "after" in h
                                        ? (this.isCreating &&
                                              ((h.before = {
                                                  appState: $(Y({}, h.before.appState), { status: "idle" }),
                                                  document: {
                                                      pages: { [this.currentPageId]: { shapes: Object.fromEntries(this.selectedIds.map((e) => [e, void 0])) } },
                                                      pageStates: { [this.currentPageId]: { selectedIds: [], editingId: null, bindingId: null, hoveredId: null } },
                                                  },
                                              }),
                                              this.appState.isToolLocked && (((null == (i = null == (t = null == (e = h.after) ? void 0 : e.document) ? void 0 : t.pageStates) ? void 0 : i[this.currentPageId]) || {}).selectedIds = []),
                                              (this.isCreating = !1)),
                                          (h.after.appState = $(Y({}, h.after.appState), { status: "idle" })),
                                          (h.after.document = $(Y({}, h.after.document), {
                                              pageStates: $(Y({}, null == (s = h.after.document) ? void 0 : s.pageStates), {
                                                  [this.currentPageId]: $(Y({}, ((null == (n = h.after.document) ? void 0 : n.pageStates) || {})[this.currentPageId]), { editingId: null }),
                                              }),
                                          })),
                                          this.setState(h, `session:complete:${d.constructor.name}`))
                                        : this.patchState(
                                              $(Y({}, h), {
                                                  appState: $(Y({}, h.appState), { status: "idle" }),
                                                  document: $(Y({}, h.document), {
                                                      pageStates: { [this.currentPageId]: $(Y({}, null == (o = null == (a = h.document) ? void 0 : a.pageStates) ? void 0 : o[this.currentPageId]), { editingId: null }) },
                                                  }),
                                              }),
                                              `session:complete:${d.constructor.name}`
                                          ),
                                    null == (l = (r = this.callbacks).onSessionEnd) || l.call(r, this, d.constructor.name),
                                    this
                                );
                            }),
                            V(this, "createShapes", (...e) => (0 === e.length ? this : this.create(e.map((e) => tB.getShapeUtil(e.type).create(Y({ parentId: this.currentPageId }, e)))))),
                            V(this, "updateShapes", (...e) => {
                                let t = this.document.pages[this.currentPageId].shapes,
                                    i = e.filter((e) => t[e.id]);
                                return 0 === i.length ? this : this.setState(iV(this, i, this.currentPageId), "updated_shapes");
                            }),
                            V(this, "create", (e = [], t = []) => (0 === e.length ? this : this.setState(iK(this, e, t)))),
                            V(this, "patchCreate", (e = [], t = []) => (0 === e.length ? this : this.patchState(iK(this, e, t).after))),
                            V(this, "delete", (e = this.selectedIds) => {
                                var t, i;
                                if (0 === e.length || this.session) return this;
                                let s = iN(this, e);
                                if (this.callbacks.onAssetDelete && (null == (t = s.before.document) ? void 0 : t.assets) && (null == (i = s.after.document) ? void 0 : i.assets)) {
                                    let e = Object.keys(s.before.document.assets).filter((e) => !!s.before.document.assets[e]),
                                        t = Object.keys(s.after.document.assets).filter((e) => !!s.after.document.assets[e]);
                                    e.filter((e) => !t.includes(e)).forEach((e) => this.callbacks.onAssetDelete(this, e));
                                }
                                return this.setState(s);
                            }),
                            V(this, "deleteAll", () => (this.selectAll(), this.delete(), this)),
                            V(this, "style", (e, t = this.selectedIds) =>
                                this.setState(
                                    (function (e, t, i) {
                                        let { currentPageId: s, selectedIds: n } = e,
                                            a = t.flatMap((t) => tB.getDocumentBranch(e.state, t, s)).filter((t) => !e.getShape(t).isLocked),
                                            o = {},
                                            r = {};
                                        return (
                                            a
                                                .map((t) => e.getShape(t))
                                                .filter((e) => !e.isLocked)
                                                .forEach((t) => {
                                                    (o[t.id] = { style: Y({}, Object.fromEntries(Object.keys(i).map((e) => [e, t.style[e]]))) }),
                                                        (r[t.id] = { style: i }),
                                                        "text" === t.type &&
                                                            ((o[t.id].point = t.point),
                                                            (r[t.id].point = j.B.toFixed(j.B.add(t.point, j.B.sub(e.getShapeUtil(t).getCenter(t), e.getShapeUtil(t).getCenter($(Y({}, t), { style: Y(Y({}, t.style), i) })))))));
                                                }),
                                            {
                                                id: "style",
                                                before: { document: { pages: { [s]: { shapes: o } }, pageStates: { [s]: { selectedIds: n } } }, appState: { currentStyle: Y({}, e.appState.currentStyle) } },
                                                after: { document: { pages: { [s]: { shapes: r } }, pageStates: { [s]: { selectedIds: t } } }, appState: { currentStyle: i } },
                                            }
                                        );
                                    })(this, t, e)
                                )
                            ),
                            V(this, "align", (e, t = this.selectedIds) =>
                                t.length < 2
                                    ? this
                                    : this.setState(
                                          (function (e, t, i) {
                                              let { currentPageId: s } = e,
                                                  n = t.map((t) => e.getShape(t)),
                                                  a = n.map((e) => ({ id: e.id, point: [...e.point], bounds: tB.getBounds(e) })),
                                                  o = x.cQ.getCommonBounds(a.map(({ bounds: e }) => e)),
                                                  r = o.minX + o.width / 2,
                                                  l = o.minY + o.height / 2,
                                                  d = Object.fromEntries(
                                                      a.map(({ id: e, point: t, bounds: s }) => [
                                                          e,
                                                          {
                                                              prev: t,
                                                              next: {
                                                                  top: [t[0], o.minY],
                                                                  centerVertical: [t[0], l - s.height / 2],
                                                                  bottom: [t[0], o.maxY - s.height],
                                                                  left: [o.minX, t[1]],
                                                                  centerHorizontal: [r - s.width / 2, t[1]],
                                                                  right: [o.maxX - s.width, t[1]],
                                                              }[i],
                                                          },
                                                      ])
                                                  ),
                                                  { before: h, after: p } = tB.mutateShapes(e.state, t, (e) => (d[e.id] ? { point: d[e.id].next } : e), s, !1);
                                              return (
                                                  n.forEach((t) => {
                                                      if ("group" === t.type) {
                                                          let i = j.B.sub(p[t.id].point, h[t.id].point);
                                                          t.children.forEach((t) => {
                                                              let s = e.getShape(t);
                                                              (h[s.id] = { point: s.point }), (p[s.id] = { point: j.B.add(s.point, i) });
                                                          }),
                                                              delete h[t.id],
                                                              delete p[t.id];
                                                      }
                                                  }),
                                                  {
                                                      id: "align",
                                                      before: { document: { pages: { [s]: { shapes: h } }, pageStates: { [s]: { selectedIds: t } } } },
                                                      after: { document: { pages: { [s]: { shapes: p } }, pageStates: { [s]: { selectedIds: t } } } },
                                                  }
                                              );
                                          })(this, t, e)
                                      )
                            ),
                            V(this, "distribute", (e, t = this.selectedIds) =>
                                t.length < 3
                                    ? this
                                    : this.setState(
                                          (function (e, t, i) {
                                              let { currentPageId: s } = e,
                                                  n = t.map((t) => e.getShape(t)),
                                                  a = Object.fromEntries(
                                                      (function (e, t) {
                                                          let i = e.map((e) => {
                                                                  let t = tB.getShapeUtil(e);
                                                                  return { id: e.id, point: [...e.point], bounds: t.getBounds(e), center: t.getCenter(e) };
                                                              }),
                                                              s = i.length,
                                                              n = x.cQ.getCommonBounds(i.map(({ bounds: e }) => e)),
                                                              a = [];
                                                          switch (t) {
                                                              case "horizontal": {
                                                                  let e = i.reduce((e, t) => e + t.bounds.width, 0);
                                                                  if (e > n.width) {
                                                                      let e = i.sort((e, t) => e.bounds.minX - t.bounds.minX)[0],
                                                                          t = i.sort((e, t) => t.bounds.maxX - e.bounds.maxX)[0],
                                                                          n = i.filter((i) => i !== e && i !== t).sort((e, t) => e.center[0] - t.center[0]),
                                                                          o = (t.center[0] - e.center[0]) / (s - 1),
                                                                          r = e.center[0] + o;
                                                                      n.forEach(({ id: e, point: t, bounds: i }, s) => {
                                                                          a.push({ id: e, prev: t, next: [r + o * s - i.width / 2, i.minY] });
                                                                      });
                                                                  } else {
                                                                      let t = i.sort((e, t) => e.center[0] - t.center[0]),
                                                                          o = n.minX,
                                                                          r = (n.width - e) / (s - 1);
                                                                      t.forEach(({ id: e, point: t, bounds: i }) => {
                                                                          a.push({ id: e, prev: t, next: [o, i.minY] }), (o += i.width + r);
                                                                      });
                                                                  }
                                                                  break;
                                                              }
                                                              case "vertical": {
                                                                  let e = i.reduce((e, t) => e + t.bounds.height, 0);
                                                                  if (e > n.height) {
                                                                      let e = i.sort((e, t) => e.bounds.minY - t.bounds.minY)[0],
                                                                          t = i.sort((e, t) => t.bounds.maxY - e.bounds.maxY)[0],
                                                                          n = i.filter((i) => i !== e && i !== t).sort((e, t) => e.center[1] - t.center[1]),
                                                                          o = (t.center[1] - e.center[1]) / (s - 1),
                                                                          r = e.center[1] + o;
                                                                      n.forEach(({ id: e, point: t, bounds: i }, s) => {
                                                                          a.push({ id: e, prev: t, next: [i.minX, r + o * s - i.height / 2] });
                                                                      });
                                                                  } else {
                                                                      let t = i.sort((e, t) => e.center[1] - t.center[1]),
                                                                          o = n.minY,
                                                                          r = (n.height - e) / (s - 1);
                                                                      t.forEach(({ id: e, point: t, bounds: i }) => {
                                                                          a.push({ id: e, prev: t, next: [i.minX, o] }), (o += i.height + r);
                                                                      });
                                                                  }
                                                              }
                                                          }
                                                          return a;
                                                      })(n, i).map((e) => [e.id, e])
                                                  ),
                                                  { before: o, after: r } = tB.mutateShapes(
                                                      e.state,
                                                      t.filter((e) => void 0 !== a[e]),
                                                      (e) => {
                                                          var t;
                                                          return { point: null == (t = a[e.id]) ? void 0 : t.next };
                                                      },
                                                      s
                                                  );
                                              return (
                                                  n.forEach((t) => {
                                                      if ("group" === t.type) {
                                                          let i = j.Z.sub(r[t.id].point, o[t.id].point);
                                                          t.children.forEach((t) => {
                                                              let s = e.getShape(t);
                                                              (o[s.id] = { point: s.point }), (r[s.id] = { point: j.Z.add(s.point, i) });
                                                          }),
                                                              delete o[t.id],
                                                              delete r[t.id];
                                                      }
                                                  }),
                                                  {
                                                      id: "distribute",
                                                      before: { document: { pages: { [s]: { shapes: o } }, pageStates: { [s]: { selectedIds: t } } } },
                                                      after: { document: { pages: { [s]: { shapes: r } }, pageStates: { [s]: { selectedIds: t } } } },
                                                  }
                                              );
                                          })(this, t, e)
                                      )
                            ),
                            V(this, "stretch", (e, t = this.selectedIds) =>
                                t.length < 2
                                    ? this
                                    : this.setState(
                                          (function (e, t, i) {
                                              let { currentPageId: s, selectedIds: n } = e,
                                                  a = t.map((t) => e.getShape(t)),
                                                  o = a.map((e) => tB.getBounds(e)),
                                                  r = x.cQ.getCommonBounds(o),
                                                  l = t
                                                      .flatMap((t) => {
                                                          let i = e.getShape(t);
                                                          return i.children ? i.children : i.id;
                                                      })
                                                      .filter((t) => !e.getShape(t).isLocked),
                                                  { before: d, after: h } = tB.mutateShapes(
                                                      e.state,
                                                      l,
                                                      (e) => {
                                                          let t = tB.getBounds(e);
                                                          switch (i) {
                                                              case "horizontal": {
                                                                  let i = $(Y({}, t), { minX: r.minX, maxX: r.maxX, width: r.width });
                                                                  return tB.getShapeUtil(e).transformSingle(e, i, { type: x.P0.TopLeft, scaleX: i.width / t.width, scaleY: 1, initialShape: e, transformOrigin: [0.5, 0.5] });
                                                              }
                                                              case "vertical": {
                                                                  let i = $(Y({}, t), { minY: r.minY, maxY: r.maxY, height: r.height });
                                                                  return tB.getShapeUtil(e).transformSingle(e, i, { type: x.P0.TopLeft, scaleX: 1, scaleY: i.height / t.height, initialShape: e, transformOrigin: [0.5, 0.5] });
                                                              }
                                                          }
                                                      },
                                                      s
                                                  );
                                              return (
                                                  a.forEach((e) => {
                                                      "group" === e.type && (delete d[e.id], delete h[e.id]);
                                                  }),
                                                  {
                                                      id: "stretch",
                                                      before: { document: { pages: { [s]: { shapes: d } }, pageStates: { [s]: { selectedIds: n } } } },
                                                      after: { document: { pages: { [s]: { shapes: h } }, pageStates: { [s]: { selectedIds: t } } } },
                                                  }
                                              );
                                          })(this, t, e)
                                      )
                            ),
                            V(this, "flipHorizontal", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iW(this, e, "horizontal")))),
                            V(this, "flipVertical", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iW(this, e, "vertical")))),
                            V(this, "moveToPage", (e, t = this.currentPageId, i = this.selectedIds) => {
                                if (0 === i.length) return this;
                                let { rendererBounds: s } = this;
                                return (
                                    this.setState(
                                        (function (e, t, i, s, n) {
                                            let { page: a } = e,
                                                o = { before: { shapes: {}, bindings: {} }, after: { shapes: {}, bindings: {} } },
                                                r = { before: { shapes: {}, bindings: {} }, after: { shapes: {}, bindings: {} } },
                                                l = new Set(),
                                                d = new Set();
                                            t.map((t) => e.getShape(t, s))
                                                .filter((e) => !e.isLocked)
                                                .forEach((t) => {
                                                    l.add(t.id),
                                                        d.add(t),
                                                        void 0 !== t.children &&
                                                            t.children.forEach((t) => {
                                                                l.add(t), d.add(e.getShape(t, s));
                                                            });
                                                });
                                            let h = tB.getTopChildIndex(e.state, n),
                                                p = Array.from(d.values());
                                            p.forEach((t, i) => {
                                                if (
                                                    ((o.before.shapes[t.id] = t),
                                                    (o.after.shapes[t.id] = void 0),
                                                    (r.before.shapes[t.id] = void 0),
                                                    (r.after.shapes[t.id] = t),
                                                    !l.has(t.parentId) && ((r.after.shapes[t.id] = $(Y({}, t), { parentId: n, childIndex: h + i })), t.parentId !== s))
                                                ) {
                                                    let i = e.getShape(t.parentId, s);
                                                    (o.before.shapes[i.id] = { children: i.children }), (o.after.shapes[i.id] = { children: i.children.filter((e) => e !== t.id) });
                                                }
                                            }),
                                                Object.values(a.bindings)
                                                    .filter((e) => l.has(e.fromId) || l.has(e.toId))
                                                    .forEach((t) => {
                                                        (o.before.bindings[t.id] = t), (o.after.bindings[t.id] = void 0);
                                                        let i = e.getShape(t.fromId, s);
                                                        if (l.has(t.fromId) && l.has(t.toId)) (r.before.bindings[t.id] = void 0), (r.after.bindings[t.id] = t);
                                                        else if (l.has(t.fromId)) {
                                                            let n = e.getShape(t.fromId, s),
                                                                a = Object.values(i.handles).find((e) => e.bindingId === t.id).id,
                                                                o = r.after.shapes[n.id];
                                                            o.handles = $(Y({}, o.handles), { [a]: $(Y({}, o.handles[a]), { bindingId: void 0 }) });
                                                        } else {
                                                            let n = e.getShape(t.fromId, s),
                                                                a = Object.values(i.handles).find((e) => e.bindingId === t.id);
                                                            (o.before.shapes[n.id] = { handles: { [a.id]: { bindingId: t.id } } }), (o.after.shapes[n.id] = { handles: { [a.id]: { bindingId: void 0 } } });
                                                        }
                                                    });
                                            let c = e.state.document.pageStates[n],
                                                u = x.cQ.getCommonBounds(p.map((e) => tB.getBounds(e))),
                                                g = tB.getCameraZoom(i.width < i.height ? (i.width - 128) / u.width : (i.height - 128) / u.height),
                                                m = (i.width - u.width * g) / 2 / g,
                                                f = (i.height - u.height * g) / 2 / g,
                                                b = j.B.toFixed(j.B.add([-u.minX, -u.minY], [m, f]));
                                            return {
                                                id: "move_to_page",
                                                before: {
                                                    appState: { currentPageId: s },
                                                    document: { pages: { [s]: o.before, [n]: r.before }, pageStates: { [s]: { selectedIds: t }, [n]: { selectedIds: c.selectedIds, camera: c.camera } } },
                                                },
                                                after: {
                                                    appState: { currentPageId: n },
                                                    document: { pages: { [s]: o.after, [n]: r.after }, pageStates: { [s]: { selectedIds: [] }, [n]: { selectedIds: t, camera: { zoom: g, point: b } } } },
                                                },
                                            };
                                        })(this, i, s, t, e)
                                    ),
                                    this
                                );
                            }),
                            V(this, "moveToBack", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iG(this, e, "toBack")))),
                            V(this, "moveBackward", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iG(this, e, "backward")))),
                            V(this, "moveForward", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iG(this, e, "forward")))),
                            V(this, "moveToFront", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iG(this, e, "toFront")))),
                            V(this, "nudge", (e, t = !1, i = this.selectedIds) => {
                                if (0 === i.length) return this;
                                let s = t ? (this.settings.showGrid ? 4 * this.currentGrid : 10) : this.settings.showGrid ? this.currentGrid : 1;
                                return this.setState(
                                    (function (e, t, i) {
                                        let { currentPageId: s, selectedIds: n } = e;
                                        e.rotationInfo.selectedIds = [...n];
                                        let a = { shapes: {}, bindings: {} },
                                            o = { shapes: {}, bindings: {} },
                                            r = t
                                                .flatMap((t) => {
                                                    let i = e.getShape(t);
                                                    return i.children ? i.children : i.id;
                                                })
                                                .filter((t) => !e.getShape(t).isLocked),
                                            l = tB.mutateShapes(e.state, r, (e) => ({ point: j.B.toFixed(j.B.add(e.point, i)) }), s);
                                        return (
                                            (a.shapes = l.before),
                                            (o.shapes = l.after),
                                            tB
                                                .getBindings(e.state, s)
                                                .filter((e) => t.includes(e.fromId) && !t.includes(e.toId))
                                                .forEach((t) => {
                                                    for (let i of ((a.bindings[t.id] = t), (o.bindings[t.id] = void 0), [t.toId, t.fromId])) {
                                                        let s = e.getShape(i);
                                                        s.handles &&
                                                            Object.values(s.handles)
                                                                .filter((e) => e.bindingId === t.id)
                                                                .forEach((e) => {
                                                                    var s, n;
                                                                    (a.shapes[i] = $(Y({}, a.shapes[i]), { handles: $(Y({}, null == (s = a.shapes[i]) ? void 0 : s.handles), { [e.id]: { bindingId: t.id } }) })),
                                                                        (o.shapes[i] = $(Y({}, o.shapes[i]), { handles: $(Y({}, null == (n = o.shapes[i]) ? void 0 : n.handles), { [e.id]: { bindingId: void 0 } }) }));
                                                                });
                                                    }
                                                }),
                                            { id: "translate", before: { document: { pages: { [s]: a }, pageStates: { [s]: { selectedIds: t } } } }, after: { document: { pages: { [s]: o }, pageStates: { [s]: { selectedIds: t } } } } }
                                        );
                                    })(this, i, j.B.mul(e, s))
                                );
                            }),
                            V(this, "duplicate", (e = this.selectedIds, t) =>
                                this.readOnly
                                    ? this
                                    : 0 === e.length
                                    ? this
                                    : this.setState(
                                          (function (e, t, i) {
                                              let { selectedIds: s, currentPageId: n, page: a, shapes: o } = e,
                                                  r = { shapes: {}, bindings: {} },
                                                  l = { shapes: {}, bindings: {} },
                                                  d = {},
                                                  h = t.map((t) => e.getShape(t)).filter((e) => !t.includes(e.parentId));
                                              h.forEach((t) => {
                                                  let i = x.cQ.uniqueId();
                                                  if (
                                                      ((r.shapes[i] = void 0),
                                                      (l.shapes[i] = $(Y({}, x.cQ.deepClone(t)), { id: i, childIndex: tB.getChildIndexAbove(e.state, t.id, n) })),
                                                      t.children && (l.shapes[i].children = []),
                                                      t.parentId !== n)
                                                  ) {
                                                      let s = e.getShape(t.parentId);
                                                      (r.shapes[s.id] = $(Y({}, r.shapes[s.id]), { children: s.children })), (l.shapes[s.id] = $(Y({}, l.shapes[s.id]), { children: [...(l.shapes[s.id] || s).children, i] }));
                                                  }
                                                  d[t.id] = i;
                                              }),
                                                  h.forEach((t) => {
                                                      t.children &&
                                                          t.children.forEach((i) => {
                                                              var s, a;
                                                              let o = e.getShape(i),
                                                                  h = x.cQ.uniqueId(),
                                                                  p = d[t.id];
                                                              (r.shapes[h] = void 0),
                                                                  (l.shapes[h] = $(Y({}, x.cQ.deepClone(o)), { id: h, parentId: p, childIndex: tB.getChildIndexAbove(e.state, o.id, n) })),
                                                                  (d[i] = h),
                                                                  null == (a = null == (s = l.shapes[d[t.id]]) ? void 0 : s.children) || a.push(h);
                                                          });
                                                  });
                                              let p = new Set(Object.keys(d));
                                              Object.values(a.bindings)
                                                  .filter((e) => p.has(e.fromId) || p.has(e.toId))
                                                  .forEach((e) => {
                                                      if (p.has(e.fromId)) {
                                                          if (p.has(e.toId)) {
                                                              let t = x.cQ.uniqueId(),
                                                                  i = $(Y({}, x.cQ.deepClone(e)), { id: t, fromId: d[e.fromId], toId: d[e.toId] });
                                                              (r.bindings[t] = void 0),
                                                                  (l.bindings[t] = i),
                                                                  Object.values(l.shapes[i.fromId].handles).forEach((i) => {
                                                                      i.bindingId === e.id && (i.bindingId = t);
                                                                  });
                                                          } else
                                                              Object.values(l.shapes[d[e.fromId]].handles).forEach((t) => {
                                                                  t.bindingId === e.id && (t.bindingId = void 0);
                                                              });
                                                      }
                                                  });
                                              let c = Object.values(l.shapes);
                                              if (i) {
                                                  let e = x.cQ.getCommonBounds(c.map((e) => tB.getBounds(e))),
                                                      t = x.cQ.getBoundsCenter(e);
                                                  c.forEach((e) => {
                                                      e.point && (e.point = j.B.sub(i, j.B.sub(t, e.point)));
                                                  });
                                              } else {
                                                  let e = [16, 16];
                                                  c.forEach((t) => {
                                                      t.point && (t.point = j.B.add(t.point, e));
                                                  });
                                              }
                                              return (
                                                  c.forEach((e) => {
                                                      e.isLocked && (e.isLocked = !1);
                                                  }),
                                                  {
                                                      id: "duplicate",
                                                      before: { document: { pages: { [n]: r }, pageStates: { [n]: { selectedIds: s } } } },
                                                      after: { document: { pages: { [n]: l }, pageStates: { [n]: { selectedIds: Array.from(p.values()).map((e) => d[e]) } } } },
                                                  }
                                              );
                                          })(this, e, t)
                                      )
                            ),
                            V(this, "resetBounds", (e = this.selectedIds) => {
                                let t = iY(this, e, this.currentPageId);
                                return this.setState(iY(this, e, this.currentPageId), t.id);
                            }),
                            V(this, "toggleHidden", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iX(this, e, "isHidden")))),
                            V(this, "toggleLocked", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iX(this, e, "isLocked")))),
                            V(this, "toggleAspectRatioLocked", (e = this.selectedIds) => (0 === e.length ? this : this.setState(iX(this, e, "isAspectRatioLocked")))),
                            V(this, "toggleDecoration", (e, t = this.selectedIds) =>
                                0 !== t.length && ("start" === e || "end" === e)
                                    ? this.setState(
                                          (function (e, t, i) {
                                              let { currentPageId: s, selectedIds: n } = e;
                                              return {
                                                  id: "toggle_decorations",
                                                  before: {
                                                      document: {
                                                          pages: {
                                                              [s]: {
                                                                  shapes: Object.fromEntries(
                                                                      t.map((t) => {
                                                                          var s;
                                                                          return [t, { decorations: { [i]: null == (s = e.getShape(t).decorations) ? void 0 : s[i] } }];
                                                                      })
                                                                  ),
                                                              },
                                                          },
                                                          pageStates: { [s]: { selectedIds: n } },
                                                      },
                                                  },
                                                  after: {
                                                      document: {
                                                          pages: {
                                                              [s]: {
                                                                  shapes: Object.fromEntries(
                                                                      t
                                                                          .filter((t) => !e.getShape(t).isLocked)
                                                                          .map((t) => {
                                                                              var s;
                                                                              return [t, { decorations: { [i]: (null == (s = e.getShape(t).decorations) ? void 0 : s[i]) ? void 0 : "arrow" } }];
                                                                          })
                                                                  ),
                                                              },
                                                          },
                                                          pageStates: { [s]: { selectedIds: t } },
                                                      },
                                                  },
                                              };
                                          })(this, t, e)
                                      )
                                    : this
                            ),
                            V(this, "setShapeProps", (e, t = this.selectedIds) =>
                                this.setState(
                                    (function (e, t, i) {
                                        let { currentPageId: s, selectedIds: n } = e,
                                            a = t.map((t) => e.getShape(t)).filter((e) => !!i.isLocked || !e.isLocked),
                                            o = {},
                                            r = {},
                                            l = Object.keys(i);
                                        return (
                                            a.forEach((e) => {
                                                (o[e.id] = Object.fromEntries(l.map((t) => [t, e[t]]))), (r[e.id] = i);
                                            }),
                                            {
                                                id: "set_props",
                                                before: { document: { pages: { [s]: { shapes: o } }, pageStates: { [s]: { selectedIds: n } } } },
                                                after: { document: { pages: { [s]: { shapes: r } }, pageStates: { [s]: { selectedIds: n } } } },
                                            }
                                        );
                                    })(this, t, e)
                                )
                            ),
                            V(this, "rotate", (e = -0.5 * Math.PI, t = this.selectedIds) => {
                                if (0 === t.length) return this;
                                let i = (function (e, t, i = -i$ / 4) {
                                    let { currentPageId: s } = e,
                                        n = {},
                                        a = {},
                                        o = t
                                            .flatMap((t) => {
                                                let i = e.getShape(t);
                                                return i.children ? i.children.map((t) => e.getShape(t)) : i;
                                            })
                                            .filter((e) => !e.isLocked),
                                        r = x.cQ.getBoundsCenter(x.cQ.getCommonBounds(o.map((e) => tB.getBounds(e))));
                                    return (
                                        o.forEach((e) => {
                                            let t = tB.getRotatedShapeMutation(e, tB.getCenter(e), r, i);
                                            t && ((n[e.id] = tB.getBeforeShape(e, t)), (a[e.id] = t));
                                        }),
                                        {
                                            id: "rotate",
                                            before: { document: { pages: { [s]: { shapes: n } }, pageStates: { [s]: { selectedIds: t } } } },
                                            after: { document: { pages: { [s]: { shapes: a } }, pageStates: { [s]: { selectedIds: t } } } },
                                        }
                                    );
                                })(this, t, e);
                                return i ? this.setState(i) : this;
                            }),
                            V(this, "group", (e = this.selectedIds, t = x.cQ.uniqueId(), i = this.currentPageId) => {
                                if (this.readOnly) return this;
                                if (1 === e.length && "group" === this.getShape(e[0], i).type) return this.ungroup(e, i);
                                if (e.length < 2) return this;
                                let s = (function (e, t, i, s) {
                                    var n, a;
                                    if (t.length < 2) return;
                                    let o = {},
                                        r = {},
                                        l = {},
                                        d = {},
                                        h = [...t],
                                        p = [],
                                        c = [],
                                        u = [];
                                    for (let i of t) {
                                        let t = e.getShape(i);
                                        if (!t.isLocked) {
                                            if (void 0 === t.children) p.push(t);
                                            else {
                                                let i = t.children.filter((t) => !e.getShape(t).isLocked);
                                                u.push(t), h.push(...i), p.push(...i.map((t) => e.getShape(t)).filter(Boolean));
                                            }
                                        }
                                    }
                                    if (p.every((e) => e.parentId === p[0].parentId) && p[0].parentId !== s && (null == (n = e.getShape(p[0].parentId).children) ? void 0 : n.length) === h.length) return;
                                    let g = tB.flattenPage(e.state, s),
                                        m = Object.fromEntries(p.map((e) => [e.id, g.indexOf(e)])),
                                        f = p.sort((e, t) => m[e.id] - m[t.id]),
                                        b = (f.filter((e) => e.parentId === s)[0] || f[0]).childIndex,
                                        v = x.cQ.getCommonBounds(p.map((e) => tB.getBounds(e)));
                                    for (
                                        o[i] = void 0,
                                            r[i] = tB.getShapeUtil("group").create({ id: i, childIndex: b, parentId: s, point: [v.minX, v.minY], size: [v.width, v.height], children: f.map((e) => e.id) }),
                                            f.forEach((t, n) => {
                                                if (t.parentId !== s) {
                                                    let i = e.getShape(t.parentId);
                                                    u.push(i);
                                                }
                                                (o[t.id] = $(Y({}, o[t.id]), { parentId: t.parentId, childIndex: t.childIndex })), (r[t.id] = $(Y({}, r[t.id]), { parentId: i, childIndex: n + 1 }));
                                            });
                                        u.length > 0;

                                    ) {
                                        let t = u.pop();
                                        if (!t) break;
                                        let i = ((null == (a = o[t.id]) ? void 0 : a.children) || t.children).filter((e) => e && !(h.includes(e) || c.includes(e)));
                                        0 === i.length
                                            ? ((o[t.id] = t), (r[t.id] = void 0), t.parentId !== s && (c.push(t.id), u.push(e.getShape(t.parentId))))
                                            : ((o[t.id] = $(Y({}, o[t.id]), { children: t.children })), (r[t.id] = $(Y({}, r[t.id]), { children: i })));
                                    }
                                    let { bindings: y } = e,
                                        S = new Set(c);
                                    return (
                                        y.forEach((t) => {
                                            for (let i of [t.toId, t.fromId])
                                                if (S.has(i)) {
                                                    (l[t.id] = t), (d[t.id] = void 0);
                                                    let s = e.getShape(i);
                                                    s.handles &&
                                                        Object.values(s.handles)
                                                            .filter((e) => e.bindingId === t.id)
                                                            .forEach((e) => {
                                                                var s, n;
                                                                (o[i] = $(Y({}, o[i]), { handles: $(Y({}, null == (s = o[i]) ? void 0 : s.handles), { [e.id]: { bindingId: t.id } }) })),
                                                                    c.includes(i) || (r[i] = $(Y({}, r[i]), { handles: $(Y({}, null == (n = r[i]) ? void 0 : n.handles), { [e.id]: { bindingId: void 0 } }) }));
                                                            });
                                                }
                                        }),
                                        {
                                            id: "group",
                                            before: { document: { pages: { [s]: { shapes: o, bindings: l } }, pageStates: { [s]: { selectedIds: t } } } },
                                            after: { document: { pages: { [s]: { shapes: r, bindings: l } }, pageStates: { [s]: { selectedIds: [i] } } } },
                                        }
                                    );
                                })(this, e, t, i);
                                return s ? this.setState(s) : this;
                            }),
                            V(this, "ungroup", (e = this.selectedIds, t = this.currentPageId) => {
                                if (this.readOnly) return this;
                                let i = e.map((e) => this.getShape(e, t)).filter((e) => "group" === e.type);
                                if (0 === i.length) return this;
                                let s = (function (e, t, i, s) {
                                    let { bindings: n } = e,
                                        a = {},
                                        o = {},
                                        r = {},
                                        l = {},
                                        d = t.filter((e) => !i.find((t) => t.id === e));
                                    return (
                                        i
                                            .filter((e) => !e.isLocked)
                                            .forEach((t) => {
                                                let i = [],
                                                    h = [];
                                                (a[t.id] = t),
                                                    (o[t.id] = void 0),
                                                    t.children.forEach((t) => {
                                                        d.push(t);
                                                        let n = e.getShape(t, s);
                                                        i.push(n);
                                                    });
                                                let p = t.childIndex,
                                                    c = (tB.getChildIndexAbove(e.state, t.id, s) - p) / i.length;
                                                i
                                                    .sort((e, t) => e.childIndex - t.childIndex)
                                                    .forEach((e, t) => {
                                                        (a[e.id] = { parentId: e.parentId, childIndex: e.childIndex }), (o[e.id] = { parentId: s, childIndex: p + c * t });
                                                    }),
                                                    n
                                                        .filter((e) => e.toId === t.id || e.fromId === t.id)
                                                        .forEach((t) => {
                                                            for (let i of [t.toId, t.fromId])
                                                                if (void 0 === o[i]) {
                                                                    (r[t.id] = t), (l[t.id] = void 0);
                                                                    let n = e.getShape(i, s);
                                                                    n.handles &&
                                                                        Object.values(n.handles)
                                                                            .filter((e) => e.bindingId === t.id)
                                                                            .forEach((e) => {
                                                                                var s, n;
                                                                                (a[i] = $(Y({}, a[i]), { handles: $(Y({}, null == (s = a[i]) ? void 0 : s.handles), { [e.id]: { bindingId: t.id } }) })),
                                                                                    h.includes(i) || (o[i] = $(Y({}, o[i]), { handles: $(Y({}, null == (n = o[i]) ? void 0 : n.handles), { [e.id]: { bindingId: void 0 } }) }));
                                                                            });
                                                                }
                                                        });
                                            }),
                                        {
                                            id: "ungroup",
                                            before: { document: { pages: { [s]: { shapes: a, bindings: r } }, pageStates: { [s]: { selectedIds: t } } } },
                                            after: { document: { pages: { [s]: { shapes: o, bindings: r } }, pageStates: { [s]: { selectedIds: d } } } },
                                        }
                                    );
                                })(this, e, i, t);
                                return s ? this.setState(s) : this;
                            }),
                            V(this, "cancel", () => {
                                var e, t;
                                return null == (t = (e = this.currentTool).onCancel) || t.call(e), this;
                            }),
                            V(this, "addMediaFromFiles", (e, ...t) =>
                                q(this, [e, ...t], function* (e, t = this.centerPoint) {
                                    this.setIsLoading(!0);
                                    let i = [],
                                        s = this.getPagePoint(t);
                                    for (let s of e) {
                                        let e = x.cQ.uniqueId(),
                                            n = s.name.match(/\.[0-9a-z]+$/i);
                                        if (!n) throw Error("No extension");
                                        let a = eZ.includes(n[0].toLowerCase()),
                                            o = eK.includes(n[0].toLowerCase());
                                        if (!(a || o)) throw Error("Wrong extension");
                                        let r = a ? "image" : "video",
                                            l = a ? "image" : "video",
                                            d;
                                        try {
                                            if (this.callbacks.onAssetCreate) {
                                                let t = yield this.callbacks.onAssetCreate(this, s, e);
                                                if (!t) throw Error("Asset creation callback returned false");
                                                d = t;
                                            } else d = yield i6(s);
                                            if ("string" == typeof d) {
                                                let o = [0, 0];
                                                if (a) {
                                                    if (".svg" == n[0]) {
                                                        let e,
                                                            t = yield i9(s),
                                                            i = this.getViewboxFromSVG(t);
                                                        i && ((e = i.split(" ")), (o[0] = parseFloat(e[2])), (o[1] = parseFloat(e[3])));
                                                    }
                                                    j.B.isEqual(o, [0, 0]) && (o = yield i7(d));
                                                } else o = yield se(d);
                                                let h = Object.values(this.document.assets).find((e) => e.type === l && e.src === d),
                                                    p;
                                                if (h) p = h.id;
                                                else {
                                                    let t = { id: (p = e), type: l, name: s.name, src: d, size: o };
                                                    this.patchState({ document: { assets: { [p]: t } } });
                                                }
                                                i.push(this.getImageOrVideoShapeAtPoint(e, r, t, o, p));
                                            }
                                        } catch (e) {
                                            console.warn(e);
                                        }
                                    }
                                    if (i.length) {
                                        let e = j.B.add(s, [0, 0]);
                                        i.forEach((t, i) => {
                                            let s = tB.getBounds(t);
                                            0 === i && ((e[0] -= s.width / 2), (e[1] -= s.height / 2)), (t.point = [...e]), (e[0] += s.width);
                                        });
                                        let t = x.cQ.getCommonBounds(i.map(tB.getBounds));
                                        this.createShapes(...i), x.cQ.boundsContain(this.viewport, t) || (this.zoomToSelection(), this.zoom > 1 && this.resetZoom());
                                    }
                                    return this.setIsLoading(!1), this;
                                })
                            ),
                            V(this, "getViewboxFromSVG", (e) => {
                                if ("string" == typeof e) {
                                    let t = e.match(/.*?viewBox=["'](-?[\d.]+[, ]+-?[\d.]+[, ][\d.]+[, ][\d.]+)["']/);
                                    return t && t.length >= 2 ? t[1] : null;
                                }
                                return this.setIsLoading(!1), null;
                            }),
                            V(this, "onKeyDown", (e, t, i) => {
                                var s, n;
                                switch (i.key) {
                                    case "/":
                                        if ("idle" === this.status && !this.pageState.editingId) {
                                            let { shiftKey: e, metaKey: i, altKey: s, ctrlKey: n, spaceKey: a } = this;
                                            this.onPointerDown(
                                                { target: "canvas", pointerId: 0, origin: t.point, point: t.point, delta: [0, 0], pressure: 0.5, shiftKey: e, ctrlKey: n, metaKey: i, altKey: s, spaceKey: a },
                                                { shiftKey: e, altKey: s, ctrlKey: n, pointerId: 0, clientX: t.point[0], clientY: t.point[1] }
                                            );
                                        }
                                        break;
                                    case "Escape":
                                        this.cancel();
                                        break;
                                    case "Meta":
                                        this.metaKey = !0;
                                        break;
                                    case "Alt":
                                        this.altKey = !0;
                                        break;
                                    case "Control":
                                        this.ctrlKey = !0;
                                        break;
                                    case " ":
                                        (this.isForcePanning = !0), (this.spaceKey = !0);
                                }
                                return null == (n = (s = this.currentTool).onKeyDown) || n.call(s, e, t, i), this;
                            }),
                            V(this, "onKeyUp", (e, t, i) => {
                                var s, n;
                                if (t) {
                                    switch (i.key) {
                                        case "/": {
                                            let { currentPoint: e, shiftKey: t, metaKey: i, altKey: s, ctrlKey: n, spaceKey: a } = this;
                                            this.onPointerUp(
                                                { target: "canvas", pointerId: 0, origin: e, point: e, delta: [0, 0], pressure: 0.5, shiftKey: t, ctrlKey: n, metaKey: i, altKey: s, spaceKey: a },
                                                { shiftKey: t, altKey: s, ctrlKey: n, pointerId: 0, clientX: e[0], clientY: e[1] }
                                            );
                                            break;
                                        }
                                        case "Meta":
                                            this.metaKey = !1;
                                            break;
                                        case "Alt":
                                            this.altKey = !1;
                                            break;
                                        case "Control":
                                            this.ctrlKey = !1;
                                            break;
                                        case " ":
                                            (this.isForcePanning = !1), (this.spaceKey = !1);
                                    }
                                    null == (n = (s = this.currentTool).onKeyUp) || n.call(s, e, t, i);
                                }
                            }),
                            V(this, "refreshBoundingBoxes", () => {
                                let e = this.shapes.map((e) => [e.id, Y({ point: [...e.point] }, "label" in e && { label: "" })]),
                                    t = this.shapes.map((e) => [e.id, Y({ point: [...e.point] }, "label" in e && { label: e.label })]);
                                eV(),
                                    this.patchState({ document: { pages: { [this.currentPageId]: { shapes: Object.fromEntries(e) } } } }),
                                    this.patchState({ document: { pages: { [this.currentPageId]: { shapes: Object.fromEntries(t) } } } });
                            }),
                            V(this, "onDragOver", (e) => {
                                e.preventDefault();
                            }),
                            V(this, "onDrop", (e) =>
                                q(this, null, function* () {
                                    var t;
                                    return e.preventDefault(), this.disableAssets || ((null == (t = e.dataTransfer.files) ? void 0 : t.length) && this.addMediaFromFiles(Object.values(e.dataTransfer.files), [e.clientX, e.clientY])), this;
                                })
                            ),
                            V(this, "onPinchStart", (e, t) => {
                                var i, s;
                                null == (s = (i = this.currentTool).onPinchStart) || s.call(i, e, t);
                            }),
                            V(this, "onPinchEnd", (e, t) => {
                                var i, s;
                                return null == (s = (i = this.currentTool).onPinchEnd) ? void 0 : s.call(i, e, t);
                            }),
                            V(this, "onPinch", (e, t) => {
                                var i, s;
                                return null == (s = (i = this.currentTool).onPinch) ? void 0 : s.call(i, e, t);
                            }),
                            V(this, "onPan", (e, t) => {
                                if ("pinching" === this.appState.status) return;
                                let i = j.B.div(e.delta, this.camera.zoom),
                                    s = this.camera.point,
                                    n = j.B.sub(s, i);
                                j.B.isEqual(n, s) || (this.pan(i), this.isForcePanning || this.onPointerMove(e, t), eU && this.isForcePanning && this.preventPaste());
                            }),
                            V(this, "onZoom", (e, t) => {
                                if ("idle" !== this.state.appState.status) return;
                                let i = e.delta[2] / 50;
                                this.zoomBy(i, e.point), this.onPointerMove(e, t);
                            }),
                            V(this, "updateInputs", (e) => {
                                (this.currentPoint = this.getPagePoint(e.point).concat(e.pressure)), (this.shiftKey = e.shiftKey), (this.altKey = e.altKey), (this.ctrlKey = e.ctrlKey), (this.metaKey = e.metaKey);
                            }),
                            V(this, "onPointerMove", (e, t) => {
                                var i, s, n, a, o;
                                if (((this.previousPoint = this.currentPoint), this.updateInputs(e, t), this.isForcePanning && this.isPointing)) {
                                    null == (i = this.onPan) || i.call(this, $(Y({}, e), { delta: j.B.neg(e.delta) }), t);
                                    return;
                                }
                                if ((null == (n = (s = this.currentTool).onPointerMove) || n.call(s, e, t), this.state.room)) {
                                    let { users: t, userId: i } = this.state.room;
                                    null == (o = (a = this.callbacks).onChangePresence) || o.call(a, this, $(Y({}, t[i]), { point: this.getPagePoint(e.point), session: !!this.session }));
                                }
                            }),
                            V(this, "onPointerDown", (e, t) => {
                                var i, s;
                                if (4 === t.buttons) this.isForcePanning = !0;
                                else if (this.isPointing) return;
                                (this.isPointing = !0),
                                    (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
                                    this.updateInputs(e, t),
                                    this.isForcePanning || null == (s = (i = this.currentTool).onPointerDown) || s.call(i, e, t);
                            }),
                            V(this, "onPointerUp", (e, t) => {
                                var i, s;
                                (this.isPointing = !1), this.shiftKey || (this.isForcePanning = !1), this.updateInputs(e, t), null == (s = (i = this.currentTool).onPointerUp) || s.call(i, e, t);
                            }),
                            V(this, "onPointCanvas", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onPointCanvas) || s.call(i, e, t);
                            }),
                            V(this, "onDoubleClickCanvas", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onDoubleClickCanvas) || s.call(i, e, t);
                            }),
                            V(this, "onRightPointCanvas", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onRightPointCanvas) || s.call(i, e, t);
                            }),
                            V(this, "onDragCanvas", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onDragCanvas) || s.call(i, e, t);
                            }),
                            V(this, "onReleaseCanvas", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onReleaseCanvas) || s.call(i, e, t);
                            }),
                            V(this, "onPointShape", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onPointShape) || s.call(i, e, t);
                            }),
                            V(this, "onReleaseShape", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onReleaseShape) || s.call(i, e, t);
                            }),
                            V(this, "onDoubleClickShape", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onDoubleClickShape) || s.call(i, e, t);
                            }),
                            V(this, "onRightPointShape", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onRightPointShape) || s.call(i, e, t);
                            }),
                            V(this, "onDragShape", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onDragShape) || s.call(i, e, t);
                            }),
                            V(this, "onHoverShape", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onHoverShape) || s.call(i, e, t);
                            }),
                            V(this, "onUnhoverShape", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onUnhoverShape) || s.call(i, e, t);
                            }),
                            V(this, "onPointBounds", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onPointBounds) || s.call(i, e, t);
                            }),
                            V(this, "onDoubleClickBounds", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onDoubleClickBounds) || s.call(i, e, t);
                            }),
                            V(this, "onRightPointBounds", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onRightPointBounds) || s.call(i, e, t);
                            }),
                            V(this, "onDragBounds", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onDragBounds) || s.call(i, e, t);
                            }),
                            V(this, "onHoverBounds", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onHoverBounds) || s.call(i, e, t);
                            }),
                            V(this, "onUnhoverBounds", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onUnhoverBounds) || s.call(i, e, t);
                            }),
                            V(this, "onReleaseBounds", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onReleaseBounds) || s.call(i, e, t);
                            }),
                            V(this, "onPointBoundsHandle", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onPointBoundsHandle) || s.call(i, e, t);
                            }),
                            V(this, "onDoubleClickBoundsHandle", (e, t) => {
                                var i, s;
                                if (
                                    ((this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
                                    this.updateInputs(e, t),
                                    null == (s = (i = this.currentTool).onDoubleClickBoundsHandle) || s.call(i, e, t),
                                    1 !== this.selectedIds.length)
                                )
                                    return;
                                let n = this.getShape(this.selectedIds[0]);
                                if ("image" === n.type || "video" === n.type) {
                                    let e = this.document.assets[n.assetId],
                                        t = tB.getShapeUtil(n),
                                        i = t.getCenter(n),
                                        s = t.getCenter($(Y({}, n), { size: e.size })),
                                        a = j.B.sub(s, i);
                                    this.updateShapes({ id: n.id, point: j.B.sub(n.point, a), size: e.size });
                                }
                            }),
                            V(this, "onRightPointBoundsHandle", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onRightPointBoundsHandle) || s.call(i, e, t);
                            }),
                            V(this, "onDragBoundsHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onDragBoundsHandle) || s.call(i, e, t);
                            }),
                            V(this, "onHoverBoundsHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onHoverBoundsHandle) || s.call(i, e, t);
                            }),
                            V(this, "onUnhoverBoundsHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onUnhoverBoundsHandle) || s.call(i, e, t);
                            }),
                            V(this, "onReleaseBoundsHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onReleaseBoundsHandle) || s.call(i, e, t);
                            }),
                            V(this, "onPointHandle", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onPointHandle) || s.call(i, e, t);
                            }),
                            V(this, "onDoubleClickHandle", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onDoubleClickHandle) || s.call(i, e, t);
                            }),
                            V(this, "onRightPointHandle", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onRightPointHandle) || s.call(i, e, t);
                            }),
                            V(this, "onDragHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onDragHandle) || s.call(i, e, t);
                            }),
                            V(this, "onHoverHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onHoverHandle) || s.call(i, e, t);
                            }),
                            V(this, "onUnhoverHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onUnhoverHandle) || s.call(i, e, t);
                            }),
                            V(this, "onReleaseHandle", (e, t) => {
                                var i, s;
                                this.updateInputs(e, t), null == (s = (i = this.currentTool).onReleaseHandle) || s.call(i, e, t);
                            }),
                            V(this, "onShapeChange", (e) => {
                                let t = iV(this, [Y(Y({}, this.document.pages[this.currentPageId].shapes[e.id]), e)], this.currentPageId).after;
                                return this.patchState(t, "patched_shapes");
                            }),
                            V(this, "onShapeBlur", () => {
                                var e, t;
                                if (performance.now() - this.editingStartTime < 50) return;
                                let { editingId: i } = this.pageState,
                                    { isToolLocked: s } = this.getAppState();
                                if (i) {
                                    let e = this.getShape(i);
                                    this.setEditingId(), "text" === e.type && (e.text.trim().length <= 0 ? this.patchState(iN(this, [i]).after, "delete_empty_text") : s || this.select(i));
                                }
                                null == (t = (e = this.currentTool).onShapeBlur) || t.call(e);
                            }),
                            V(this, "onShapeClone", (e, t) => {
                                var i, s;
                                (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)), this.updateInputs(e, t), null == (s = (i = this.currentTool).onShapeClone) || s.call(i, e, t);
                            }),
                            V(this, "onRenderCountChange", (e) => {
                                let t = this.getAppState();
                                t.isEmptyCanvas && e.length > 0
                                    ? this.patchState({ appState: { isEmptyCanvas: !1 } }, "empty_canvas:false")
                                    : !t.isEmptyCanvas && e.length <= 0 && this.patchState({ appState: { isEmptyCanvas: !0 } }, "empty_canvas:true");
                            }),
                            V(this, "onError", () => {}),
                            V(this, "getShapeUtil", tB.getShapeUtil),
                            (this.callbacks = t);
                    }
                    setStatus(e) {
                        return this.patchState({ appState: { status: e } }, `set_status:${e}`);
                    }
                    get isMenuOpen() {
                        return this.appState.isMenuOpen;
                    }
                    get isLoading() {
                        return this.appState.isLoading;
                    }
                    get disableAssets() {
                        return this.appState.disableAssets;
                    }
                    get history() {
                        return this.stack.slice(0, this.pointer + 1);
                    }
                    set history(e) {
                        this.replaceHistory(e);
                    }
                    get document() {
                        return this.state.document;
                    }
                    get settings() {
                        return this.state.settings;
                    }
                    get appState() {
                        return this.state.appState;
                    }
                    get currentPageId() {
                        return this.state.appState.currentPageId;
                    }
                    get page() {
                        return this.state.document.pages[this.currentPageId];
                    }
                    get shapes() {
                        return Object.values(this.page.shapes);
                    }
                    get bindings() {
                        return Object.values(this.page.bindings);
                    }
                    get assets() {
                        return Object.values(this.document.assets);
                    }
                    get pageState() {
                        return this.state.document.pageStates[this.currentPageId];
                    }
                    get camera() {
                        return this.pageState.camera;
                    }
                    get zoom() {
                        return this.pageState.camera.zoom;
                    }
                    get selectedIds() {
                        return this.pageState.selectedIds;
                    }
                    createTextShapeAtPoint(e, t, i) {
                        let {
                                shapes: s,
                                appState: { currentPageId: n, currentStyle: a },
                            } = this,
                            o = 0 === s.length ? 1 : s.filter((e) => e.parentId === n).sort((e, t) => t.childIndex - e.childIndex)[0].childIndex + 1,
                            r = iH.text,
                            l = r.create({ id: t || x.cQ.uniqueId(), parentId: n, childIndex: o, point: e, style: Y({}, a) }),
                            d = r.getBounds(l);
                        return (l.point = j.B.sub(l.point, [d.width / 2, d.height / 2])), i ? this.patchCreate([tB.getShapeUtil(l.type).create(l)]) : this.createShapes(l), this.setEditingId(l.id, !0), this;
                    }
                    getImageOrVideoShapeAtPoint(e, t, i, s, n) {
                        let {
                                shapes: a,
                                appState: { currentPageId: o, currentStyle: r },
                            } = this,
                            l = 0 === a.length ? 1 : a.filter((e) => e.parentId === o).sort((e, t) => t.childIndex - e.childIndex)[0].childIndex + 1,
                            d = iH[t];
                        if (s[0] > this.viewport.width) {
                            let e = s[1] / s[0];
                            (s[0] = this.viewport.width - (128 / this.camera.zoom) * 2), (s[1] = s[0] * e), (s[1] < 32 || s[1] < 32) && ((s[1] = 32), (s[0] = s[1] / e));
                        } else if (s[1] > this.viewport.height) {
                            let e = s[0] / s[1];
                            (s[1] = this.viewport.height - (128 / this.camera.zoom) * 2), (s[0] = s[1] * e), (s[1] < 32 || s[1] < 32) && ((s[0] = 32), (s[1] = s[0] / e));
                        }
                        return d.create({ id: e, parentId: o, childIndex: l, point: i, size: s, style: Y({}, r), assetId: n });
                    }
                    isSelected(e) {
                        return this.selectedIds.includes(e);
                    }
                    serializeVideo(e) {
                        let t = document.getElementById(e + "_video");
                        if (t) {
                            let e = document.createElement("canvas");
                            return (e.width = t.videoWidth), (e.height = t.videoHeight), e.getContext("2d").drawImage(t, 0, 0), e.toDataURL("image/png");
                        }
                        throw Error("Video with id " + e + " not found");
                    }
                    serializeImage(e) {
                        let t = document.getElementById(e + "_image");
                        if (t) {
                            let e = document.createElement("canvas");
                            return (e.width = t.width), (e.height = t.height), e.getContext("2d").drawImage(t, 0, 0), e.toDataURL("image/png");
                        }
                        throw Error("Image with id " + e + " not found");
                    }
                    patchAssets(e) {
                        this.document.assets = Y(Y({}, this.document.assets), e);
                    }
                    get room() {
                        return this.state.room;
                    }
                    get isLocal() {
                        return void 0 === this.state.room || "local" === this.state.room.id;
                    }
                    get status() {
                        return this.appState.status;
                    }
                    get currentUser() {
                        if (this.state.room) return this.state.room.users[this.state.room.userId];
                    }
                    get centerPoint() {
                        let { width: e, height: t } = this.rendererBounds;
                        return j.B.toFixed([e / 2, t / 2]);
                    }
                    get currentGrid() {
                        let { zoom: e } = this.camera;
                        return e < 0.15 ? 128 : e < 1 ? 32 : 8;
                    }
                },
                sw = sk;
            V(sw, "version", 15.5),
                V(sw, "defaultDocument", {
                    id: "doc",
                    name: "New Document",
                    version: sk.version,
                    pages: { page: { id: "page", name: "Page 1", childIndex: 1, shapes: {}, bindings: {} } },
                    pageStates: { page: { id: "page", selectedIds: [], camera: { point: [0, 0], zoom: 1 } } },
                    assets: {},
                }),
                V(sw, "defaultState", {
                    settings: {
                        isCadSelectMode: !1,
                        isPenMode: !1,
                        isDarkMode: !1,
                        isZoomSnap: !1,
                        isFocusMode: !1,
                        isSnapping: !1,
                        isDebugMode: !1,
                        isReadonlyMode: !1,
                        keepStyleMenuOpen: !1,
                        nudgeDistanceLarge: 16,
                        nudgeDistanceSmall: 1,
                        showRotateHandles: !0,
                        showBindingHandles: !0,
                        showCloneHandles: !1,
                        showGrid: !1,
                        language: "en",
                        dockPosition: "bottom",
                        exportBackground: "transparent",
                    },
                    appState: {
                        status: "idle",
                        activeTool: "select",
                        hoveredId: void 0,
                        currentPageId: "page",
                        currentStyle: tm,
                        isToolLocked: !1,
                        isMenuOpen: !1,
                        isEmptyCanvas: !1,
                        eraseLine: [],
                        snapLines: [],
                        isLoading: !1,
                        disableAssets: !1,
                    },
                    document: sk.defaultDocument,
                }),
                V(sw, "assetSrc", "tldraw-assets.json");
            var sB = C.ErrorBoundary,
                sx = "undefined" != typeof window && !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            function sP({
                id: e,
                document: t,
                currentPageId: i,
                autofocus: s = !0,
                showMenu: n = !0,
                showMultiplayerMenu: a = !0,
                showPages: o = !0,
                showTools: r = !0,
                showZoom: l = !0,
                showStyles: d = !0,
                showUI: h = !0,
                readOnly: p = !1,
                disableAssets: c = !1,
                darkMode: u = sx,
                onMount: g,
                onChange: m,
                onChangePresence: f,
                onNewProject: b,
                onSaveProject: v,
                onSaveProjectAs: y,
                onOpenProject: S,
                onOpenMedia: I,
                onUndo: k,
                onRedo: w,
                onPersist: B,
                onPatch: x,
                onCommand: C,
                onChangePage: E,
                onAssetCreate: z,
                onAssetDelete: M,
                onAssetUpload: D,
                onSessionStart: j,
                onSessionEnd: A,
                onExport: T,
            }) {
                let [O, F] = P.useState(e),
                    [L, R] = P.useState(
                        () =>
                            new sw(e, {
                                onMount: g,
                                onChange: m,
                                onChangePresence: f,
                                onNewProject: b,
                                onSaveProject: v,
                                onSaveProjectAs: y,
                                onOpenProject: S,
                                onOpenMedia: I,
                                onUndo: k,
                                onRedo: w,
                                onPersist: B,
                                onPatch: x,
                                onCommand: C,
                                onChangePage: E,
                                onAssetDelete: M,
                                onAssetCreate: z,
                                onAssetUpload: D,
                                onSessionStart: j,
                                onSessionEnd: A,
                            })
                    ),
                    [H, Q] = P.useState(null),
                    [U, Z] = P.useState(null),
                    [K, _] = P.useState(null),
                    [N, W] = P.useState(null),
                    G = P.useCallback((e, t, i, s) => {
                        W(() => e), Q(() => s), Z(() => t), _(() => i);
                    }, []);
                return (
                    P.useLayoutEffect(() => {
                        if (e === O) return;
                        let t = new sw(e, {
                            onMount: g,
                            onChange: m,
                            onChangePresence: f,
                            onNewProject: b,
                            onSaveProject: v,
                            onSaveProjectAs: y,
                            onOpenProject: S,
                            onOpenMedia: I,
                            onUndo: k,
                            onRedo: w,
                            onPersist: B,
                            onPatch: x,
                            onCommand: C,
                            onChangePage: E,
                            onAssetDelete: M,
                            onAssetCreate: z,
                            onAssetUpload: D,
                            onExport: T,
                            onSessionStart: j,
                            onSessionEnd: A,
                        });
                        F(e), R(t);
                    }, [O, e]),
                    P.useEffect(() => {
                        t && (t.id === L.document.id ? L.updateDocument(t) : L.loadDocument(t));
                    }, [t, L]),
                    P.useEffect(() => {
                        L.setDisableAssets(c);
                    }, [L, c]),
                    P.useEffect(() => {
                        i && L.changePage(i);
                    }, [i, L]),
                    P.useEffect(() => {
                        (L.readOnly = p), p || (L.selectNone(), L.cancelSession(), L.setEditingId());
                    }, [L, p]),
                    P.useEffect(() => {
                        u !== L.settings.isDarkMode && L.toggleDarkMode();
                    }, [L, u]),
                    P.useEffect(() => {
                        L.callbacks = {
                            onMount: g,
                            onChange: m,
                            onChangePresence: f,
                            onNewProject: b,
                            onSaveProject: v,
                            onSaveProjectAs: y,
                            onOpenProject: S,
                            onOpenMedia: I,
                            onUndo: k,
                            onRedo: w,
                            onPersist: B,
                            onPatch: x,
                            onCommand: C,
                            onChangePage: E,
                            onAssetDelete: M,
                            onAssetCreate: z,
                            onAssetUpload: D,
                            onExport: T,
                            onSessionStart: j,
                            onSessionEnd: A,
                        };
                    }, [g, m, f, b, v, y, S, I, k, w, B, x, C, E, M, z, D, T, j, A]),
                    P.useLayoutEffect(() => {
                        var e;
                        if ("undefined" != typeof window && (null == (e = window.document) ? void 0 : e.fonts))
                            return (
                                window.document.fonts.addEventListener("loadingdone", t),
                                () => {
                                    window.document.fonts.removeEventListener("loadingdone", t);
                                }
                            );
                        function t() {
                            L.refreshBoundingBoxes();
                        }
                    }, [L]),
                    P.createElement(
                        ek.Provider,
                        { value: L },
                        P.createElement(
                            eC.Provider,
                            { value: { onYes: U, onCancel: H, onNo: K, dialogState: N, setDialogState: W, openDialog: G } },
                            P.createElement(sC, { key: O || "Tldraw", id: O, autofocus: s, showPages: o, showMenu: n, showMultiplayerMenu: a, showStyles: d, showZoom: l, showTools: r, showUI: h, readOnly: p })
                        )
                    )
                );
            }
            var sC = P.memo(function ({ id: e, autofocus: t, showPages: i, showMenu: s, showMultiplayerMenu: n, showZoom: a, showStyles: o, showTools: r, readOnly: l, showUI: d }) {
                    var h, p, c;
                    let u = ew(),
                        [g, m] = P.useState(null),
                        f = P.useRef(null),
                        b = u.useStore(),
                        { document: v, settings: y, appState: S, room: I } = b,
                        k = "select" === b.appState.activeTool,
                        w = v.pages[S.currentPageId],
                        B = v.pageStates[w.id],
                        C = v.assets,
                        { selectedIds: z } = B,
                        M = 1 === z.length && w.shapes[z[0]] && tB.getShapeUtil(w.shapes[z[0]].type).hideBounds,
                        D = 1 === z.length && w.shapes[z[0]] && tB.getShapeUtil(w.shapes[z[0]].type).hideResizeHandles,
                        j = P.useMemo(() => ({ isDarkMode: y.isDarkMode }), [y.isDarkMode]),
                        A = y.isCadSelectMode ? !S.selectByContain : S.selectByContain,
                        T = P.useMemo(() => {
                            let { selectByContain: e } = S,
                                { isDarkMode: t, isCadSelectMode: i } = y;
                            if (t) {
                                let t = i ? (e ? "69, 155, 255" : "105, 209, 73") : "180, 180, 180";
                                return {
                                    brushFill: `rgba(${t}, ${i ? 0.08 : 0.05})`,
                                    brushStroke: `rgba(${t}, ${i ? 0.5 : 0.25})`,
                                    brushDashStroke: `rgba(${t}, .6)`,
                                    selected: "rgba(38, 150, 255, 1.000)",
                                    selectFill: "rgba(38, 150, 255, 0.05)",
                                    background: "#212529",
                                    foreground: "#49555f",
                                };
                            }
                            let s = i ? (e ? "0, 89, 242" : "51, 163, 23") : "0,0,0";
                            return { brushFill: `rgba(${s}, ${i ? 0.08 : 0.05})`, brushStroke: `rgba(${s}, ${i ? 0.4 : 0.25})`, brushDashStroke: `rgba(${s}, .6)` };
                        }, [y.isDarkMode, y.isCadSelectMode, S.selectByContain]),
                        O = void 0 !== u.session,
                        F = (O && (null == (h = u.session) ? void 0 : h.constructor.name) !== "BrushSession") || !k || M || !!B.editingId,
                        L = O || !k,
                        R = (O && "brushing" !== b.appState.status) || !k,
                        H = O || !k || B.camera.zoom < 0.2,
                        Q =
                            ((c = y.language),
                            P.useMemo(() => {
                                var e, t;
                                let i;
                                return (
                                    (e = null != c ? c : navigator.language.split(/[-_]/)[0]),
                                    (i = eP.find((t) => t.locale === e)),
                                    { locale: e, label: null != (t = null == i ? void 0 : i.label) ? t : e, messages: Y(Y({}, ex), null == i ? void 0 : i.messages) }
                                );
                            }, [c]));
                    return (
                        P.useLayoutEffect(() => {
                            let e = f.current;
                            e && (y.isDarkMode ? e.classList.add(eD) : e.classList.remove(eD));
                        }, [y.isDarkMode]),
                        P.useEffect(() => {
                            let e = !1,
                                t = !1,
                                i = f.current;
                            if (!i) return;
                            let s = (s) => {
                                    " " !== s.key || t || ((t = !0), e ? i.setAttribute("style", "cursor: grabbing !important") : i.setAttribute("style", "cursor: grab !important"));
                                },
                                n = (e) => {
                                    " " === e.key && ((t = !1), i.setAttribute("style", "cursor: initial"));
                                },
                                a = (s) => {
                                    (e = !0), 1 === s.button && i.setAttribute("style", "cursor: grabbing !important"), 0 === s.button && t && i.setAttribute("style", "cursor: grabbing !important");
                                },
                                o = () => {
                                    (e = !1), t ? i.setAttribute("style", "cursor: grab !important") : i.setAttribute("style", "cursor: initial");
                                };
                            return (
                                i.addEventListener("keydown", s),
                                i.addEventListener("keyup", n),
                                i.addEventListener("pointerdown", a),
                                i.addEventListener("pointerup", o),
                                () => {
                                    i.removeEventListener("keydown", s), i.removeEventListener("keyup", n), i.removeEventListener("pointerdown", a), i.removeEventListener("pointerup", o);
                                }
                            );
                        }, [f.current]),
                        P.createElement(
                            eB.Provider,
                            { value: f },
                            P.createElement(
                                E.Z,
                                { locale: Q.locale, messages: Q.messages },
                                P.createElement(
                                    sz,
                                    { ref: f, tabIndex: -0 },
                                    P.createElement(eA, null),
                                    P.createElement(sE, { focusableRef: f, autofocus: t }),
                                    P.createElement(
                                        sB,
                                        { FallbackComponent: P.createElement("span", null) },
                                        P.createElement(x.Th, {
                                            id: e,
                                            containerRef: f,
                                            shapeUtils: iH,
                                            page: w,
                                            pageState: B,
                                            assets: C,
                                            snapLines: S.snapLines,
                                            eraseLine: S.eraseLine,
                                            grid: 8,
                                            users: null == I ? void 0 : I.users,
                                            userId: null == I ? void 0 : I.userId,
                                            theme: T,
                                            meta: j,
                                            hideBounds: F,
                                            hideHandles: L,
                                            hideResizeHandles: D,
                                            hideIndicators: R,
                                            hideBindingHandles: !y.showBindingHandles,
                                            hideCloneHandles: H,
                                            hideRotateHandles: !y.showRotateHandles,
                                            hideGrid: !y.showGrid,
                                            showDashedBrush: A,
                                            performanceMode: null == (p = u.session) ? void 0 : p.performanceMode,
                                            onPinchStart: u.onPinchStart,
                                            onPinchEnd: u.onPinchEnd,
                                            onPinch: u.onPinch,
                                            onPan: u.onPan,
                                            onZoom: u.onZoom,
                                            onPointerDown: u.onPointerDown,
                                            onPointerMove: u.onPointerMove,
                                            onPointerUp: u.onPointerUp,
                                            onPointCanvas: u.onPointCanvas,
                                            onDoubleClickCanvas: u.onDoubleClickCanvas,
                                            onRightPointCanvas: u.onRightPointCanvas,
                                            onDragCanvas: u.onDragCanvas,
                                            onReleaseCanvas: u.onReleaseCanvas,
                                            onPointShape: u.onPointShape,
                                            onDoubleClickShape: u.onDoubleClickShape,
                                            onRightPointShape: u.onRightPointShape,
                                            onDragShape: u.onDragShape,
                                            onHoverShape: u.onHoverShape,
                                            onUnhoverShape: u.onUnhoverShape,
                                            onReleaseShape: u.onReleaseShape,
                                            onPointBounds: u.onPointBounds,
                                            onDoubleClickBounds: u.onDoubleClickBounds,
                                            onRightPointBounds: u.onRightPointBounds,
                                            onDragBounds: u.onDragBounds,
                                            onHoverBounds: u.onHoverBounds,
                                            onUnhoverBounds: u.onUnhoverBounds,
                                            onReleaseBounds: u.onReleaseBounds,
                                            onPointBoundsHandle: u.onPointBoundsHandle,
                                            onDoubleClickBoundsHandle: u.onDoubleClickBoundsHandle,
                                            onRightPointBoundsHandle: u.onRightPointBoundsHandle,
                                            onDragBoundsHandle: u.onDragBoundsHandle,
                                            onHoverBoundsHandle: u.onHoverBoundsHandle,
                                            onUnhoverBoundsHandle: u.onUnhoverBoundsHandle,
                                            onReleaseBoundsHandle: u.onReleaseBoundsHandle,
                                            onPointHandle: u.onPointHandle,
                                            onDoubleClickHandle: u.onDoubleClickHandle,
                                            onRightPointHandle: u.onRightPointHandle,
                                            onDragHandle: u.onDragHandle,
                                            onHoverHandle: u.onHoverHandle,
                                            onUnhoverHandle: u.onUnhoverHandle,
                                            onReleaseHandle: u.onReleaseHandle,
                                            onError: u.onError,
                                            onRenderCountChange: u.onRenderCountChange,
                                            onShapeChange: u.onShapeChange,
                                            onShapeBlur: u.onShapeBlur,
                                            onShapeClone: u.onShapeClone,
                                            onBoundsChange: u.updateBounds,
                                            onKeyDown: u.onKeyDown,
                                            onKeyUp: u.onKeyUp,
                                            onDragOver: u.onDragOver,
                                            onDrop: u.onDrop,
                                        })
                                    )
                                )
                            )
                        )
                    );
                }),
                sE = P.memo(function ({ focusableRef: e, autofocus: t }) {
                    return (
                        (function (e) {
                            let t = ew(),
                                i = P.useCallback(
                                    (i = !1) => {
                                        let s = e.current;
                                        return (!!i && (!!t.isMenuOpen || !!t.settings.keepStyleMenuOpen)) || (null == s || s.focus(), s && (document.activeElement === s || s.contains(document.activeElement)));
                                    },
                                    [e]
                                );
                            P.useEffect(() => {
                                if (!t) return;
                                let e = (e) => {
                                        if (i(!0)) {
                                            if (t.readOnly) {
                                                t.copy(void 0, e);
                                                return;
                                            }
                                            t.cut(void 0, e);
                                        }
                                    },
                                    s = (e) => {
                                        i(!0) && t.copy(void 0, e);
                                    },
                                    n = (e) => {
                                        !i(!0) || t.readOnly || t.paste(void 0, e);
                                    };
                                return (
                                    document.addEventListener("cut", e),
                                    document.addEventListener("copy", s),
                                    document.addEventListener("paste", n),
                                    () => {
                                        document.removeEventListener("cut", e), document.removeEventListener("copy", s), document.removeEventListener("paste", n);
                                    }
                                );
                            }, [t]),
                                (0, M.y1)(
                                    "v,1",
                                    () => {
                                        i(!0) && t.selectTool("select");
                                    },
                                    [t, e.current]
                                ),
                                (0, M.y1)(
                                    "d,p,2",
                                    () => {
                                        i(!0) && t.selectTool("draw");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "e,3",
                                    () => {
                                        i(!0) && t.selectTool("erase");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "r,4",
                                    () => {
                                        i(!0) && t.selectTool("rectangle");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "o,5",
                                    () => {
                                        i(!0) && t.selectTool("ellipse");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "g,6",
                                    () => {
                                        i() && t.selectTool("triangle");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "l,7",
                                    () => {
                                        i(!0) && t.selectTool("line");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "a,8",
                                    () => {
                                        i(!0) && t.selectTool("arrow");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "t,9",
                                    () => {
                                        i(!0) && t.selectTool("text");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "s,0",
                                    () => {
                                        i(!0) && t.selectTool("sticky");
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+shift+d,⌘+shift+d",
                                    (e) => {
                                        i(!0) && (t.toggleDarkMode(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+.,⌘+.",
                                    () => {
                                        i(!0) && t.toggleFocusMode();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+shift+g,⌘+shift+g",
                                    () => {
                                        i(!0) && t.toggleGrid();
                                    },
                                    void 0,
                                    [t]
                                );
                            let { onNewProject: s, onOpenProject: n, onSaveProject: a, onSaveProjectAs: o, onOpenMedia: r } = (function () {
                                let e = ew(),
                                    { openDialog: t } = eE();
                                return {
                                    onNewProject: P.useCallback(
                                        (i) =>
                                            q(this, null, function* () {
                                                var s, n;
                                                i && e.callbacks.onOpenProject && i.preventDefault(), null == (n = (s = e.callbacks).onNewProject) || n.call(s, e, t);
                                            }),
                                        [e, t]
                                    ),
                                    onSaveProject: P.useCallback(
                                        (t) => {
                                            var i, s;
                                            t && e.callbacks.onOpenProject && t.preventDefault(), null == (s = (i = e.callbacks).onSaveProject) || s.call(i, e);
                                        },
                                        [e]
                                    ),
                                    onSaveProjectAs: P.useCallback(
                                        (t) => {
                                            var i, s;
                                            t && e.callbacks.onOpenProject && t.preventDefault(), null == (s = (i = e.callbacks).onSaveProjectAs) || s.call(i, e);
                                        },
                                        [e]
                                    ),
                                    onOpenProject: P.useCallback(
                                        (i) =>
                                            q(this, null, function* () {
                                                var s, n;
                                                i && e.callbacks.onOpenProject && i.preventDefault(), null == (n = (s = e.callbacks).onOpenProject) || n.call(s, e, t);
                                            }),
                                        [e, t]
                                    ),
                                    onOpenMedia: P.useCallback(
                                        (t) =>
                                            q(this, null, function* () {
                                                var i, s;
                                                t && e.callbacks.onOpenMedia && t.preventDefault(), null == (s = (i = e.callbacks).onOpenMedia) || s.call(i, e);
                                            }),
                                        [e]
                                    ),
                                };
                            })();
                            (0, M.y1)(
                                "ctrl+n,⌘+n",
                                (e) => {
                                    e.preventDefault(), i() && s(e);
                                },
                                void 0,
                                [t]
                            ),
                                (0, M.y1)(
                                    "ctrl+s,⌘+s",
                                    (e) => {
                                        i() && a(e);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+shift+s,⌘+shift+s",
                                    (e) => {
                                        i() && o(e);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+o,⌘+o",
                                    (e) => {
                                        i() && n(e);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+u,⌘+u",
                                    (e) => {
                                        i() && r(e);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "⌘+z,ctrl+z",
                                    (e) => {
                                        e.preventDefault(), i(!0) && (t.session ? t.cancelSession() : t.undo());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+shift+z,⌘+shift+z",
                                    () => {
                                        i(!0) && (t.session ? t.cancelSession() : t.redo());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "⌘+u,ctrl+u",
                                    () => {
                                        i() && t.undoSelect();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+shift-u,⌘+shift+u",
                                    () => {
                                        i() && t.redoSelect();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+=,⌘+=,ctrl+num_add,⌘+num_add",
                                    (e) => {
                                        i(!0) && (t.zoomIn(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+-,⌘+-,ctrl+num_subtract,⌘+num_subtract",
                                    (e) => {
                                        i(!0) && (t.zoomOut(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+0,ctrl+numpad_0,⌘+numpad_0",
                                    () => {
                                        i(!0) && t.resetZoom();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+1",
                                    () => {
                                        i(!0) && t.zoomToFit();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+2",
                                    () => {
                                        i(!0) && t.zoomToSelection();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+d,⌘+d",
                                    (e) => {
                                        i() && (t.duplicate(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+h",
                                    () => {
                                        i(!0) && t.flipHorizontal();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+v",
                                    () => {
                                        i(!0) && t.flipVertical();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "escape",
                                    () => {
                                        i(!0) && t.cancel();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "backspace,del",
                                    () => {
                                        i() && t.delete();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "⌘+a,ctrl+a",
                                    () => {
                                        i(!0) && t.selectAll();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "up",
                                    () => {
                                        i() && t.nudge([0, -1], !1);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "right",
                                    () => {
                                        i() && t.nudge([1, 0], !1);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "down",
                                    () => {
                                        i() && t.nudge([0, 1], !1);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "left",
                                    () => {
                                        i() && t.nudge([-1, 0], !1);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+up",
                                    () => {
                                        i() && t.nudge([0, -1], !0);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+right",
                                    () => {
                                        i() && t.nudge([1, 0], !0);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+down",
                                    () => {
                                        i() && t.nudge([0, 1], !0);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+left",
                                    () => {
                                        i() && t.nudge([-1, 0], !0);
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "⌘+shift+l,ctrl+shift+l",
                                    () => {
                                        i() && t.toggleLocked();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "⌘+shift+c,ctrl+shift+c",
                                    (e) => {
                                        i() && (t.copySvg(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "⌘+g,ctrl+g",
                                    (e) => {
                                        i() && (t.group(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "⌘+shift+g,ctrl+shift+g",
                                    (e) => {
                                        i() && (t.ungroup(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "[",
                                    () => {
                                        i(!0) && t.moveBackward();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "]",
                                    () => {
                                        i(!0) && t.moveForward();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+[",
                                    () => {
                                        i(!0) && t.moveToBack();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "shift+]",
                                    () => {
                                        i(!0) && t.moveToFront();
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "ctrl+shift+backspace,⌘+shift+backspace",
                                    (e) => {
                                        i() && (t.settings.isDebugMode && t.resetDocument(), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "alt+command+l,alt+ctrl+l",
                                    (e) => {
                                        i(!0) && (t.style({ textAlign: "start" }), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "alt+command+t,alt+ctrl+t",
                                    (e) => {
                                        i(!0) && (t.style({ textAlign: "middle" }), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                ),
                                (0, M.y1)(
                                    "alt+command+r,alt+ctrl+r",
                                    (e) => {
                                        i(!0) && (t.style({ textAlign: "end" }), e.preventDefault());
                                    },
                                    void 0,
                                    [t]
                                );
                        })(e),
                        P.useLayoutEffect(() => {
                            if (ey.get(eS)) return;
                            let e = document.createElement("style");
                            return (
                                (e.innerHTML = eI),
                                e.setAttribute("id", eS),
                                document.head.appendChild(e),
                                ey.set(eS, e),
                                () => {
                                    e && document.head.contains(e) && (document.head.removeChild(e), ey.delete(eS));
                                }
                            );
                        }, []),
                        P.useEffect(() => {
                            var i;
                            t && (null == (i = e.current) || i.focus());
                        }, [t]),
                        null
                    );
                }),
                sz = ez("div", {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    minHeight: 0,
                    minWidth: 0,
                    maxHeight: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    boxSizing: "border-box",
                    outline: "none",
                    "& .tl-container": { position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 1 },
                    "& input, textarea, button, select, label, button": { webkitTouchCallout: "none", webkitUserSelect: "none", "-webkit-tap-highlight-color": "transparent", "tap-highlight-color": "transparent" },
                });
            ez("div", {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                padding: "8px 8px 0 8px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                pointerEvents: "none",
                zIndex: 2,
                "& > *": { pointerEvents: "all" },
            }),
                ez("div", { flexGrow: 2 });
        },
    },
]);
//# sourceMappingURL=b13ba9de-11ef9f2e07c3e310.js.map
