---
title: UCLA Trash Breakdown
teaser: See how students sort trash and test your trash-sorting skills with a game
authors:
  - andrew_kan
key_takeaways:
  - In non-dining buildings, around 30% of trash by weight is placed in the landfill bin, 30% in the recycling bin, and 40% in the compost bin.
  - In the dining halls, 70-90% of food waste is still edible.
  - UCLA students have a similar trash composition to the average American.
featured_image:
  url: waste-audits/game.png
og_image: waste-audits/game.png
stylesheets:
  - /css/posts/waste-audits/app.css
  - https://waste-bin-interactive.herokuapp.com/static/style.css
  - https://waste-bin-interactive.herokuapp.com/static/css/main.1c22b5ee.chunk.css
scripts:
  - //code.jquery.com/jquery-1.11.2.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/form.min.js
  - /js/posts/waste-audits/audits.js
  - https://waste-bin-interactive.herokuapp.com/static/js/2.0fc3e1c0.chunk.js
  - https://waste-bin-interactive.herokuapp.com/static/js/main.a2e2e6f7.chunk.js
---

<script src="https://d3js.org/d3.v3.min.js"></script>

<p class="text">
  Walking around campus, one can spot the iconic trio of landfill, recycling, and compost bins nearly everywhere. Recycling and composting are more eco-friendly than throwing everything into landfill, but do students actually use these bins? The Daily Bruin investigates how students sort their trash into these bins on campus and the Hill.
</p>

<p class="text" id="interactive-introduction">
  First try testing your trash-sorting skills with the interactive game below. Simply drag the waste items into the correct waste bin until all the items have been sorted. Compare your score with others when you are done.
</p>

<br />

<div id="interactive">
  <br />
<div id="item-container">
    <div class="item-item" id="item0"></div>
    <div class="item-item" id="item1"></div>
    <div class="item-item" id="item2"></div>
    <div class="item-item" id="item3"></div>
    <div class="item-item" id="item4"></div>
    <div class="item-item" id="item5"></div>
    <div class="item-item" id="item6"></div>
    <div class="item-item" id="item7"></div>
    <div class="item-item" id="item8"></div>
    <div class="item-item" id="item9"></div>
    <div class="item-item" id="item10"></div>
    <div class="item-item" id="item11"></div>
  </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br class="hidden-br" /><br class="hidden-br" /><br
    class="hidden-br" /><br class="hidden-br" /><br class="hidden-br" /><br class="hidden-mobile-br" /><br
    class="hidden-mobile-br" /><br class="hidden-mobile-br" /><br class="hidden-mobile-br" /><br
    class="hidden-hidden-br" /><br class="hidden-hidden-br" /><br class="hidden-hidden-br" /><br
    class="hidden-hidden-br" /><br class="hidden-hidden-br" /><br class="hidden-hidden-br" /><br
    class="hidden-hidden-br" /><br class="hidden-hidden-br" /><br class="hidden-hidden-br" /><br
    class="hidden-hidden-hidden-br" /><br class="hidden-hidden-hidden-br" /><br class="hidden-hidden-hidden-br" /><br
    class="hidden-hidden-hidden-br" /><br class="hidden-hidden-hidden-br" />
  <div class="bin">
    <div id="recyclingbin" class="bin-item bin-one">
      <h3 style="text-align:center;color:#00008b">Recycling</h3><img class="bin-img" src="https://waste-bin-interactive.herokuapp.com/static/images/recyclingbin.png" />
      <div id="bin1"></div>
    </div>
    <div id="compostbin" class="bin-item bin-two">
      <h3 style="text-align:center;color:#006400">Compost</h3><img class="bin-img" src="https://waste-bin-interactive.herokuapp.com/static/images/compostbin.png" />
      <div id="bin2"></div>
    </div>
    <div id="landfillbin" class="bin-item bin-three">
      <h3 style="text-align:center">Landfill</h3><img class="bin-img" src="https://waste-bin-interactive.herokuapp.com/static/images/landfillbin.png" />
      <div id="bin3"></div>
    </div>
  </div><br /><br />
  <script>
    ! function (l) {
      function e(e) {
        for (var r, t, n = e[0], o = e[1], u = e[2], f = 0, i = []; f < n.length; f++) t = n[f], p[t] && i.push(p[t][
          0]), p[t] = 0;
        for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (l[r] = o[r]);
        for (s && s(e); i.length;) i.shift()();
        return c.push.apply(c, u || []), a()
      }

      function a() {
        for (var e, r = 0; r < c.length; r++) {
          for (var t = c[r], n = !0, o = 1; o < t.length; o++) {
            var u = t[o];
            0 !== p[u] && (n = !1)
          }
          n && (c.splice(r--, 1), e = f(f.s = t[0]))
        }
        return e
      }
      var t = {},
        p = {
          1: 0
        },
        c = [];

      function f(e) {
        if (t[e]) return t[e].exports;
        var r = t[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return l[e].call(r.exports, r, r.exports, f), r.l = !0, r.exports
      }
      f.m = l, f.c = t, f.d = function (e, r, t) {
        f.o(e, r) || Object.defineProperty(e, r, {
          enumerable: !0,
          get: t
        })
      }, f.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, f.t = function (r, e) {
        if (1 & e && (r = f(r)), 8 & e) return r;
        if (4 & e && "object" == typeof r && r && r.__esModule) return r;
        var t = Object.create(null);
        if (f.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: r
          }), 2 & e && "string" != typeof r)
          for (var n in r) f.d(t, n, function (e) {
            return r[e]
          }.bind(null, n));
        return t
      }, f.n = function (e) {
        var r = e && e.__esModule ? function () {
          return e.default
        } : function () {
          return e
        };
        return f.d(r, "a", r), r
      }, f.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
      }, f.p = "/";
      var r = window.webpackJsonp = window.webpackJsonp || [],
        n = r.push.bind(r);
      r.push = e, r = r.slice();
      for (var o = 0; o < r.length; o++) e(r[o]);
      var s = n;
      a()
    }([])

  </script>
