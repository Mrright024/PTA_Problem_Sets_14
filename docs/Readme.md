# PTA基础编程题目集

## 函数题（除6-13外全部要求使用C语言实现）

### 6-1 简单输出整数

本题要求实现一个函数，对给定的正整数`N`，打印从1到`N`的全部正整数。

#### 函数接口定义

```c
void PrintN ( int N );
```

其中`N`是用户传入的参数。该函数必须将从1到`N`的全部正整数顺序打印出来，每个数字占1行。

#### 裁判测试程序样例

```c
#include <stdio.h>

void PrintN ( int N );

int main ()
{
    int N;

    scanf("%d", &N);
    PrintN( N );

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```C
3
```

#### 输出样例

```C
1
2
3
```

#### 分析及答案

非常简单的输出题目，既可以用迭代也可以用递归（但是测试点有大N卡递归，我没有尝试，迭代比较符合我的直觉），注意循环条件即可。

```C
void PrintN (int N) {
    int i=1;
    for(i=1;i<=N;i++)
        printf("%d\n",i);
}
```

![6-10测试点](https://picb.waku.icu/picb/2024/05/10/202405101937575.png)

### 6-2 多项式求值

本题要求实现一个函数，计算阶数为`n`，系数为`a[0]` ... `a[n]`的多项式$f(x)=\Sigma^n_{i=0}(a[i] \times x^i) $​在`x`点的值。

#### 函数接口定义

```C
double f( int n, double a[], double x );
```

其中`n`是多项式的阶数，`a[]`中存储系数，`x`是给定点。函数须返回多项式`f(x)`的值。

#### 裁判测试程序样例

```C
#include <stdio.h>

#define MAXN 10

double f( int n, double a[], double x );

