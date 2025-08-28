1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? 

উত্তরঃ
getElementById => একটা নির্দিষ্ট element কে দরবে 
specifics বলতে গেলে শুধু id কেই ধরবে।

getElementsByClassName => যদি একই ক্লাস প্রতিটা element কে দেয়া হয় তাহলে সব ক্লাস কে getElementsByClassName দিয়ে ধরা যায়। 
নির্দিষ্ট ক্লাস নেম দিইয়ে  প্রতিটা element কে ধরা যায় । 
getElementsByClassName একটা HTMLcollection দেয়। 
একাধিক element থাকলে ইনডেক্স দিয়ে আক্সেস করতে হয়।

querySelector => এটি সিএসএস সিলেক্টর এর মত কাজ করে।প্রথমে জার সাথে মিলে জাবে তাকেই সিলেক্ট করবে।

querySelectorAll =>  যত গুলো সিএসএস সিলেক্টর সাথে মিলে যাবে সব গুলো একটা NodeList আকারে return করবে।

querySelectorAll কে forEach দিয়ে loop চালানো যায়।


2. How do you **create and insert a new element into the DOM**?

DOM  দিয়ে নতুন element বানানো যায়
DOM দিয়ে নতুন element যোগ যায়
DOM insert দিয়ে নতুন eleme কে আগে পরে বসানো যায়


3. What is **Event Bubbling** and how does it work?

Event Bubbling => যখন কোন event ঘটে তখন ধাপে ধাপে প্রতিটা element check করতে করতে তার প্যারেন্ট পর্যন্ত গিয়ে থামে।


4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation => Event Delegation হলো একটা parent element এ eventListener বসানো।  আর 
child element এর event গুলো সেই parent দিয়ে হ্যান্ডল করা যায়।
performance ভালো প্রতিটা element এ event listener add করতে হয় না।
 ডায়নামিক element এর ইভেন্ট হ্যান্ডেল করা যায়।


5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() => পেজের ডিফল্ট বিহাভিয়ার বন্ধ করে দেয়।

stopPropagation() => কাজ parent পর্যন্ত event যাওয়া বন্ধ করে দেয়।