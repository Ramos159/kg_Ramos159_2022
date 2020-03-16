function main(){

    // these will be all the valid arguements passed from the command line in an array.
    // we splice to get rid of the first two arguments, they're irrelevant to us here.
    const args = process.argv.splice(2)

    // we always have two string so let's put them in variables and call them something nice.
    // we also need to split the strings to get the single letters in an array
    const string1 = args[0].split('')
    const string2 = args[1].split('')

    ///////////////////////////////////////////////// OPTIONAL TEST CASE: ////////////////////////////////////////////////////////
    // While im not being tested on this, it is a possibility in another other program //////////////////////////////////////////
    // theres a chance in another program the two strings would have mismatching lengths and therefore couldnt be mapped properly
    if(string1.length !== string2.length){
        console.log(false)
        return null
    }

    // we're going to print this up later, if something trips up we're going to just reassign this to false and print it.
    let result = true

    // hold all the string characters here and test for duplicates
    let string1Table = {}

    // go through the string 1 array in a for loop
    for(let i = 0;i < string1.length;i++){

        // this is the current char of the string array 
        const char = string1[i]
        
        // if table has seen current char
        // break after reassigning false so we cn return false below
        if(string1Table[char]){
            result = false
            break

        // if the table hasnt seen the current char
        } else {
            string1Table[char] =  true
        }
    }

    // if the first string broke out of the loop we should see false for result, print result and return null to exit
    if(!result){
        console.log(result)
        return null
    }

    // same thing as string1table just for string 2
    let string2Table = {}

    // same thing as loop for string1
    for(let i = 0;i < string2.length;i++){
        const char = string1[i]

        if(string2Table[char]){
            result = false
            break
        } else {
            string2Table[char] = true
        }
    }


    // once again if we broke out of the loop above result is false
    // at this point if we got through both string arrays successfully result should be true
    // print whatever the result maybe and return null to explicitly exit the program
    console.log(result)
    return null
}

// run the main function above
main()