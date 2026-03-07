public class Main {
    public static void main(String[] s) {
        Calculator calculator = new Calculator();
        System.out.println(calculator.sum(3, 4));
        System.out.println(calculator.sum(3, 4, 5));
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