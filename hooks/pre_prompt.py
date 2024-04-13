import subprocess


def check_dependency(dependency, link):
    try:
        subprocess.run([dependency, "--version"], capture_output=True, check=True)
    except Exception:
        print(
            f"- {dependency.capitalize()} is not installed. Please install it -> {link}"
        )


if __name__ == "__main__":
    check_dependency("node", "https://git-scm.com/")
    check_dependency("git", "https://nodejs.org/en")
