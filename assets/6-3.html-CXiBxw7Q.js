import{_ as s,o as n,c as a,b as l}from"./app-3s01Ete_.js";const e={},p=l(`<h1 id="_6-3-简单求和" tabindex="-1"><a class="header-anchor" href="#_6-3-简单求和"><span>6-3 简单求和</span></a></h1><p>本题要求实现一个函数，求给定的<code>N</code>个整数的和。</p><h2 id="函数接口定义" tabindex="-1"><a class="header-anchor" href="#函数接口定义"><span>函数接口定义</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Sum</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">List</span><span style="color:#81A1C1;">[]</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">N</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中给定整数存放在数组<code>List[]</code>中，正整数<code>N</code>是数组元素个数。该函数须返回<code>N</code>个<code>List[]</code>元素的和。</p><h2 id="裁判测试程序样例" tabindex="-1"><a class="header-anchor" href="#裁判测试程序样例"><span>裁判测试程序样例</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#5E81AC;font-weight:bold;">#</span><span style="color:#81A1C1;">include</span><span style="color:#8FBCBB;"> </span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">stdio.h</span><span style="color:#ECEFF4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#5E81AC;font-weight:bold;">#</span><span style="color:#81A1C1;">define</span><span style="color:#5E81AC;"> </span><span style="color:#88C0D0;">MAXN</span><span style="color:#5E81AC;"> </span><span style="color:#B48EAD;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Sum</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">List</span><span style="color:#81A1C1;">[]</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">N</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> List</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">MAXN</span><span style="color:#ECEFF4;">],</span><span style="color:#D8DEE9FF;"> N</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> i</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">scanf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%d</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">N</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;"> i</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">N</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">scanf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%d</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">List</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%d</span><span style="color:#EBCB8B;">\\n</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Sum</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">List</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> N</span><span style="color:#ECEFF4;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/* 你的代码将被嵌在这里 */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入样例" tabindex="-1"><a class="header-anchor" href="#输入样例"><span>输入样例</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#B48EAD;">3</span></span>
<span class="line"><span style="color:#B48EAD;">12</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">34</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出样例" tabindex="-1"><a class="header-anchor" href="#输出样例"><span>输出样例</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#B48EAD;">41</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分析及答案" tabindex="-1"><a class="header-anchor" href="#分析及答案"><span>分析及答案</span></a></h2><p>虽说是N个整数的和但是很神奇的不需要考虑超出数值范围的一题，遍历所有元素都加起来返回就是了。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Sum</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">List</span><span style="color:#81A1C1;">[]</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">N</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> sum</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">N</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        sum</span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;">List</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> sum</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://picb.waku.icu/picb/2024/05/10/202405101940441.png" alt="6-3 测试点"></p>`,15),o=[p];function t(c,r){return n(),a("div",null,o)}const E=s(e,[["render",t],["__file","6-3.html.vue"]]),F=JSON.parse('{"path":"/function/6-3.html","title":"6-3 简单求和","lang":"zh-CN","frontmatter":{"description":"6-3 简单求和 本题要求实现一个函数，求给定的N个整数的和。 函数接口定义 其中给定整数存放在数组List[]中，正整数N是数组元素个数。该函数须返回N个List[]元素的和。 裁判测试程序样例 输入样例 输出样例 分析及答案 虽说是N个整数的和但是很神奇的不需要考虑超出数值范围的一题，遍历所有元素都加起来返回就是了。 6-3 测试点","head":[["meta",{"property":"og:url","content":"https://mrright024.github.io//PTA_Problem_Sets_14/PTA_Problem_Sets_14/function/6-3.html"}],["meta",{"property":"og:site_name","content":"PTA Problem Sets 14"}],["meta",{"property":"og:title","content":"6-3 简单求和"}],["meta",{"property":"og:description","content":"6-3 简单求和 本题要求实现一个函数，求给定的N个整数的和。 函数接口定义 其中给定整数存放在数组List[]中，正整数N是数组元素个数。该函数须返回N个List[]元素的和。 裁判测试程序样例 输入样例 输出样例 分析及答案 虽说是N个整数的和但是很神奇的不需要考虑超出数值范围的一题，遍历所有元素都加起来返回就是了。 6-3 测试点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://picb.waku.icu/picb/2024/05/10/202405101940441.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-12T06:15:14.000Z"}],["meta",{"property":"article:author","content":"William Kong"}],["meta",{"property":"article:modified_time","content":"2024-05-12T06:15:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6-3 简单求和\\",\\"image\\":[\\"https://picb.waku.icu/picb/2024/05/10/202405101940441.png\\"],\\"dateModified\\":\\"2024-05-12T06:15:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"William Kong\\",\\"url\\":\\"https://williamkong.xyz\\",\\"email\\":\\"admin@williamkong.xyz\\"}]}"]]},"headers":[{"level":2,"title":"函数接口定义","slug":"函数接口定义","link":"#函数接口定义","children":[]},{"level":2,"title":"裁判测试程序样例","slug":"裁判测试程序样例","link":"#裁判测试程序样例","children":[]},{"level":2,"title":"输入样例","slug":"输入样例","link":"#输入样例","children":[]},{"level":2,"title":"输出样例","slug":"输出样例","link":"#输出样例","children":[]},{"level":2,"title":"分析及答案","slug":"分析及答案","link":"#分析及答案","children":[]}],"git":{"updatedTime":1715494514000,"contributors":[{"name":"William Kong","email":"37934615+Mrright024@users.noreply.github.com","commits":1}]},"filePathRelative":"function/6-3.md","autoDesc":true}');export{E as comp,F as data};
