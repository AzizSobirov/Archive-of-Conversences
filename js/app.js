let footer = document.querySelector(".footer");
footer.innerHTML = `
<div class="container">
          <div class="row">
            <div class="col-md-2" role="complementary">
              <a href="/">
                <img
                  class="img-responsive"
                  alt="About this Publishing System"
                  src="../img/ojs_brand.png"
                />
              </a>
            </div>
          </div>
        </div>   
`;

let nav = document.getElementById("accessibility-nav");
nav.innerHTML = `
        <ul>
          <li><a href="#main-navigation">Main Navigation</a></li>
          <li><a href="#main-content">Main Content</a></li>
          <li><a href="#sidebar">Sidebar</a></li>
        </ul>
`;

let aside = document.getElementById("sidebar");
aside.innerHTML = `
<div class="pkp_block block_web_feed">
<span class="title">Current Issue</span>
<div class="content">
  <ul>
    <li>
      <a
        href="/index.php/aoc/gateway/plugin/WebFeedGatewayPlugin/atom"
      >
        <img src="../img/atom.svg" alt="Atom logo" />
      </a>
    </li>
    <li>
      <a
        href="/index.php/aoc/gateway/plugin/WebFeedGatewayPlugin/rss2"
      >
        <img src="../img/rss20_logo.svg" alt="RSS2 logo" />
      </a>
    </li>
    <li>
      <a
        href="/index.php/aoc/gateway/plugin/WebFeedGatewayPlugin/rss"
      >
        <img src="../img/rss10_logo.svg" alt="RSS1 logo" />
      </a>
    </li>
  </ul>
</div>
</div>
<div class="pkp_block block_custom" id="customblock-Indexed">
<div class="content">
  <p>
    <a
      href="https://scholar.google.co.in/citations?hl=en&amp;view_op=list_works&amp;authuser=1&amp;gmla=AJsN-F61hAxwP5Pl1Sw_MItM-0VnnJYrm36dPABcDMxAEsA4YPIy4Jns7ty2dc91_97uoLKl2OXEmdK-2c9fUuZZEsgN1JJRQVnJlE-mkvwIUy616KQlGirzcIqu5jxf2uFGrRh_bKDN&amp;user=evQqAfsAAAAJ"
      ><img
        src="/img/google-scholar-logo.png"
        alt=""
        width="295"
        height="113"
    /></a>
  </p>
</div>
</div>
<div class="pkp_block block_browse">
<h2 class="title">Browse</h2>

<nav class="content" role="navigation" aria-label="Browse">
  <ul></ul>
</nav>
</div>
<!-- .block_browse -->
<div class="pkp_block block_make_submission">
<h2 class="pkp_screen_reader">Make a Submission</h2>

<div class="content">
  <a class="block_make_submission_link" href="../pages/submissions.html">
    Make a Submission
  </a>
</div>
</div>
<div class="pkp_block block_information">
<span class="title">Information</span>
<div class="content">
  <ul>
    <li>
      <a href="../pages/for-readers.html"> For Readers </a>
    </li>
    <li>
      <a href="../pages/for-authors.html"> For Authors </a>
    </li>
    <li>
      <a href="../pages/for-librarians.html"> For Librarians </a>
    </li>
  </ul>
</div>
</div>
<div class="pkp_block block_developed_by">
<div class="content">
  <a href="http://pkp.sfu.ca/ojs/"> Open Journal Systems </a>
</div>
</div>

<div class="pkp_block block_Keywordcloud">
<span class="title">Keywords</span>
<div class="content" id="wordcloud"></div>
</div>
`;
function randomColor() {
  var cores = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
  ];
  return cores[Math.floor(Math.random() * cores.length)];
}

