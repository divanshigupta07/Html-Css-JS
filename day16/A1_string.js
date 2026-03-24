function abc(str){
    const trimmed = str.trim();
    const upperCase = trimmed.charAt(0).toUpperCase();
    const rest = trimmed.slice(1);
    const finalstr=upperCase.concat(rest);     
    console.log(finalstr);
    return finalstr;
}

abc("   this is Test ");
abc("   hello a");
