package java;

public class Main {
    public static void main(String[] s) {
        int arr[] = { 1, 2, 3, 4, 5 };
        int dynamicArr[] = new int[4];
        dynamicArr[1] = 5;
        Calculator calculator = new Calculator();
        System.out.println(calculator.sum(3, 4));
        System.out.println(calculator.sum(3, 4, 5));
        System.out.println(arr[0]);
        System.out.println(dynamicArr[0]);
        System.out.println(dynamicArr[1]);
    }
}

class Calculator {
    public int sum(int a, int b) {
        return a + b;
    }

    public int sum(int a, int b, int c) {
        return a + b + c;
    }
}