int main()
{
    int n, i;
    double a[MAXN], x;
    
    scanf("%d %lf", &n, &x);
    for ( i=0; i<=n; i++ )
        scanf("%lf", &a[i]);
    printf("%.1f\n", f(n, a, x));
    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```C
2 1.1
1 2.5 -38.7
```

#### 输入样例

```C
-43.1
```

#### 分析及答案

$O(n)$的方式就是定义`sum`和`tmep`临时变量，一个是最后输出的和，后者在遍历时充当$x^i$的角色，在每次循环中都乘一次x。

```C
double f(int n,double a[],double x){
    double sum=0;
    int i;
    double temp=1;
    for(i=0;i<=n;i++) {
        sum+=temp*a[i];
        temp*=x;
    }
    return sum;
}
```

![6-2测试点](https://picb.waku.icu/picb/2024/05/10/202405101936203.png)

### 6-3 简单求和

本题要求实现一个函数，求给定的`N`个整数的和。

#### 函数接口定义

```C
int Sum ( int List[], int N );
```

其中给定整数存放在数组`List[]`中，正整数`N`是数组元素个数。该函数须返回`N`个`List[]`元素的和。

#### 裁判测试程序样例

```C
#include <stdio.h>

#define MAXN 10

int Sum ( int List[], int N );

int main ()
{
    int List[MAXN], N, i;

    scanf("%d", &N);
    for ( i=0; i<N; i++ )
        scanf("%d", &List[i]);
    printf("%d\n", Sum(List, N));

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```C
3
12 34 -5
```

#### 输出样例

```C
41
```

#### 分析及答案

虽说是N个整数的和但是很神奇的不需要考虑超出数值范围的一题，遍历所有元素都加起来返回就是了。

```C
int Sum(int List[],int N){
    int sum=0,i;
    for (i=0;i<N;i++)
        sum+=List[i];
    return sum;
}
```

![6-3 测试点](https://picb.waku.icu/picb/2024/05/10/202405101940441.png)

### 6-4 求自定类型元素的平均

本题要求实现一个函数，求`N`个集合元素`S[]`的平均值，其中集合元素的类型为自定义的`ElementType`。

#### 函数接口定义

```C
ElementType Average( ElementType S[], int N );
```

其中给定集合元素存放在数组`S[]`中，正整数`N`是数组元素个数。该函数须返回`N`个`S[]`元素的平均值，其值也必须是`ElementType`类型。

#### 裁判测试程序样例

```c
#include <stdio.h>

#define MAXN 10
typedef float ElementType;

ElementType Average( ElementType S[], int N );

int main ()
{
    ElementType S[MAXN];
    int N, i;

    scanf("%d", &N);
    for ( i=0; i<N; i++ )
        scanf("%f", &S[i]);
    printf("%.2f\n", Average(S, N));

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 样例输入

```c
3
12.3 34 -5
```

#### 样例输出

```c
13.77
```

#### 分析及答案

和6-3 多项式求值是一样的道理，只是用`ElementType`抽象化了数据类型，遍历求和然后除以N就行，也是没有卡溢出的一题。

```c
ElementType Average(ElementType S[],int N){
    int i;
    ElementType sum=0;
    for(i=0;i<N;i++)
        sum+=S[i];
    return (ElementType) sum/N;
}
```

![6-4 测试点](https://picb.waku.icu/picb/2024/05/10/202405102006100.png)

### 6-5 求自定类型元素的最大值

本题要求实现一个函数，求`N`个集合元素`S[]`中的最大值，其中集合元素的类型为自定义的`ElementType`。

#### 函数接口定义

```C
ElementType Max( ElementType S[], int N );
```

其中给定集合元素存放在数组`S[]`中，正整数`N`是数组元素个数。该函数须返回`N`个`S[]`元素中的最大值，其值也必须是`ElementType`类型。

#### 裁判测试程序样例

```c
#include <stdio.h>

#define MAXN 10
typedef float ElementType;

ElementType Max( ElementType S[], int N );

int main ()
{
    ElementType S[MAXN];
    int N, i;

    scanf("%d", &N);
    for ( i=0; i<N; i++ )
        scanf("%f", &S[i]);
    printf("%.2f\n", Max(S, N));

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```c
3
12.3 34 -5
```

#### 输出样例

```c
34.00
```

#### 分析及答案

只是用`ElementType`抽象化了数据类型，用`max`变量储存当前最大值（一般初始化成第一个），一路遍历过去，遇到比`max`大的就更新变量即可。

```c
ElementType Max(ElementType S[], int N){
    ElementType m=S[0];
    int i;
    for (i=1;i<N;i++){
        if(m<S[i])
            m=S[i];
    }
    return m;
}
```

### 6-6  求单链表结点的阶乘和

本题要求实现一个函数，求单链表`L`结点的阶乘和。这里默认所有结点的值非负，且题目保证结果在`int`范围内。

#### 函数接口定义

```c
int FactorialSum( List L );
```

其中单链表`List`的定义如下：

```c
typedef struct Node *PtrToNode;
struct Node {
    int Data; /* 存储结点数据 */
    PtrToNode Next; /* 指向下一个结点的指针 */
};
typedef PtrToNode List; /* 定义单链表类型 */
```

#### 裁判测试程序样例

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node *PtrToNode;
struct Node {
    int Data; /* 存储结点数据 */
    PtrToNode Next; /* 指向下一个结点的指针 */
};
typedef PtrToNode List; /* 定义单链表类型 */

int FactorialSum( List L );

int main()
{
    int N, i;
    List L, p;

    scanf("%d", &N);
    L = NULL;
    for ( i=0; i<N; i++ ) {
        p = (List)malloc(sizeof(struct Node));
        scanf("%d", &p->Data);
        p->Next = L;  L = p;
    }
    printf("%d\n", FactorialSum(L));

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```c
3
5 3 6
```

#### 输出样例

```c
846
```

#### 分析及答案

所谓的阶乘和，也就是$\Sigma _{i=1}^n(x_i!)$，对每个节点求阶乘然后求和即可，复杂度$O(n^2)$，但是需要注意阶乘的特殊情况，$0!=1!=1$，所以计算阶乘所用的中间变量要从1开始；另外要考虑空链表的可能性，如果传入空链表直接返回一个0即可。

```c
int FactorialSum(List L){
    int sum=0,i,temp;
    while(1) {
        if(L==NULL)
            break;
        temp=1;
        if(L->Data == 0){
            sum+=temp;
        }
        else{
        	for(i=1;i<=L->Data;i++)
                temp*=i;
            sum+=temp;
        }
        if(L->Next==NULL)
            break;
        L=L->Next;
    }
    return sum;
}
```

![6-6 测试点](https://picb.waku.icu/picb/2024/05/11/202405110917214.png)

### 6-7 统计某类完全平方数

本题要求实现一个函数，判断任一给定整数`N`是否满足条件：它是完全平方数，又至少有两位数字相同，如144、676等。

#### 函数接口定义

```c
int IsTheNumber ( const int N );
```

其中`N`是用户传入的参数。如果`N`满足条件，则该函数必须返回1，否则返回0。

#### 裁判测试程序样例

```c
#include <stdio.h>
#include <math.h>

int IsTheNumber ( const int N );

int main()
{
    int n1, n2, i, cnt;
    
    scanf("%d %d", &n1, &n2);
    cnt = 0;
    for ( i=n1; i<=n2; i++ ) {
        if ( IsTheNumber(i) )
            cnt++;
    }
    printf("cnt = %d\n", cnt);

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```c
105 500
```

#### 输出样例

```c
cnt = 6
```

#### 分析及答案

注意输出样例中的`cnt`是在裁判程序中的变量，我们的函数需要返回的是1和0。函数需要实现两个功能：

1. 判定输入是否为完全平方数，也就是可以表示为$a^2$的形式，比如144=12\*12，225=15\*15；
2. 判定输入是否有至少两位数字相同，比如144有两个4，225有两个2。

函数不需要对所有输入都进行两个判定，可以只对满足完全平方数要求的输入进行数字相同的判定，不满足要求的直接返回0即可。

对于完全平方数判定，用一个临时变量从小到大循环计算，直到$i^2=N$或者$i^2>N$即可，对于前者，输入满足完全平方数要求，后者则不满足。

对于相同数字判定，使用一个数组储存输入的每一位数字，用除以10取余的方式把数字放入数组，然后再往前遍历数组查找有没有和它相同的数字，如果有就直接返回1退出，如果所有数字都已经取出还是没有相同的，最后返回0。这一步的复杂度是 $O(n^2)$。

```c
int IsTheNumber(const int N){
    if(N<100)
        return 0;
    int i=0,j,tmp=N,a[100];
    //i,j,tmp为中间变量，a[100]储存位数
    int c1=0;
    //c1为完全平方数判定
    //完全平方数判定
    while(i*i<=N){
        if(i*i==N)
            c1=1;
        i++;
    }
    if (c1==0)
        return 0;
    //两位数字相同判定
    i=0;
    while(tmp!=0){
        //除10取余取出末位数字
        a[i]=tmp%10;
        //向前遍历寻找相同数字
        if (i!=0) {
            for(j=i-1;j>=0;j--){
                if(a[i]==a[j]) {
                    return 1;
                }
            }
        }
        //更新取出最后一位后的数字
        tmp=(tmp-a[i])/10;
        i++;
    }
    return 0;
}
```

![6-7 测试点](https://picb.waku.icu/picb/2024/05/11/202405110933534.png)

### 6-8 简单阶乘计算

本题要求实现一个计算非负整数阶乘的简单函数。

#### 函数接口定义

```c
int Factorial( const int N );
```

其中`N`是用户传入的参数，其值不超过12。如果`N`是非负整数，则该函数必须返回`N`的阶乘，否则返回0。

#### 裁判测试程序样例

```c
#include <stdio.h>

int Factorial( const int N );

int main()
{
    int N, NF;
    
    scanf("%d", &N);
    NF = Factorial(N);
    if (NF)  printf("%d! = %d\n", N, NF);
    else printf("Invalid input\n");

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```c
5
```

#### 输出样例

```c
5! = 120
```

#### 分析及答案

输出样例中的`5! = `这一个部分是不需要我们实现的，函数只需要输出阶乘计算的结果，在6-6计算阶乘和的题目里已经实现过一次了，但这次的输入有可能是小于0的，用上一次的函数就会出现无限循环的情况，所以对于小于0的输入也要单独处理。

这次的输入值不会超过12，而且全都是整数，可以将0-12的阶乘值全部写进数组中，函数直接取出对应值即可，将$O(n)$的算法直接变成$O(1)$的直接取值。

```c
int Factorial(const int N){
    if(N<0)
        return 0;
    if(N==0)
        return 1;
    int i,fac=1;
    for(i=1;i<=N;i++)
        fac*=i;
    return fac;
}
```

![6-8 测试点](https://picb.waku.icu/picb/2024/05/11/202405110951043.png)

### 6-9 统计个位数字

本题要求实现一个函数，可统计任一整数中某个位数出现的次数。例如-21252中，2出现了3次，则该函数应该返回3。

#### 函数接口定义

```c
int Count_Digit ( const int N, const int D );
```

其中`N`和`D`都是用户传入的参数。`N`的值不超过`int`的范围；`D`是[0, 9]区间内的个位数。函数须返回`N`中`D`出现的次数。

#### 裁判测试程序样例

```c
#include <stdio.h>

int Count_Digit ( const int N, const int D );

int main()
{
    int N, D;
    
    scanf("%d %d", &N, &D);
    printf("%d\n", Count_Digit(N, D));
    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```c
-21252 2
```

#### 输出样例

```c
3
```

#### 分析及答案

用6-7中用到过的取末位数字的方法，把输入的`N`每一位的数字都取出，和`D`比对，如果相同就将计数器+1。

这道题只要求计算特定一个数字出现的次数，如果要求给出各个数字出现的次数，可以建立一个10位的数组`A`，`A[0]`\~`A[9]`对应的就是0\~9出现的次数。将数组初始化为零，假设某次取出数字为i，就执行`A[i]++`即可。

```c
int Count_Digit(const int N,const int D){
    int count=0,tmp=N;
    if(tmp<0)
        tmp=-tmp;
    if(tmp==0&&D==0)
        return 1;
    while(tmp!=0){
        if(tmp%10==D)
            count++;
        tmp/=10;
    }
    return count;
}
```

![6-9 测试点](https://picb.waku.icu/picb/2024/05/11/202405111032867.png)

### 6-10 阶乘计算升级版

本题要求实现一个打印非负整数阶乘的函数。

#### 函数接口定义

```c
void Print_Factorial ( const int N );
```

其中`N`是用户传入的参数，其值不超过1000。如果`N`是非负整数，则该函数必须在一行中打印出`N`!的值，否则打印“Invalid input”。

#### 裁判测试程序样例

```c
#include <stdio.h>

void Print_Factorial ( const int N );

int main()
{
    int N;
    
    scanf("%d", &N);
    Print_Factorial(N);
    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```c
15
```

#### 输出样例

```c
1307674368000
```

#### 分析及答案

与6-8相比，这道题有两处不同：

1. 输入小于0时要求输出指定语句，这在6-8是由裁判程序实现的；
2. 扩大了输入的范围，6-8的输入不大于12，甚至可以将答案储存到数组中直接取出，这里的输入范围扩大到了1000.

第2点不同意味着6-8的程序没有办法直接用在这里，因为输入范围的扩大意味着结果范围的扩大。为什么6-8的输入被限定在了12？因为$12!=479001600$，而$13!=6227020800$，已经超出了整型所能表示的范围，在这里我们还能用`unsigned long`救一下，但对于更大的数字，任何现有的数据类型都没法完整地储存，溢出是必然的。因此，我们必须使用不同的方式来进行这种大数阶乘。

下面的函数采用的方式是，用一个足够大的数组来表示数字，当中每一个元素都表示某一位上的数字（0~9），并建立一个变量`count`来储存当前数组表示数字的位数。进行阶乘计算时，采取以下方式：

1. 先对每一位去乘当前的乘数
2. 从个位开始往上遍历，如果有某一个元素大于9的就进位，如果最高位也需要进位的，同时也更新`count`变量。

最后，从`count`指定的最高位开始，一路输出到个位。

```c
void Print_Factorial ( const int N ){
    if(N<0) {
        printf("Invalid input");
        return 0;
    }
    //考虑N为1000时位数已经超过一般数据类型的上限，使用数组进行”模拟乘法“
    //1000!<10^(3x1000)=10^3000,该数有3000位
    int num[3000]={0},i,count=0,j=0,k;
    num[0]=1;//个位数为1
    for(i=1;i<=N;i++){
        j=0;//每次都要从个位开始计算
        while (j<=count)
        {
            num[j]*=i;
            j++;
        }
        for (j = 0; j  <= count; j++)
        {
            if (num[j]>=10)
            {
                if (num[j+1]==0&&j+1>count)
                {
                    count++;//最高位需要进位时，位数新增一位
                }
                num[j+1]+=num[j]/10;
                num[j]=num[j]%10;
            }
        }
        
    }
    while(count>=0){
        printf("%d",num[count]);
        count--;
    }
}
```

![6-10 测试点](https://picb.waku.icu/picb/2024/05/11/202405111059613.png)

### 6-11 求自定类型元素序列的中位数

本题要求实现一个函数，求`N`个集合元素`A[]`的中位数，即序列中第$[(N+1)/2]$大的元素。其中集合元素的类型为自定义的`ElementType`。

#### 函数接口定义

```c
ElementType Median( ElementType A[], int N );
```

其中给定集合元素存放在数组`A[]`中，正整数`N`是数组元素个数。该函数须返回`N`个`A[]`元素的中位数，其值也必须是`ElementType`类型。

#### 裁判测试程序样例

```c
#include <stdio.h>

#define MAXN 10
typedef float ElementType;

ElementType Median( ElementType A[], int N );

int main ()
{
    ElementType A[MAXN];
    int N, i;

    scanf("%d", &N);
    for ( i=0; i<N; i++ )
        scanf("%f", &A[i]);
    printf("%.2f\n", Median(A, N));

    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例

```c
3
12.3 34 -5
```

#### 输出样例

```c
12.30
```

#### 分析及答案

这道题的思路是比较直接的，先对序列进行排序，然后输出排序后的序列中间位置的元素即可。

但是这道题的测试点中是有大N的，$O(n^2)$的冒泡排序会导致运行超时。因此，下面的程序会使用$O(n\log n)$的归并排序。归并排序涉及到递归，如果将执行过程以树的形式手画出来会好理解很多，在递归传递函数的时候也要注意下标移动的问题。

```c
//采用递归的归并排序尝试解决大N卡时间问题

//合并函数，将两个数组合并到一个
void merge (ElementType *a, int l, int mid, int r, ElementType *c) {
    int i=l, k=mid+1, pos=l;
    while (i<=mid && k<=r) {
        //两个指针，谁小就把谁放进数组里，然后往后移动对应的指针
        if (a[k] <= a[i]) {
            c[pos]=a[k];
            k++;
        }
        else {
            c[pos]=a[i];
            i++;
        }
        pos++;
    }
    //把剩余的序列元素全部放到数组里，因为while退出条件的限制，这两条for循环必然只有一条会执行
    for (;i<=mid;i++,pos++) c[pos]=a[i];
    for (;k<=r;k++,pos++) c[pos]=a[k];
}

void mergeSort (ElementType A[], int l, int r, ElementType *tmp){
    if (l>=r)
        //左右位置重合，停止分解
        return;
    int mid = (r+l)/2;
    //递归，直到l与mid，mid与r相邻
    mergeSort(A,l,mid,tmp);
    mergeSort(A,mid+1,r,tmp);
    //合并
    merge (A,l,mid,r,tmp);
    for (int i=l;i<=r;i++)
        A[i]=tmp[i];
}

ElementType Median(ElementType A[], int N ) {
    //创建一个和排序数组一样大的temp数组进行合并
    ElementType tmp[N];
    mergeSort (A,0,N-1,tmp);
    int mid;
    return A[N/2];
}
```

![6-11 测试点](https://picb.waku.icu/picb/2024/05/11/202405111114842.png)

### 6-12 判断奇偶性

本题要求实现判断给定整数奇偶性的函数。

#### 函数接口定义

```c
int even( int n );
```

其中`n`是用户传入的整型参数。当`n`为偶数时，函数返回1；`n`为奇数时返回0。注意：0是偶数。

#### 裁判测试程序样例

```c
#include <stdio.h>

int even( int n );

int main()
{    
    int n;

    scanf("%d", &n);
    if (even(n))
        printf("%d is even.\n", n);
    else
        printf("%d is odd.\n", n);
    
    return 0;
}

/* 你的代码将被嵌在这里 */
```

#### 输入样例1

```c
-6
```

#### 输出样例1

```c
-6 is even.
```

#### 输入样例2

```c
5
```

#### 输出样例2

```c
5 is odd.
```

#### 分析及答案

直接除以2取余，等于0的就是偶数，否则是奇数。

```c
int even(int n){
    if(n%2==0)
        return 1;
    return 0;
}
```

![6-12 测试点](https://picb.waku.icu/picb/2024/05/11/202405111119146.png)

### 6-13 折半查找

给一个严格递增数列，函数int Search_Bin(SSTable T, KeyType k)用来二分地查找k在数列中的位置。

#### 函数接口定义

```c
int Search_Bin(SSTable T, KeyType k)
```

其中`T`是有序表，`k`是查找的值。

#### 裁判测试程序样例

```c++
#include <iostream>
using namespace std;

#define MAXSIZE 50
typedef int KeyType;

typedef  struct                     
{ KeyType  key;                                             
} ElemType;  

typedef  struct
{ ElemType  *R; 
  int  length;
} SSTable;                      

void  Create(SSTable &T)
{ int i;
  T.R=new ElemType[MAXSIZE+1];
  cin>>T.length;
  for(i=1;i<=T.length;i++)
     cin>>T.R[i].key;   
}

int  Search_Bin(SSTable T, KeyType k);

int main () 
{  SSTable T;  KeyType k;
   Create(T);
   cin>>k;
   int pos=Search_Bin(T,k);
   if(pos==0) cout<<"NOT FOUND"<<endl;
   else cout<<pos<<endl;
   return 0;
}

/* 请在这里填写答案 */
```

#### 输入样例1

```c
5
1 3 5 7 9
7
```

#### 输出样例1

```c
4
```

#### 输入样例2

```c
5
1 3 5 7 9
10
```

#### 输出样例2

```c
NOT FOUND
```

#### 分析及答案

函数题的最后一题，也是和前面风格完全不同的一题（出题单位和前面不同），还是唯一一道要求用C++的题目，但众所周知C++向下兼容C，所以用C语言去实现这个函数也是没有问题的。

最终的输出已经在裁判程序里实现了，函数只需要返回0（查找失败）或者对应的位置值（查找成功），并更新传入的`k`变量值即可。虽然题目说的是折半查找，但是单就这一题的测试点来看，就算使用遍历查找说不定也能过。

```c
int Search_Bin(SSTable T,KeyType k){
    //定义左右指针，注意裁判程序是从1开始存数值的，函数里也要保持一致
    int i=1,j=T.length;
    while(1){
        //如果和左右指针值相同，返回对应位置
        if(k==T.R[i].key)
            return i;
        if(k==T.R[j].key)
            return j;
        //左右指针相邻也没有找到，返回0
        if(j-i==1)
            return 0;
        //数列严格递增，根据题目条件来制定折半规则
        if(k>T.R[(i+j)/2].key)
            i=(i+j)/2;
        else
            j=(i+j)/2;
    }
}
```

![6-13 测试点](https://picb.waku.icu/picb/2024/05/11/202405111134859.png)

## 编程题

### 7-1 厘米换算英尺英寸

如果已知英制长度的英尺$foot$和英寸$inch$的值，那么对应的米是$(foot+inch/12)\times 0.3048$。现在，如果用户输入的是厘米数，那么对应的英制长度的英尺和英寸是多少呢？别忘了1英尺等于12英寸。

#### 输入格式

输入在一行中给出1个正整数，单位是厘米。

#### 输出格式

输入在一行中给出1个正整数，单位是厘米。

#### 输入样例

```c
170
```

#### 输出样例

```c
5 6
```

#### 分析及答案

已知：
$$
meter = (foot+inch\div12)\times 0.3048
$$
则
$$
cm = (foot + inch\div 12)\times 30.48\\
12\times cm = inch \times 30.48\\
inch = cm \times 12 \div 30.48
$$
先计算出输入的厘米值对应的英寸值，再计算英尺值。整个计算中涉及小数点，需要用浮点型储存变量，但是最后输出时结果要求是两个整数，需要使用显式类型转换。

```c
# include <stdio.h>

/*
    meter=(foot+inch/12)*0.3048
    cm = (foot+inch/12)×30.48
    12*cm = inch*30.48
*/

int main () {
    double cm = 0, inch = 0;
    int foot = 0;
    scanf ("%lf", &cm);
    //计算英寸值
    inch = cm * 12 / 30.48;
    //计算英尺值
    foot = (int) inch / 12 ;
    //在英寸值中减去已经换算成英尺的部分
    inch -= foot*12;
    printf ("%d %d",foot, (int) inch);
    return 0;
}
```

![7-1 测试点](https://picb.waku.icu/picb/2024/05/11/202405111155335.png)

### 7-2 然后是几点

有时候人们用四位数字表示一个时间，比如 `1106` 表示 11 点零 6 分。现在，你的程序要根据起始时间和流逝的时间计算出终止时间。

读入两个数字，第一个数字以这样的四位数字表示当前时间，第二个数字表示分钟数，计算当前时间经过那么多分钟后是几点，结果也表示为四位数字。当小时为个位数时，没有前导的零，例如 5 点 30 分表示为 `530`；0 点 30 分表示为 `030`。注意，第二个数字表示的分钟数可能超过 60，也可能是负数。

#### 输入格式

输入在一行中给出 2 个整数，分别是四位数字表示的起始时间、以及流逝的分钟数，其间以空格分隔。注意：在起始时间中，当小时为个位数时，没有前导的零，即 5 点 30 分表示为 `530`；0 点 30 分表示为 `030`。流逝的分钟数可能超过 60，也可能是负数。

#### 输出格式

输出不多于四位数字表示的终止时间，当小时为个位数时，没有前导的零。题目保证起始时间和终止时间在同一天内。

#### 输入样例

```c
1120 110
```

#### 输出样例

```c
1310
```

#### 分析及答案

把输入的四位数字后两位取出即为分钟，除以100取余就是后两位，剩下的两位或一位即为小时，直接除以100的结果就是小时数（前提是使用整型来存储输入）。

对经过的分钟数也采用同样的操作。然后对小时和分钟数分别相加，如果此时分钟数大于60则往小时部分进1位，小于0则从小时部分退一位。

在输出部分，如果结果的分钟部分正好为0，则将小时部分乘以100来补零，只输出补零之后的小时部分。

```c
#include <stdio.h>

int main(){
    int timehr=0,timemin=0,input=0,passover=0,output=0;
    scanf ("%d %d",&input,&passover);
    timehr = input / 100;
    timemin = input % 100;
    int houradd = 0 ,minadd = 0;
    houradd = passover / 60;
    minadd = passover % 60;
    timehr += houradd;
    timemin += minadd;
    if (timemin >= 60) {
        //满60进位
        timemin-=60;
        timehr++;
    }
    if (timemin < 0) {
        //小于0退位
        timemin += 60;
        timehr --;
    }
    if (timemin == 0) {
        //timemin刚好为0，只显示扩大的timehr
        timehr *= 100;
        printf("%d",timehr);
        return 0;
    }
    printf("%d%d",timehr,timemin);
    return 0;
}
```

![7-2 测试点](https://picb.waku.icu/picb/2024/05/11/202405112046268.png)

### 7-3 逆序的三位数

程序每次读入一个正3位数，然后输出按位逆序的数字。注意：当输入的数字含有结尾的0时，输出不应带有前导的0。比如输入700，输出应该是7。

#### 输入格式

每个测试是一个3位的正整数。

#### 输出格式

输出按位逆序的数。

#### 输入样例

```c
123
```

#### 输出样例

```c
321
```

#### 分析及答案

可以采用双向链表或者数组解决，这道题只读取一个3位正整数并进行经过处理的逆序输出，采用链表有点太重了，直接用数组即可。将输入的每一位取出，然后从后往前找到第一个非0的数开始往回输出即可。

```c
#include <stdio.h>

int main(){
    int input,num[3]={0},i=0, j;
    scanf("%d",&input);
    for (i=0,j=100;i<3;i++,j/=10){
        num[i] = input / j;
        input = input % j;
    }
    i = 2;
    //从后往前找到第一个非0的数
    while (i>=0) {
        if (num[i]!=0)
            break;
        i--;
    }
    for (;i>=0;i--) {
        printf("%d",num[i]);
    }
    return 0;
}
```

![7-3 测试点](https://picb.waku.icu/picb/2024/05/11/202405112051046.png)

### 7-4 BCD解密

BCD数是用一个字节来表达两位十进制的数，每四个比特表示一位。所以如果一个BCD数的十六进制是0x12，它表达的就是十进制的12。但是小明没学过BCD，把所有的BCD数都当作二进制数转换成十进制输出了。于是BCD的0x12被输出成了十进制的18了！

现在，你的程序要读入这个错误的十进制数，然后输出正确的十进制数。提示：你可以把18转换回0x12，然后再转换回12。

#### 输入格式

输入在一行中给出一个[0, 153]范围内的正整数，保证能转换回有效的BCD数，也就是说这个整数转换成十六进制时不会出现A-F的数字。

#### 输出格式

输出对应的十进制数。

#### 输入样例

```c
18
```

#### 输出样例

```c
12
```

#### 分析及答案

不要被题干绕晕了，这道题的要求实际上就是十进制数转换为十六进制，而且保证最后的结果不会大于99（153的十六进制表示是0x99）。

```c
#include <stdio.h>

int main(){
    int input = 0, output = 0;
    scanf("%d",&input);
    //input oct to hex
    output = (input / 16)* 10 + (input % 16);
    printf ("%d",output);
}
```

![7-4 测试点](https://picb.waku.icu/picb/2024/05/11/202405112058114.png)

### 7-5 表格输出

本题要求编写程序，按照规定格式输出表格。

#### 输入格式

本题目没有输入。

#### 输出格式

要求严格按照给出的格式输出下列表格：

```c
------------------------------------
Province      Area(km2)   Pop.(10K)
------------------------------------
Anhui         139600.00   6461.00
Beijing        16410.54   1180.70
Chongqing      82400.00   3144.23
Shanghai        6340.50   1360.26
Zhejiang      101800.00   4894.00
------------------------------------
```

#### 分析及答案

这道题是需要数格子的，横线与标题栏直接复制题目的输出要求，`Privince`列用一个二维数组来保证每一行字符（含补全空格）的长度一致，`Area`与`Pop.`列的数据则用`printf`的控制符来保证格式。

```c
#include <stdio.h>

int main(){
    printf("------------------------------------\n");
    printf("Province      Area(km2)   Pop.(10K)\n");
    printf("------------------------------------\n");
    char province[5][9]={"Anhui    ","Beijing  ","Chongqing","Shanghai ","Zhejiang "};
    double area[5]={139600.00,16410.54,82400.00,6340.50,101800.00};
    double pop[5]={6461.00,1180.70,3144.23,1360.26,4894.00};
    for (int i=0;i<5;i++) {
        for (int j=0;j<9;j++) {
            printf("%c",province[i][j]);
        }
        printf("%14.2lf",area[i]);
        printf("%10.2lf\n",pop[i]);
    }
    printf("------------------------------------");
    return 0;
}
```

![7-6 测试点](https://picb.waku.icu/picb/2024/05/11/202405112102246.png)

### 7-6 混合类型数据格式化输入

本题要求编写程序，顺序读入浮点数1、整数、字符、浮点数2，再按照字符、整数、浮点数1、浮点数2的顺序输出。

#### 输入格式

输入在一行中顺序给出浮点数1、整数、字符、浮点数2，其间以1个空格分隔。

#### 输出格式

在一行中按照字符、整数、浮点数1、浮点数2的顺序输出，其中浮点数保留小数点后2位。

#### 输入样例

```c
2.12 88 c 4.7
```

#### 输出样例

```c
c 88 2.12 4.70
```

#### 分析及答案

考察`scanf`与`printf`的使用，没有什么难点，注意输出的先后次序和位数要求。

```c
#include <stdio.h>
int main(){
    int i;
    float f1,f2;
    char c;
    scanf("%f %d %c %f",&f1,&i,&c,&f2);
    printf ("%c %d %.2f %.2f",c,i,f1,f2);
    return 0;
}
```

![7-7 测试点](https://picb.waku.icu/picb/2024/05/11/202405112105177.png)

### 7-7 12-24小时制

编写一个程序，要求用户输入24小时制的时间，然后显示12小时制的时间。

#### 输入格式

输入在一行中给出带有中间的`:`符号（半角的冒号）的24小时制的时间，如`12:34`表示12点34分。当小时或分钟数小于10时，均没有前导的零，如`5:6`表示5点零6分。

**提示：**在`scanf`的格式字符串中加入`:`，让`scanf`来处理这个冒号。

#### 输出格式

在一行中输出这个时间对应的12小时制的时间，数字部分格式与输入的相同，然后跟上空格，再跟上表示上午的字符串`AM`或表示下午的字符串`PM`。如`5:6 PM`表示下午5点零6分。注意，在英文的习惯中，中午12点被认为是下午，所以24小时制的`12:00`就是12小时制的`12:0 PM`；而0点被认为是第二天的时间，所以是`0:0 AM`。

#### 输入样例

```c
21:11
```

#### 输出样例

```c
9:11 PM
```

#### 分析及答案

核心就是进行AM/PM判断，把冒号打进`scanf`里就可以将其作为分隔符分开处理小时和分钟了。依据小时部分与12的大小关系做出相应输出即可，也不需要补前导0。

```c
#include <stdio.h>
int main(){
    int hr,min;
    scanf("%d:%d",&hr,&min);
    //AM/PM判断
    if (hr == 12)
        printf("12:%d PM",min);
    else if (hr>12)
        printf("%d:%d PM",hr-12,min);
    else
        printf("%d:%d AM",hr,min);
    return 0;
}
```

![7-8 测试点](https://picb.waku.icu/picb/2024/05/11/202405112108471.png)

### 7-8 超速判断

模拟交通警察的雷达测速仪。输入汽车速度，如果速度超出60 mph，则显示“Speeding”，否则显示“OK”。

#### 输入格式

输入在一行中给出1个不超过500的非负整数，即雷达测到的车速。

#### 输出格式

在一行中输出测速仪显示结果，格式为：`Speed: V - S`，其中`V`是车速，`S`或者是`Speeding`、或者是`OK`。

#### 输入样例1

```c
40
```

#### 输出样例1

```c
Speed: 40 - OK
```

#### 输入样例2

```c
75
```

#### 输出样例2

```c
Speed: 75 - Speeding
```

#### 分析及答案

接收输入，判定，输出即可，比较简单的一题。

```c
#include <stdio.h>
int main(){
    int speed;
    scanf("%d",&speed);
    printf("Speed: %d - ",speed);
    if (speed>60)
        printf("Speeding");
    else
        printf("OK");
    return 0;
}
```

![7-8 测试点](https://picb.waku.icu/picb/2024/05/11/202405112110710.png)

### 7-9 用天平找小球

三个球A、B、C，大小形状相同且其中有一个球与其他球重量不同。要求找出这个不一样的球。

#### 输入格式

输入在一行中给出3个正整数，顺序对应球A、B、C的重量。

#### 输出格式

在一行中输出唯一的那个不一样的球。

#### 输入样例

```c
1 1 2
```

#### 输出样例

```c
C
```

#### 分析及答案

比较逻辑游戏的一题，如果考虑A球与B、C球以及B、C球之间的重量差异，就有3种情况：

1. 若A球不同，则A与B、C的重量差相同
2. 若B球不同，则A与B的重量差和B与C的重量差正好相反
3. 若C球不同，则A与C球、B与C球的重量差相同

根据上述分析编制程序即可。

```c
#include <stdio.h>
int main(){
    int weigh[3]={0};
    scanf("%d %d %d",&weigh[0],&weigh[1],&weigh[2]);
    int dif1,dif2,dif3;
    dif1 = weigh[0]-weigh[1];
    dif2 = weigh[0]-weigh[2];
    dif3 = weigh[1]-weigh[2];
    if (dif1==dif2)
        printf("A");
    if (dif1==(-dif3))
        printf("B");
    if (dif2==dif3)
        printf("C");
    return 0;
}
```

![7-10 测试点](https://picb.waku.icu/picb/2024/05/11/202405112116369.png)

### 7-10 计算工资

某公司员工的工资计算方法如下：一周内工作时间不超过40小时，按正常工作时间计酬；超出40小时的工作时间部分，按正常工作时间报酬的1.5倍计酬。员工按进公司时间分为新职工和老职工，进公司不少于5年的员工为老职工，5年以下的为新职工。新职工的正常工资为30元/小时，老职工的正常工资为50元/小时。请按该计酬方式计算员工的工资。

#### 输入格式

输入在一行中给出2个正整数，分别为某员工入职年数和周工作时间，其间以空格分隔。

#### 输出格式

在一行输出该员工的周薪，精确到小数点后2位。

#### 输入样例1

```c
5 40
```

#### 输出样例1

```c
2000.00
```

#### 输入样例2

```c
3 50
```

#### 输出样例2

```c
1650.00
```

#### 分析及答案

**首先，这家公司的新员工一个月税前收入才4800，老员工才8000，真的很坑。**回到题目本身，主要分为两步：

1. 根据输入工龄，判断是不是新员工，进而决定一般时薪和加班时薪的值
2. 根据工作时间计算工资。如果工作时间小于40小时，直接乘一般时薪即可，如果大于40小时，超出的部分就要乘加班时薪了。

输出的时候注意题目要求保留到小数点后2位。

```c
#include <stdio.h>
int main(){
    int year = 0, workhr = 0, ot = 0;
    double pay = 50, otPay = 75, salary;
    scanf("%d %d",&year,&workhr);
    if (year<5){
        pay = 30;
        otPay = 45;
    }
    if (workhr < 40)
        salary = pay * workhr;
    else
        salary = pay * 40 + otPay * (workhr - 40);
    printf("%.2lf", salary);
    return 0;
}
```

![7-10 测试点](https://picb.waku.icu/picb/2024/05/11/202405112122674.png)