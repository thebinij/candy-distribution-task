// There are n children standing in a line.
// Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:
//  1) Each child must have at least one candy

//  2) Children with a higher rating get more candies than their neighbors.

//     Return the minimum number of candies you need to have to distribute
//     distribute the candies to the children

/**
 * Candy Distribution distribute the candies to the children according the ratings
 * where children get more candies than their neighbors.
 *
 * Constraints:
 * No. of Children (n) is equal to ratings length. (n=== ratings.length)
 * 1 <= n <= 2 * 104
 * 0 <= ratings[i] <= 2 * 104
 *
 * @param ratings array of numbers where total items in ratings is total childresn
 * @returns the minimum number of candies required
 */
const candyDistribution = (ratings: number[]): number => {
  // BASE CASE: if no children, return 0
  if (ratings.length === 0) return 0;

  let minCandies = ratings.length;

  for (let i = 0; i < ratings.length - 1; i++) {
    // if current child rating not equal to a neighbor child increase a candy
    if (ratings[i] !== ratings[i + 1]) {
      minCandies++;
    }
  }

  return minCandies;
};

export default candyDistribution;
