export default function CheckForSpecialOffenive(up, upRight, right, rightDown, down, downLeft, left, leftUp) {

    var priority = 0;

    if ( ((downLeft.substring(0,3) == "AAA" && upRight.substring(0, 1) == "e") || (downLeft.substring(0,2) == "AA" && upRight.substring(0, 2) == "Ae")) && 
    ( (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") ||

    (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") ||

    (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") ||

    (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") ||

    (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") ||

    (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") ||

    (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") ||

    (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") )) priority += 90;





    // Part 2
    if ( ((left.substring(0,3) == "AAA" && right.substring(0, 1) == "e") || (left.substring(0,2) == "AA" && right.substring(0, 2) == "Ae")) && 
    ( (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") ||

    (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") ||

    (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") ||

    (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") ||
    
    (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") ||

    (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") ||

    (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") ||

    (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") )) priority += 90;





    // Part 3
    if ( ((leftUp.substring(0,3) == "AAA" && rightDown.substring(0, 1) == "e") || (leftUp.substring(0,2) == "AA" && rightDown.substring(0, 2) == "Ae")) && 
    ( (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") ||

    (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") ||

    (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") ||

    (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") ||

    (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") ||

    (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") ||

    (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") ||

    (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") )) priority += 90;





    // Part 4
    if ( ((up.substring(0,3) == "AAA" && down.substring(0, 1) == "e") || (up.substring(0,2) == "AA" && down.substring(0, 2) == "Ae")) && 
    ( (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") ||

    (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") ||

    (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") ||

    (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") ||

    (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") ||

    (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") ||

    (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") ||

    (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") )) priority += 90;





    // Part 5
    if ( ((upRight.substring(0,3) == "AAA" && downLeft.substring(0, 1) == "e") || (upRight.substring(0,2) == "AA" && downLeft.substring(0, 2) == "Ae")) && 
    ( (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") ||

    (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") ||

    (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") ||

    (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") ||

    (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") ||

    (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") ||

    (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") ||

    (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") )) priority += 90;





    // Part 6
    if ( ((right.substring(0,3) == "AAA" && left.substring(0, 1) == "e") || (right.substring(0,2) == "AA" && left.substring(0, 2) == "Ae")) && 
    ( (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") ||

    (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") ||

    (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") ||

    (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") ||

    (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") ||

    (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") ||

    (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") ||

    (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") )) priority += 90;





    // Part 7
    if ( ((rightDown.substring(0,3) == "AAA" && leftUp.substring(0, 1) == "e") || (rightDown.substring(0,2) == "AA" && leftUp.substring(0, 2) == "Ae")) && 
    ( (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") ||

    (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") ||

    (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") ||

    (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") ||

    (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") ||

    (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") ||

    (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") ||

    (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") )) priority += 90;





    // Part 8
    if ( ((down.substring(0,3) == "AAA" && up.substring(0, 1) == "e") || (down.substring(0,2) == "AA" && up.substring(0, 2) == "Ae")) && 
    ( (leftUp.substring(0,1) == "A" && rightDown.substring(0,3) == "AAe") || 
    (leftUp.substring(0,2) == "AA" && rightDown.substring(0,2) == "Ae") || 
    (leftUp.substring(0,3) == "AAA" && rightDown.substring(0,1) == "e") || 
    (leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "A") || 
    (leftUp.substring(0,2) == "Ae" && rightDown.substring(0,2) == "AA") || 
    (leftUp.substring(0,1) == "e" && rightDown.substring(0,3) == "AAA") ||

    (up.substring(0,1) == "A" && down.substring(0,3) == "AAe") || 
    (up.substring(0,2) == "AA" && down.substring(0,2) == "Ae") || 
    (up.substring(0,3) == "AAA" && down.substring(0,1) == "e") || 
    (up.substring(0,3) == "AAe" && down.substring(0,1) == "A") || 
    (up.substring(0,2) == "Ae" && down.substring(0,2) == "AA") || 
    (up.substring(0,1) == "e" && down.substring(0,3) == "AAA") ||

    (upRight.substring(0,1) == "A" && downLeft.substring(0,3) == "AAe") || 
    (upRight.substring(0,2) == "AA" && downLeft.substring(0,2) == "Ae") || 
    (upRight.substring(0,3) == "AAA" && downLeft.substring(0,1) == "e") || 
    (upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "A") || 
    (upRight.substring(0,2) == "Ae" && downLeft.substring(0,2) == "AA") || 
    (upRight.substring(0,1) == "e" && downLeft.substring(0,3) == "AAA") ||

    (right.substring(0,1) == "A" && left.substring(0,3) == "AAe") || 
    (right.substring(0,2) == "AA" && left.substring(0,2) == "Ae") || 
    (right.substring(0,3) == "AAA" && left.substring(0,1) == "e") || 
    (right.substring(0,3) == "AAe" && left.substring(0,1) == "A") || 
    (right.substring(0,2) == "Ae" && left.substring(0,2) == "AA") || 
    (right.substring(0,1) == "e" && left.substring(0,3) == "AAA") ||

    (rightDown.substring(0,1) == "A" && leftUp.substring(0,3) == "AAe") || 
    (rightDown.substring(0,2) == "AA" && leftUp.substring(0,2) == "Ae") || 
    (rightDown.substring(0,3) == "AAA" && leftUp.substring(0,1) == "e") || 
    (rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "A") || 
    (rightDown.substring(0,2) == "Ae" && leftUp.substring(0,2) == "AA") || 
    (rightDown.substring(0,1) == "e" && leftUp.substring(0,3) == "AAA") ||

    (down.substring(0,1) == "A" && up.substring(0,3) == "AAe") || 
    (down.substring(0,2) == "AA" && up.substring(0,2) == "Ae") || 
    (down.substring(0,3) == "AAA" && up.substring(0,1) == "e") || 
    (down.substring(0,3) == "AAe" && up.substring(0,1) == "A") || 
    (down.substring(0,2) == "Ae" && up.substring(0,2) == "AA") || 
    (down.substring(0,1) == "e" && up.substring(0,3) == "AAA") ||

    (downLeft.substring(0,1) == "A" && upRight.substring(0,3) == "AAe") || 
    (downLeft.substring(0,2) == "AA" && upRight.substring(0,2) == "Ae") || 
    (downLeft.substring(0,3) == "AAA" && upRight.substring(0,1) == "e") || 
    (downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "A") || 
    (downLeft.substring(0,2) == "Ae" && upRight.substring(0,2) == "AA") || 
    (downLeft.substring(0,1) == "e" && upRight.substring(0,3) == "AAA") ||

    (left.substring(0,1) == "A" && right.substring(0,3) == "AAe") || 
    (left.substring(0,2) == "AA" && right.substring(0,2) == "Ae") || 
    (left.substring(0,3) == "AAA" && right.substring(0,1) == "e") || 
    (left.substring(0,3) == "AAe" && right.substring(0,1) == "A") || 
    (left.substring(0,2) == "Ae" && right.substring(0,2) == "AA") || 
    (left.substring(0,1) == "e" && right.substring(0,3) == "AAA") )) priority += 90;

    return false;
}