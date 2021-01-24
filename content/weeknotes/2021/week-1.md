---
title: "Week 1 - Let's give weeknotes a try"
date: "2021-01-09"
---

- Week Notes
    - "I created a new Rails project today to experiment with Ruby 3.0.0 and Rails 6.1.0. [tweet](https://twitter.com/jbrancha/status/1345878504475340800?s=20) #[[Rails]]"
    - I'm working with omniauth-github and [[Devise]]'s omniauthable module to authenticate users to an app.
    - I figured out a way to customize the callback path (redirect URI) that omniauth-github included in the GitHub authorize URL params. It involved opening the `lib/omniauth/strategies/github.rb` class (read: monkey patching) and overriding the `request_phase`. The new `request_phase` should inject a `request_path` in the `options` hash as the desired callback path. I then had to require this file at the proper time in `config/application.rb` so that it can modify the class that gets included with the `omniauth-github` gem.
    - I talked with [[Jake Worth]] and [[Dillon Hafer]] about strategies for copying a value to the system clipboard from a [[Ruby]] or [[Rails]] process. It can be as simple as `echo 'value' | pbcopy`, but you can take it further by checking that  command exists (`command -v pbcopy`) or even making it "shell safe" by writing the value to a temp file and then redirecting that to `pbcopy`.
    - "I finished reading my second [[Books of 2021]] -- Leave the World Behind by [[Rumaan Alam]]"
- [[Found on the Internet]]
    - "[Reading in 2021](https://werd.io/2021/reading-in-2021), [[Ben Werdmüller]] #Reading #Books"
    - "[Please Blog](https://werd.io/2021/please-blog), [[Ben Werdmüller]] #[[Writing]] #[[Learn In Public]]"
    - "[Solving the Rubik's Cube and Other Hard-To-Recognize Problems](http://interconnected.org/home/2021/01/04/rubiks_cube)"
    - "[Recurse Center: Social Rules](https://www.recurse.com/social-rules), [[Recurse Center]], h/t [[Jake Worth]]"
    - "[To the brain, reading computer code is not the same as reading language](https://news.mit.edu/2020/brain-reading-computer-code-1215), [[MIT]]"
    - "[What Writers and Editors Do](https://www.theparisreview.org/blog/2021/01/05/what-writers-and-editors-do/), [[Paris Review]]"
- TILs published this week:
    - [Use fzf to change directories](https://github.com/jbranchaud/til/blob/master/unix/use-fzf-to-change-directories.md), #[[fzf]]
    - [Skip validations when creating a record](https://github.com/jbranchaud/til/blob/master/rails/skip-validations-when-creating-a-record.md), #[[Rails]]
    - [Configure Global gitignore File](https://github.com/jbranchaud/til/blob/master/git/configure-global-gitignore-file.md), #Git
    - [Source Original vimrc When Using Neovim](https://github.com/jbranchaud/til/blob/master/vim/source-original-vimrc-when-using-neovim.md), #[[Vim]] #[[Neovim]]
    - [Provide a Fallback Value for Unset Parameter](https://github.com/jbranchaud/til/blob/master/unix/provide-a-fallback-value-for-unset-parameter.md), #[[Bash]] #[[Unix]]
    - [Pick Specific Changes to Stash](https://github.com/jbranchaud/til/blob/master/git/pick-specific-changes-to-stash.md), #Git
- TODOs
    - Do a screencast (or live stream) exploring the different settings for wildmode in Vim. #[[screencast opportunity]]
    - I should do my own Reading In 2021 write up, even if it is quick and thrown up on dev.to, similar to "[Reading in 2021](https://werd.io/2021/reading-in-2021), [[Ben Werdmüller]] #Reading #Books"
