import{_ as t,c as i,f as s,o as n}from"./app-4mdzSZzD.js";const o="/static/elephant.jpg",a={};function r(l,e){return n(),i("div",null,e[0]||(e[0]=[s('<h1 id="how-well-elephants-hide-in-a-rowan-tree" tabindex="-1"><a class="header-anchor" href="#how-well-elephants-hide-in-a-rowan-tree"><span>How well elephants hide in a rowan tree</span></a></h1><p>More often I see GitHub Copilot tutorials with prompts like <em>&quot;Write unit tests for this function&quot;</em>, less I worry about my job security.</p><h2 id="falsifiability" tabindex="-1"><a class="header-anchor" href="#falsifiability"><span>Falsifiability</span></a></h2><p>There&#39;s a reason why Test-Driven Development (TDD) suggests writing tests before the implementation. It&#39;s not just about writing top-down designed code. It&#39;s also about ensuring your tests are falsifiable and genuinely help in developing the code. Being able to falsify your hypothesis is the essence of engineering. And being able to falsify your tests is the essence of software engineering.</p><p>By the way, did you know that elephants hide in rowan trees? No? Ever seen an elephant in a rowan tree? That&#39;s how well they hide.</p><p><img src="'+o+'" alt="elephant"><em>This is an obvious AI fake photo because elephants hide too well to be captured.</em></p><p>I&#39;ve seen this joke many times come to life in real projects. When a new team member joins, a senior developer might ask them to write a few unit tests as part of the onboarding process. But without product requirements, how do we ensure these tests properly validate the code? How do we verify that the &quot;elephant&quot; is truly hiding in the &quot;rowan trees&quot; if no one has ever seen it?&quot;. Have you ever seen each of your tests fail, ensuring that when the implementation is corrupted, they&#39;ll signal the mistakes you&#39;ve made?</p><h2 id="mutation-testing" tabindex="-1"><a class="header-anchor" href="#mutation-testing"><span>Mutation testing</span></a></h2><p>If you find yourself in this situation, try using a technique called <em>mutation testing</em>. Introduce common mistakes into your implementation to ensure your tests fail. Also, make some neutral modifications that shouldn&#39;t cause your tests to fail. If they do fail, it means your tests are too tightly coupled with the implementation, and you should improve your interfaces by writing better tests first. These will show you false positives and false negatives of your test cases.</p><p>Not writing tests before your code is like taking on technical debt mortgage. Don&#39;t get me wrong, though. It&#39;s still not as terrible as generating tons of AI tests after the implementation that no one will read, which is like taking out a loan with horrendous interest rates. That could actually drown your project. I&#39;m not surprised that people are reluctant to write tests if they&#39;re taught to write them afterwards. Also, to modules that don&#39;t return anything, which forces them to use mocks to check internal state of tested code. What’s the benefit of these tests if they don’t describe Product Requirements Documents (PRDs) or help in designing interfaces, or writing the implementation?</p><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>Write tests before the implementation, use stubs over mocks, and always return something from your functions. You&#39;ll have fewer side effects, you&#39;ll have to check internal behavior less often, your tests will be easier to maintain in the long term, and you&#39;ll save more time. Do the opposite, if you enjoy wasting your time.</p><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2><ul><li><em>Mutation testing</em>, wikipedia, <a href="https://en.wikipedia.org/wiki/Mutation_testing" target="_blank" rel="noopener noreferrer">online</a>.</li></ul><p><em>Article was originally written 2025.01.03</em></p>',15)]))}const u=t(a,[["render",r],["__file","mutations-testing.html.vue"]]),m=JSON.parse(`{"path":"/post/2025/01/03/mutations-testing.html","title":"How well elephants hide in a rowan tree","lang":"en-US","frontmatter":{"permalinkPattern":"/post/:year/:month/:day/:slug.html","date":"2025-01-03T00:00:00.000Z","tag":["ai","testing"],"author":"Piotr Przetacznik","sidebar":"heading","location":"Kraków"},"headers":[{"level":2,"title":"Falsifiability","slug":"falsifiability","link":"#falsifiability","children":[]},{"level":2,"title":"Mutation testing","slug":"mutation-testing","link":"#mutation-testing","children":[]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"contributors":[{"name":"Piotr Przetacznik","username":"Piotr Przetacznik","email":"piotr.przetacznik@gmail.com","commits":1,"url":"https://github.com/Piotr Przetacznik"}]},"filePathRelative":"_posts/2025-01-03-mutations-testing.md","excerpt":"\\n<p>More often I see GitHub Copilot tutorials with prompts like <em>\\"Write unit tests for this function\\"</em>, less I worry about my job security.</p>\\n<h2>Falsifiability</h2>\\n<p>There's a reason why Test-Driven Development (TDD) suggests writing tests before the implementation. It's not just about writing top-down designed code. It's also about ensuring your tests are falsifiable and genuinely help in developing the code. Being able to falsify your hypothesis is the essence of engineering. And being able to falsify your tests is the essence of software engineering.</p>"}`);export{u as comp,m as data};