---
index: true
---

<div class="hero__container">
  <h1 style="margin: 0 auto">Justice-Centered Data Design in TPC</h1>
  <h2>Data. People in power maintain the refrain that it's BIGness solves all of our problems.<br>But, does it? Whose problems are being solved<br>and for whose benefit?</h2>
</div>

## Course Description

**How can technical and professional communicators advocate for justice-centered, anti-oppressive designs and uses of data?**

In *ENG 498/583 Justice-Centered Data Design in TPC*, we will interrogate how technical and professional communication (TPC) can influence, and are already influenced by, the design of data. We will learn theories of intersectionality, anti-oppressive perspectives and cases, and data-driven techniques as a response to recognizing how data is a key set of communication design practices for TPC to learn and wield for just structural change.

Data design is TPC because it is highly concerned with people (audience), goals (purpose), and technologies. TPC professionals have much to offer the necessary advocacy work needed in data-driven workplaces across industry, government, and nonprofit sectors. Yet, traditionally, our field has yet to standardize learning fundamental data-driven techniques that will better position us to make a difference in the workplace and in shaping policy and procedures.

## Learning Objectives

Due to the situation described above, we will achieve the following learning objectives, so TPC is better prepared to actively and confidently advocate for those who are not represented, misrepresented, and actively being harmed by data-driven science, engineering, and business strategies:

1. Explain theories of intersectionality in relation to data and empiricism;
2. Demonstrate foundational statistical analysis techniques through applied anti-oppressive cases;
3. Apply intersectionality to develop a strong hypothesis to test, report the results, and explain the study's constraints with an anti-oppresive, structural perspective.
4. Learn foundational coding, data, and visualization techniques using the JavaScript-based Observable Framework.

We will learn and apply integral theories about data and power via accompanying case studies and hands-on tutorials to help you learn fundamental approaches to finding, collecting, analyzing, and reporting data-driven stories about opaque social-technical systems.

The fields we'll draw from include technical communication, statistics and social science, and other branches of information sciences.

## Course Assumptions

### Don't code?

Not a problem! This course assumes you know nothing, emphasizes underlying principles, and uses plain-language ("pseudocode") explanations to accompany your learning of applying code.

### Don't know statistics?

Also not a problem! This course assumes you know nothing and walks through the fundamentals of data collection, processing, and analysis techniques through applied cases and reflections.

## Major Assignments

### Applied Lessons (xx%)

- **Due**: Weekly
- **Individual or Group**: Individual
- **Deliverable**: Completed activity in Observable textbook.
- **Points**: xx-xx per activity

**Description**: Enter description.

### Participation (xx%)

- **Due**: Midterm &amp; Final
- **Individual or Group**: Individual
- **Deliverable**: Reflective memo
- **Points**: xx per memo

**Description**: Enter description.

### Final: Data Design (xx%)

- **Due**: December xx
- **Individual or Group**: Group
- **Points**: xx-xx per lesson

**Description**: Enter description.

## Who developed this course?

Developed by [Chris Lindgren, Ph.D.](https://clndgrn.com).

Lindgren has incorporated content from:

- Observable Framework's [User Docs](https://observablehq.com/framework/)
- Adje van de Sande &amp; Christie Byvelds' *Statistics for Social Justice: A Structural Perspective*

## Corrections, comments, suggestions?

Email: calindgr@ncsu.edu<br>
File an issue: on [GitHub](#)

<div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Your awesomeness over time 🚀",
      subtitle: "Up and to the right!",
      width,
      y: {grid: true, label: "Awesomeness"},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(aapl, {x: "Date", y: "Close", tip: true})
      ]
    }))
  }</div>
  <div class="card">${
    resize((width) => Plot.plot({
      title: "How big are penguins, anyway? 🐧",
      width,
      grid: true,
      x: {label: "Body mass (g)"},
      y: {label: "Flipper length (mm)"},
      color: {legend: true},
      marks: [
        Plot.linearRegressionY(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species"}),
        Plot.dot(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species", tip: true})
      ]
    }))
  }</div>
</div>

---

## Next steps

Here are some ideas of things you could try…

<div class="grid grid-cols-4">
  <div class="card">
    Chart your own data using <a href="https://observablehq.com/framework/lib/plot"><code>Plot</code></a> and <a href="https://observablehq.com/framework/files"><code>FileAttachment</code></a>. Make it responsive using <a href="https://observablehq.com/framework/javascript#resize(render)"><code>resize</code></a>.
  </div>
  <div class="card">
    Create a <a href="https://observablehq.com/framework/project-structure">new page</a> by adding a Markdown file (<code>whatever.md</code>) to the <code>src</code> folder.
  </div>
  <div class="card">
    Add a drop-down menu using <a href="https://observablehq.com/framework/inputs/select"><code>Inputs.select</code></a> and use it to filter the data shown in a chart.
  </div>
  <div class="card">
    Write a <a href="https://observablehq.com/framework/loaders">data loader</a> that queries a local database or API, generating a data snapshot on build.
  </div>
  <div class="card">
    Import a <a href="https://observablehq.com/framework/imports">recommended library</a> from npm, such as <a href="https://observablehq.com/framework/lib/leaflet">Leaflet</a>, <a href="https://observablehq.com/framework/lib/dot">GraphViz</a>, <a href="https://observablehq.com/framework/lib/tex">TeX</a>, or <a href="https://observablehq.com/framework/lib/duckdb">DuckDB</a>.
  </div>
  <div class="card">
    Ask for help, or share your work or ideas, on our <a href="https://github.com/observablehq/framework/discussions">GitHub discussions</a>.
  </div>
  <div class="card">
    Visit <a href="https://github.com/observablehq/framework">Framework on GitHub</a> and give us a star. Or file an issue if you’ve found a bug!
  </div>
</div>
