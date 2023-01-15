import java.util.*;
public class SentenceFinder {
    public static void main(String args[]) {

        Scanner s=new Scanner(System.in);
        String str = s.nextLine();
        char ch = s.next().charAt(0);

        String ans = sentenceFinder(str,ch);
        System.out.println(ans);

    }

 public static String sentenceFinder(String str,Character ch) {
    int n=str.length();

    for(int i=0;i<n;i++) {
        if(ch == str.charAt(i)) {
            return str.substring(i+1,n).trim();
        }
    }
    return "The letter does not exist in the sentence";
 }


}