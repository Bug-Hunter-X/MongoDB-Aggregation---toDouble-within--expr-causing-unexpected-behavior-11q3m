# MongoDB Aggregation Error: $toDouble within $expr

This repository demonstrates a common error encountered when using the `$toDouble` operator within the `$expr` operator in MongoDB aggregation pipelines.  The provided code snippet shows an example of an incorrect query, and a solution to the problem is also available.

The issue arises when trying to convert a field's value to a double before comparing it to a numeric value within the `$expr` context. This approach may lead to unexpected or incorrect aggregation results. The correct solution would be to let the underlying mongo aggregation framework handle the type conversion during the comparison if possible.

## Usage

This repository includes two files:

*   `bug.js`: Contains the code snippet demonstrating the incorrect usage of `$toDouble` within `$expr`.
*   `bugSolution.js`: Shows the corrected approach for achieving the desired aggregation results.

Run `node bug.js` to see the incorrect results, then run `node bugSolution.js` to compare against the correct results.   Make sure you have a MongoDB collection set up for testing.  Change the collection name in the code if necessary.