</div>

<br />

#### Data Collection

<p>The following data was obtained from Campus Facilities Management. All trash audits conducted to gather this data were conducted within the past 2018-19 school year by either Campus Facilities or student organizations.</p>

 <div id="title">
    <p style="font-size: 36px; text-align: center">UCLA Waste Bin Breakdown (% by weight)</p>
  </div>
  <div id="dropdown-menu"></div>
  <div class="graph-container">
    <div id="landfillGraph"></div>
    <div id="recyclingGraph"></div>
    <div id="compostGraph"></div>
  </div>

#### Dining Halls

  <p className="text">Nearly 70% of food waste is still edible at both Covel and De Neve. Feast-goers waste even more food; 90% of Feast's food waste is edible. These statistics are comparable to the food waste of the average American. According to a <a href="https://www.nrdc.org/sites/default/files/food-waste-city-level-report.pdf">2017 Natural Resources Defense Council report</a>, the average American’s food waste is 68% edible.</p>

 <!--  <p>(Insert picture of zero food waste initiative here)</p> -->

#### The Hill

<p className="text">Adding a recycling and compost bin in the Hill dorms has helped redirect waste on the hill. In Hedrick Hall, 78% of waste from the lounges is recycled or composted, and 64% of waste from the bathrooms is composted. Trash from students’ rooms, however, is 100% landfill. Compost and recycling bins have since been added to certain dorms. According to Facilities Management data, if all the trash was recycled and composted correctly, up to 83% of trash in Hedrick Hall rooms and 90% of trash in Hedrick Hall bathrooms and lounges could be diverted from landfills. Similarly to the dining halls, trash breakdown percentages on the Hill are around the same as the rest of America. According to a <a href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/national-overview-facts-and-figures-materials">2018 EPA report</a>, 52.5% of U.S. trash was sent to landfill, 25.8% was recycled, 8.9% was composted, and 12.8% was combusted in 2015.
  </p>

  <!-- <p>(insert picture of bins in lounge here)</p> -->

#### On-Campus

  <p className="text">Powell Library sends much less trash to landfill than the Hill. It’s trash is only 14% landfill by weight, compared to 30% from the Hill. This may be because the students have less landfill trash, such as cardboard or plastic wrapping, to throw away on campus. Nevertheless, the data shows that students are using the recycling and compost bins.
  </p>

  <!-- <p>(insert picture of bins that tell you what to place your trash in here)</p> -->

#### Conclusion

  <p className="text">UCLA students are about as good at sorting their trash as the average American. However, Americans (and probably UCLA students) are also recycling and composting more than twice as much compared to the 1990s according to the aforementioned EPA report.
</p>