document.addEventListener("DOMContentLoaded", function () {
  var keywords = [
    { text: "education", size: 29 },
    { text: "development", size: 25 },
    { text: "culture", size: 22 },
    { text: "Education", size: 19 },
    { text: "language", size: 18 },
    { text: "Uzbekistan", size: 15 },
    { text: "science", size: 15 },
    { text: "technology", size: 15 },
    { text: "economic", size: 13 },
    { text: "communication", size: 13 },
    { text: "youth", size: 12 },
    { text: "students", size: 12 },
    { text: "method", size: 12 },
    { text: "Innovation", size: 11 },
    { text: "linguistics", size: 11 },
    { text: "activity", size: 11 },
    { text: "competence", size: 9 },
    { text: "information", size: 9 },
    { text: "society", size: 9 },
    { text: "knowledge", size: 9 },
    { text: "student", size: 8 },
    { text: "transformation", size: 8 },
    { text: "pedagogy", size: 8 },
    { text: "upbringing", size: 8 },
    { text: "methodology", size: 7 },
    { text: "Technology", size: 7 },
    { text: "independence", size: 7 },
    { text: "country", size: 7 },
    { text: "creativity", size: 7 },
    { text: "patriotism", size: 7 },
    { text: "thinking", size: 6 },
    { text: "methods", size: 6 },
    { text: "terminology", size: 6 },
    { text: "damage", size: 6 },
    { text: "children", size: 6 },
    { text: "information technology", size: 6 },
    { text: "history", size: 6 },
    { text: "traditions", size: 6 },
    { text: "English", size: 6 },
    { text: "Competence", size: 6 },
    { text: "spirituality", size: 6 },
    { text: "family", size: 6 },
    { text: "Republic", size: 6 },
    { text: "school", size: 6 },
    { text: "innovation", size: 6 },
    { text: "Family", size: 5 },
    { text: "technologies", size: 5 },
    { text: "heritage", size: 5 },
    { text: "educational process", size: 5 },
    { text: "languages", size: 5 },
  ];
  var pesoTotal = 0;

  keywords.forEach(function (item, index) {
    pesoTotal += item.size;
  });

  var svg = d3
    .select("#wordcloud")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  var width = document.getElementById("wordcloud").clientWidth;
  var height = document.getElementById("wordcloud").clientHeight;

  var layout = d3.layout
    .cloud()
    .size([width, height])
    .words(keywords)
    .padding(2)
    .fontSize(function (d) {
      var minimo = 0.1 * height,
        maximo = 0.3 * height;
      var peso = (d.size / pesoTotal) * height;

      if (peso < minimo) return minimo;
      if (peso > maximo) return maximo;
      return peso;
    })
    .on("end", draw);

  function draw(words) {
    svg
      .append("g")
      .attr(
        "transform",
        "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
      )
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", function (d) {
        return d.size + "px";
      })
      .style("fill", randomColor)
      .style("cursor", "pointer")
      .attr("class", "keyword")
      .attr("text-anchor", "middle")
      .attr("transform", function (d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function (d) {
        return d.text;
      })
      .on("click", function (d, i) {
        window.location = "/search?query=QUERY_SLUG".replace(
          /QUERY_SLUG/,
          encodeURIComponent("" + d.text + "")
        );
      })
      .on("mouseover", function (d, i) {
        d3.select(this)
          .transition()
          .style("font-size", function (d) {
            return 1.25 * d.size + "px";
          });
      })
      .on("mouseout", function (d, i) {
        d3.select(this)
          .transition()
          .style("font-size", function (d) {
            return d.size + "px";
          });
      });
  }

  layout.start();
});

let header = document.getElementById("headerNavigationContainer");
header.innerHTML = `

        <div class="container-fluid">
          <div class="row">
            <nav aria-label="User Navigation">
              <ul id="navigationUser" class="nav nav-pills tab-list pull-right">
                <li class="">
                  <a href="/pages/login.html"> Login </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- .row -->
        </div>
        <!-- .container-fluid -->

        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#nav-menu"
              aria-expanded="false"
              aria-controls="nav-menu"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <h1 class="site-name">
              <a
                href="/"
                class="navbar-brand"
                >Archive of Conferences</a
              >
            </h1>
          </div>

          <nav
            id="nav-menu"
            class="navbar-collapse collapse"
            aria-label="Site Navigation"
            aria-expanded="false"
            style="height: 1px"
          >
            <ul id="main-navigation" class="nav navbar-nav">
              <li class="">
                <a href="/"> Current </a>
              </li>
              <li class="">
                <a href="/pages/archives.html"> Archives </a>
              </li>
              <li class="">
                <a href="/pages/call-for-papers.html"> Call for Papers </a>
              </li>
              <li class="dropdown">
              <a href="#" class="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About
              <span class="caret"></span>
            </a>
          
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li class="dropdown-item">
                    <a href="/pages/submissions.html"> Submissions </a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/pages/contact.html"> Contact </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="pull-md-right">
              <form
                class="navbar-form navbar-left"
                role="search"
                method="post"
                action="/index.php/aoc/search/search"
              >
                <div class="form-group">
                  <input
                    class="form-control"
                    name="query"
                    value=""
                    type="text"
                    aria-label="Search Query"
                    placeholder=""
                  />
                </div>
                <button type="submit" class="btn btn-default">Search</button>
              </form>
            </div>
          </nav>
        </div>
`;
