function Mouse(e) {
    (this.default = {
        mouse: "cirle",
        color: "#ffda79",
        mouseHover: !1,
        mousePointer: !1,
        el: "a",
        el_hover: !0,
        mouse_clicked: !0,
        clrChanged: !1,
    }),
        (this.options = Object.assign(this.default, e)),
        (this.mouse = function () {
            let t = document.createElement("span");
            t.classList.add("mouse"),
                document.body.appendChild(t),
                document.addEventListener("mousemove", function (e) {
                    (t.style.display = "flex"),
                        (t.style.left = `${e.pageX}px`),
                        (t.style.top = `${e.pageY}px`);
                }),
                document.addEventListener("mouseout", function () {
                    t.style.display = "none";
                }),
                (t.style.display = "none"),
                this.mouseType(),
                this.pointer(),
                this.color(),
                this.mouseElHover(),
                this.mouseClicked(),
                this.mouseFilterColor();
        }),
        (this.mouseType = function () {
            let e = document.querySelector(".mouse");
            var t;
            "defult" == (t = this.options.mouse)
                ? (e.classList.add("defult"),
                    e.classList.remove("cirle"),
                    e.classList.remove("point"))
                : "cirle" == t
                    ? (e.classList.add("cirle"),
                        e.classList.remove("defult"),
                        e.classList.remove("point"))
                    : "point" == t
                        ? (e.classList.add("point"),
                            e.classList.remove("defult"),
                            e.classList.remove("cirle"))
                        : (e.classList.add("defult"),
                            e.classList.remove("cirle"),
                            e.classList.remove("point"));
        }),
        (this.pointer = function () {
            let e = document.querySelector("html");
            0 == this.options.mousePointer
                ? (e.style.cursor = "none")
                : (e.style.cursor = "default");
        }),
        (this.color = function () {
            let e = document.querySelector(":root");
            var t = this.options.color;
            e.style.setProperty("--bg", t);
        }),
        (this.mouseElHover = function () {
            var e = document.querySelector(".mouse");
            creatMouse = e;
            let t = document.querySelectorAll(this.options.el);
            var s,
                o,
                i = this.options.mouseHover,
                e = this.options.el_hover;
            (s = i),
                (o = e),
                t.forEach((t) => {
                    var e;
                    1 == (e = o) &&
                        ((o = !0),
                            t.addEventListener("mousemove", function (e) {
                                e.target == t && creatMouse.classList.add("mouse-hover");
                            }),
                            t.addEventListener("mouseover", function (e) {
                                "border" == s
                                    ? (e.target.classList.add("mouse-border"), creatMouse.remove())
                                    : "background" == s &&
                                    (e.target.classList.add("mouse-bg"), creatMouse.remove());
                            }),
                            t.addEventListener("mouseout", function (e) {
                                document.body.appendChild(creatMouse),
                                    creatMouse.classList.remove("mouse-hover"),
                                    (e.target.style = "none"),
                                    e.target.classList.remove("mouse-border"),
                                    e.target.classList.remove("mouse-bg");
                            })),
                        0 == e &&
                        ((o = !1),
                            t.addEventListener("mousemove", function (e) {
                                e.target == t && creatMouse.classList.remove("mouse-hover");
                            }));
                });
        }),
        (this.mouseClicked = function () {
            let t = document.createElement("span");
            function e(e) {
                1 == e &&
                    (document.body.appendChild(t),
                        (t.style.display = "none"),
                        document.addEventListener("click", function (e) {
                            (t.style.display = "block"),
                                (t.style.top = `${e.pageY}px`),
                                (t.style.left = `${e.pageX}px`),
                                t.addEventListener("animationend", function () {
                                    t.style.display = "none";
                                });
                        })),
                    0 == e && (t.remove(), (t.style.display = "none"));
            }
            (t.className = "mouse-clicked"),
                1 == this.options.mouse_clicked && e(!0),
                0 == this.options.mouse_clicked && e(!1);
        }),
        (this.mouseFilterColor = function () {
            var e = document.querySelector(".mouse");
            creatMouse = e;
            this.options.clrChanged;
            function t(e) {
                let t = 0,
                    s;
                1 == e &&
                    (s = setInterval(
                        function (e) {
                            0 == e &&
                                (clearInterval(s), (t = 0), (creatMouse.style.filter = "none"));
                            1 == e &&
                                (t++,
                                    360 <= t
                                        ? (t = 0)
                                        : (creatMouse.style.filter = `hue-rotate(${t}deg)`));
                        },
                        50,
                        !0
                    )),
                    0 == e && clearInterval(s);
            }
            1 == this.options.clrChanged && t(!0),
                0 == this.options.clrChanged && t(!1);
        });
}
