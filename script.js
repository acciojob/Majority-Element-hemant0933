//your code here
let arr=[2,1,2];
function majorityElement(nums){
	 let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

document.getElementById('output').innerHTML = majorityElement(nums);
