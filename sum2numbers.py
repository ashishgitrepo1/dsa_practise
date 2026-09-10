
# simple script to read two numbers and print their sum

def main():
    try:
        a = float(input("Enter first number: "))
        b = float(input("Enter second number: "))
        print(f"Sum: {a + b}")
    except ValueError:
        print("Invalid input. Please enter numeric values.")


if __name__ == "__main__":
    main()
