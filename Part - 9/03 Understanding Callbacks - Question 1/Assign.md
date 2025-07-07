Watch the following videos:

What are callbacks?
Why we need callbacks?

Now, imagine you always had a wish to undertake an adventure tour to Ladakh on your favourite bike Royal Enfield Himalayan. But, you never got this opportunity because either you did not had time or you did not had enough budget to buy this bike. Luckily, this year you received a heavy bonus and you also managed to get 15 days leave from your manager.

Don't you think that Ladakh is calling you?

Deliverables:

    1. Create a function called "buyBike" which prints "Bought Royal Enfield Himalayan" after 2 seconds.

    2. Create a function called "planTrip" which prints "Trip to Ladakh planned" after 1 seconds.

    3. Make sure that "Bought Royal Enfield Himalayan" is printed before "Trip to Ladakh planned" because there is no point in planning the trip if you do not have this bike.

Hint: Try to use "planTrip" function as a callback.


```js
function buyBike(func) {
  setTimeout(() => {
    console.log("Bought Royal Enfield Himalayan");
    func();
  }, 2000);
}

function planTrip() {
  setTimeout(() => console.log("Trip to Ladakh planned"), 1000);
}

buyBike(planTrip);
```