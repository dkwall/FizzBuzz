fizz = 'Fizz' # print for multiples of 3
buzz = 'Buzz' # print for mulitples of 5

x = 101
y = 1

while y < x:
    if y % 3 == 0 and y % 5 == 0:
        print(f'{fizz}{buzz} - {y}')
        y += 1
    if y % 3 == 0:
        print(f'{fizz} - {y}')
        y += 1
    if y % 5 == 0:
        print(f'{buzz} - {y}')
        y += 1
    else:
        print(f'{y}')
        y += 1