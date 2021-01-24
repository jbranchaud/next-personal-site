---
title: "Week 2 - Improving My Dev Setup with fzf"
date: "2021-01-16"
---

- Week Notes
    - I've started maintaining a list of manuals, documentation, and reference material that have high learning value. I've called the page [[Read The Fucking Manual]], though it's probably a losing battle to try to co-opt that phrase.
    - I'm doing more work with GitHub omniauth and overall Devise authentication. If you are writing a [[Rails]] app that serves as an authentication hub for other sites, the Rails app can act as its own OAuth provider for those client sites. The Rails app can also continue to maintain its own Rails sessions apart from the OAuth-based users.
    - I integrated [[fzf]] into my [[Vim]] setup with some keybindings for quickly opening up project-wide filename fuzzy-finding, project-wide text fuzzy-finding, and open vim buffer fuzzy-finding. This is largely inspired by [[Dorian Karter]]'s [vimrc](https://github.com/dkarter/dotfiles/blob/master/vimrc#L421-L442).

    ```vimscript
    nnoremap <silent> <C-b> :call FZFOpen(':Buffers')<CR>
    nnoremap <silent> <C-g>g :call FZFOpen(':FzfRg!')<CR>
    nnoremap <silent> <C-g>c :call FZFOpen(':Commands')<CR>
    nnoremap <silent> <C-p> :call FZFOpen(':Files')<CR>
    ```

    - "I wrote a [zsh function](https://twitter.com/jbrancha/status/1349857205596643331?s=20) to help with switching between Postgres versions. It switches to a known version that you specify by stopping the current version's Postgres server, starting the desired version's Postgres server, and then swapping the asdf global version."
    - "I did my first ever live stream today, on youtube. It took a little bit of work to figure out how to set up a Streamlabs OBS scene and then how to get that feeding a stream to YouTube live. Once it was up and running, it was smooth. I streamed for about an hour walking through building a magic link sign in flow for a Rails app. [link](https://www.youtube.com/watch?v=6Ab15n-U2GA&feature=youtu.be) #[[Live Streaming]]"
    - I've been working with [[Egghead]] since November, mainly helping them prepare for the launch of the new version of their site. The new site went live on Thursday. It looks incredible. I'm excited I got to be part of it.
- [[Found on the Internet]]
    - "[Oh, the other features you’ll ship if you focus on your product’s onboarding!](https://medium.com/customer-io-design/oh-the-other-features-youll-ship-if-you-focus-on-your-product-s-onboarding-45018ba1b3af), [[Richard Hawkes]] #[[UX]] #[[Onboarding]]"
    - "[Testing Performance](https://kellysutton.com/2021/01/12/testing-performance.html), [[Kelly Sutton]] #[[Testing]] #[[Observability]]"
    - "I love [StackOverflow questions like this](https://stackoverflow.com/questions/369758/how-to-trim-whitespace-from-a-bash-variable) that have several deeply answers because you can learn so much from them. #[[Bash]]"
    - [Setapp](https://setapp.com/) is a suite of Mac apps all of which you can access for $10 a month. It includes apps like CleanShotX, Dash, Paste, and many others that seem essential for a developers setup.
- [[TIL]]s I published this week
    - [rexml is a bundled gem as of Ruby 3.0.0](https://github.com/jbranchaud/til/blob/master/ruby/rexml-is-a-bundled-gem-as-of-ruby-3-0-0.md), #[[Ruby]]
    - [Ignore the alias when running a command in the terminal](https://github.com/jbranchaud/til/blob/master/unix/ignore-the-alias-when-running-a-command.md), #[[Unix]] #[[Bash]]
    - [Include Devise Helpers In Your Controller Tests](https://github.com/jbranchaud/til/blob/master/rails/include-devise-helpers-in-your-controller-tests.md), #[[Rails]] #[[Devise]] #[[Testing]]
    - [Switch Non-Castable Column Type With Using Clause](https://github.com/jbranchaud/til/blob/master/postgres/switch-non-castable-column-type-with-using-clause.md), #[[PostgreSQL]]
    - [Resolve A Merge Conflict From Stash Pop](https://github.com/jbranchaud/til/blob/master/git/resolve-a-merge-conflict-from-stash-pop.md), #[[Git]]
    - [Customize Paths And Helpers For Devise Routes](https://github.com/jbranchaud/til/blob/master/rails/customize-paths-and-helpers-for-devise-routes.md), #[[Rails]] #[[Devise]]
    - [Use The Built-In Emoji Picker in Kitty Terminal](https://github.com/jbranchaud/til/blob/master/kitty/use-the-built-in-emoji-picker.md), #[[Kitty]] #[[Emoji]]
    - [Generate Random UUIDs Without An Extension](https://github.com/jbranchaud/til/blob/master/postgres/generate-random-uuids-without-an-extension.md), #[[PostgreSQL]]
    - [Extract Value From Command Outut With Sed](https://github.com/jbranchaud/til/blob/master/unix/extract-value-from-command-output-with-sed.md), #[[Sed]] #[[Bash]]
    - [Capture Development Emails With Mailhog](https://github.com/jbranchaud/til/blob/master/rails/capture-development-emails-with-mailhog.md), #[[Rails]]
- TODOs
    - Read this "[Why your team doesn't need to use pull requests](https://infrastructure-as-code.com/book/2021/01/02/pull-requests.html), [[Kief Morris]] #[[Code Reviews]] #[[Pull Requests]]"
    - Check out some of the resources here: "There are lots of [[Onboarding]] resources on [[Samuel Hulick]]'s [contact page](https://www.useronboard.com/contact/)."
