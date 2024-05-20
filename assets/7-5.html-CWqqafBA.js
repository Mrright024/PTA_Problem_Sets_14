import{_ as s,o as n,c as a,b as l}from"./app-3s01Ete_.js";const p={},o=l(`<h1 id="_7-5-表格输出" tabindex="-1"><a class="header-anchor" href="#_7-5-表格输出"><span>7-5 表格输出</span></a></h1><p>本题要求编写程序，按照规定格式输出表格。</p><h2 id="输入格式" tabindex="-1"><a class="header-anchor" href="#输入格式"><span>输入格式</span></a></h2><p>本题目没有输入。</p><h2 id="输出格式" tabindex="-1"><a class="header-anchor" href="#输出格式"><span>输出格式</span></a></h2><p>要求严格按照给出的格式输出下列表格：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#81A1C1;">------------------------------------</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Province      </span><span style="color:#88C0D0;">Area</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">km2</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;">   Pop.</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">10K</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">------------------------------------</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Anhui         </span><span style="color:#B48EAD;">139600.00</span><span style="color:#D8DEE9FF;">   </span><span style="color:#B48EAD;">6461.00</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Beijing        </span><span style="color:#B48EAD;">16410.54</span><span style="color:#D8DEE9FF;">   </span><span style="color:#B48EAD;">1180.70</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Chongqing      </span><span style="color:#B48EAD;">82400.00</span><span style="color:#D8DEE9FF;">   </span><span style="color:#B48EAD;">3144.23</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Shanghai        </span><span style="color:#B48EAD;">6340.50</span><span style="color:#D8DEE9FF;">   </span><span style="color:#B48EAD;">1360.26</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Zhejiang      </span><span style="color:#B48EAD;">101800.00</span><span style="color:#D8DEE9FF;">   </span><span style="color:#B48EAD;">4894.00</span></span>
<span class="line"><span style="color:#81A1C1;">------------------------------------</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析及答案" tabindex="-1"><a class="header-anchor" href="#分析及答案"><span>分析及答案</span></a></h2><p>这道题是需要数格子的，横线与标题栏直接复制题目的输出要求，<code>Privince</code>列用一个二维数组来保证每一行字符（含补全空格）的长度一致，<code>Area</code>与<code>Pop.</code>列的数据则用<code>printf</code>的控制符来保证格式。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#5E81AC;font-weight:bold;">#</span><span style="color:#81A1C1;">include</span><span style="color:#8FBCBB;"> </span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">stdio.h</span><span style="color:#ECEFF4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#ECEFF4;">(){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">------------------------------------</span><span style="color:#EBCB8B;">\\n</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Province      Area(km2)   Pop.(10K)</span><span style="color:#EBCB8B;">\\n</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">------------------------------------</span><span style="color:#EBCB8B;">\\n</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">char</span><span style="color:#D8DEE9FF;"> province</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">][</span><span style="color:#B48EAD;">9</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Anhui    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Beijing  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Chongqing</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Shanghai </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Zhejiang </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">double</span><span style="color:#D8DEE9FF;"> area</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span><span style="color:#B48EAD;">139600.00</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">16410.54</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">82400.00</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">6340.50</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">101800.00</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">double</span><span style="color:#D8DEE9FF;"> pop</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span><span style="color:#B48EAD;">6461.00</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">1180.70</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">3144.23</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">1360.26</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">4894.00</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> i</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">5</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> j</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">j</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">9</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">j</span><span style="color:#81A1C1;">++</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%c</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">province</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">][</span><span style="color:#D8DEE9FF;">j</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%14.2lf</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">area</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">%10.2lf</span><span style="color:#EBCB8B;">\\n</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">pop</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">printf</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">------------------------------------</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://picb.waku.icu/picb/2024/05/11/202405112102246.png" alt="7-5 测试点"></p>`,11),e=[o];function t(c,r){return n(),a("div",null,e)}const F=s(p,[["render",t],["__file","7-5.html.vue"]]),i=JSON.parse('{"path":"/program/7-5.html","title":"7-5 表格输出","lang":"zh-CN","frontmatter":{"description":"7-5 表格输出 本题要求编写程序，按照规定格式输出表格。 输入格式 本题目没有输入。 输出格式 要求严格按照给出的格式输出下列表格： 分析及答案 这道题是需要数格子的，横线与标题栏直接复制题目的输出要求，Privince列用一个二维数组来保证每一行字符（含补全空格）的长度一致，Area与Pop.列的数据则用printf的控制符来保证格式。 7-5 测试点","head":[["meta",{"property":"og:url","content":"https://mrright024.github.io//PTA_Problem_Sets_14/PTA_Problem_Sets_14/program/7-5.html"}],["meta",{"property":"og:site_name","content":"PTA Problem Sets 14"}],["meta",{"property":"og:title","content":"7-5 表格输出"}],["meta",{"property":"og:description","content":"7-5 表格输出 本题要求编写程序，按照规定格式输出表格。 输入格式 本题目没有输入。 输出格式 要求严格按照给出的格式输出下列表格： 分析及答案 这道题是需要数格子的，横线与标题栏直接复制题目的输出要求，Privince列用一个二维数组来保证每一行字符（含补全空格）的长度一致，Area与Pop.列的数据则用printf的控制符来保证格式。 7-5 测试点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://picb.waku.icu/picb/2024/05/11/202405112102246.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-12T06:21:45.000Z"}],["meta",{"property":"article:author","content":"William Kong"}],["meta",{"property":"article:modified_time","content":"2024-05-12T06:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7-5 表格输出\\",\\"image\\":[\\"https://picb.waku.icu/picb/2024/05/11/202405112102246.png\\"],\\"dateModified\\":\\"2024-05-12T06:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"William Kong\\",\\"url\\":\\"https://williamkong.xyz\\",\\"email\\":\\"admin@williamkong.xyz\\"}]}"]]},"headers":[{"level":2,"title":"输入格式","slug":"输入格式","link":"#输入格式","children":[]},{"level":2,"title":"输出格式","slug":"输出格式","link":"#输出格式","children":[]},{"level":2,"title":"分析及答案","slug":"分析及答案","link":"#分析及答案","children":[]}],"git":{"updatedTime":1715494905000,"contributors":[{"name":"William Kong","email":"37934615+Mrright024@users.noreply.github.com","commits":2}]},"filePathRelative":"program/7-5.md","autoDesc":true}');export{F as comp,i as data};
