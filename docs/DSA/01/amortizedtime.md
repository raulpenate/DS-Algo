In computer science, the amortized time of an algorithm is the average time it takes to run a single operation, over a large number of operations. It's a way of measuring the efficiency of an algorithm, by taking into account not just the time it takes to run each operation, but also the number of operations and how they are grouped together.

For example, let's say you have an algorithm that can add items to a list, and it takes one second to add an item to a list of 10 items, two seconds to add an item to a list of 100 items, and five seconds to add an item to a list of 1000 items. The time it takes to add an item to the list is different depending on the size of the list, but the amortized time of the algorithm is the average time it takes to add an item, over a large number of items.

In big O notation, the amortized time of an algorithm is represented by a function that describes how the time it takes to run the algorithm grows, as the input size grows. For example, if the amortized time of an algorithm is $O(1)$, it means that the algorithm takes the same amount of time to run, no matter how big the input is. If the amortized time is $O(n)$, it means that the time it takes to run the algorithm grows linearly with the size of the input. And if the amortized time is $O(n^2)$, it means that the time it takes to run the algorithm grows exponentially with the size of the input.