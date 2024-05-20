import{_ as s,o as n,c as a,b as l}from"./app-3s01Ete_.js";const p={},o=l(`<h1 id="_7-16-求符合给定条件的整数集" tabindex="-1"><a class="header-anchor" href="#_7-16-求符合给定条件的整数集"><span>7-16 求符合给定条件的整数集</span></a></h1><p>给定不超过6的正整数A，考虑从A开始的连续4个数字。请输出所有由它们组成的无重复数字的3位数。</p><h2 id="输入格式" tabindex="-1"><a class="header-anchor" href="#输入格式"><span>输入格式</span></a></h2><p>输入在一行中给出A。</p><h2 id="输出格式" tabindex="-1"><a class="header-anchor" href="#输出格式"><span>输出格式</span></a></h2><p>输出满足条件的的3位数，要求从小到大，每行6个整数。整数间以空格分隔，但行末不能有多余空格。</p><h2 id="输入样例" tabindex="-1"><a class="header-anchor" href="#输入样例"><span>输入样例</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#B48EAD;">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输出样例" tabindex="-1"><a class="header-anchor" href="#输出样例"><span>输出样例</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#B48EAD;">234</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">235</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">243</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">245</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">253</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">254</span></span>
<span class="line"><span style="color:#B48EAD;">324</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">325</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">342</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">345</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">352</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">354</span></span>
<span class="line"><span style="color:#B48EAD;">423</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">425</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">432</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">435</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">452</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">453</span></span>
<span class="line"><span style="color:#B48EAD;">523</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">524</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">532</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">534</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">542</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">543</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析与答案" tabindex="-1"><a class="header-anchor" href="#分析与答案"><span>分析与答案</span></a></h2><p>4选3有序排列一共有24种情况，下面的程序使用一个3层嵌套的循环来将应该输出的数字储存到一个数列中，输出时使用循环变量来计算已经输出的数量，从而确定是输出空格、换行或者不输出间隔。</p><p>3层嵌套的每一层循环条件都是相同的递增，但是当下一层的数字与上一层相等时就不会输出，继续下一次循环。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#5E81AC;font-weight:bold;">#</span><span style="color:#81A1C1;">include</span><span style="color:#8FBCBB;"> </span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">stdio.h</span><span style="color:#ECEFF4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/*</span></span>
<span class="line"><span style="color:#616E88;">    4选3有序排列所有情况：</span></span>
<span class="line"><span style="color:#616E88;">    123 124 132 134 142 143</span></span>
<span class="line"><span style="color:#616E88;">    213 214 231 234 241 243</span></span>
<span class="line"><span style="color:#616E88;">    312 314 321 324 341 342</span></span>
<span class="line"><span style="color:#616E88;">    412 413 421 423 431 432</span></span>
<span class="line"><span style="color:#616E88;">    共24种</span></span>
<span class="line"><span style="color:#616E88;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#ECEFF4;">(){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> start</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> j </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> k </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> num</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">],</span><span style="color:#D8DEE9FF;">count </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> array</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">24</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">scanf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%d</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">start</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">4</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        num</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;">start </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> i</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">4</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">j</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">j</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">4</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">j</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">j</span><span style="color:#81A1C1;">==</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#81A1C1;">continue;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">k</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">k</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">4</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">k</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">k</span><span style="color:#81A1C1;">==</span><span style="color:#D8DEE9FF;">j</span><span style="color:#81A1C1;">||</span><span style="color:#D8DEE9FF;">k</span><span style="color:#81A1C1;">==</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                    </span><span style="color:#81A1C1;">continue;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                array</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">count</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;">num</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">*</span><span style="color:#B48EAD;">100</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">num</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">j</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">*</span><span style="color:#B48EAD;">10</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">num</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">k</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                count</span><span style="color:#81A1C1;">++;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">24</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%d</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">array</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;">((</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">+</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">%</span><span style="color:#B48EAD;">6</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;">((</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">+</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">%</span><span style="color:#B48EAD;">6</span><span style="color:#81A1C1;">==</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">23</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#EBCB8B;">\\n</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://picb.waku.icu/picb/2024/05/13/202405131906622.png" alt="7-16 测试点"></p>`,15),e=[o];function c(t,r){return n(),a("div",null,e)}const i=s(p,[["render",c],["__file","7-16.html.vue"]]),F=JSON.parse('{"path":"/program/7-16.html","title":"7-16 求符合给定条件的整数集","lang":"zh-CN","frontmatter":{"description":"7-16 求符合给定条件的整数集 给定不超过6的正整数A，考虑从A开始的连续4个数字。请输出所有由它们组成的无重复数字的3位数。 输入格式 输入在一行中给出A。 输出格式 输出满足条件的的3位数，要求从小到大，每行6个整数。整数间以空格分隔，但行末不能有多余空格。 输入样例 输出样例 分析与答案 4选3有序排列一共有24种情况，下面的程序使用一个3层嵌...","head":[["meta",{"property":"og:url","content":"https://mrright024.github.io//PTA_Problem_Sets_14/PTA_Problem_Sets_14/program/7-16.html"}],["meta",{"property":"og:site_name","content":"PTA Problem Sets 14"}],["meta",{"property":"og:title","content":"7-16 求符合给定条件的整数集"}],["meta",{"property":"og:description","content":"7-16 求符合给定条件的整数集 给定不超过6的正整数A，考虑从A开始的连续4个数字。请输出所有由它们组成的无重复数字的3位数。 输入格式 输入在一行中给出A。 输出格式 输出满足条件的的3位数，要求从小到大，每行6个整数。整数间以空格分隔，但行末不能有多余空格。 输入样例 输出样例 分析与答案 4选3有序排列一共有24种情况，下面的程序使用一个3层嵌..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://picb.waku.icu/picb/2024/05/13/202405131906622.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T13:29:58.000Z"}],["meta",{"property":"article:author","content":"William Kong"}],["meta",{"property":"article:modified_time","content":"2024-05-13T13:29:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7-16 求符合给定条件的整数集\\",\\"image\\":[\\"https://picb.waku.icu/picb/2024/05/13/202405131906622.png\\"],\\"dateModified\\":\\"2024-05-13T13:29:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"William Kong\\",\\"url\\":\\"https://williamkong.xyz\\",\\"email\\":\\"admin@williamkong.xyz\\"}]}"]]},"headers":[{"level":2,"title":"输入格式","slug":"输入格式","link":"#输入格式","children":[]},{"level":2,"title":"输出格式","slug":"输出格式","link":"#输出格式","children":[]},{"level":2,"title":"输入样例","slug":"输入样例","link":"#输入样例","children":[]},{"level":2,"title":"输出样例","slug":"输出样例","link":"#输出样例","children":[]},{"level":2,"title":"分析与答案","slug":"分析与答案","link":"#分析与答案","children":[]}],"git":{"updatedTime":1715606998000,"contributors":[{"name":"William Kong","email":"37934615+Mrright024@users.noreply.github.com","commits":3}]},"filePathRelative":"program/7-16.md","autoDesc":true}');export{i as comp,F as data};