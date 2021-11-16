export default function checkForSpecialDefensive(up, upRight, right, rightDown, down, downLeft, left, leftUp) {

    var priority = 0;

    if ( ((downLeft.substring(0,3) == "PPP" && upRight.substring(0, 1) == "e") || (downLeft.substring(0,2) == "PP" && upRight.substring(0, 2) == "Pe")) && 
    ( (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") ||

    (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") ||

    (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") ||

    (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") ||

    (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") ||

    (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") ||

    (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") ||

    (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") )) priority += 80;





    // Part 2
    if ( ((left.substring(0,3) == "PPP" && right.substring(0, 1) == "e") || (left.substring(0,2) == "PP" && right.substring(0, 2) == "Pe")) && 
    ( (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") ||

    (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") ||

    (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") ||

    (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") ||
    
    (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") ||

    (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") ||

    (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") ||

    (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") )) priority += 80;





    // Part 3
    if ( ((leftUp.substring(0,3) == "PPP" && rightDown.substring(0, 1) == "e") || (leftUp.substring(0,2) == "PP" && rightDown.substring(0, 2) == "Pe")) && 
    ( (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") ||

    (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") ||

    (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") ||

    (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") ||

    (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") ||

    (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") ||

    (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") ||

    (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") )) priority += 80;





    // Part 4
    if ( ((up.substring(0,3) == "PPP" && down.substring(0, 1) == "e") || (up.substring(0,2) == "PP" && down.substring(0, 2) == "Pe")) && 
    ( (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") ||

    (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") ||

    (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") ||

    (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") ||

    (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") ||

    (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") ||

    (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") ||

    (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") )) priority += 80;





    // Part 5
    if ( ((upRight.substring(0,3) == "PPP" && downLeft.substring(0, 1) == "e") || (upRight.substring(0,2) == "PP" && downLeft.substring(0, 2) == "Pe")) && 
    ( (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") ||

    (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") ||

    (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") ||

    (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") ||

    (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") ||

    (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") ||

    (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") ||

    (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") )) priority += 80;





    // Part 6
    if ( ((right.substring(0,3) == "PPP" && left.substring(0, 1) == "e") || (right.substring(0,2) == "PP" && left.substring(0, 2) == "Pe")) && 
    ( (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") ||

    (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") ||

    (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") ||

    (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") ||

    (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") ||

    (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") ||

    (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") ||

    (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") )) priority += 80;





    // Part 7
    if ( ((rightDown.substring(0,3) == "PPP" && leftUp.substring(0, 1) == "e") || (rightDown.substring(0,2) == "PP" && leftUp.substring(0, 2) == "Pe")) && 
    ( (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") ||

    (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") ||

    (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") ||

    (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") ||

    (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") ||

    (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") ||

    (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") ||

    (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") )) priority += 80;





    // Part 8
    if ( ((down.substring(0,3) == "PPP" && up.substring(0, 1) == "e") || (down.substring(0,2) == "PP" && up.substring(0, 2) == "Pe")) && 
    ( (leftUp.substring(0,1) == "P" && rightDown.substring(0,3) == "PPe") || 
    (leftUp.substring(0,2) == "PP" && rightDown.substring(0,2) == "Pe") || 
    (leftUp.substring(0,3) == "PPP" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "P") || 
    (leftUp.substring(0,2) == "Pe" && rightDown.substring(0,2) == "PP") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "PPP") ||

    (up.substring(0,1) == "P" && down.substring(0,3) == "PPe") || 
    (up.substring(0,2) == "PP" && down.substring(0,2) == "Pe") || 
    (up.substring(0,3) == "PPP" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "PPe" && down.substring(0,1) == "P") || 
    (up.substring(0,2) == "Pe" && down.substring(0,2) == "PP") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "PPP") ||

    (upRight.substring(0,1) == "P" && downLeft.substring(0,3) == "PPe") || 
    (upRight.substring(0,2) == "PP" && downLeft.substring(0,2) == "Pe") || 
    (upRight.substring(0,3) == "PPP" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "P") || 
    (upRight.substring(0,2) == "Pe" && downLeft.substring(0,2) == "PP") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "PPP") ||

    (right.substring(0,1) == "P" && left.substring(0,3) == "PPe") || 
    (right.substring(0,2) == "PP" && left.substring(0,2) == "Pe") || 
    (right.substring(0,3) == "PPP" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "PPe" && left.substring(0,1) == "P") || 
    (right.substring(0,2) == "Pe" && left.substring(0,2) == "PP") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "PPP") ||

    (rightDown.substring(0,1) == "P" && leftUp.substring(0,3) == "PPe") || 
    (rightDown.substring(0,2) == "PP" && leftUp.substring(0,2) == "Pe") || 
    (rightDown.substring(0,3) == "PPP" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "P") || 
    (rightDown.substring(0,2) == "Pe" && leftUp.substring(0,2) == "PP") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "PPP") ||

    (down.substring(0,1) == "P" && up.substring(0,3) == "PPe") || 
    (down.substring(0,2) == "PP" && up.substring(0,2) == "Pe") || 
    (down.substring(0,3) == "PPP" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "PPe" && up.substring(0,1) == "P") || 
    (down.substring(0,2) == "Pe" && up.substring(0,2) == "PP") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "PPP") ||

    (downLeft.substring(0,1) == "P" && upRight.substring(0,3) == "PPe") || 
    (downLeft.substring(0,2) == "PP" && upRight.substring(0,2) == "Pe") || 
    (downLeft.substring(0,3) == "PPP" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "P") || 
    (downLeft.substring(0,2) == "Pe" && upRight.substring(0,2) == "PP") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "PPP") ||

    (left.substring(0,1) == "P" && right.substring(0,3) == "PPe") || 
    (left.substring(0,2) == "PP" && right.substring(0,2) == "Pe") || 
    (left.substring(0,3) == "PPP" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "PPe" && right.substring(0,1) == "P") || 
    (left.substring(0,2) == "Pe" && right.substring(0,2) == "PP") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "PPP") )) priority += 80;

    return priority;
}