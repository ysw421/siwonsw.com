import numpy as np
from scipy.optimize import minimize

def second_order_cone_constraint(x):
    x0 = x[0]
    ex = x[1:]
    return x0 - np.linalg.norm(ex)
    #  x0 >= norm(ex)

def approximation_step(x, s, step_size=0.1):
    x_new = x + step_size * (s - x)
    s_new = s + step_size * (x - s)
    return x_new, s_new

def cone_splitting(x, cone_dim):
    a = x[:cone_dim]
    b = x[cone_dim:2*cone_dim]
    return np.concatenate((a, b))

def objective_function(c, x):
    return np.dot(c, x)

def socp_solver(A, b, c, cone_dims, epsilon=0.2, iterations=100):
    m, n = A.shape
    x = np.zeros(n)
    s = np.zeros(n)
    
    for iteration in range(iterations):
        x, s = approximation_step(x, s)

        for cone_dim in cone_dims:
            x = cone_splitting(x, cone_dim)
        # x = cone_splitting(x, cone_dims)

        constraints = [{'type': 'eq', 'fun': lambda x: np.dot(A, x) - b},
                        {'type': 'ineq', 'fun': second_order_cone_constraint}]

        result = minimize(lambda x: objective_function(c, x), x, constraints=constraints)
        # Lagrange Multipliers
        
        if np.linalg.norm(result.fun) < epsilon:
            print("Success!")
            break
        
        x = result.x

        if iteration and iteration % 100 == 0:
            print(f"Iteration: {iteration}")

    return result.x

# A = np.array([[1, 2], [3, 4]])
# b = np.array([1, 1])
# c = np.array([1, 2])
# cone_dims = [3]

# Example 1
A = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
b = np.array([2, 3, 1])
c = np.array([-1, -2, -3])
cone_dims = [3]

# Example 2
# A = np.array([[1, 0], [0, 1]])
# b = np.array([0, 0])
# c = np.array([-1, -1])
# cone_dims = [1]

# ||x^tilda||_2 <= x0

solution = socp_solver(A, b, c, cone_dims, epsilon=1e-6)
print("Solution:", solution)
