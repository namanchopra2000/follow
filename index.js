$(document).ready(function () {
    $("#country").change(function () {
        var val = $(this).val();
        if (val == "i1") {
            $("#size").html("<option value='test'>item1: test 1</option><option value='test2'>item1: test 2</option>");
        } else if (val == "i2") {
            $("#size").html("<option value='test'>item2: test 1</option><option value='test2'>item2: test 2</option>");
        } else if (val == "i3") {
            $("#size").html("<option value='test'>item3: test 1</option><option value='test2'>item3: test 2</option>");
        } else if (val == "i4") {
            $("#size").html("<option value=''>--select one--</option>");
        }
    });
});