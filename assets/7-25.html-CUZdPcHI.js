import{_ as s,o as n,c as a,b as l}from"./app-3s01Ete_.js";const p={},o=l(`<h1 id="_7-25-念数字" tabindex="-1"><a class="header-anchor" href="#_7-25-念数字"><span>7-25 念数字</span></a></h1><p>输入一个整数，输出每个数字对应的拼音。当整数为负数时，先输出<code>fu</code>字。十个数字对应的拼音如下：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">: ling</span></span>
<span class="line"><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">: yi</span></span>
<span class="line"><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">: er</span></span>
<span class="line"><span style="color:#B48EAD;">3</span><span style="color:#D8DEE9FF;">: san</span></span>
<span class="line"><span style="color:#B48EAD;">4</span><span style="color:#D8DEE9FF;">: si</span></span>
<span class="line"><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">: wu</span></span>
<span class="line"><span style="color:#B48EAD;">6</span><span style="color:#D8DEE9FF;">: liu</span></span>
<span class="line"><span style="color:#B48EAD;">7</span><span style="color:#D8DEE9FF;">: qi</span></span>
<span class="line"><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">: ba</span></span>
<span class="line"><span style="color:#B48EAD;">9</span><span style="color:#D8DEE9FF;">: jiu</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入格式" tabindex="-1"><a class="header-anchor" href="#输入格式"><span>输入格式</span></a></h2><p>输入在一行中给出一个整数，如：<code>1234</code>。</p><p><strong>提示：整数包括负数、零和正数。</strong></p><h2 id="输出格式" tabindex="-1"><a class="header-anchor" href="#输出格式"><span>输出格式</span></a></h2><p>在一行中输出这个整数对应的拼音，每个数字的拼音之间用空格分开，行末没有最后的空格。如 <code>yi er san si</code>。</p><h2 id="输入样例" tabindex="-1"><a class="header-anchor" href="#输入样例"><span>输入样例</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">600</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输出样例" tabindex="-1"><a class="header-anchor" href="#输出样例"><span>输出样例</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#D8DEE9FF;">fu liu ling ling</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分析与答案" tabindex="-1"><a class="header-anchor" href="#分析与答案"><span>分析与答案</span></a></h2><p>对于零，直接输出<code>ling</code>就可以，如果是负数，那就先输出<code>fu</code>，然后对输入取反，按照正数来操作。</p><p>念数字需要把数字的每一位拆分到数组中，和之前一些题目的操作不同的是，念数字要求从左到右，因此数字取出后，是从右到左遍历，也就是从最大一位一直遍历到个位。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#5E81AC;font-weight:bold;">#</span><span style="color:#81A1C1;">include</span><span style="color:#8FBCBB;"> </span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">stdio.h</span><span style="color:#ECEFF4;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">void</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">output_char</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">char</span><span style="color:#D8DEE9FF;"> array</span><span style="color:#81A1C1;">[]</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">],</span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#ECEFF4;">(){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> num </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> count </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">char</span><span style="color:#D8DEE9FF;"> array</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">][</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ling</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">yi</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">er</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">san</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">si</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">wu</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">liu</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">qi</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ba</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">jiu</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> divide</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">16</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">scanf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%d</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">num</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">num </span><span style="color:#81A1C1;">==</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#ECEFF4;">        </span><span style="color:#616E88;">//等于0特殊处理</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ling</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">num </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">fu </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        num </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;">num</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">while</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">num</span><span style="color:#81A1C1;">!=</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        divide</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">count</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;">num </span><span style="color:#81A1C1;">%</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        num </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">num </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;"> divide</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">count</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">/</span><span style="color:#B48EAD;">10</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        count</span><span style="color:#81A1C1;">++;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    count</span><span style="color:#81A1C1;">--;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">count</span><span style="color:#81A1C1;">&gt;=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">count</span><span style="color:#81A1C1;">--</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">output_char</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">array</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">divide</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">count</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">count</span><span style="color:#81A1C1;">!=</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">void</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">output_char</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">char</span><span style="color:#D8DEE9FF;"> array</span><span style="color:#81A1C1;">[]</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">],</span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">array</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">num</span><span style="color:#ECEFF4;">][</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">!=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#EBCB8B;">\\0</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%c</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">array</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">num</span><span style="color:#ECEFF4;">][</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://picb.waku.icu/picb/2024/05/13/202405132109623.png" alt="7-25 测试点"></p>`,17),e=[o];function t(c,r){return n(),a("div",null,e)}const F=s(p,[["render",t],["__file","7-25.html.vue"]]),i=JSON.parse('{"path":"/program/7-25.html","title":"7-25 念数字","lang":"zh-CN","frontmatter":{"description":"7-25 念数字 输入一个整数，输出每个数字对应的拼音。当整数为负数时，先输出fu字。十个数字对应的拼音如下： 输入格式 输入在一行中给出一个整数，如：1234。 提示：整数包括负数、零和正数。 输出格式 在一行中输出这个整数对应的拼音，每个数字的拼音之间用空格分开，行末没有最后的空格。如 yi er san si。 输入样例 输出样例 分析与答案 对...","head":[["meta",{"property":"og:url","content":"https://mrright024.github.io//PTA_Problem_Sets_14/PTA_Problem_Sets_14/program/7-25.html"}],["meta",{"property":"og:site_name","content":"PTA Problem Sets 14"}],["meta",{"property":"og:title","content":"7-25 念数字"}],["meta",{"property":"og:description","content":"7-25 念数字 输入一个整数，输出每个数字对应的拼音。当整数为负数时，先输出fu字。十个数字对应的拼音如下： 输入格式 输入在一行中给出一个整数，如：1234。 提示：整数包括负数、零和正数。 输出格式 在一行中输出这个整数对应的拼音，每个数字的拼音之间用空格分开，行末没有最后的空格。如 yi er san si。 输入样例 输出样例 分析与答案 对..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://picb.waku.icu/picb/2024/05/13/202405132109623.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T13:29:58.000Z"}],["meta",{"property":"article:author","content":"William Kong"}],["meta",{"property":"article:modified_time","content":"2024-05-13T13:29:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7-25 念数字\\",\\"image\\":[\\"https://picb.waku.icu/picb/2024/05/13/202405132109623.png\\"],\\"dateModified\\":\\"2024-05-13T13:29:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"William Kong\\",\\"url\\":\\"https://williamkong.xyz\\",\\"email\\":\\"admin@williamkong.xyz\\"}]}"]]},"headers":[{"level":2,"title":"输入格式","slug":"输入格式","link":"#输入格式","children":[]},{"level":2,"title":"输出格式","slug":"输出格式","link":"#输出格式","children":[]},{"level":2,"title":"输入样例","slug":"输入样例","link":"#输入样例","children":[]},{"level":2,"title":"输出样例","slug":"输出样例","link":"#输出样例","children":[]},{"level":2,"title":"分析与答案","slug":"分析与答案","link":"#分析与答案","children":[]}],"git":{"updatedTime":1715606998000,"contributors":[{"name":"William Kong","email":"37934615+Mrright024@users.noreply.github.com","commits":3}]},"filePathRelative":"program/7-25.md","autoDesc":true}');export{F as comp,i as data};