
# This algorithm works like this:

1.It finds the middle value (middle) of the list.

2.If the middle value is equal to the element it is looking for, it returns its position.

3.If the middle value is greater than the element it is looking for, it continues on the left half of the list.

4.If the value is less than the element it is looking for, it continues on the right half of the list.

5.It repeats these steps until it finds the desired element or concludes that the element is not in the list.


# مراحل جستجوی دودویی :

1. بررسی کنید که آیا لیست خالی است. اگر لیست خالی باشد، جستجو ناموفق خواهد بود.
2. مقدار میانی لیست را تعیین کنید.
3. اگر مقدار میانی برابر با مقدار مورد نظر باشد، جستجو به پایان رسیده است.
4. اگر مقدار میانی کمتر از مقدار مورد نظر باشد، جستجو را به نیمه سمت راست لیست محدود کنید.
5. اگر مقدار میانی بیشتر از مقدار مورد نظر باشد، جستجو را به نیمه سمت چپ لیست محدود کنید.
6. این مراحل را تا زمانی ادامه دهید که مقدار مورد نظر پیدا شود یا لیست خالی شود.